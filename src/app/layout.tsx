import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pacientessevilla.com'),
  title: 'Pacientes Sevilla | Marketing Digital para Clínicas y Sanitarios',
  description:
    'Consigue más pacientes en Sevilla. Somos especialistas en marketing digital para clínicas, dentistas, psicólogos y profesionales sanitarios. +300% resultados garantizados.',
  keywords: [
    'marketing clínicas Sevilla',
    'conseguir pacientes Sevilla',
    'marketing dentistas',
    'marketing psicólogos',
    'agencia marketing sanitario',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pacientessevilla.com',
    title: 'Pacientes Sevilla | Marketing Digital para Clínicas',
    description:
      'Consigue más pacientes en Sevilla. Especialistas en marketing digital para clínicas y profesionales sanitarios.',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Pacientes Sevilla - Marketing Digital para Clínicas',
      },
    ],
    siteName: 'Pacientes Sevilla',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacientes Sevilla | Marketing Digital para Clínicas',
    description:
      'Consigue más pacientes en Sevilla con nuestro marketing digital especializado.',
    images: ['/images/og-default.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pacientessevilla.com',
    name: 'Pacientes Sevilla',
    description:
      'Agencia de marketing digital especializada en clínicas y profesionales sanitarios en Sevilla',
    url: 'https://pacientessevilla.com',
    telephone: '+34 XXX XXX XXX',
    email: 'hola@pacientessevilla.com',
    areaServed: {
      '@type': 'City',
      name: 'Sevilla',
      addressCountry: 'ES',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Principal, nº 1',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      postalCode: '41001',
      addressCountry: 'ES',
    },
    sameAs: [
      'https://www.facebook.com/pacientessevilla',
      'https://www.instagram.com/pacientessevilla',
      'https://www.linkedin.com/company/pacientessevilla',
    ],
    knowsAbout: [
      'Marketing Digital',
      'SEO Médico',
      'Google Ads Clínicas',
      'Diseño Web Médico',
      'Redes Sociales Sanitarias',
    ],
  }

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-body text-text bg-white">{children}</body>
    </html>
  )
}
