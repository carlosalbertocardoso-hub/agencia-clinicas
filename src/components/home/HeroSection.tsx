import Link from 'next/link'
import Image from 'next/image'
import TrustBadges from '@/components/shared/TrustBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] md:min-h-[760px] overflow-hidden">
      <Image
        src="/images/hero-clinica-marketing.png"
        alt="Marketing digital para clínicas privadas en Sevilla"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-primary/35 to-primary/80" />

      <div className="container-custom relative z-10 flex min-h-[720px] md:min-h-[760px] items-center justify-center py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-label text-[#FFD166] mb-4">Agencia local para clínicas privadas en Sevilla</p>
          <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6 text-white leading-tight">
            Marketing digital para clínicas en Sevilla que necesitan más pacientes privados
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Te ayudamos a convertir Google, tu web y tus campañas en un sistema claro de captación:
            más visibilidad local, más confianza y más solicitudes de cita cualificadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md bg-[#FFD166] px-8 py-4 text-base md:text-lg font-semibold text-[#073F38] shadow-lg transition hover:bg-white hover:text-primary"
            >
              Solicitar auditoría gratuita
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-md border border-white/80 px-8 py-4 text-base md:text-lg font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Ver oportunidades de mejora
            </Link>
          </div>

          <div className="mb-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
