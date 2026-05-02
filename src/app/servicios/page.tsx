import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiciosSection from '@/components/home/ServiciosSection'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Servicios para mejorar tu clínica online | Pacientes Sevilla',
  description:
    'Ayudamos a clínicas y profesionales sanitarios en Sevilla a aparecer mejor en Google, transmitir confianza y recibir más solicitudes.',
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
              Mejoras online para que más pacientes contacten contigo
            </h1>
            <p className="text-lg text-text-muted">
              Revisamos cómo te encuentran, cómo se entiende tu clínica y qué cambios pueden ayudarte a recibir más solicitudes de cita.
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
