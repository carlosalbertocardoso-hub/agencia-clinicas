import type { CasoExito } from '@/types'

export const casos: CasoExito[] = [
  {
    id: '1',
    titulo: 'Clínica dental aumentó un 280% sus pacientes',
    clinica: 'Clínica Dental Sonrisa Blanca',
    especialidad: 'Odontología',
    resultado: '+280%',
    resultadoValue: 280,
    resultadoUnit: '%',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    descripcion:
      'Estrategia SEO + Google Ads para una clínica dental en Sevilla. En 6 meses pasaron de 15 pacientes nuevos/mes a más de 50 consultas mensuales.',
  },
  {
    id: '2',
    titulo: 'Centro de psicología triplicó sus consultores',
    clinica: 'Centro Psicológico Equilibrio',
    especialidad: 'Psicología',
    resultado: '+320%',
    resultadoValue: 320,
    resultadoUnit: '%',
    imagen: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80',
    descripcion:
      'Marketing digital enfocado en psicología clínica y terapia. Con un plan de Google Ads + redes sociales consiguieron ocupar todas las franjas horarias disponibles.',
  },
  {
    id: '3',
    titulo: 'Clínica estética multiplicó su captación',
    clinica: 'Centro Estética Belleza Moderna',
    especialidad: 'Medicina Estética',
    resultado: '+350%',
    resultadoValue: 350,
    resultadoUnit: '%',
    imagen: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    descripcion:
      'Diseño web + Google Ads + redes sociales estratégica para clínica estética. Lograron un aumento exponencial en consultas de nuevos tratamientos.',
  },
]

export function getCasoById(id: string): CasoExito | undefined {
  return casos.find((caso) => caso.id === id)
}
