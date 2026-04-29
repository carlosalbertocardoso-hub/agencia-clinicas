import type { FAQ } from '@/types'

export const faqsGeneral: FAQ[] = [
  {
    id: '1',
    pregunta: '¿Cuánto tiempo tardamos en ver resultados?',
    respuesta:
      'Los primeros resultados con SEO se ven entre 3-6 meses. Con Google Ads, los resultados son inmediatos (días). Cada estrategia es diferente según tu situación actual.',
  },
  {
    id: '2',
    pregunta: '¿Cuáles son vuestros precios?',
    respuesta:
      'No tenemos precios cerrados. Cada clínica tiene necesidades diferentes. Ofrecemos una auditoría gratuita para proponer un plan personalizado y presupuesto adaptado a tu negocio.',
  },
  {
    id: '3',
    pregunta: '¿Trabajáis solo con clínicas grandes?',
    respuesta:
      'No. Trabajamos con consultorios pequeños, clínicas medianas y grandes cadenas. Nuestras estrategias se adaptan a presupuestos y objetivos de cada tamaño de negocio.',
  },
  {
    id: '4',
    pregunta: '¿Qué incluye la auditoría gratis?',
    respuesta:
      'Analizamos tu web, posicionamiento SEO actual, presencia en redes, Google Ads de competencia y oportunidades. Recibirás un informe detallado con recomendaciones sin coste.',
  },
  {
    id: '5',
    pregunta: '¿Garantizáis resultados?',
    respuesta:
      'Garantizamos esfuerzo y estrategia de calidad. Los resultados dependen de varios factores (competencia, presupuesto, especialidad). Trabajamos bajo modelos de pago por resultados cuando es posible.',
  },
  {
    id: '6',
    pregunta: '¿Puedo contratar solo un servicio?',
    respuesta:
      'Sí. Puedes contratar SEO, Google Ads, diseño web o redes sociales por separado. Aunque recomendamos una estrategia integrada para mejores resultados.',
  },
]

export function getFaqsByCategory(_category: string): FAQ[] {
  return faqsGeneral
}
