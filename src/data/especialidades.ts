import type { Especialidad } from '@/types'

export const iconosEspecialidades: Record<string, string> = {
  'clinicas-dentales-sevilla': 'Tooth',
  'psicologos-sevilla': 'Brain',
  'medicina-estetica-sevilla': 'Sparkles',
  'fisioterapia-sevilla': 'Activity',
  'nutricionistas-sevilla': 'Apple',
  'pediatria-sevilla': 'Baby',
  'clinicas-cirugia-sevilla': 'Hospital',
}

export const especialidades: Especialidad[] = [
  {
    id: '1',
    nombre: 'Clínicas dentales',
    slug: 'clinicas-dentales-sevilla',
    descripcionCorta:
      'Más visibilidad para implantes, ortodoncia, estética dental, urgencias y revisiones.',
    descripcionLarga:
      'Marketing digital para clínicas dentales en Sevilla que necesitan competir mejor en Google, transmitir confianza y captar solicitudes de tratamientos de valor.',
    icono: 'Tooth',
    color: '#0A6B5E',
    resultados: 'Implantes, ortodoncia y estética',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '2',
    nombre: 'Psicólogos',
    slug: 'psicologos-sevilla',
    descripcionCorta:
      'Captación ética y clara para ansiedad, pareja, infantil, terapia online o presencial.',
    descripcionLarga:
      'Marketing digital para psicólogos en Sevilla con un enfoque sensible: visibilidad local, confianza, privacidad y mensajes que ayudan a dar el primer paso.',
    icono: 'Brain',
    color: '#0E8C7A',
    resultados: 'Ansiedad, pareja e infantil',
    servicios: ['seo-medico', 'google-ads', 'redes-sociales'],
  },
  {
    id: '3',
    nombre: 'Medicina estética',
    slug: 'medicina-estetica-sevilla',
    descripcionCorta:
      'Web, anuncios y contenido para explicar tratamientos, generar confianza y filtrar solicitudes.',
    descripcionLarga:
      'Marketing digital para clínicas de medicina estética en Sevilla que quieren comunicar tratamientos con rigor, naturalidad y una captación menos agresiva.',
    icono: 'Sparkles',
    color: '#E8A030',
    resultados: 'Confianza y solicitudes filtradas',
    servicios: ['diseno-web', 'google-ads', 'redes-sociales'],
  },
  {
    id: '4',
    nombre: 'Fisioterapia',
    slug: 'fisioterapia-sevilla',
    descripcionCorta:
      'SEO local y campañas para recuperación, dolor, rehabilitación y fisioterapia deportiva.',
    descripcionLarga:
      'Marketing digital para clínicas de fisioterapia en Sevilla orientado a búsquedas cercanas, necesidades concretas y contacto rápido desde móvil.',
    icono: 'Activity',
    color: '#0A6B5E',
    resultados: 'Dolor, lesiones y rehabilitación',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '5',
    nombre: 'Nutricionistas',
    slug: 'nutricionistas-sevilla',
    descripcionCorta:
      'Presencia profesional para pérdida de peso, salud digestiva, nutrición deportiva y educación alimentaria.',
    descripcionLarga:
      'Marketing digital para nutricionistas en Sevilla que necesitan diferenciar su método, reforzar autoridad profesional y convertir interés en consultas.',
    icono: 'Apple',
    color: '#0E8C7A',
    resultados: 'Método, autoridad y consulta',
    servicios: ['seo-medico', 'redes-sociales', 'diseno-web'],
  },
  {
    id: '6',
    nombre: 'Pediatría',
    slug: 'pediatria-sevilla',
    descripcionCorta:
      'Confianza para familias que buscan atención privada, cercanía, disponibilidad y trato claro.',
    descripcionLarga:
      'Marketing digital para clínicas pediátricas en Sevilla que quieren transmitir confianza, cercanía y facilidad de contacto a familias.',
    icono: 'Baby',
    color: '#E8A030',
    resultados: 'Familias, confianza y cercanía',
    servicios: ['seo-medico', 'google-ads', 'redes-sociales'],
  },
  {
    id: '7',
    nombre: 'Cirugía y especialistas',
    slug: 'clinicas-cirugia-sevilla',
    descripcionCorta:
      'Comunicación rigurosa para procedimientos especializados, segunda opinión y consultas de alta consideración.',
    descripcionLarga:
      'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla, con foco en autoridad médica, claridad del proceso y solicitudes cualificadas.',
    icono: 'Hospital',
    color: '#0A6B5E',
    resultados: 'Autoridad y consultas cualificadas',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}

export function getEspecialidadById(id: string): Especialidad | undefined {
  return especialidades.find((e) => e.id === id)
}
