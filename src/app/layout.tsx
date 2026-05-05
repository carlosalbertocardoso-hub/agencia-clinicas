import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://iclinicas.es'),
  title: 'Marketing digital para clínicas en Sevilla | iMarketing Clínicas',
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
    url: 'https://iclinicas.es',
    title: 'Marketing digital para clínicas en Sevilla | iMarketing Clínicas',
    description:
      'SEO local, Google Ads, diseño web, reputación y captación medible para clínicas privadas en Sevilla.',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630, alt: 'iMarketing Clínicas - Marketing para clínicas' }],
    siteName: 'iMarketing Clínicas',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: [{ url: '/logo.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'iMarketing Clínicas - Agencia de Marketing Sanitario',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    url: 'https://iclinicas.es/',
    serviceType: ['Marketing Médico', 'SEO Local', 'Google Ads para Clínicas'],
    areaServed: ['Sevilla', 'Nervión', 'Triana', 'Aljarafe'],
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
