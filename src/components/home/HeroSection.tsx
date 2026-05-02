import Link from 'next/link'
import Image from 'next/image'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] md:min-h-[760px] overflow-hidden">
      <Image
        src="/images/hero-clinica-marketing.png"
        alt="Consultoría de marketing digital para clínicas sanitarias"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-primary/35 to-primary/80" />

      <div className="container-custom relative z-10 flex min-h-[720px] md:min-h-[760px] items-center justify-center py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-label text-[#FFD166] mb-4">Marketing sanitario en Sevilla</p>
          <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6 text-white leading-tight">
            Consigue más pacientes en Sevilla
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Marketing digital especializado para clínicas, dentistas, psicólogos y profesionales
            sanitarios. Resultados comprobados con más de 500 clínicas asesoradas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md bg-[#FFD166] px-8 py-4 text-base md:text-lg font-semibold text-[#073F38] shadow-lg transition hover:bg-white hover:text-primary"
            >
              Reservar auditoría gratis
            </Link>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center justify-center rounded-md border border-white/80 px-8 py-4 text-base md:text-lg font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Ver casos de éxito
            </Link>
          </div>

          <div className="mb-8">
            <TrustBadges />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto rounded-lg border border-white/20 bg-white/12 p-5 backdrop-blur">
            <div>
              <div className="text-4xl font-bold text-white mb-2">+300%</div>
              <p className="text-xs md:text-sm text-white/80">Aumento medio en captación</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD166] mb-2">500+</div>
              <p className="text-xs md:text-sm text-white/80">Clínicas asesoradas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-xs md:text-sm text-white/80">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
