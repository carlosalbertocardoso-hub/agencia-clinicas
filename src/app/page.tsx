import type { Metadata } from 'next'
import { buildOgUrl } from '@/lib/og/buildOgUrl'
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

const homeOgImage = buildOgUrl({
  title: 'Marketing sanitario en Sevilla',
  category: 'Agencia',
  subtitle: 'Captación de pacientes privados con normativa',
})

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
    images: [{ url: homeOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados',
    description: 'Impulsa tu centro médico en Sevilla con estrategias de marketing sanitario. Captación de pacientes privados, SEO local y publicidad médica respetando la normativa.',
    images: [homeOgImage],
  },
}

const homeGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.iclinicas.es/#agent',
      name: 'iClínicas',
      url: 'https://www.iclinicas.es',
      logo: 'https://www.iclinicas.es/logo.svg',
      image: 'https://www.iclinicas.es/images/og-default.png',
      telephone: '+34600258938',
      email: 'info@iclinicas.es',
      priceRange: '$$',
      openingHours: 'Mo-Fr 09:00-17:00',
      foundingDate: '2018',
      description:
        'Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla.',
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
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.iclinicas.es/#faq',
      isPartOf: { '@id': 'https://www.iclinicas.es/#agent' },
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo ayuda iClínicas si ya tengo Instagram o Doctoralia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram y Doctoralia pueden reforzar la confianza, pero no sustituyen las búsquedas con intención directa en Google. En iClínicas creamos estrategias web en Sevilla que convierten ese tráfico en pacientes reales sin depender de plataformas externas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo capta pacientes iClínicas respetando la Ley de Publicidad Sanitaria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En el sector de la salud privada en España se puede captar con claridad, rigor y sensibilidad. Diseñamos campañas éticas que respetan escrupulosamente la Ley de Publicidad Sanitaria en Andalucía.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué mi web médica es bonita pero no llegan contactos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una web médica atractiva no garantiza pacientes. El problema suele radicar en el mensaje, la optimización móvil, la disposición de los CTAs o la velocidad de carga. Analizamos estos factores para optimizar la conversión.',
          },
        },
        {
          '@type': 'Question',
          name: 'Probé Google Ads y no funcionó.',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Muchas campañas fallan por falta de landing, negativas, tracking o lectura de calidad del contacto. Auditamos la cuenta y corregimos lo que está fallando.',
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
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraphSchema) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen flex flex-col">
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
    </>
  )
}
