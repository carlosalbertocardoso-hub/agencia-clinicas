import Link from 'next/link'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="py-section md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
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
            className="btn-primary btn-primary-lg inline-flex items-center justify-center gap-2"
          >
            Reservar auditoría gratis
          </Link>
          <Link
            href="/casos-de-exito"
            className="btn-secondary inline-flex items-center justify-center gap-2"
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
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
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
