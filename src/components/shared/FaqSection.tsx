'use client'

import { useState } from 'react'
import { buildFAQSchema } from '@/lib/schemas'
import type { FAQ } from '@/types'

interface FaqSectionProps {
  faqs: FAQ[]
  title?: string
}

export default function FaqSection({ faqs, title = 'Preguntas Frecuentes' }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const faqSchema = buildFAQSchema(
    faqs.map((faq) => ({
      question: faq.pregunta,
      answer: faq.respuesta,
    }))
  )

  return (
    <section className="section-padding bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center mb-10 md:mb-12 text-text">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden bg-white hover:shadow-sm transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-4 sm:px-6 py-4 text-left font-semibold text-text hover:bg-slate-50 transition flex justify-between items-center gap-4"
              >
                <span className="text-base">{faq.pregunta}</span>
                <span className={`transform transition text-accent ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-4 sm:px-6 py-4 border-t border-border text-text-muted bg-slate-50 text-sm leading-relaxed">
                  {faq.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
