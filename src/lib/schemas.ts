export function buildServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': 'https://www.iclinicas.es',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sevilla',
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildFAQSchema(
  faqs: Array<{
    question: string
    answer: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
}: {
  headline: string
  description: string
  url: string
  image?: string
  datePublished?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image: image || 'https://www.iclinicas.es/images/og-default.png',
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'iclinicas',
    },
    publisher: {
      '@type': 'Organization',
      name: 'iclinicas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.iclinicas.es/logo.svg',
      },
    },
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.iclinicas.es/#organization',
    name: 'iclinicas',
    url: 'https://www.iclinicas.es',
    logo: 'https://www.iclinicas.es/images/logo.svg',
    email: 'info@iclinicas.es',
    foundingDate: '2018',
    description: 'Agencia de marketing digital para clínicas y profesionales sanitarios en Sevilla',
    sameAs: [
      'https://www.linkedin.com/company/iclinicas',
      'https://www.facebook.com/iclinicas',
      'https://www.instagram.com/iclinicas',
    ],
  }
}
