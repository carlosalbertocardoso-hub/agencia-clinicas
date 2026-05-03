import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import PainSection from '@/components/home/PainSection'
import EspecialidadesGrid from '@/components/home/EspecialidadesGrid'
import ServiciosSection from '@/components/home/ServiciosSection'
import PorQueNosotrosSection from '@/components/home/PorQueNosotrosSection'
import CroAuthoritySection from '@/components/home/CroAuthoritySection'
import BlogPreviewSection from '@/components/home/BlogPreviewSection'
import ProcesoSection from '@/components/home/ProcesoSection'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Marketing digital para clínicas en Sevilla | Pacientes Sevilla',
  description:
    'Agencia de marketing digital para clínicas privadas en Sevilla. SEO local, Google Ads, diseño web, reputación y captación de pacientes. Solicita auditoría gratuita.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marketing digital para clínicas en Sevilla | Pacientes Sevilla',
    description:
      'SEO local, Google Ads, diseño web, reputación y conversión para clínicas privadas en Sevilla.',
    url: 'https://pacientessevilla.com',
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
