import { FileCheck, Scale, ShieldCheck } from 'lucide-react'

const garantias = [
  {
    icon: ShieldCheck,
    label: 'Sin riesgos legales',
    descripcion: 'Todo el contenido que publicamos cumple la Ley de Publicidad Sanitaria en España. Sin sanciones, sin avisos, sin sobresaltos.',
  },
  {
    icon: Scale,
    label: 'Criterio ético real',
    descripcion: 'No hacemos promesas de resultados clínicos, no inventamos testimonios y no presionamos con urgencias falsas. Comunicamos con rigor, como exige tu sector.',
  },
  {
    icon: FileCheck,
    label: 'Filtro previo a publicación',
    descripcion: 'Cada texto, anuncio o publicación pasa una revisión legal y deontológica antes de salir. No se publica nada que no supere el filtro.',
  },
]

export default function GarantiaNormativaSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-label text-accent mb-4">Garantía Normativa</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6">
            Marketing Sanitario Ético y Legal
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-10">
            No todas las agencias saben que la publicidad médica tiene normativas específicas. 
            Nosotros trabajamos exclusivamente con clínicas, así que conocemos la Ley de Publicidad 
            Sanitaria, los códigos deontológicos y lo que se puede y no se puede decir. 
            <strong> Tu tranquilidad es nuestra prioridad.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {garantias.map((garantia) => (
            <article key={garantia.label} className="bg-white border border-slate-200 rounded-lg p-6 text-left hover:shadow-md transition">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-white text-primary">
                <garantia.icon size={24} strokeWidth={1.7} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-2">{garantia.label}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{garantia.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
