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
    <section className="section-padding bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="container-custom max-w-2xl">
        <h2 className="text-h2 font-heading text-center mb-12">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-neutral-darker rounded overflow-hidden bg-neutral"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left font-semibold text-text hover:bg-neutral-dark transition flex justify-between items-center"
              >
                <span>{faq.pregunta}</span>
                <span className={`transform transition ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 border-t border-neutral-darker text-text-muted bg-neutral-dark">
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
