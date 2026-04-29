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
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left font-semibold text-text hover:bg-gray-50 transition flex justify-between items-center"
              >
                <span>{faq.pregunta}</span>
                <span className={`transform transition ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 border-t border-gray-200 text-text-muted bg-gray-50">
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
