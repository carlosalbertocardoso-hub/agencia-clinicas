import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import EspecialidadesGrid from '@/components/home/EspecialidadesGrid'
import ServiciosSection from '@/components/home/ServiciosSection'
import CasosExitoSection from '@/components/home/CasosExitoSection'
import TestimoniosSection from '@/components/home/TestimoniosSection'
import PorQueNosotrosSection from '@/components/home/PorQueNosotrosSection'
import BlogPreviewSection from '@/components/home/BlogPreviewSection'
import ProcesoSection from '@/components/home/ProcesoSection'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Pacientes Sevilla | Marketing Digital para Clínicas en Sevilla',
  description:
    'Consigue más pacientes en Sevilla. Marketing especializado para clínicas, dentistas, psicólogos y profesionales sanitarios. +300% resultados.',
  openGraph: {
    title: 'Pacientes Sevilla | Marketing Digital para Clínicas',
    description: 'Consigue más pacientes en Sevilla con marketing digital especializado',
    url: 'https://pacientessevilla.com',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <EspecialidadesGrid />
        <ServiciosSection />
        <CasosExitoSection />
        <TestimoniosSection />
        <PorQueNosotrosSection />
        <BlogPreviewSection />
        <ProcesoSection />
        <CtaFinal />
      </main>

      <Footer />
    </div>
  )
}
