import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pacientessevilla.com'),
  title: 'Pacientes Sevilla | Más pacientes para clínicas en Sevilla',
  description:
    'Ayudamos a clínicas y profesionales sanitarios en Sevilla a mejorar su presencia online, aparecer mejor en Google y recibir más solicitudes de cita.',
  keywords: [
    'marketing clínicas Sevilla',
    'conseguir pacientes Sevilla',
    'marketing dentistas',
    'marketing psicólogos',
    'agencia marketing sanitario',
    'aparecer en Google clínicas Sevilla',
    'más citas clínica Sevilla',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pacientessevilla.com',
    title: 'Pacientes Sevilla | Más pacientes para clínicas',
    description:
      'Mejora la presencia online de tu clínica en Sevilla y facilita que más pacientes contacten contigo.',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Pacientes Sevilla - Ayuda online para clínicas',
      },
    ],
    siteName: 'Pacientes Sevilla',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacientes Sevilla | Más pacientes para clínicas',
    description:
      'Ayudamos a clínicas de Sevilla a recibir más solicitudes de cita.',
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
      'Agencia que ayuda a clínicas y profesionales sanitarios en Sevilla a mejorar su presencia online y recibir más solicitudes',
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
      'Presencia online para clínicas',
      'Google para clínicas',
      'Anuncios para clínicas',
      'Web para clínicas',
      'Comunicación sanitaria',
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
      <body className="font-body text-text bg-neutral">{children}</body>
    </html>
  )
}
