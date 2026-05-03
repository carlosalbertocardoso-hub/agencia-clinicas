import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="section-padding section-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
          ¿Quieres captar más pacientes privados en Sevilla sin sonar agresivo?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 text-white">
          Solicita una auditoría de tu clínica. Revisaremos Google, web, publicidad médica, reputación y automatización de citas para detectar qué está frenando pacientes privados altamente rentables.
        </p>

        <Link
          href="/contacto"
          className="inline-flex w-full sm:w-auto items-center justify-center bg-[#FFD166] text-[#073F38] px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white hover:text-primary transition"
        >
          Solicitar Auditoría de mi Clínica
        </Link>

        <p className="text-sm opacity-80 mt-8 text-white">
          Sin compromiso. Respuesta en menos de 24h laborables. Explicado en lenguaje claro.
        </p>
      </div>
    </section>
  )
}
