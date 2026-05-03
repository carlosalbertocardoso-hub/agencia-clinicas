import { FileCheck, Scale, ShieldCheck } from 'lucide-react'

const garantias = [
  {
    icon: ShieldCheck,
    label: 'Seguridad comunicativa',
  },
  {
    icon: Scale,
    label: 'Criterio legal y deontológico',
  },
  {
    icon: FileCheck,
    label: 'Documento verificado',
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
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            No todas las agencias entienden que la publicidad médica en Sevilla está sujeta a normativas estrictas. En Pacientes Sevilla trabajamos bajo el marco de la Ley de Publicidad Sanitaria y los códigos deontológicos, asegurando que tu captación sea tan rigurosa como tu práctica médica.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {garantias.map((garantia) => (
            <article key={garantia.label} className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-white text-primary">
                <garantia.icon size={24} strokeWidth={1.7} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text">{garantia.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
