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
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630, alt: 'iclinicas - Marketing para clínicas' }],
    siteName: 'iclinicas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing digital para clínicas en Sevilla',
    description: 'Captación online medible para clínicas privadas y profesionales sanitarios en Sevilla.',
    images: ['/images/og-default.svg'],
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
      name: 'iclinicas - Agencia de Marketing Sanitario',
      url: 'https://www.iclinicas.es/',
      logo: 'https://www.iclinicas.es/logo.svg',
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
        availableLanguage: ['Spanish'],
        url: 'https://www.iclinicas.es/contacto',
      },
      sameAs: [
        'https://www.linkedin.com/company/iclinicas',
        'https://es.wikipedia.org/wiki/Marketing_sanitario',
      ],
      dateModified: '2026-05-09'
    },
    // ProfessionalService schema (existente, mejorado)
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'iclinicas - Agencia de Marketing Sanitario',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sevilla',
        addressRegion: 'Andalucía',
        addressCountry: 'ES',
      },
      url: 'https://www.iclinicas.es/',
      serviceType: ['Marketing Médico', 'SEO Local', 'Google Ads para Clínicas'],
      areaServed: ['Sevilla', 'Nervión', 'Triana', 'Aljarafe'],
    },
    // FAQPage schema
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es iclinicas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'iclinicas es una agencia de marketing digital especializada exclusivamente en clínicas privadas y profesionales sanitarios en Sevilla. Ofrecemos SEO local, Google Ads, diseño web y redes sociales para captación de pacientes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿A qué especialidades médicas ayudáis en Sevilla?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajamos con clínicas dentales, psicólogos, medicina estética, fisioterapia, reproducción asistida, dermatología, nutricionistas, oftalmología, pediatría y clínicas quirúrgicas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo ayudáis a las clínicas a conseguir más pacientes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mediante SEO local (Google Business Profile), Google Ads segmentados, diseño web orientado a conversión y contenido en redes sociales, todo adaptado al sector sanitario y cumpliendo la normativa LOPD.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta una auditoría de marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ofrecemos una auditoría gratuita sin compromiso. El diagnóstico identifica oportunidades en visibilidad local, publicidad y conversión web.',
          },
        },
      ],
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
