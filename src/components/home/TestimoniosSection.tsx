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
              className="card card-testimonial p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <span key={i} className="text-secondary text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-text mb-6 leading-relaxed italic">"{testimonio.texto}"</p>

              {/* Autor */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {testimonio.nombre.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="font-semibold text-text">{testimonio.nombre}</p>
                  <p className="text-sm text-text-muted">{testimonio.cargo}</p>
                  <p className="text-sm text-primary font-medium">{testimonio.clinica}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
