import Link from 'next/link'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-secondary to-white py-16 md:py-24">
      <div className="container-custom text-center">
        <h1 className="text-h1 font-heading mb-6 text-primary leading-tight">
          Consigue más pacientes en Sevilla
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-8 max-w-3xl mx-auto">
          Marketing digital especializado para clínicas, dentistas, psicólogos y profesionales
          sanitarios. Resultados comprobados con más de 500 clínicas asesoradas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contacto"
            className="inline-block bg-primary text-white px-8 py-4 rounded hover:bg-primary-light transition text-lg font-semibold"
          >
            Reservar auditoría gratis
          </Link>
          <Link
            href="/casos-de-exito"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded hover:bg-primary hover:text-white transition text-lg font-semibold"
          >
            Ver casos de éxito
          </Link>
        </div>

        <div className="mb-8">
          <TrustBadges />
        </div>

        {/* Stat Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-neutral border border-neutral-dark rounded p-8 mt-12">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">+300%</div>
            <p className="text-text-muted">Aumento medio en captación</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-text-muted">Clínicas asesoradas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-text-muted">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
