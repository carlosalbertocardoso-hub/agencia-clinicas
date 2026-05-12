import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import PainSection from '@/components/home/PainSection'
import GarantiaNormativaSection from '@/components/home/GarantiaNormativaSection'
import EspecialidadesGrid from '@/components/home/EspecialidadesGrid'
import ServiciosSection from '@/components/home/ServiciosSection'
import PorQueNosotrosSection from '@/components/home/PorQueNosotrosSection'
import CroAuthoritySection from '@/components/home/CroAuthoritySection'
import BlogPreviewSection from '@/components/home/BlogPreviewSection'
import ProcesoSection from '@/components/home/ProcesoSection'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados',
  description:
    'Impulsa tu centro médico en Sevilla con estrategias de marketing sanitario. Captación de pacientes privados, SEO local y publicidad médica respetando la normativa.',
  keywords: [
    'marketing medico sevilla',
    'seo local clinicas sevilla',
    'publicidad clinicas dentales sevilla',
    'captacion pacientes privados',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados',
    description:
      'Impulsa tu centro médico en Sevilla con estrategias de marketing sanitario. Captación de pacientes privados, SEO local y publicidad médica respetando la normativa.',
    url: 'https://www.iclinicas.es',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados',
    description: 'Impulsa tu centro médico en Sevilla con estrategias de marketing sanitario. Captación de pacientes privados, SEO local y publicidad médica respetando la normativa.',
    images: ['/images/og-default.png'],
  },
}

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ya tengo Instagram.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram puede reforzar confianza, pero no sustituye búsquedas con intención en Google ni una web que convierta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ya trabajo con Doctoralia.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede ayudar, pero tu captación no debería depender de una sola plataforma ni de tráfico que no controlas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Probé Google Ads y no funcionó.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muchas campañas fallan por falta de landing, negativas, tracking o lectura de calidad del contacto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mi web es bonita, pero no llegan contactos.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entonces el problema puede estar en mensaje, móvil, CTAs, confianza, velocidad o medición.',
      },
    },
    {
      '@type': 'Question',
      name: 'No quiero parecer agresivo vendiendo.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En salud privada se puede captar con claridad, rigor y sensibilidad, respetando la Ley de Publicidad Sanitaria en España.',
      },
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <PainSection />
        <GarantiaNormativaSection />
        <EspecialidadesGrid />
        <ServiciosSection />
        <PorQueNosotrosSection />
        <CroAuthoritySection />
        <BlogPreviewSection />
        <ProcesoSection />
        <CtaFinal />
      </main>

      <Footer />
    </div>
  )
}
