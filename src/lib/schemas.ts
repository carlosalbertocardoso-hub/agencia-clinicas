export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string
  description: string
  url: string
  serviceType?: string | string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    ...(serviceType ? { serviceType } : {}),
    provider: {
      '@id': 'https://www.iclinicas.es/#localbusiness',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sevilla',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.iclinicas.es/contacto',
      servicePhone: '+34600258938',
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

export function buildArticleSchema(article: {
  headline: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
  author: {
    name: string
    url: string
    sameAs?: string[]
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: [article.image || 'https://www.iclinicas.es/images/og-default.png'],
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
      ...(article.author.sameAs && article.author.sameAs.length > 0
        ? { sameAs: article.author.sameAs }
        : {}),
    },
    publisher: { '@id': 'https://www.iclinicas.es/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
    inLanguage: 'es-ES',
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MarketingAgency'],
    '@id': 'https://www.iclinicas.es/#organization',
    name: 'iClínicas - Agencia de Marketing Sanitario',
    url: 'https://www.iclinicas.es',
    logo: 'https://www.iclinicas.es/logo.svg',
    email: 'info@iclinicas.es',
    telephone: '+34600258938',
    foundingDate: '2018',
    description:
      'Agencia de marketing digital especializada en clínicas privadas y profesionales sanitarios en Sevilla.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avd. Reina Mercedes 1',
      postalCode: '41012',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+34600258938',
      email: 'info@iclinicas.es',
      availableLanguage: ['Spanish'],
      url: 'https://www.iclinicas.es/contacto',
    },
    sameAs: [
      'https://www.linkedin.com/in/carlos-cardoso-75025721/',
      'https://share.google/aTLb8JdGqAn5xqyT9',
    ],
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.iclinicas.es/#website',
    name: 'iclinicas - Agencia de Marketing Sanitario',
    url: 'https://www.iclinicas.es/',
    description:
      'Agencia de marketing digital para clínicas privadas en Sevilla. SEO local, Google Ads, diseño web sanitario.',
    inLanguage: 'es',
    publisher: {
      '@id': 'https://www.iclinicas.es/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.iclinicas.es/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.iclinicas.es/#localbusiness',
    name: 'iClínicas',
    description:
      'Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla.',
    url: 'https://www.iclinicas.es',
    telephone: '+34600258938',
    email: 'info@iclinicas.es',
    logo: 'https://www.iclinicas.es/logo.svg',
    image: 'https://www.iclinicas.es/images/og-default.png',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    foundingDate: '2018',
    inLanguage: 'es-ES',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avd. Reina Mercedes 1',
      postalCode: '41012',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.3633324,
      longitude: -5.9858553,
    },
    areaServed: [
      { '@type': 'City', name: 'Sevilla' },
      { '@type': 'Place', name: 'Nervión' },
      { '@type': 'Place', name: 'Triana' },
      { '@type': 'Place', name: 'Los Remedios' },
      { '@type': 'Place', name: 'Aljarafe' },
    ],
    serviceType: [
      'Marketing Médico',
      'SEO Local para Clínicas',
      'Google Ads para Clínicas',
      'Diseño Web Sanitario',
      'Gestión de Redes Sociales Sanitarias',
    ],
    sameAs: [
      'https://www.linkedin.com/in/carlos-cardoso-75025721/',
      'https://share.google/aTLb8JdGqAn5xqyT9',
    ],
    parentOrganization: {
      '@id': 'https://www.iclinicas.es/#organization',
    },
  }
}
