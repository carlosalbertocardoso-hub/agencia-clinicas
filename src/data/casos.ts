import type { CasoExito } from '@/types'

// Escenarios de diagnóstico representativos basados en problemas frecuentes de captación.
// Sustituir por casos reales verificados cuando estén disponibles.
export const casos: CasoExito[] = [
  {
    id: '1',
    titulo: 'Clínica dental: de 12 a 47 contactos al mes desde Google',
    clinica: 'Clínica dental con baja visibilidad local en Sevilla',
    especialidad: 'Odontología',
    resultado: '+35 contactos/mes desde Google',
    resultadoValue: 35,
    resultadoUnit: 'contactos/mes',
    imagen: '/images/hero-clinica-marketing.png',
    descripcion:
      'Partía de una ficha de Google incompleta, 3 páginas de tratamiento sin posicionar y campañas de Google Ads sin conversiones medidas. Optimizamos el perfil de Google Business, creamos páginas dedicadas para implantes, ortodoncia invisible y blanqueamiento, implementamos tracking de llamadas y formularios, y reestructuramos las campañas por tratamiento con landing pages específicas. En 4 meses la clínica pasó de recibir 12 contactos cualificados al mes a 47.',
  },
  {
    id: '2',
    titulo: 'Psicóloga: de consulta esporádica a agenda completa en 3 meses',
    clinica: 'Consulta de psicología con captación irregular en Sevilla',
    especialidad: 'Psicología',
    resultado: 'Agenda completa con 3 semanas de antelación',
    resultadoValue: 100,
    resultadoUnit: '% ocupación',
    imagen: '/images/hero-clinica-marketing.png',
    descripcion:
      'Dependía exclusivamente del boca a boca y de Doctoralia. La web era una sola página sin contenido específico y no aparecía en Google para búsquedas como "psicólogo ansiedad Sevilla". Creamos contenido divulgativo de calidad, optimizamos la ficha de Google Business, configuramos Google Ads con presupuesto controlado y desarrollamos páginas por especialidad. A los 3 meses la agenda estaba completa con 2-3 semanas de antelación.',
  },
  {
    id: '3',
    titulo: 'Medicina estética: reducción del 35% en coste por contacto',
    clinica: 'Clínica estética con muchas visitas pero pocas conversiones',
    especialidad: 'Medicina estética',
    resultado: '-35% coste por contacto cualificado',
    resultadoValue: 35,
    resultadoUnit: '% reducción coste',
    imagen: '/images/hero-clinica-marketing.png',
    descripcion:
      'Tenía buenas métricas de tráfico desde redes sociales pero la tasa de conversión a cita era mínima. Detectamos que las landing pages eran genéricas, los formularios pedían demasiados datos y las campañas de Google Ads no estaban segmentadas por tipo de tratamiento. Rediseñamos las páginas de aterrizaje con CTAs claros, simplificamos los formularios y creamos campañas separadas para cada servicio (ácido hialurónico, láser, mesoterapia). En 4 meses el coste por contacto cualificado bajó un 35%.',
  },
]

export function getCasos(): CasoExito[] {
  return casos
}
