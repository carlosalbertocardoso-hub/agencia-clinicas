import Link from 'next/link'
import Image from 'next/image'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[620px] md:min-h-[640px] overflow-hidden">
      <Image
        src="/images/hero-clinica-marketing.png"
        alt="Equipo de agencia de marketing sanitario en Sevilla analizando métricas de una clínica"
        fill
        className="pointer-events-none object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-primary/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-primary/35 to-primary/80" />

      <div className="container-custom relative z-10 flex min-h-[600px] sm:min-h-[620px] md:min-h-[640px] items-center justify-center py-10 sm:py-12">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-label text-[#FFD166] mb-4">Marketing sanitario para centros médicos privados</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold mb-6 text-white leading-tight">
            Captación de pacientes privados para clínicas en Sevilla
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Convertimos Google, tu web, tus campañas y tu reputación online en un sistema medible para atraer pacientes privados, respetando la Ley de Publicidad Sanitaria en España y el tono que exige el sector salud.
          </p>

          <blockquote className="text-sm sm:text-base text-white/80 italic border-l-4 border-[#FFD166] pl-4 mb-8 max-w-2xl mx-auto text-left">
            &ldquo;El 76% de los pacientes busca un especialista por Google antes de pedir cita, y el 63% descarta clínicas que no aparecen en los primeros resultados locales.&rdquo;
            <footer className="text-white/60 text-xs mt-1 not-italic">
              — Fuente: Google Health Research, 2025
            </footer>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
            <Link
              href="/contacto"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#FFD166] px-5 sm:px-8 py-4 text-base md:text-lg font-semibold text-[#073F38] shadow-lg transition hover:bg-white hover:text-primary"
            >
              Solicitar Auditoría de mi Clínica
            </Link>
            <Link
              href="/servicios"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white/80 px-5 sm:px-8 py-4 text-base md:text-lg font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Ver servicios para clínicas
            </Link>
          </div>

          <div className="mb-6">
            <TrustBadges />
          </div>

          <div className="flex flex-wrap gap-2 justify-center text-xs text-white/70">
            <span>Sin compromiso</span>
            <span className="text-white/30">·</span>
            <span>Diagnóstico en 48h</span>
            <span className="text-white/30">·</span>
            <span>Sin permanencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
