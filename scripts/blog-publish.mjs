import fs from 'fs'
import path from 'path'

const [, , rawSlug] = process.argv

if (!rawSlug) {
  console.error('Uso: npm run blog:publish -- "slug-del-borrador"')
  process.exit(1)
}

const slug = rawSlug.replace(/\.mdx$/, '').trim()
const rootDir = process.cwd()
const draftPath = path.join(rootDir, 'content', 'blog', 'drafts', `${slug}.mdx`)
const publishedPath = path.join(rootDir, 'content', 'blog', `${slug}.mdx`)

if (!fs.existsSync(draftPath)) {
  console.error(`No existe el borrador: ${draftPath}`)
  process.exit(1)
}

if (fs.existsSync(publishedPath)) {
  console.error(`Ya existe un post publicado con ese slug: ${publishedPath}`)
  process.exit(1)
}

const now = new Date().toISOString()
const content = fs
  .readFileSync(draftPath, 'utf8')
  .replace(/status:\s*["']draft["']/, 'status: "published"')
  .replace(/fechaPublicacion:\s*["'][^"']+["']/, `fechaPublicacion: "${now}"`)
  .replace(/fechaModificacion:\s*["'][^"']+["']/, `fechaModificacion: "${now}"`)

fs.writeFileSync(publishedPath, content, 'utf8')
fs.unlinkSync(draftPath)

console.log(`Post publicado: ${publishedPath}`)
