import { testimonios } from '@/data/testimonios'

export default function TestimoniosSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Opiniones reales de clínicas y profesionales sanitarios que han aumentado sus pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-neutral border border-neutral-dark rounded p-8 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-text mb-6 leading-relaxed italic">"{testimonio.texto}"</p>

              {/* Autor */}
              <div className="border-t border-neutral-dark pt-4">
                <p className="font-semibold text-text">{testimonio.nombre}</p>
                <p className="text-sm text-text-muted">{testimonio.cargo}</p>
                <p className="text-sm text-primary font-medium">{testimonio.clinica}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
