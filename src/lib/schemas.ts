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
      '@id': 'https://pacientessevilla.com',
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

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://pacientessevilla.com',
    name: 'Pacientes Sevilla',
    url: 'https://pacientessevilla.com',
    logo: 'https://pacientessevilla.com/images/logo.svg',
    description: 'Agencia de marketing digital para clínicas y profesionales sanitarios en Sevilla',
    sameAs: [
      'https://www.facebook.com/pacientessevilla',
      'https://www.instagram.com/pacientessevilla',
    ],
  }
}
