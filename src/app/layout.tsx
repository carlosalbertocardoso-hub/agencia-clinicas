import type { Metadata } from 'next'
import { Newsreader, Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/seo/JsonLd'
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from '@/components/analytics/GoogleTagManager'
import dynamic from 'next/dynamic'
import MobileStickyCta from '@/components/layout/MobileStickyCta'

const ConsentBanner = dynamic(() => import('@/components/analytics/ConsentBanner'), {
  ssr: false,
})
import { buildOgUrl } from '@/lib/og/buildOgUrl'
import { buildOrganizationSchema } from '@/lib/schemas'

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

const defaultOgImage = buildOgUrl({
  title: 'Marketing digital para clínicas',
  category: 'Agencia',
  subtitle: 'Captación de pacientes privados en Sevilla',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iclinicas.es'),
  title: {
    default: 'Marketing digital para clínicas en Sevilla | iclinicas',
    template: '%s | iclinicas',
  },
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
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'iclinicas - Marketing para clínicas' }],
    siteName: 'iclinicas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing digital para clínicas en Sevilla',
    description: 'Captación online medible para clínicas privadas y profesionales sanitarios en Sevilla.',
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    languages: {
      'es-ES': 'https://www.iclinicas.es',
      'x-default': 'https://www.iclinicas.es',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = buildOrganizationSchema()

  return (
    <html lang="es" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" type="application/rss+xml" title="iclinicas - Blog" href="/rss.xml" />
        <JsonLd data={organizationSchema} />
        <GoogleTagManagerHead />
      </head>
      <body className="font-body text-text bg-neutral">
        <GoogleTagManagerNoScript />
        {children}
        <MobileStickyCta />
        <ConsentBanner />
      </body>
    </html>
  )
}
