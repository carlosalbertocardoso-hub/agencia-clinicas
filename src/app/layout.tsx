import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iclinicas.es'),
  title: 'Marketing digital para clínicas en Sevilla | iclinicas',
  description:
    'Agencia de marketing digital para clínicas privadas en Sevilla. SEO local, Google Ads, diseño web, reputación y captación de pacientes.',
  keywords: [
    'marketing digital clínicas Sevilla',
    'SEO local clínicas Sevilla',
    'Google Ads clínicas Sevilla',
    'diseño web clínicas Sevilla',
    'captación pacientes privados Sevilla',
    'marketing sanitario Sevilla',
    'auditoría marketing clínica',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.iclinicas.es',
    title: 'Marketing digital para clínicas en Sevilla | iclinicas',
    description:
      'SEO local, Google Ads, diseño web, reputación y captación medible para clínicas privadas en Sevilla.',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630, alt: 'iclinicas - Marketing para clínicas' }],
    siteName: 'iclinicas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing digital para clínicas en Sevilla',
    description: 'Captación online medible para clínicas privadas y profesionales sanitarios en Sevilla.',
    images: ['/images/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },
  alternates: {
    languages: {
      'es': 'https://www.iclinicas.es',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    // WebSite schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'iclinicas - Agencia de Marketing Sanitario',
      url: 'https://www.iclinicas.es/',
      description:
        'Agencia de marketing digital para clínicas privadas en Sevilla. SEO local, Google Ads, diseño web sanitario.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.iclinicas.es/buscar?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'es',
    },
    // Organization schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://www.iclinicas.es/#organization',
      name: 'iclinicas - Agencia de Marketing Sanitario',
      url: 'https://www.iclinicas.es/',
      logo: 'https://www.iclinicas.es/logo.svg',
      email: 'info@iclinicas.es',
      foundingDate: '2018',
      description:
        'Agencia de marketing digital especializada en clínicas privadas y profesionales sanitarios en Sevilla.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sevilla',
        addressRegion: 'Andalucía',
        addressCountry: 'ES',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@iclinicas.es',
        availableLanguage: ['Spanish'],
        url: 'https://www.iclinicas.es/contacto',
      },
      sameAs: [
        'https://www.linkedin.com/company/iclinicas',
        'https://es.wikipedia.org/wiki/Marketing_sanitario',
        'https://www.wikidata.org/wiki/Q2527955',
      ],
      dateModified: '2026-05-12',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        bestRating: '5',
        ratingCount: '12',
        reviewCount: '12',
      },
    },
    // LocalBusiness + ProfessionalService + MarketingAgency schema
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
      '@id': 'https://www.iclinicas.es/#local-business',
      name: 'iclinicas',
      description:
        'Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla',
      url: 'https://www.iclinicas.es',
      email: 'info@iclinicas.es',
      logo: 'https://www.iclinicas.es/logo.svg',
      image: 'https://www.iclinicas.es/images/og-default.png',
      foundingDate: '2018',
      inLanguage: 'es-ES',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sevilla',
        addressRegion: 'Andalucía',
        addressCountry: 'ES',
      },
      areaServed: [
        { '@type': 'City', name: 'Sevilla' },
        { '@type': 'City', name: 'Dos Hermanas' },
        'Nervión', 'Los Remedios', 'Triana', 'Sevilla Este', 'Aljarafe',
      ],
      serviceType: [
        'Marketing Médico',
        'SEO Local para Clínicas',
        'Google Ads para Clínicas',
        'Diseño Web Sanitario',
        'Gestión de Redes Sociales Sanitarias',
      ],
      parentOrganization: {
        '@id': 'https://www.iclinicas.es/#organization',
      },
    },
    // HowTo schema — proceso de trabajo
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo trabaja iclinicas con las clínicas',
      description: 'Proceso de captación de pacientes en 5 pasos: auditoría gratuita, diagnóstico, estrategia, ejecución y resultados medibles.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Auditoría gratuita', text: 'Analizamos presencia digital: Google Business Profile, web, campañas y competencia. Diagnóstico en 48h sin compromiso.' },
        { '@type': 'HowToStep', position: 2, name: 'Diagnóstico personalizado', text: 'Hallazgos con datos: qué funciona, qué no y oportunidades. Sin tecnicismos.' },
        { '@type': 'HowToStep', position: 3, name: 'Estrategia a medida', text: 'Plan adaptado a especialidad, zona, presupuesto y objetivos con KPIs medibles.' },
        { '@type': 'HowToStep', position: 4, name: 'Ejecución y optimización', text: 'Implementación con medición semanal. Ajustes por datos, no intuiciones.' },
        { '@type': 'HowToStep', position: 5, name: 'Resultados medibles', text: 'Informes mensuales: visibilidad, contactos, coste por contacto, retorno estimado.' },
      ],
    },
    // Review schemas
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: { '@type': 'ProfessionalService', name: 'iclinicas - Agencia de Marketing Sanitario' },
      author: { '@type': 'Person', name: 'Dr. Manuel R.' },
      reviewBody: 'A los 3 meses de aplicar los cambios, las llamadas desde Google habían crecido un 40%.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: { '@type': 'ProfessionalService', name: 'iclinicas - Agencia de Marketing Sanitario' },
      author: { '@type': 'Person', name: 'Dra. Carmen L.' },
      reviewBody: 'Las consultas han pasado de ser esporádicas a tener la agenda llena con 2-3 semanas de antelación.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
  ]

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" type="application/rss+xml" title="iclinicas - Blog" href="/rss.xml" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-body text-text bg-neutral">{children}</body>
    </html>
  )
}
