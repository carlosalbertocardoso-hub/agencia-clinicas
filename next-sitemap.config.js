const { serviciosSlugs, especialidadesSlugs, blogSlugs } = require('./src/data/sitemap-paths')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iclinicas.es',
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: [],
  additionalPaths: async (config) => {
    const result = []

    serviciosSlugs.forEach((slug) => {
      result.push({ loc: `/servicios/${slug}`, changefreq: 'monthly', priority: 0.8 })
    })

    especialidadesSlugs.forEach((slug) => {
      result.push({ loc: `/especialidades/${slug}`, changefreq: 'monthly', priority: 0.8 })
    })

    blogSlugs.forEach((slug) => {
      result.push({ loc: `/blog/${slug}`, changefreq: 'monthly', priority: 0.7 })
    })

    return result
  },
}
