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
    imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80',
  },
  {
    id: '2',
    nombre: 'Dra. María López',
    clinica: 'Centro Psicológico Equilibrio',
    cargo: 'Directora',
    texto:
      'Increíble transformación. Desde que trabajamos con ellos, tengo lista de espera. El SEO y Google Ads fue exactamente lo que necesitaba.',
    rating: 5,
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: '3',
    nombre: 'Isabel Rodríguez',
    clinica: 'Centro Estética Belleza',
    cargo: 'Gerenta',
    texto:
      'El diseño web es hermoso y funciona perfecto. Las conversiones aumentaron un 300%. Excelente inversión para nuestro negocio.',
    rating: 5,
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: '4',
    nombre: 'Prof. Carlos Mendez',
    clinica: 'Consulta de Fisioterapia',
    cargo: 'Fisioterapeuta',
    texto:
      'Pequeño consultorio, pero los resultados fueron enormes. Ahora tengo cita para 3 meses. No pensé que fuera posible con mi presupuesto.',
    rating: 5,
    imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80',
  },
]

export function getTestimonios(): Testimonio[] {
  return testimonios
}
