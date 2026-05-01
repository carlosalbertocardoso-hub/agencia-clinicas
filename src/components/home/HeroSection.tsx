import Link from 'next/link'
import Image from 'next/image'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-bg to-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Columna izquierda - Contenido (60%) */}
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6 text-primary leading-tight">
              Consigue más pacientes en Sevilla
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl">
              Marketing digital especializado para clínicas, dentistas, psicólogos y profesionales
              sanitarios. Resultados comprobados con más de 500 clínicas asesoradas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+300%</div>
                <p className="text-xs md:text-sm text-text-muted">Aumento medio en captación</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-xs md:text-sm text-text-muted">Clínicas asesoradas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-xs md:text-sm text-text-muted">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen (40%) */}
          <div className="md:col-span-5 relative">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Profesional sanitario"
                fill
                className="object-cover"
                priority
              />
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg px-4 py-3 shadow-lg">
                <div className="text-3xl font-bold text-primary">+300%</div>
                <p className="text-xs text-text-muted font-medium">pacientes nuevos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
