import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
import { getAutoresList } from '@/data/autores'

const BASE = 'https://www.iclinicas.es'
const NOW  = new Date()

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
  'ia-para-clinicas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const statics: MetadataRoute.Sitemap = [
    { url: BASE,                     lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/servicios`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/especialidades`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,           lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/recursos`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/casos-de-exito`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/marketing-clinicas-premium-sevilla`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/nosotros`,       lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contacto`,       lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const servicios: MetadataRoute.Sitemap = serviciosSlugs.map((slug) => ({
    url: `${BASE}/servicios/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const especialidades: MetadataRoute.Sitemap = especialidadesSlugs.map((slug) => ({
    url: `${BASE}/especialidades/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blog: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.fechaModificacion),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const autores: MetadataRoute.Sitemap = getAutoresList().map((autor) => ({
    url: `${BASE}/autores/${autor.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...statics, ...servicios, ...especialidades, ...blog, ...autores]
}
