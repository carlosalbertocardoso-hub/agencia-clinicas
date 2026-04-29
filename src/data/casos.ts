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
    imagen: '/images/casos/caso-dental.jpg',
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
    imagen: '/images/casos/caso-psicologia.jpg',
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
    imagen: '/images/casos/caso-estetica.jpg',
    descripcion:
      'Diseño web + Google Ads + redes sociales estratégica para clínica estética. Lograron un aumento exponencial en consultas de nuevos tratamientos.',
  },
]

export function getCasoById(id: string): CasoExito | undefined {
  return casos.find((caso) => caso.id === id)
}
