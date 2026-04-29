import Link from 'next/link'
import { servicios } from '@/data/servicios'

export default function ServiciosSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading mb-4">Nuestros servicios</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Soluciones completas de marketing digital para clínicas y profesionales sanitarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <Link key={servicio.id} href={`/servicios/${servicio.slug}`}>
              <div className="h-full bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:border-primary transition cursor-pointer group">
                <h3 className="text-h4 font-heading mb-3 text-text group-hover:text-primary transition">
                  {servicio.nombre}
                </h3>
                <p className="text-text-muted mb-6">{servicio.descripcion}</p>

                <ul className="space-y-2 mb-6">
                  {servicio.caracteristicas.slice(0, 3).map((car, idx) => (
                    <li key={idx} className="text-sm text-text-muted flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-block text-primary font-semibold group-hover:gap-2 transition">
                  Ver detalles →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
