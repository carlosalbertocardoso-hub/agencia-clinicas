import type { FAQ } from '@/types'

interface FaqSectionProps {
  faqs: FAQ[]
  title?: string
}

export default function FaqSection({ faqs, title = 'Preguntas Frecuentes' }: FaqSectionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center mb-10 md:mb-12 text-text">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-border rounded-lg overflow-hidden bg-white hover:shadow-sm transition"
            >
              <summary className="w-full px-4 sm:px-6 py-4 text-left font-semibold text-text hover:bg-slate-50 transition flex justify-between items-center gap-4 list-none cursor-pointer">
                <span className="text-base">{faq.pregunta}</span>
                <span className="transform transition-transform duration-200 text-accent group-open:rotate-180 flex-shrink-0">
                  ▼
                </span>
              </summary>
              <div className="px-4 sm:px-6 py-4 border-t border-border text-text-muted bg-slate-50 text-sm leading-relaxed">
                {faq.respuesta}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
