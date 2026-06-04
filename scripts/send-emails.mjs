/**
 * Envío de emails iClínicas vía Resend.
 *
 * Uso:
 *   node scripts/send-emails.mjs --dry-run --limit 3
 *   node scripts/send-emails.mjs --send --limit 1
 *   node scripts/send-emails.mjs --send --offset 15 --limit 15
 *   node scripts/send-emails.mjs --send
 */

import fs from 'fs'
import path from 'path'
import { createHmac } from 'crypto'
import { fileURLToPath } from 'url'
import { buildVars } from './email-content.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

loadEnvFile(path.join(ROOT, '.env'))
loadEnvFile(path.join(ROOT, '.env.local'))

const CSV_PATH = path.join(ROOT, 'contactos-clinicas-unificado.csv')
const TEMPLATE_PATH = path.join(ROOT, 'iclinicas-email-template.html')
const DAFOS_PATH = path.join(ROOT, 'dafos-data.json')
const SEND_LOG_PATH = path.join(ROOT, 'logs', 'email-sends.jsonl')

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'iclinicas <info@iclinicas.es>'
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iclinicas.es').replace(/\/$/, '')
const UNSUBSCRIBE_SECRET = process.env.UNSUBSCRIBE_SECRET || process.env.RESEND_API_KEY || 'iclinicas-local-secret'
const BATCH_SIZE = Number(process.env.EMAIL_BATCH_SIZE || 15)
const RATE_LIMIT_MS = Number(process.env.EMAIL_RATE_LIMIT_MS || 1200)
const SEND_DELAY_MS = Number(process.env.EMAIL_SEND_DELAY_MS || 350)

const args = process.argv.slice(2)
const DRY_RUN = !args.includes('--send')
const LIMIT = readNumberArg('--limit')
const OFFSET = readNumberArg('--offset') || 0
const ONLY = readValueArg('--only')
const RESEND_ALREADY_SENT = args.includes('--resend')

function readValueArg(name) {
  const idx = args.indexOf(name)
  return idx >= 0 ? args[idx + 1] : null
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return

  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue

    const index = trimmed.indexOf('=')
    const key = trimmed.slice(0, index).trim()
    const rawValue = trimmed.slice(index + 1).trim()
    const value = rawValue.replace(/^['"]|['"]$/g, '')

    if (key && process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

function readNumberArg(name) {
  const value = readValueArg(name)
  return value ? Number(value) : null
}

function parseCSV(raw, delimiter = ';') {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i]
    const next = raw[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === delimiter && !inQuotes) {
      row.push(cell.trim())
      cell = ''
      continue
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1
      row.push(cell.trim())
      if (row.some(Boolean)) rows.push(row)
      row = []
      cell = ''
      continue
    }

    cell += char
  }

  row.push(cell.trim())
  if (row.some(Boolean)) rows.push(row)

  const headers = rows.shift() || []
  return rows.map((values) => {
    const item = {}
    headers.forEach((header, index) => {
      item[header] = values[index] || ''
    })
    return item
  })
}

function readCSV(filePath) {
  return parseCSV(fs.readFileSync(filePath, 'utf-8'))
}

function normalizeName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'y')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120)
}

function contactIdFor(clinic) {
  return slugify(clinic.Web || clinic.Nombre || clinic.Email)
}

function createUnsubscribeToken(contactId) {
  return createHmac('sha256', UNSUBSCRIBE_SECRET).update(contactId).digest('hex')
}

function buildUnsubscribeUrl(contactId) {
  const token = createUnsubscribeToken(contactId)
  const url = new URL('/api/unsubscribe', SITE_URL)
  url.searchParams.set('contactId', contactId)
  url.searchParams.set('token', token)
  return url.toString()
}

function loadDafos() {
  if (!fs.existsSync(DAFOS_PATH)) return {}
  const raw = JSON.parse(fs.readFileSync(DAFOS_PATH, 'utf-8'))
  return Object.fromEntries(
    Object.entries(raw).map(([name, value]) => [normalizeName(name), value])
  )
}

function readSentEmails() {
  if (!fs.existsSync(SEND_LOG_PATH)) return new Set()

  const sent = new Set()
  const lines = fs.readFileSync(SEND_LOG_PATH, 'utf-8').split(/\r?\n/).filter(Boolean)

  for (const line of lines) {
    try {
      const item = JSON.parse(line)
      if (item.email) sent.add(String(item.email).toLowerCase())
    } catch {
      // Ignore malformed log lines.
    }
  }

  return sent
}

function appendSendLog(entry) {
  fs.mkdirSync(path.dirname(SEND_LOG_PATH), { recursive: true })
  fs.appendFileSync(SEND_LOG_PATH, `${JSON.stringify(entry)}\n`)
}

function personalize(html, vars) {
  let result = html
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{{${key}}}`, String(value || ''))
  }
  return result.replace(/\{\{\w+\}\}/g, '')
}

async function sendEmail({ to, subject, html, unsubscribeUrl }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject,
      html,
      headers: {
        'List-Unsubscribe': `<${unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(`Error ${res.status}: ${JSON.stringify(data)}`)
  return data
}

async function main() {
  if (!DRY_RUN && !RESEND_API_KEY) {
    console.error('RESEND_API_KEY no encontrada')
    process.exit(1)
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8')
  const dafosMap = loadDafos()
  const sentEmails = RESEND_ALREADY_SENT ? new Set() : readSentEmails()
  let contacts = readCSV(CSV_PATH).filter((contact) => contact.Email && contact.Email.includes('@'))

  if (sentEmails.size) {
    contacts = contacts.filter((contact) => !sentEmails.has(contact.Email.trim().toLowerCase()))
  }

  if (ONLY) {
    contacts = contacts.filter((contact) => contact.Email.toLowerCase() === ONLY.toLowerCase())
  }

  if (OFFSET || LIMIT) {
    contacts = contacts.slice(OFFSET, LIMIT ? OFFSET + LIMIT : undefined)
  }

  console.log(`${contacts.length} contactos con email${DRY_RUN ? ' (dry-run)' : ''}`)
  console.log(`${Object.keys(dafosMap).length} DAFOs cargados`)
  console.log('----------------------------------------')

  let sent = 0
  let failed = 0
  let withDafo = 0

  for (let i = 0; i < contacts.length; i += BATCH_SIZE) {
    const batch = contacts.slice(i, i + BATCH_SIZE)

    for (const clinic of batch) {
      const email = clinic.Email
      const name = clinic.Nombre || 'Clínica'
      const dafo = dafosMap[normalizeName(name)] || null
      const contactId = contactIdFor(clinic)
      const unsubscribeUrl = buildUnsubscribeUrl(contactId)
      const vars = buildVars(clinic, dafo, { unsubscribeUrl })
      const html = personalize(template, vars)
      const subject = vars.email_title

      if (dafo) withDafo += 1

      try {
        if (DRY_RUN) {
          console.log(`${dafo ? 'DAFO' : 'BASE'} | ${name} | ${email} | ${subject}`)
        } else {
          const result = await sendEmail({ to: email, subject, html, unsubscribeUrl })
          console.log(`OK | ${name} | ${email} | ${result.id}`)
          appendSendLog({
            email: email.trim().toLowerCase(),
            name,
            contactId,
            resendId: result.id,
            subject,
            sentAt: new Date().toISOString(),
          })
          await new Promise((resolve) => setTimeout(resolve, SEND_DELAY_MS))
        }
        sent += 1
      } catch (error) {
        console.error(`ERROR | ${name} | ${email} | ${error.message}`)
        failed += 1
      }
    }

    if (!DRY_RUN && i + BATCH_SIZE < contacts.length) {
      await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_MS))
    }
  }

  console.log('----------------------------------------')
  console.log(`${sent} procesados | ${failed} fallos | ${withDafo} con DAFO`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
