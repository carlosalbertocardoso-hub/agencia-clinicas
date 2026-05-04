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
      '@id': 'https://imarketingclinicas.com',
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
    image: image || 'https://imarketingclinicas.com/images/og-default.svg',
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'iMarketing Clínicas',
    },
    publisher: {
      '@type': 'Organization',
      name: 'iMarketing Clínicas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://imarketingclinicas.com/logo.svg',
      },
    },
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://imarketingclinicas.com',
    name: 'iMarketing Clínicas',
    url: 'https://imarketingclinicas.com',
    logo: 'https://imarketingclinicas.com/images/logo.svg',
    description: 'Agencia de marketing digital para clínicas y profesionales sanitarios en Sevilla',
    sameAs: [
      'https://www.facebook.com/imarketingclinicas',
      'https://www.instagram.com/imarketingclinicas',
    ],
  }
}
