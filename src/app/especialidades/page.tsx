import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EspecialidadesGrid from '@/components/home/EspecialidadesGrid'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Especialidades Sanitarias | Pacientes Sevilla',
  description:
    'Marketing digital para clínicas dentales, psicólogos, medicina estética, fisioterapia, nutrición, pediatría y cirugía en Sevilla.',
}

export default function EspecialidadesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-section bg-gradient-to-br from-bg to-surface">
          <div className="container-custom text-center max-w-3xl">
            <p className="text-label text-accent mb-4">Especialidades</p>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
              Estrategias para cada tipo de clínica
            </h1>
            <p className="text-lg text-text-muted">
              Adaptamos el mensaje, los canales y la captación a la forma en que tus pacientes buscan ayuda sanitaria.
            </p>
          </div>
        </section>
        <EspecialidadesGrid />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
