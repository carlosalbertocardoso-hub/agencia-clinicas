import type { FAQ } from '@/types'

export const faqsGeneral: FAQ[] = [
  {
    id: '1',
    pregunta: '¿Cuánto tiempo tardamos en ver resultados?',
    respuesta:
      'Depende del punto de partida, especialidad, zona, inversión y capacidad de seguimiento de cada clínica. Google Ads puede generar contactos antes; SEO local, reputación y conversión suelen requerir trabajo progresivo.',
  },
  {
    id: '2',
    pregunta: '¿Qué incluye la auditoría gratuita?',
    respuesta:
      'Revisamos visibilidad en Google y Google Maps, web, mensajes principales, facilidad de contacto desde móvil, reseñas, competencia local y oportunidades rápidas de mejora.',
  },
  {
    id: '3',
    pregunta: '¿Trabajáis solo con clínicas grandes?',
    respuesta:
      'No. Trabajamos con consultas privadas, clínicas medianas y centros con varias especialidades. Adaptamos prioridades a agenda, inversión y capacidad real de atención.',
  },
  {
    id: '4',
    pregunta: '¿Garantizáis pacientes?',
    respuesta:
      'No prometemos un número concreto de pacientes ni resultados clínicos. Sí trabajamos con medición, claridad y acciones orientadas a mejorar visibilidad, confianza y solicitudes cualificadas.',
  },
  {
    id: '5',
    pregunta: '¿Podemos empezar por un solo servicio?',
    respuesta:
      'Sí. A veces lo más urgente es Google, otras la web, campañas o medición. La auditoría sirve para decidir qué conviene abordar primero.',
  },
  {
    id: '6',
    pregunta: '¿Cómo sabré qué parte del marketing funciona?',
    respuesta:
      'Medimos llamadas, clics a WhatsApp, formularios, campañas, páginas clave y calidad de las solicitudes para que puedas tomar decisiones con más claridad.',
  },
]

export function getFaqsByCategory(_category: string): FAQ[] {
  return faqsGeneral
}
