import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: string
  titulo: string
  slug: string
  excerpt: string
  contenido: string
  fechaPublicacion: string
  fechaModificacion: string
  autorSlug: string
  categoria: string
  tiempoLectura: string
  imagen?: string
  imagenAlt?: string
  status: 'draft' | 'published'
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const REQUIRED_FIELDS = [
  'id',
  'titulo',
  'slug',
  'excerpt',
  'fechaPublicacion',
  'fechaModificacion',
  'autorSlug',
  'categoria',
  'tiempoLectura',
]

function parseFrontmatter(fileContent: string, filePath: string) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    throw new Error(`El post ${filePath} no tiene frontmatter valido`)
  }

  const metadata: Record<string, string> = {}

  match[1].split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(':')

    if (separatorIndex === -1) return

    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line.slice(separatorIndex + 1).trim()
    const value = rawValue.replace(/^['"]|['"]$/g, '')

    metadata[key] = value
  })

  REQUIRED_FIELDS.forEach((field) => {
    if (!metadata[field]) {
      throw new Error(`El post ${filePath} no define el campo ${field}`)
    }
  })

  return {
    metadata,
    content: match[2].trim(),
  }
}

function readBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const filePath = path.join(BLOG_DIR, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { metadata, content } = parseFrontmatter(fileContent, filePath)

      const status: BlogPost['status'] = metadata.status === 'draft' ? 'draft' : 'published'

      return {
        id: metadata.id,
        titulo: metadata.titulo,
        slug: metadata.slug,
        excerpt: metadata.excerpt,
        contenido: content,
        fechaPublicacion: metadata.fechaPublicacion,
        fechaModificacion: metadata.fechaModificacion,
        autorSlug: metadata.autorSlug,
        categoria: metadata.categoria,
        tiempoLectura: metadata.tiempoLectura,
        imagen: metadata.imagen || undefined,
        imagenAlt: metadata.imagenAlt || undefined,
        status,
      }
    })
    .filter((post) => post.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime()
    )
}

export const blogPosts: BlogPost[] = readBlogPosts()

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
