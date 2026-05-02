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
  title: 'Pacientes Sevilla | Más solicitudes para clínicas en Sevilla',
  description:
    'Ayudamos a clínicas, dentistas, psicólogos y profesionales sanitarios en Sevilla a mejorar su presencia online y recibir más solicitudes de cita.',
  openGraph: {
    title: 'Pacientes Sevilla | Más solicitudes para clínicas',
    description: 'Mejora la presencia online de tu clínica en Sevilla y facilita que más pacientes contacten contigo.',
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
