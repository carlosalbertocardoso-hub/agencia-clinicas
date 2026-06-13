import type { Testimonio } from '@/types'

// Escenarios representativos basados en diagnósticos habituales.
// Los nombres y clínicas son ejemplos ilustrativos del tipo de feedback que reciben nuestros clientes.
export const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'Dr. Manuel R.',
    clinica: 'Clínica Dental Nervión',
    cargo: 'Director clínico',
    texto:
      'Llevábamos años con una web bonita pero sin apenas consultas. En la auditoría detectamos que las páginas de implantes y ortodoncia invisible no estaban indexadas correctamente y la ficha de Google Maps estaba incompleta. El diagnóstico fue claro y el plan de acción, ejecutable.',
    rating: 5,
  },
  {
    id: '2',
    nombre: 'Dra. Carmen L.',
    clinica: 'Gabinete de Psicología Triana',
    cargo: 'Psicóloga sanitaria',
    texto:
      'Lo que más valoro es que entendieron que no queríamos un marketing agresivo. Nos ayudaron a crear contenido divulgativo sobre ansiedad y terapia de pareja que posiciona bien en Google y atrae exactamente al perfil de paciente que buscamos.',
    rating: 5,
  },
  {
    id: '3',
    nombre: 'María G.',
    clinica: 'Instituto de Medicina Estética Los Remedios',
    cargo: 'Gerente',
    texto:
      'Teníamos muchas visitas de redes sociales pero pocas se convertían en citas. Revisamos las landing pages, simplificamos los formularios y segmentamos mejor las campañas de Google Ads. Cada cambio se midió antes de escalar.',
    rating: 5,
  },
  {
    id: '4',
    nombre: 'Javier P.',
    clinica: 'Fisioterapia Avanzada Sevilla Este',
    cargo: 'Fisioterapeuta - Director',
    texto:
      'Mi consulta estaba en un barrio con mucha competencia. Me ayudaron a optimizar la ficha de Google, crear páginas para cada tipo de lesión y recoger reseñas de forma sistemática. El trabajo local me permitió competir mejor en búsquedas cercanas.',
    rating: 5,
  },
]

export function getTestimonios(): Testimonio[] {
  return testimonios
}
