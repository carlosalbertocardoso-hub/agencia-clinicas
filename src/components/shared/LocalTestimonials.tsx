const localTestimonials = [
  {
    name: 'Dr. Manuel R.',
    role: 'Director clínico',
    clinic: 'Clínica Dental Nervión',
    locality: 'Sevilla',
    text:
      'La auditoría nos ayudó a ordenar la ficha de Google, priorizar tratamientos y detectar páginas que no estaban captando búsquedas locales.',
  },
  {
    name: 'Dra. Carmen L.',
    role: 'Psicóloga sanitaria',
    clinic: 'Gabinete de Psicología Triana',
    locality: 'Sevilla',
    text:
      'Valoramos especialmente el enfoque prudente: contenido útil, campañas medidas y mensajes sin presión comercial para pacientes sensibles.',
  },
  {
    name: 'Javier P.',
    role: 'Fisioterapeuta y director',
    clinic: 'Fisioterapia Avanzada Sevilla Este',
    locality: 'Sevilla',
    text:
      'El trabajo local nos permitió conectar mejor la web, las búsquedas cercanas y los puntos de contacto desde móvil.',
  },
]

export default function LocalTestimonials() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonios-locales">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-label text-accent mb-3">Confianza local</p>
          <h2 id="testimonios-locales" className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Testimonios locales representativos
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {localTestimonials.map((item) => (
            <article
              key={`${item.name}-${item.clinic}`}
              className="h-full rounded-lg border border-slate-200 bg-surface p-6 card-testimonial"
            >
              <blockquote className="text-sm text-text-muted leading-relaxed mb-5">
                “{item.text}”
              </blockquote>
              <footer className="text-sm">
                <p className="font-semibold text-text">{item.name}</p>
                <p className="text-text-muted">{item.role}</p>
                <p className="text-primary font-medium">
                  <span className="clinic-name">{item.clinic}</span>
                  {' · '}
                  <span className="locality">{item.locality}</span>
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
