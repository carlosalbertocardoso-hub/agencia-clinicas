import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { casos } from '@/data/casos'

export default function CasosExitoSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Situaciones que revisamos a menudo</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Ejemplos representativos de problemas de captación. Sustituir por casos reales cuando existan datos verificables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {casos.map((caso) => (
            <div key={caso.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 relative bg-gray-200">
                {caso.imagen && <Image src={caso.imagen} alt={caso.titulo} fill className="object-cover" />}
                <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                  <p className="text-white text-sm font-semibold text-center px-6">{caso.resultado}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 text-text">{caso.titulo}</h3>
                <p className="text-sm text-text-muted mb-2">{caso.clinica}</p>
                <p className="text-sm text-text-muted mb-4">{caso.especialidad}</p>
                <p className="text-text text-sm leading-relaxed">{caso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/casos-de-exito" className="btn-primary btn-primary-lg inline-flex items-center gap-2">
            Ver ejemplos de diagnóstico <ChevronRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  )
}
