import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="section-padding section-primary">
      <div className="container-custom text-center">
        <h2 className="text-h2 font-heading mb-6">¿Listo para más pacientes?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-white">
          Solicita una auditoría gratuita de tu presencia digital. Sin compromiso. Descubre cómo
          aumentar tus pacientes en Sevilla.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-block bg-secondary text-tertiary px-8 py-4 rounded font-semibold uppercase tracking-wide hover:opacity-90 transition"
          >
            Solicitar auditoría gratis
          </Link>
          <a
            href="tel:+34XXX"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-primary transition font-semibold uppercase tracking-wide"
          >
            Llamar ahora
          </a>
        </div>

        <p className="text-sm opacity-80 mt-8 text-white">
          Respuesta garantizada en menos de 24 horas | Sin presión | Resultados comprobados
        </p>
      </div>
    </section>
  )
}
