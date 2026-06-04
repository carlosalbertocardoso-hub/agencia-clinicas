import fs from 'fs'
import path from 'path'

const rootDir = process.cwd()
const agentDir = path.join(rootDir, 'agents', 'blog-publisher')
const promptPath = path.join(agentDir, 'prompts', 'system-editorial.md')
const topicsPath = path.join(agentDir, 'topics.json')
const draftsDir = path.join(rootDir, 'content', 'blog', 'drafts')
const publishedDir = path.join(rootDir, 'content', 'blog')

const args = new Set(process.argv.slice(2))
const dryRun = args.has('--dry-run')
const model = process.env.ANTHROPIC_MODEL?.trim() || 'claude-haiku-4-5-20251001'
const apiKey = process.env.ANTHROPIC_API_KEY

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function extractFrontmatter(fileContent) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => {
        const separatorIndex = line.indexOf(':')
        if (separatorIndex === -1) return null
        const key = line.slice(0, separatorIndex).trim()
        const value = line
          .slice(separatorIndex + 1)
          .trim()
          .replace(/^['"]|['"]$/g, '')
        return [key, value]
      })
      .filter(Boolean)
  )
}

function getExistingSlugs() {
  const dirs = [publishedDir, draftsDir]
  const slugs = new Set()

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return

    fs.readdirSync(dir)
      .filter((fileName) => fileName.endsWith('.mdx'))
      .forEach((fileName) => {
        const metadata = extractFrontmatter(readText(path.join(dir, fileName)))
        slugs.add(metadata.slug || fileName.replace(/\.mdx$/, ''))
      })
  })

  return slugs
}

function pickTopic(topics, existingSlugs) {
  const forcedTopic = process.env.BLOG_AGENT_TOPIC
  const forcedTopicJson = process.env.BLOG_AGENT_TOPIC_JSON

  if (forcedTopicJson) {
    try {
      return JSON.parse(forcedTopicJson)
    } catch {
      throw new Error(`BLOG_AGENT_TOPIC_JSON no es JSON válido: ${forcedTopicJson}`)
    }
  }

  if (forcedTopic) {
    const topic = topics.find((item) => item.tema.toLowerCase() === forcedTopic.toLowerCase())
    if (!topic) {
      throw new Error(`No existe BLOG_AGENT_TOPIC en topics.json: ${forcedTopic}`)
    }
    return topic
  }

  return topics.find((topic) => !existingSlugs.has(slugify(topic.keywordPrincipal || topic.tema)))
}

function getSiteContext() {
  const files = [
    'src/data/especialidades.ts',
    'src/data/servicios.ts',
    'src/data/crossLinks.ts',
    'AGENTS.md',
  ]

  return files
    .filter((filePath) => fs.existsSync(path.join(rootDir, filePath)))
    .map((filePath) => `## ${filePath}\n${readText(path.join(rootDir, filePath)).slice(0, 9000)}`)
    .join('\n\n')
}

function buildUserPrompt(topic, existingSlugs) {
  const today = new Date().toISOString()

  return `Genera un borrador de artículo para el blog de iclinicas.

Devuelve SOLO JSON valido, sin markdown alrededor, con esta forma:
{
  "frontmatter": {
    "id": "slug-del-articulo",
    "titulo": "Titulo completo",
    "slug": "slug-del-articulo",
    "excerpt": "Meta description de 140-160 caracteres",
    "fechaPublicacion": "${today}",
    "fechaModificacion": "${today}",
    "autorSlug": "carlos-cardoso",
    "categoria": "${topic.categoria || 'SEO local'}",
    "tiempoLectura": "8 min",
    "imagen": "/images/og-default.png",
    "imagenAlt": "Alt descriptivo",
    "status": "draft"
  },
  "content": "# Titulo\\n\\n## Seccion...",
  "checklist": ["..."]
}

Brief preaprobado:
${JSON.stringify(topic, null, 2)}

Slugs existentes que NO debes repetir:
${Array.from(existingSlugs).join(', ')}

Contexto de la web:
${getSiteContext()}

Requisitos adicionales:
- El slug debe derivarse de la keyword principal.
- No uses tablas.
- No uses comillas dobles (") en el campo "titulo" ni en "excerpt"; usa comillas tipográficas (« ») o simples si necesitas entrecomillar.
- Calcula "tiempoLectura" según la longitud real del artículo (aprox. 200 palabras/min). El "8 min" del ejemplo es solo un placeholder, no lo copies.
- Incluye al menos 2 enlaces internos en formato Markdown.
- Incluye al menos 1 enlace externo a fuente de referencia en formato Markdown.
- El contenido debe quedar listo para guardarse como MDX.
- No marques el artículo como published.`
}

function parseResponseJson(text) {
  if (!text || !text.trim()) {
    throw new Error('La API no devolvió contenido de texto.')
  }

  const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim()

  try {
    return JSON.parse(cleaned)
  } catch {
    // El modelo a veces antepone o pospone texto al JSON. Extraemos el primer
    // objeto balanceado por llaves y lo parseamos.
    const start = cleaned.indexOf('{')
    const end = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1 || end <= start) {
      throw new Error(`La respuesta no contiene JSON válido:\n${cleaned.slice(0, 500)}`)
    }
    return JSON.parse(cleaned.slice(start, end + 1))
  }
}

// El lector de MDX (src/data/blog.ts) solo quita las comillas de los extremos
// y no desescapa secuencias. Para evitar frontmatter corrupto, sustituimos las
// comillas dobles internas por comillas tipográficas en lugar de escaparlas.
function sanitizeFrontmatterValue(value) {
  return String(value)
    .replace(/\r?\n/g, ' ')
    .replace(/"/g, '”')
    .trim()
}

function toMdx(article) {
  const metadata = {
    ...article.frontmatter,
    status: 'draft',
  }

  const frontmatter = Object.entries(metadata)
    .map(([key, value]) => `${key}: "${sanitizeFrontmatterValue(value)}"`)
    .join('\n')

  return `---\n${frontmatter}\n---\n\n${article.content.trim()}\n`
}

function validateArticle(article) {
  const requiredFields = [
    'id',
    'titulo',
    'slug',
    'excerpt',
    'fechaPublicacion',
    'fechaModificacion',
    'autorSlug',
    'categoria',
    'tiempoLectura',
    'status',
  ]

  requiredFields.forEach((field) => {
    if (!article.frontmatter?.[field]) {
      throw new Error(`Falta frontmatter.${field}`)
    }
  })

  if (!article.content?.includes('# ')) {
    throw new Error('El contenido no incluye H1')
  }

  if (article.frontmatter.status !== 'draft') {
    throw new Error('El agente solo puede generar status draft')
  }
}

async function generateArticle(topic, existingSlugs) {
  if (!apiKey) {
    throw new Error('Falta ANTHROPIC_API_KEY. Configura el secreto en GitHub Actions o en tu entorno local.')
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 120_000)

  let response
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        max_tokens: 7000,
        temperature: 0.7,
        system: readText(promptPath),
        messages: [
          {
            role: 'user',
            content: buildUserPrompt(topic, existingSlugs),
          },
        ],
      }),
    })
  } finally {
    clearTimeout(timeout)
  }

  if (!response.ok) {
    throw new Error(`Anthropic API error ${response.status}: ${await response.text()}`)
  }

  const data = await response.json()
  const text = data.content?.map((item) => item.type === 'text' ? item.text : '').join('')
  return parseResponseJson(text)
}

function writeGitHubOutput(values) {
  if (!process.env.GITHUB_OUTPUT) return

  const lines = Object.entries(values).map(([key, value]) => `${key}=${value}`)
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `${lines.join('\n')}\n`, 'utf8')
}

async function main() {
  const topics = JSON.parse(readText(topicsPath))
  const existingSlugs = getExistingSlugs()
  const topic = pickTopic(topics, existingSlugs)

  if (!topic) {
    console.log('No hay temas nuevos en agents/blog-publisher/topics.json.')
    writeGitHubOutput({ generated: 'false' })
    return
  }

  const expectedSlug = slugify(topic.keywordPrincipal || topic.tema)
  if (existingSlugs.has(expectedSlug)) {
    console.log(`El tema ya existe como slug: ${expectedSlug}`)
    writeGitHubOutput({ generated: 'false' })
    return
  }

  if (dryRun) {
    // El dry-run valida la selección de tema y el prompt sin llamar a la API
    // ni escribir en disco, para no ensuciar el repo accidentalmente.
    console.log(`[dry-run] Tema seleccionado: ${topic.tema}`)
    console.log(`[dry-run] Slug esperado: ${expectedSlug}`)
    console.log(`[dry-run] Modelo configurado: ${model}`)
    console.log('[dry-run] No se ha llamado a la API ni escrito ningún archivo.')
    writeGitHubOutput({ generated: 'false' })
    return
  }

  const article = await generateArticle(topic, existingSlugs)

  validateArticle(article)

  // El slug esperado (derivado de la keyword) es la fuente de verdad para evitar
  // duplicados: el comprobado en getExistingSlugs y el del archivo deben coincidir.
  // Forzamos id/slug del frontmatter a ese valor por si el modelo devolvió otro.
  article.frontmatter.slug = expectedSlug
  article.frontmatter.id = expectedSlug

  fs.mkdirSync(draftsDir, { recursive: true })

  const filePath = path.join(draftsDir, `${expectedSlug}.mdx`)

  if (fs.existsSync(filePath)) {
    throw new Error(`Ya existe el borrador: ${filePath}`)
  }

  fs.writeFileSync(filePath, toMdx(article), 'utf8')
  console.log(`Borrador generado: ${filePath}`)
  writeGitHubOutput({
    generated: 'true',
    generated_file: path.relative(rootDir, filePath).replace(/\\/g, '/'),
    title: article.frontmatter.titulo,
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
