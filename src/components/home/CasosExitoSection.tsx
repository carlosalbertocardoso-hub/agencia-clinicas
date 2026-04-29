import Link from 'next/link'
import { casos } from '@/data/casos'

export default function CasosExitoSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading mb-4">Casos de éxito</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Resultados reales de clínicas y profesionales sanitarios en Sevilla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {casos.map((caso) => (
            <div key={caso.id} className="bg-neutral border border-neutral-dark rounded overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-darker relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-light">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">{caso.resultado}</div>
                    <p className="text-white text-sm mt-2">Aumento en captación</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-h4 mb-2 text-text">{caso.titulo}</h3>
                <p className="text-sm text-text-muted mb-2">{caso.clinica}</p>
                <p className="text-sm text-text-muted mb-4">{caso.especialidad}</p>
                <p className="text-text text-sm leading-relaxed">{caso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/casos-de-exito"
            className="inline-block bg-accent text-white px-8 py-4 rounded hover:bg-opacity-90 transition text-lg font-semibold"
          >
            Ver todos los casos →
          </Link>
        </div>
      </div>
    </section>
  )
}
