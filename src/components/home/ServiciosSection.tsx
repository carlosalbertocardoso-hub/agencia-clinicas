import Link from 'next/link'
import { Check, ChevronRight, MousePointerClick } from 'lucide-react'
import { servicios } from '@/data/servicios'

export default function ServiciosSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Cómo ayudamos a tu clínica</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Mejoramos los puntos que hacen que un paciente te encuentre, confíe en ti y contacte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <Link key={servicio.id} href={`/servicios/${servicio.slug}`}>
              <div className="card card-service h-full p-8 cursor-pointer group">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white flex items-center justify-center mb-4">
                  <MousePointerClick size={22} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-text group-hover:text-primary transition">
                  {servicio.nombre}
                </h3>
                <p className="text-text-muted mb-6">{servicio.descripcion}</p>

                <ul className="space-y-2 mb-6">
                  {servicio.caracteristicas.slice(0, 3).map((car, idx) => (
                    <li key={idx} className="text-sm text-text-muted flex gap-2">
                      <Check size={16} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1 text-primary font-semibold transition">
                  Ver cómo funciona <ChevronRight size={16} strokeWidth={1.8} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
