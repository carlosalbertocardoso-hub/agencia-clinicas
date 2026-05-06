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
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
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
  )
}
