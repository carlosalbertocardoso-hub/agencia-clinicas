import type { CasoExito } from '@/types'

// Escenarios de diagnóstico, no casos reales. Sustituir por casos verificados antes de usarlos como prueba social.
export const casos: CasoExito[] = [
  {
    id: '1',
    titulo: 'Ejemplo orientativo: clínica dental con baja visibilidad local',
    clinica: 'Ejemplo representativo para sustituir por caso real',
    especialidad: 'Odontología',
    resultado: 'Objetivo: más solicitudes cualificadas',
    resultadoValue: 0,
    resultadoUnit: '',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    descripcion:
      'Escenario habitual: ficha de Google incompleta, pocas páginas por tratamiento y campañas sin medición de llamadas. El trabajo se centraría en SEO local, landings y tracking.',
  },
  {
    id: '2',
    titulo: 'Ejemplo orientativo: consulta de psicología con captación irregular',
    clinica: 'Ejemplo representativo para sustituir por caso real',
    especialidad: 'Psicología',
    resultado: 'Objetivo: agenda más estable',
    resultadoValue: 0,
    resultadoUnit: '',
    imagen: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80',
    descripcion:
      'Escenario habitual: dependencia de recomendaciones, mensajes poco claros y ausencia de landings por necesidad. El foco sería visibilidad local, tono ético y medición de formularios.',
  },
  {
    id: '3',
    titulo: 'Ejemplo orientativo: clínica estética con solicitudes poco filtradas',
    clinica: 'Ejemplo representativo para sustituir por caso real',
    especialidad: 'Medicina estética',
    resultado: 'Objetivo: mejor calidad de contacto',
    resultadoValue: 0,
    resultadoUnit: '',
    imagen: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    descripcion:
      'Escenario habitual: redes activas pero web poco clara, campañas genéricas y muchas consultas de baja intención. El trabajo se orientaría a páginas por tratamiento, confianza y filtros.',
  },
]

export function getCasoById(id: string): CasoExito | undefined {
  return casos.find((caso) => caso.id === id)
}
