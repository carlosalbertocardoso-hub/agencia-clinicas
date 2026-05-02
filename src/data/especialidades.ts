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
    descripcionCorta: 'Aumenta tu cartera de pacientes dentales con estrategia digital especializada',
    descripcionLarga:
      'Marketing digital especializado para clínicas dentales en Sevilla. Estrategias SEO, Google Ads y redes sociales diseñadas para aumentar captación de pacientes dentales.',
    icono: 'Tooth',
    color: '#0A6B5E',
    resultados: '+280% captación de pacientes',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '2',
    nombre: 'Psicólogos',
    slug: 'psicologos-sevilla',
    descripcionCorta: 'Atrae más pacientes a tu consulta de psicología con marketing digital',
    descripcionLarga:
      'Estrategias de marketing digital específicas para psicólogos en Sevilla. Posicionamiento SEO, Google Ads y presencia en redes sociales para aumentar consultas.',
    icono: 'Brain',
    color: '#0E8C7A',
    resultados: '+320% consultas nuevas',
    servicios: ['seo-medico', 'google-ads', 'redes-sociales'],
  },
  {
    id: '3',
    nombre: 'Medicina Estética',
    slug: 'medicina-estetica-sevilla',
    descripcionCorta: 'Posiciona tu clínica de estética como referencia en Sevilla',
    descripcionLarga:
      'Marketing digital para clínicas de medicina estética en Sevilla. Diseño web, SEO y Google Ads diseñados para atraer pacientes que buscan tratamientos estéticos.',
    icono: 'Sparkles',
    color: '#E8A030',
    resultados: '+350% pacientes nuevos',
    servicios: ['diseno-web', 'google-ads', 'redes-sociales'],
  },
  {
    id: '4',
    nombre: 'Fisioterapia',
    slug: 'fisioterapia-sevilla',
    descripcionCorta: 'Crece tu centro de fisioterapia con estrategia digital completa',
    descripcionLarga:
      'Estrategias de marketing digital para centros de fisioterapia en Sevilla. SEO local, Google Ads y redes sociales para aumentar tus pacientes de fisio.',
    icono: 'Activity',
    color: '#0A6B5E',
    resultados: '+290% pacientes activos',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '5',
    nombre: 'Nutrición',
    slug: 'nutricionistas-sevilla',
    descripcionCorta: 'Atrae más pacientes a tu consulta de nutrición en Sevilla',
    descripcionLarga:
      'Marketing digital especializado para nutricionistas en Sevilla. Posicionamiento web, Google Ads y estrategia en redes sociales para aumentar consultas.',
    icono: 'Apple',
    color: '#0E8C7A',
    resultados: '+310% consultas iniciales',
    servicios: ['seo-medico', 'redes-sociales', 'diseno-web'],
  },
  {
    id: '6',
    nombre: 'Pediatría',
    slug: 'pediatria-sevilla',
    descripcionCorta: 'Aumenta la captación de pacientes pediátricos en Sevilla',
    descripcionLarga:
      'Marketing digital para pediatras y clínicas pediátricas en Sevilla. Estrategias SEO, Google Ads y redes sociales enfocadas en familias sevillanas.',
    icono: 'Baby',
    color: '#E8A030',
    resultados: '+270% pacientes nuevos',
    servicios: ['google-ads', 'seo-medico', 'redes-sociales'],
  },
  {
    id: '7',
    nombre: 'Cirugía',
    slug: 'clinicas-cirugia-sevilla',
    descripcionCorta: 'Posiciona tu clínica de cirugía como referente en Sevilla',
    descripcionLarga:
      'Marketing digital de alto nivel para clínicas quirúrgicas en Sevilla. Estrategias SEO premium, Google Ads específicos y presencia digital profesional.',
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
