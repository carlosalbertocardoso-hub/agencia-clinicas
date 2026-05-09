import { especialidades, iconosEspecialidades } from '@/data/especialidades'
import EspecialidadCard from '@/components/shared/EspecialidadCard'

const copyEspecialidades: Record<string, { titulo: string; subtitulo: string }> = {
  'clinicas-dentales-sevilla': {
    titulo: 'Clínicas dentales en Sevilla.',
    subtitulo: 'Más implantes y ortodoncia invisible.',
  },
  'psicologos-sevilla': {
    titulo: 'Psicólogos en Sevilla.',
    subtitulo: 'Más primeras consultas privadas con captación ética.',
  },
  'medicina-estetica-sevilla': {
    titulo: 'Medicina estética en Sevilla.',
    subtitulo: 'Más solicitudes filtradas por tratamiento.',
  },
  'fisioterapia-sevilla': {
    titulo: 'Fisioterapia en Sevilla.',
    subtitulo: 'Más pacientes locales con dolor, lesión o rehabilitación.',
  },
  'clinicas-reproduccion-asistida-sevilla': {
    titulo: 'Reproducción asistida en Sevilla.',
    subtitulo: 'Más primeras valoraciones con privacidad y confianza.',
  },
  'pedagogos-sevilla': {
    titulo: 'Pedagogos en Sevilla.',
    subtitulo: 'Más familias que buscan apoyo educativo especializado.',
  },
  'dermatologos-sevilla': {
    titulo: 'Dermatólogos en Sevilla.',
    subtitulo: 'Más consultas privadas de piel, acné, manchas o revisión.',
  },
  'nutricionistas-sevilla': {
    titulo: 'Nutricionistas en Sevilla.',
    subtitulo: 'Más consultas privadas de nutrición online o presencial.',
  },
  'oftalmologos-sevilla': {
    titulo: 'Oftalmólogos en Sevilla.',
    subtitulo: 'Más revisiones y consultas oftalmológicas privadas.',
  },
  'pediatria-sevilla': {
    titulo: 'Pediatras en Sevilla.',
    subtitulo: 'Más familias que buscan pediatra privado de confianza.',
  },
  'clinicas-cirugia-sevilla': {
    titulo: 'Clínicas quirúrgicas en Sevilla.',
    subtitulo: 'Más consultas cualificadas de alta consideración.',
  },
  'ia-para-clinicas': {
    titulo: 'IA para clínicas en Sevilla.',
    subtitulo: 'Automatización, datos e inteligencia artificial aplicada a la captación.',
  },
}

export default function EspecialidadesGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">A quién ayudamos</h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Clínicas, consultas y profesionales sanitarios de Sevilla que quieren captar pacientes privados con más claridad y medición.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {especialidades.map((esp) => {
            const cardCopy = copyEspecialidades[esp.slug]

            return (
              <EspecialidadCard
                key={esp.id}
                titulo={cardCopy.titulo}
                subtitulo={cardCopy.subtitulo}
                slug={esp.slug}
                icono={iconosEspecialidades[esp.slug] || esp.icono}
                ariaLabel={`Ver estrategia específica de marketing para ${cardCopy.titulo.replace('.', '').toLowerCase()}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
