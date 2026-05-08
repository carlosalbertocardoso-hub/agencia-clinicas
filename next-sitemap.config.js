/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iclinicas.es',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: [],
  additionalPaths: async (config) => {
    const result = []

    // Servicios (4)
    const servicios = ['seo-medico', 'google-ads', 'diseno-web', 'redes-sociales']
    servicios.forEach(slug => {
      result.push({ loc: `/servicios/${slug}`, changefreq: 'monthly', priority: 0.8 })
    })

    // Especialidades (11)
    const especialidades = [
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
    especialidades.forEach(slug => {
      result.push({ loc: `/especialidades/${slug}`, changefreq: 'monthly', priority: 0.8 })
    })

    // Blog posts (3)
    const blogs = ['errores-seo-dentistas', 'google-ads-psicologos', 'diseno-web-clinicas']
    blogs.forEach(slug => {
      result.push({ loc: `/blog/${slug}`, changefreq: 'monthly', priority: 0.7 })
    })

    return result
  },
}
