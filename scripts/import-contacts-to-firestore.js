const fs = require('fs')
const path = require('path')
const admin = require('firebase-admin')

const DEFAULT_CSV_PATH = 'contactos-clinicas-unificado.csv'
const COLLECTION = process.env.FIREBASE_CONTACTS_COLLECTION || 'contacts'
const DRY_RUN = process.argv.includes('--dry-run')
const OUTREACH_LEGAL_BASIS = process.env.OUTREACH_LEGAL_BASIS || 'public_b2b_contact'

function parseArgs() {
  const csvArgIndex = process.argv.indexOf('--csv')
  return {
    csvPath:
      csvArgIndex >= 0 && process.argv[csvArgIndex + 1]
        ? process.argv[csvArgIndex + 1]
        : DEFAULT_CSV_PATH,
  }
}

function parseCsvLine(line, delimiter = ';') {
  const values = []
  let current = ''
  let inQuotes = false

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    const next = line[index + 1]

    if (char === '"' && inQuotes && next === '"') {
      current += '"'
      index += 1
      continue
    }

    if (char === '"') {
      inQuotes = !inQuotes
      continue
    }

    if (char === delimiter && !inQuotes) {
      values.push(current)
      current = ''
      continue
    }

    current += char
  }

  values.push(current)
  return values
}

function parseCsv(content) {
  const lines = content
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)

  const headers = parseCsvLine(lines[0])

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line)
    return headers.reduce((row, header, index) => {
      row[header] = values[index] ? values[index].trim() : ''
      return row
    }, {})
  })
}

function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120)
}

function clean(value) {
  return value && String(value).trim() ? String(value).trim() : null
}

function parseNumber(value) {
  if (!value) return null
  const normalized = String(value).replace(',', '.')
  const number = Number(normalized)
  return Number.isFinite(number) ? number : null
}

function normalizePriority(value) {
  const normalized = String(value || '').trim().toLowerCase()
  if (!normalized) return null
  if (normalized === 'a' || normalized === 'alta' || normalized === 'máxima' || normalized === 'maxima') {
    return 'high'
  }
  if (normalized === 'media' || normalized === 'b') return 'medium'
  if (normalized === 'baja' || normalized === 'c') return 'low'
  return normalized
}

function toBool(value) {
  const normalized = String(value || '').trim().toLowerCase()
  if (!normalized) return null
  if (['sí', 'si', 's', 'yes', 'true'].includes(normalized)) return true
  if (['no', 'false'].includes(normalized)) return false
  return null
}

function contactToFirestore(row) {
  const web = clean(row.Web)
  const name = clean(row.Nombre)
  const documentId = slugify(web || name)

  if (!documentId) {
    throw new Error(`No document id could be generated for row: ${JSON.stringify(row)}`)
  }

  return {
    documentId,
    data: {
      name,
      specialty: clean(row.Especialidad),
      subspecialty: clean(row.Subespecialidad),
      website: web,
      phone: clean(row.Telefono),
      email: clean(row.Email),
      zone: clean(row.Direccion_Zona),
      googleRating: parseNumber(row.Valoracion_Google),
      googleReviews: parseNumber(row.Numero_resenas),
      usesGoogleAds: toBool(row.Usa_Google_Ads),
      googleBusinessProfileOptimized: toBool(row.GBP_optimizado),
      detectedOpportunity: clean(row.Oportunidad_detectada),
      score: parseNumber(row.Puntuacion_0_100),
      priority: normalizePriority(row.Prioridad),
      hasWebsite: toBool(row.Tiene_web),
      websiteSummary: clean(row.Resumen_web),
      dafo: {
        strengths: clean(row.DAFO_fortalezas),
        weaknesses: clean(row.DAFO_debilidades),
        opportunities: clean(row.DAFO_oportunidades),
        threats: clean(row.DAFO_amenazas),
      },
      linkedin: {
        url: clean(row.LinkedIn_URL),
        decisionMaker: clean(row.LinkedIn_decision),
      },
      source: clean(row.Fuente) || 'csv',
      outreach: {
        emailStatus: 'not_sent',
        commercialConsent: 'unknown',
        outreachEligible: true,
        legalBasis: OUTREACH_LEGAL_BASIS,
        leadStatus: 'none',
        lastEmailSentAt: null,
        lastContactedAt: null,
        unsubscribedAt: null,
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
  }
}

function initializeFirebase() {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || process.env.GOOGLE_APPLICATION_CREDENTIALS

  if (!serviceAccountPath) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_PATH or GOOGLE_APPLICATION_CREDENTIALS')
  }

  const resolvedPath = path.resolve(serviceAccountPath)
  const serviceAccount = require(resolvedPath)

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

  return admin.firestore()
}

async function writeContacts(db, contacts) {
  const chunks = []
  for (let index = 0; index < contacts.length; index += 450) {
    chunks.push(contacts.slice(index, index + 450))
  }

  for (const chunk of chunks) {
    const batch = db.batch()

    for (const contact of chunk) {
      const ref = db.collection(COLLECTION).doc(contact.documentId)
      batch.set(ref, contact.data, { merge: true })
    }

    await batch.commit()
  }
}

async function main() {
  const { csvPath } = parseArgs()
  const resolvedCsvPath = path.resolve(csvPath)
  const rows = parseCsv(fs.readFileSync(resolvedCsvPath, 'utf8'))
  const contacts = rows.map(contactToFirestore)

  console.log(`CSV: ${resolvedCsvPath}`)
  console.log(`Collection: ${COLLECTION}`)
  console.log(`Contacts parsed: ${contacts.length}`)

  if (DRY_RUN) {
    console.log('Dry run enabled. No data written.')
    console.log('First contact preview:')
    console.log(JSON.stringify(contacts[0], null, 2))
    return
  }

  const db = initializeFirebase()
  await writeContacts(db, contacts)
  console.log(`Imported ${contacts.length} contacts into Firestore collection "${COLLECTION}".`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
