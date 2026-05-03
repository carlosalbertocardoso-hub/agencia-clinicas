import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="section-padding section-primary">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
          ¿Quieres saber cuántas oportunidades está perdiendo tu clínica online?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 text-white">
          Solicita una auditoría gratuita. Revisaremos tu presencia en Google, tu web y tus puntos de conversión para decirte qué mejorar primero.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-block bg-[#FFD166] text-[#073F38] px-8 py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white hover:text-primary transition"
          >
            Solicitar auditoría gratuita
          </Link>
          <Link
            href="/servicios/seo-medico"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition font-semibold uppercase tracking-wide"
          >
            Analizar mi presencia en Google
          </Link>
        </div>

        <p className="text-sm opacity-80 mt-8 text-white">
          Sin compromiso. Respuesta en menos de 24h laborables. Explicado en lenguaje claro.
        </p>
      </div>
    </section>
  )
}
