import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container-custom text-center">
        <h2 className="text-h2 font-heading mb-6">¿Listo para más pacientes?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Solicita una auditoría gratuita de tu presencia digital. Sin compromiso. Descubre cómo
          aumentar tus pacientes en Sevilla.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-block bg-accent text-text px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg font-semibold"
          >
            Solicitar auditoría gratis
          </Link>
          <a
            href="tel:+34XXX"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition text-lg font-semibold"
          >
            Llamar ahora
          </a>
        </div>

        <p className="text-sm opacity-80 mt-8">
          Respuesta garantizada en menos de 24 horas | Sin presión | Resultados comprobados
        </p>
      </div>
    </section>
  )
}
