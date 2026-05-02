import type { Especialidad } from '@/types'

// Mapa de iconos Lucide para especialidades (diseño healthcare profesional)
export const iconosEspecialidades: Record<string, string> = {
  'clinicas-dentales-sevilla': 'Tooth', // Molar real
  'psicologos-sevilla': 'Brain', // Cabeza/mente
  'medicina-estetica-sevilla': 'Sparkles', // Varita mágica elegante
  'fisioterapia-sevilla': 'Activity', // Pesa/movimiento
  'nutricionistas-sevilla': 'Apple', // Utensilio/comida
  'pediatria-sevilla': 'Baby', // Bebé
  'clinicas-cirugia-sevilla': 'Hospital', // Estetoscopio/médico
}

export const especialidades: Especialidad[] = [
  {
    id: '1',
    nombre: 'Clínicas Dentales',
    slug: 'clinicas-dentales-sevilla',
    descripcionCorta: 'Ayudamos a que más pacientes encuentren tu clínica dental y pidan cita',
    descripcionLarga:
      'Ayudamos a clínicas dentales en Sevilla a aparecer mejor cuando alguien busca tratamientos, transmitir confianza y recibir más solicitudes de cita.',
    icono: 'Tooth',
    color: '#0A6B5E',
    resultados: '+280% más solicitudes',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '2',
    nombre: 'Psicólogos',
    slug: 'psicologos-sevilla',
    descripcionCorta: 'Haz más fácil que las personas que necesitan ayuda encuentren tu consulta',
    descripcionLarga:
      'Ayudamos a psicólogos en Sevilla a explicar mejor sus servicios, ganar visibilidad y recibir más consultas de personas que buscan apoyo profesional.',
    icono: 'Brain',
    color: '#0E8C7A',
    resultados: '+320% consultas nuevas',
    servicios: ['seo-medico', 'google-ads', 'redes-sociales'],
  },
  {
    id: '3',
    nombre: 'Medicina Estética',
    slug: 'medicina-estetica-sevilla',
    descripcionCorta: 'Muestra mejor tus tratamientos y recibe más solicitudes de información',
    descripcionLarga:
      'Ayudamos a clínicas de medicina estética en Sevilla a presentar sus tratamientos con claridad, confianza y una presencia online más cuidada.',
    icono: 'Sparkles',
    color: '#E8A030',
    resultados: '+350% pacientes nuevos',
    servicios: ['diseno-web', 'google-ads', 'redes-sociales'],
  },
  {
    id: '4',
    nombre: 'Fisioterapia',
    slug: 'fisioterapia-sevilla',
    descripcionCorta: 'Consigue que más personas encuentren tu centro cuando necesitan fisioterapia',
    descripcionLarga:
      'Ayudamos a centros de fisioterapia en Sevilla a aparecer mejor en búsquedas locales y facilitar que nuevos pacientes contacten.',
    icono: 'Activity',
    color: '#0A6B5E',
    resultados: '+290% pacientes activos',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '5',
    nombre: 'Nutrición',
    slug: 'nutricionistas-sevilla',
    descripcionCorta: 'Ayuda a que más personas entiendan tu enfoque y pidan información',
    descripcionLarga:
      'Ayudamos a nutricionistas en Sevilla a explicar mejor sus servicios, ganar visibilidad y recibir más consultas iniciales.',
    icono: 'Apple',
    color: '#0E8C7A',
    resultados: '+310% consultas iniciales',
    servicios: ['seo-medico', 'redes-sociales', 'diseno-web'],
  },
  {
    id: '6',
    nombre: 'Pediatría',
    slug: 'pediatria-sevilla',
    descripcionCorta: 'Genera confianza en familias que buscan atención pediátrica',
    descripcionLarga:
      'Ayudamos a pediatras y clínicas pediátricas en Sevilla a transmitir confianza y facilitar que las familias contacten.',
    icono: 'Baby',
    color: '#E8A030',
    resultados: '+270% pacientes nuevos',
    servicios: ['google-ads', 'seo-medico', 'redes-sociales'],
  },
  {
    id: '7',
    nombre: 'Cirugía',
    slug: 'clinicas-cirugia-sevilla',
    descripcionCorta: 'Presenta tu experiencia con claridad y recibe consultas mejor informadas',
    descripcionLarga:
      'Ayudamos a clínicas quirúrgicas en Sevilla a explicar sus servicios con rigor, mejorar su presencia online y recibir consultas más cualificadas.',
    icono: 'Hospital',
    color: '#0A6B5E',
    resultados: '+340% consultas especializadas',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}

export function getEspecialidadById(id: string): Especialidad | undefined {
  return especialidades.find((e) => e.id === id)
}
