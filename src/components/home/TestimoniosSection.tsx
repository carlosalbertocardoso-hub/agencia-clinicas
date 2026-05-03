import { Star } from 'lucide-react'
import { testimonios } from '@/data/testimonios'

export default function TestimoniosSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Ejemplos representativos de feedback</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Textos de referencia preparados para sustituirse por testimonios reales y verificados de clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="card card-testimonial p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <Star key={i} size={16} strokeWidth={1.7} className="text-accent" />
                ))}
              </div>

              <p className="text-text mb-6 leading-relaxed italic">"{testimonio.texto}"</p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
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
