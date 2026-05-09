import type { Especialidad } from '@/types'

export const iconosEspecialidades: Record<string, string> = {
  'clinicas-dentales-sevilla': 'Tooth',
  'psicologos-sevilla': 'Brain',
  'medicina-estetica-sevilla': 'Sparkles',
  'fisioterapia-sevilla': 'Activity',
  'clinicas-reproduccion-asistida-sevilla': 'Dna',
  'pedagogos-sevilla': 'GraduationCap',
  'dermatologos-sevilla': 'ScanFace',
  'nutricionistas-sevilla': 'Apple',
  'oftalmologos-sevilla': 'Eye',
  'pediatria-sevilla': 'Baby',
  'clinicas-cirugia-sevilla': 'Hospital',
  'ia-para-clinicas': 'Bot',
}

export const especialidades: Especialidad[] = [
  {
    id: '1',
    nombre: 'Clínicas dentales',
    slug: 'clinicas-dentales-sevilla',
    descripcionCorta:
      'Consigue que los pacientes de implantes, ortodoncia y estética dental te encuentren en Google. Sin pagar por cada clic.',
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
      'Atrae pacientes de ansiedad, terapia de pareja e infantil con un tono ético y profesional. Sin parecer venta agresiva.',
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
      'Explica tus tratamientos, genera confianza y filtra las solicitudes que realmente te interesan.',
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
      'Aparece cuando un paciente busca fisioterapeuta cerca de su casa. SEO local y campañas para tu barrio.',
    descripcionLarga:
      'Marketing digital para clínicas de fisioterapia en Sevilla orientado a búsquedas cercanas, necesidades concretas y contacto rápido desde móvil.',
    icono: 'Activity',
    color: '#0A6B5E',
    resultados: 'Dolor, lesiones y rehabilitación',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '5',
    nombre: 'Clínicas de reproducción asistida',
    slug: 'clinicas-reproduccion-asistida-sevilla',
    descripcionCorta:
      'Comunicación sensible y rigurosa para clínicas de fertilidad. Transmite confianza sin banalizar.',
    descripcionLarga:
      'Marketing digital para clínicas de reproducción asistida en Sevilla que necesitan transmitir rigor médico, privacidad y confianza en decisiones de alta sensibilidad.',
    icono: 'Dna',
    color: '#0A6B5E',
    resultados: 'Confianza, privacidad y valoración',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '6',
    nombre: 'Pedagogos',
    slug: 'pedagogos-sevilla',
    descripcionCorta:
      'Llega a familias que buscan apoyo educativo especializado en Sevilla. Con un mensaje claro y profesional.',
    descripcionLarga:
      'Marketing digital para pedagogos y gabinetes psicopedagógicos en Sevilla que quieren llegar a familias con un mensaje claro, sensible y profesional.',
    icono: 'GraduationCap',
    color: '#0E8C7A',
    resultados: 'Familias, confianza y orientación',
    servicios: ['seo-medico', 'diseno-web', 'redes-sociales'],
  },
  {
    id: '7',
    nombre: 'Dermatólogos',
    slug: 'dermatologos-sevilla',
    descripcionCorta:
      'Pacientes privados de dermatología que buscan revisión de lunares, acné o tratamientos estéticos. Consigue que te encuentren.',
    descripcionLarga:
      'Marketing digital para dermatólogos y clínicas dermatológicas en Sevilla con foco en confianza médica, diagnóstico privado y solicitudes cualificadas.',
    icono: 'ScanFace',
    color: '#E8A030',
    resultados: 'Consultas privadas y tratamientos',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '8',
    nombre: 'Nutricionistas',
    slug: 'nutricionistas-sevilla',
    descripcionCorta:
      'Construye una presencia profesional que diferencie tu método y convierta interés en consultas.',
    descripcionLarga:
      'Marketing digital para nutricionistas en Sevilla que necesitan diferenciar su método, reforzar autoridad profesional y convertir interés en consultas.',
    icono: 'Apple',
    color: '#0E8C7A',
    resultados: 'Método, autoridad y consulta',
    servicios: ['seo-medico', 'redes-sociales', 'diseno-web'],
  },
  {
    id: '9',
    nombre: 'Oftalmólogos',
    slug: 'oftalmologos-sevilla',
    descripcionCorta:
      'Capta pacientes privados de cirugía ocular, cataratas y revisiones. Explica procedimientos con rigor.',
    descripcionLarga:
      'Marketing digital para oftalmólogos y clínicas oftalmológicas en Sevilla que necesitan explicar procedimientos, reforzar autoridad y captar consultas privadas.',
    icono: 'Eye',
    color: '#0A6B5E',
    resultados: 'Revisiones y cirugía oftalmológica',
    servicios: ['seo-medico', 'google-ads', 'diseno-web'],
  },
  {
    id: '10',
    nombre: 'Pediatras',
    slug: 'pediatria-sevilla',
    descripcionCorta:
      'Ayuda a familias a encontrar tu consulta de pediatría. Confianza, cercanía y disponibilidad visibles desde Google.',
    descripcionLarga:
      'Marketing digital para pediatras en Sevilla que quieren transmitir confianza, cercanía y facilidad de contacto a familias.',
    icono: 'Baby',
    color: '#E8A030',
    resultados: 'Familias, confianza y cercanía',
    servicios: ['seo-medico', 'google-ads', 'redes-sociales'],
  },
  {
    id: '11',
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
  {
    id: '12',
    nombre: 'IA para clínicas',
    slug: 'ia-para-clinicas',
    descripcionCorta:
      'Automatización, personalización y análisis con inteligencia artificial para la captación de pacientes privados.',
    descripcionLarga:
      'Aplicaciones prácticas de inteligencia artificial en marketing sanitario: chatbots para clínicas, generación de contenido, análisis predictivo de campañas, optimización de llamadas y automatización de informes.',
    icono: 'Bot',
    color: '#6B21A8',
    resultados: 'Automatización, datos y eficiencia',
    servicios: ['seo-medico', 'google-ads', 'diseno-web', 'redes-sociales'],
  },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}

export function getEspecialidadById(id: string): Especialidad | undefined {
  return especialidades.find((e) => e.id === id)
}
