// Fuente compartida de slugs para el sitemap.
// Los artículos de blog se leen desde content/blog/*.mdx.
//
// Usado por: next-sitemap.config.js
const fs = require('fs')
const path = require('path')

const serviciosSlugs = [
  'seo-medico',
  'google-ads',
  'diseno-web',
  'redes-sociales',
]

const especialidadesSlugs = [
  'clinicas-dentales-sevilla',
  'psicologos-sevilla',
  'medicina-estetica-sevilla',
  'fisioterapia-sevilla',
  'clinicas-reproduccion-asistida-sevilla',
  'pedagogos-sevilla',
  'dermatologos-sevilla',
  'nutricionistas-sevilla',
  'oftalmologos-sevilla',
  'pediatria-sevilla',
  'clinicas-cirugia-sevilla',
]

function getBlogSlugs() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')

  if (!fs.existsSync(blogDir)) return []

  return fs
    .readdirSync(blogDir)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fileContent = fs.readFileSync(path.join(blogDir, fileName), 'utf8')
      const slugMatch = fileContent.match(/\nslug:\s*["']([^"']+)["']/)
      const statusMatch = fileContent.match(/\nstatus:\s*["']([^"']+)["']/)

      return {
        slug: slugMatch ? slugMatch[1] : fileName.replace(/\.mdx$/, ''),
        status: statusMatch ? statusMatch[1] : 'published',
      }
    })
    .filter((post) => post.status === 'published')
    .map((post) => post.slug)
}

const blogSlugs = getBlogSlugs()

module.exports = { serviciosSlugs, especialidadesSlugs, blogSlugs }
