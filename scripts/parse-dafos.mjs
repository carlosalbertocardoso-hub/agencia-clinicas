import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '..')

const md = fs.readFileSync(path.join(PROJECT_ROOT, 'dafos-clinicas.md'), 'utf-8')

const dafos = {}
const blocks = md.split('\n## ').slice(1)

for (const block of blocks) {
  const lines = block.split('\n')
  const header = lines[0].trim()
  const nameMatch = header.match(/^\d+\.\s+(.+?)\s+[—–]\s+/)
  if (!nameMatch) continue
  const name = nameMatch[1].trim().toLowerCase()

  const dafo = { fortalezas: [], debilidades: [], oportunidades: [], amenazas: [] }
  let currentSection = ''

  for (const line of lines) {
    const clean = line.trim()
    if (clean === '### Fortalezas') currentSection = 'fortalezas'
    else if (clean === '### Debilidades') currentSection = 'debilidades'
    else if (clean === '### Oportunidades') currentSection = 'oportunidades'
    else if (clean === '### Amenazas') currentSection = 'amenazas'
    else if (clean.startsWith('- ') && currentSection) {
      dafo[currentSection].push(clean.slice(2).trim())
    }
  }

  dafos[name] = dafo
}

fs.writeFileSync(
  path.join(PROJECT_ROOT, 'dafos-data.json'),
  JSON.stringify(dafos, null, 2)
)

console.log(`✅ ${Object.keys(dafos).length} DAFOs extraídos a dafos-data.json`)
