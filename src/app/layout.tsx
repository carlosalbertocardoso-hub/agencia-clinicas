import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pacientessevilla.com'),
  title: 'Marketing digital para clínicas en Sevilla | Pacientes Sevilla',
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
    url: 'https://pacientessevilla.com',
    title: 'Marketing digital para clínicas en Sevilla | Pacientes Sevilla',
    description:
      'SEO local, Google Ads, diseño web, reputación y captación medible para clínicas privadas en Sevilla.',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630, alt: 'Pacientes Sevilla - Marketing para clínicas' }],
    siteName: 'Pacientes Sevilla',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'MarketingAgency'],
    '@id': 'https://pacientessevilla.com',
    name: 'Pacientes Sevilla',
    alternateName: 'Tu Agencia de Marketing Sanitario',
    url: 'https://pacientessevilla.com',
    description:
      'Agencia de marketing digital en Sevilla especializada exclusivamente en el sector sanitario. Ayudamos a clínicas, hospitales y centros médicos a captar pacientes privados.',
    email: 'hola@pacientessevilla.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sevilla',
    },
    knowsAbout: [
      'SEO Médico',
      'Marketing Sanitario',
      'Publicidad para Clínicas',
      'SEO Local para Médicos',
      'Captación de pacientes privados',
    ],
    serviceType: [
      'Marketing digital para clínicas',
      'SEO local sanitario',
      'Google Ads para clínicas',
      'Diseño web para clínicas',
      'Captación de pacientes privados',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body text-text bg-neutral">{children}</body>
    </html>
  )
}
