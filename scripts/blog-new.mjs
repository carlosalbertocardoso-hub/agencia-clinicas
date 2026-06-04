import fs from 'fs'
import path from 'path'

const [, , rawTitle, rawSlug] = process.argv

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

if (!rawTitle) {
  console.error('Uso: npm run blog:new -- "Titulo del articulo" [slug]')
  process.exit(1)
}

const title = rawTitle.trim()
const slug = (rawSlug || slugify(title)).trim()
const now = new Date().toISOString()
const draftsDir = path.join(process.cwd(), 'content', 'blog', 'drafts')
const filePath = path.join(draftsDir, `${slug}.mdx`)

fs.mkdirSync(draftsDir, { recursive: true })

if (fs.existsSync(filePath)) {
  console.error(`Ya existe un borrador con ese slug: ${filePath}`)
  process.exit(1)
}

const template = `---
id: "${slug}"
titulo: "${title}"
slug: "${slug}"
excerpt: "Resumen breve del articulo para SEO y cards del blog."
fechaPublicacion: "${now}"
fechaModificacion: "${now}"
autorSlug: "carlos-cardoso"
categoria: "SEO local"
tiempoLectura: "8 min"
imagen: "/images/og-default.png"
imagenAlt: "${title}"
status: "draft"
---

# ${title}

## Introducción
Escribe aquí la introducción del artículo.

## Desarrollo
Escribe aquí el cuerpo del artículo.

## Conclusión
Cierra con una recomendación prudente y un CTA hacia contacto.
`

fs.writeFileSync(filePath, template, 'utf8')
console.log(`Borrador creado: ${filePath}`)
