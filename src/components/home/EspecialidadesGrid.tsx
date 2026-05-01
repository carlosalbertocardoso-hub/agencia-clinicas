import { especialidades, iconosEspecialidades } from '@/data/especialidades'
import EspecialidadCard from '@/components/shared/EspecialidadCard'

export default function EspecialidadesGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">A quién ayudamos</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Trabajamos con profesionales sanitarios de todas las especialidades en Sevilla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((esp) => (
            <EspecialidadCard
              key={esp.id}
              nombre={esp.nombre}
              slug={esp.slug}
              descripcionCorta={esp.descripcionCorta}
              icono={iconosEspecialidades[esp.slug] || esp.icono}
              resultados={esp.resultados}
              color={esp.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
