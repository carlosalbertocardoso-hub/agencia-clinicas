import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="section-padding section-primary">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">¿Listo para más pacientes?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 text-white">
          Solicita una auditoría gratuita de tu presencia digital. Sin compromiso. Descubre cómo
          aumentar tus pacientes en Sevilla.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:opacity-90 transition"
          >
            Solicitar auditoría gratis
          </Link>
          <a
            href="tel:+34XXX"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition font-semibold uppercase tracking-wide"
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
