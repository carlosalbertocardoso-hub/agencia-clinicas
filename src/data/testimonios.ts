import type { Testimonio } from '@/types'

// Feedback representativo, no testimonios reales. Sustituir por citas verificadas antes de publicarlo como prueba social.
export const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'Gerente de clínica dental',
    clinica: 'Ejemplo representativo',
    cargo: 'Dirección',
    texto:
      'Necesitábamos entender por qué Google y la web no estaban generando solicitudes de calidad. La auditoría nos ayudó a ordenar prioridades sin tecnicismos.',
    rating: 5,
  },
  {
    id: '2',
    nombre: 'Psicóloga sanitaria',
    clinica: 'Ejemplo representativo',
    cargo: 'Consulta privada',
    texto:
      'El enfoque fue respetuoso y claro. No queríamos una comunicación agresiva, sino que las personas adecuadas nos encontraran y entendieran cómo trabajamos.',
    rating: 5,
  },
  {
    id: '3',
    nombre: 'Responsable de clínica estética',
    clinica: 'Ejemplo representativo',
    cargo: 'Gerencia',
    texto:
      'Nos ayudó especialmente revisar la web, las campañas y el tipo de consultas que llegaban. El objetivo no era más volumen sin control, sino mejores solicitudes.',
    rating: 5,
  },
  {
    id: '4',
    nombre: 'Fisioterapeuta con consulta propia',
    clinica: 'Ejemplo representativo',
    cargo: 'Profesional sanitario',
    texto:
      'La revisión aterrizó problemas concretos: ficha de Google, llamadas desde móvil, servicios poco explicados y falta de medición. Fue práctico desde el primer momento.',
    rating: 5,
  },
]

export function getTestimonios(): Testimonio[] {
  return testimonios
}
