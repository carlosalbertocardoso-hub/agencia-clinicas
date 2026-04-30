import Link from 'next/link'
import { servicios } from '@/data/servicios'

export default function ServiciosSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Nuestros servicios</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Soluciones completas de marketing digital para clínicas y profesionales sanitarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <Link key={servicio.id} href={`/servicios/${servicio.slug}`}>
              <div className="card card-service h-full p-8 cursor-pointer group">
                <div className="w-12 h-12 rounded bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-text group-hover:text-primary transition">
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
