import type { MetadataRoute } from 'next'

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

const blogSlugs = [
  'errores-seo-dentistas',
  'google-ads-psicologos',
  'diseno-web-clinicas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const statics: MetadataRoute.Sitemap = [
    { url: BASE,                     lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/servicios`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/especialidades`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,           lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/recursos`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/casos-de-exito`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
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

  const blog: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...statics, ...servicios, ...especialidades, ...blog]
}
