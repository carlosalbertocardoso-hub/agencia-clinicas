#!/usr/bin/env node
// SEO health check for iclinicas.es — run against prod or localhost
// Usage: node scripts/seo-check.mjs [base_url]

const BASE = process.argv[2] ?? 'https://www.iclinicas.es'
const PAGES = ['/', '/servicios', '/especialidades', '/blog', '/nosotros', '/contacto', '/recursos']
const GREEN = '\x1b[32m'
const RED   = '\x1b[31m'
const YELLOW = '\x1b[33m'
const RESET = '\x1b[0m'

let pass = 0, fail = 0, warn = 0

function ok(msg)    { console.log(`${GREEN}✓${RESET} ${msg}`); pass++ }
function ko(msg)    { console.log(`${RED}✗${RESET} ${msg}`);   fail++ }
function w(msg)     { console.log(`${YELLOW}⚠${RESET} ${msg}`); warn++ }

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'SEO-Check/1.0' } })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return res.text()
}

async function checkUrl(path) {
  const url = `${BASE}${path}`
  let html
  try {
    html = await fetchText(url)
  } catch (e) {
    ko(`FETCH FAILED ${url}: ${e.message}`)
    return
  }

  // noindex check
  if (html.includes('noindex')) {
    if (['/politica-privacidad', '/terminos-legales', '/rediseno'].some(p => path.startsWith(p))) {
      ok(`noindex on ${path} (expected)`)
    } else {
      ko(`ACCIDENTAL noindex on ${path}`)
    }
  }

  // title check
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/)
  if (!titleMatch) {
    ko(`No <title> on ${path}`)
  } else {
    const title = titleMatch[1]
    if (title.length < 20)  ko(`Title too short (${title.length} chars) on ${path}: "${title}"`)
    else if (title.length > 65) w(`Title long (${title.length} chars) on ${path}: "${title}"`)
    else ok(`Title OK on ${path} (${title.length} chars)`)
  }

  // canonical check
  if (html.includes('rel="canonical"')) ok(`Canonical present on ${path}`)
  else ko(`Missing canonical on ${path}`)

  // OG image
  if (html.includes('og:image')) ok(`OG image present on ${path}`)
  else ko(`Missing og:image on ${path}`)

  // JSON-LD count
  const ldCount = (html.match(/application\/ld\+json/g) || []).length
  if (ldCount === 0) ko(`No JSON-LD on ${path}`)
  else ok(`JSON-LD (${ldCount} block${ldCount > 1 ? 's' : ''}) on ${path}`)
}

async function checkSitemap() {
  try {
    const xml = await fetchText(`${BASE}/sitemap.xml`)
    const count = (xml.match(/<loc>/g) || []).length
    if (count > 0) ok(`sitemap.xml has ${count} URLs`)
    else ko('sitemap.xml has 0 URLs')
  } catch (e) {
    ko(`sitemap.xml unreachable: ${e.message}`)
  }
}

async function checkRobots() {
  try {
    const txt = await fetchText(`${BASE}/robots.txt`)
    if (txt.includes('Sitemap:')) ok('robots.txt has Sitemap directive')
    else w('robots.txt missing Sitemap directive')
    if (txt.includes('Disallow: /api/')) ok('robots.txt blocks /api/')
    else w('robots.txt does not block /api/')
  } catch (e) {
    ko(`robots.txt unreachable: ${e.message}`)
  }
}

async function checkLlms() {
  try {
    await fetchText(`${BASE}/llms.txt`)
    ok('llms.txt accessible')
  } catch {
    w('llms.txt not found (optional but recommended for GEO)')
  }
}

console.log(`\n=== SEO CHECK — ${BASE} ===\n`)
await checkSitemap()
await checkRobots()
await checkLlms()
for (const path of PAGES) {
  await checkUrl(path)
}

console.log(`\n=== RESULT: ${pass} pass · ${warn} warn · ${fail} fail ===\n`)
if (fail > 0) process.exit(1)
