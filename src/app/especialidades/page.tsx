import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EspecialidadesGrid from '@/components/home/EspecialidadesGrid'
import CtaFinal from '@/components/home/CtaFinal'
import { buildOgUrl } from '@/lib/og/buildOgUrl'

const ogImage = buildOgUrl({
  title: 'A quién ayudamos en marketing sanitario',
  category: 'Especialidades',
  subtitle: 'Clínicas y consultas privadas en Sevilla',
})

export const metadata: Metadata = {
  title: 'A quién ayudamos | Marketing sanitario en Sevilla | iclinicas',
  description:
    'Marketing digital para clínicas dentales, reproducción asistida, pedagogos, dermatólogos, nutricionistas, oftalmólogos y profesionales sanitarios en Sevilla.',
  alternates: {
    canonical: '/especialidades',
  },
  openGraph: {
    title: 'A quién ayudamos | Marketing sanitario en Sevilla | iclinicas',
    description: 'Marketing digital para clínicas dentales, psicólogos, medicina estética, fisioterapia, dermatología, nutricionistas, oftalmología y más en Sevilla.',
    url: 'https://www.iclinicas.es/especialidades',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A quién ayudamos | Marketing sanitario en Sevilla | iclinicas',
    description: 'Marketing digital para clínicas dentales, psicólogos, medicina estética, fisioterapia, dermatología, nutricionistas, oftalmología y más en Sevilla.',
    images: [ogImage],
  },
}

export default function EspecialidadesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-section bg-gradient-to-br from-bg to-surface">
          <div className="container-custom text-center max-w-3xl">
            <p className="text-label text-accent mb-4">A quién ayudamos</p>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
              Marketing sanitario adaptado a cada tipo de clínica en Sevilla
            </h1>
            <p className="text-lg text-text-muted">
              Cada especialidad se busca, compara y decide de forma distinta. Ajustamos el mensaje, la web y los canales a la realidad de tu consulta.
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
