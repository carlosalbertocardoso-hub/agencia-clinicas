import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiciosSection from '@/components/home/ServiciosSection'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Servicios de Marketing para Clínicas | Pacientes Sevilla',
  description:
    'SEO médico, Google Ads, diseño web y redes sociales para clínicas y profesionales sanitarios en Sevilla.',
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-section bg-gradient-to-br from-bg to-surface">
          <div className="container-custom text-center max-w-3xl">
            <p className="text-label text-accent mb-4">Servicios</p>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
              Marketing digital para captar pacientes
            </h1>
            <p className="text-lg text-text-muted">
              Combinamos posicionamiento, campañas, web y contenido para convertir búsquedas locales en consultas reales.
            </p>
          </div>
        </section>
        <ServiciosSection />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
