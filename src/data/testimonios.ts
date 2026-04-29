import type { Testimonio } from '@/types'

export const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'Dr. Juan García',
    clinica: 'Clínica Dental Sonrisa Blanca',
    cargo: 'Propietario',
    texto:
      'Pasamos de 15 pacientes nuevos al mes a más de 50. El equipo es profesional, responde rápido y los resultados hablan solos. Recomendado 100%.',
    rating: 5,
  },
  {
    id: '2',
    nombre: 'Dra. María López',
    clinica: 'Centro Psicológico Equilibrio',
    cargo: 'Directora',
    texto:
      'Increíble transformación. Desde que trabajamos con ellos, tengo lista de espera. El SEO y Google Ads fue exactamente lo que necesitaba.',
    rating: 5,
  },
  {
    id: '3',
    nombre: 'Isabel Rodríguez',
    clinica: 'Centro Estética Belleza',
    cargo: 'Gerenta',
    texto:
      'El diseño web es hermoso y funciona perfecto. Las conversiones aumentaron un 300%. Excelente inversión para nuestro negocio.',
    rating: 5,
  },
  {
    id: '4',
    nombre: 'Prof. Carlos Mendez',
    clinica: 'Consulta de Fisioterapia',
    cargo: 'Fisioterapeuta',
    texto:
      'Pequeño consultorio, pero los resultados fueron enormes. Ahora tengo cita para 3 meses. No pensé que fuera posible con mi presupuesto.',
    rating: 5,
  },
]

export function getTestimonios(): Testimonio[] {
  return testimonios
}
