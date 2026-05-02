import type { FAQ } from '@/types'

export const faqsGeneral: FAQ[] = [
  {
    id: '1',
    pregunta: '¿Cuánto tiempo tardamos en ver resultados?',
    respuesta:
      'Depende de tu situación actual. Algunas mejoras, como ordenar la web o activar anuncios bien orientados, pueden notarse antes. Aparecer mejor en Google suele requerir varios meses de trabajo constante.',
  },
  {
    id: '2',
    pregunta: '¿Cuáles son vuestros precios?',
    respuesta:
      'No usamos un precio único para todas las clínicas. Primero revisamos qué necesitas mejorar y después proponemos un plan ajustado a tu situación y presupuesto.',
  },
  {
    id: '3',
    pregunta: '¿Trabajáis solo con clínicas grandes?',
    respuesta:
      'No. Trabajamos con consultas pequeñas, clínicas medianas y centros con varias especialidades. Adaptamos el trabajo a la realidad de cada negocio.',
  },
  {
    id: '4',
    pregunta: '¿Qué incluye la revisión gratuita?',
    respuesta:
      'Revisamos cómo aparece tu clínica online, si tu web transmite confianza, si es fácil pedir cita y qué mejoras podrían ayudarte a recibir más solicitudes.',
  },
  {
    id: '5',
    pregunta: '¿Garantizáis resultados?',
    respuesta:
      'No prometemos resultados imposibles. Sí prometemos claridad, seguimiento y un plan de mejora pensado para que tu clínica tenga más oportunidades de contacto.',
  },
  {
    id: '6',
    pregunta: '¿Puedo contratar solo un servicio?',
    respuesta:
      'Sí. Podemos empezar por lo más urgente: mejorar la web, aparecer mejor en Google, ordenar redes o activar anuncios. No siempre hace falta hacerlo todo a la vez.',
  },
]

export function getFaqsByCategory(_category: string): FAQ[] {
  return faqsGeneral
}
