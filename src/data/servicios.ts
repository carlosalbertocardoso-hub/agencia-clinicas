import type { Servicio } from '@/types'

export const servicios: Servicio[] = [
  {
    id: '1',
    nombre: 'SEO Médico',
    slug: 'seo-medico',
    descripcion:
      'Posicionamiento en Google para clínicas y profesionales sanitarios. Aparecer primero cuando busquen tu especialidad en Sevilla.',
    caracteristicas: [
      'Auditoría SEO completa',
      'Posicionamiento en palabras clave médicas',
      'Optimización técnica del sitio',
      'Estrategia de contenido especializado',
      'Link building sanitario',
      'Monitoreo y reportes mensuales',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'fisioterapia-sevilla'],
  },
  {
    id: '2',
    nombre: 'Google Ads',
    slug: 'google-ads',
    descripcion:
      'Campañas de Google Ads especializadas para captar pacientes. Pagos solo por clics reales en tu página.',
    caracteristicas: [
      'Auditoría de palabras clave médicas',
      'Configuración de campañas segmentadas',
      'Landing pages de conversión',
      'Testing A/B de anuncios',
      'Optimización de ROI',
      'Reportes de resultados semanales',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'medicina-estetica-sevilla', 'cirugias-sevilla'],
  },
  {
    id: '3',
    nombre: 'Diseño Web',
    slug: 'diseno-web',
    descripcion:
      'Sitios web modernos, rápidos y optimizados para clínicas. Diseño que convierte visitantes en pacientes.',
    caracteristicas: [
      'Diseño responsive y moderno',
      'Velocidad de carga optimizada',
      'Formularios de contacto eficaces',
      'Integración con sistemas de citas',
      'SEO técnico implementado',
      'Certificado SSL incluido',
      'Análisis y reportes mensuales',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'medicina-estetica-sevilla'],
  },
  {
    id: '4',
    nombre: 'Redes Sociales',
    slug: 'redes-sociales',
    descripcion: 'Presencia profesional en redes sociales. Contenido, engagement y conversión de seguidores en pacientes.',
    caracteristicas: [
      'Planificación de contenido',
      'Creación de posts e imágenes',
      'Community management profesional',
      'Respuesta a comentarios',
      'Análisis de métricas',
      'Publicidad en redes sociales',
      'Reportes mensuales de resultados',
    ],
    especialidades: ['psicologos-sevilla', 'medicina-estetica-sevilla', 'nutricionistas-sevilla'],
  },
]

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug)
}

export function getServicioById(id: string): Servicio | undefined {
  return servicios.find((s) => s.id === id)
}

export const faqsPorServicio: Record<string, Array<{ id: string; pregunta: string; respuesta: string }>> = {
  'seo-medico': [
    {
      id: '1',
      pregunta: '¿Cuánto tiempo tarda en funcionar SEO para clínicas?',
      respuesta: 'Entre 3-6 meses para ver resultados significativos. Requiere paciencia pero genera tráfico sostenible y de bajo costo.',
    },
    {
      id: '2',
      pregunta: '¿Cuál es la diferencia entre SEO y Google Ads?',
      respuesta: 'SEO es tráfico orgánico a largo plazo (3-6 meses). Google Ads es inmediato pero requiere presupuesto continuo. Combinamos ambos.',
    },
    {
      id: '3',
      pregunta: '¿Qué palabras clave debería targeting en mi clínica?',
      respuesta: 'Especialidad + ciudad + intención ("dentista Sevilla", "psicólogo Sevilla precios"). Hacemos investigación de palabras clave en auditoría.',
    },
  ],
  'google-ads': [
    {
      id: '1',
      pregunta: '¿Cuánto debo presupuestar en Google Ads?',
      respuesta: 'Desde €300/mes para especialidades nicho. Recomendamos mínimo €800/mes para resultados consistentes. Medimos ROI de cada euro.',
    },
    {
      id: '2',
      pregunta: '¿En cuánto tiempo veo resultados en Google Ads?',
      respuesta: 'Resultados en días. Primeras consultas en la primera semana según configuración. Optimizamos continuamente.',
    },
    {
      id: '3',
      pregunta: '¿Cómo evitamos gastos inútiles en Google Ads?',
      respuesta: 'Segmentación geo, demográfica, keywords negativos, landing pages optimizadas. Monitoreo diario y ajustes de ofertas.',
    },
  ],
  'diseno-web': [
    {
      id: '1',
      pregunta: '¿Qué hace que una web médica convierta pacientes?',
      respuesta: 'Velocidad de carga, claridad del servicio, CTA visibles, testimonios, formulario de contacto fácil, información de ubicación/horarios.',
    },
    {
      id: '2',
      pregunta: '¿Es mejor web propia o redes sociales?',
      respuesta: 'Ambas. Web es tu propiedad y controlas SEO. Redes sociales son canal de distribución. Necesitas las dos para máxima cobertura.',
    },
    {
      id: '3',
      pregunta: '¿Cuánto cuesta un diseño web para clínica?',
      respuesta: 'Entre €1.500-4.000 según complejidad. Ofrecemos desde landing pages simples hasta webs completas con blog integrado.',
    },
  ],
  'redes-sociales': [
    {
      id: '1',
      pregunta: '¿Qué redes sociales funcionan mejor para clínicas?',
      respuesta: 'Instagram para estética y dental. Facebook para todas. LinkedIn para B2B sanitario. TikTok creciente en estética y bienestar.',
    },
    {
      id: '2',
      pregunta: '¿Cuándo debería publicar en redes?',
      respuesta: 'Horarios de máxima actividad: 9-10am, 1-2pm, 6-8pm. Publicamos 3-5 veces/semana según estrategia y especialidad.',
    },
    {
      id: '3',
      pregunta: '¿Cómo medir el ROI de redes sociales?',
      respuesta: 'Tracking de conversiones, códigos UTM, CRM integrado. No es solo "likes" sino consultas generadas y pacientes nuevos.',
    },
  ],
}
