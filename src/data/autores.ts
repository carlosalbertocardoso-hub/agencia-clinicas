export interface Autor {
  slug: string
  nombre: string
  rol: string
  bio: string
  bioCorta: string
  foto: string
  experiencia: string
  credenciales: string[]
  sameAs: string[]
  email?: string
}

export const autores: Record<string, Autor> = {
  'carlos-cardoso': {
    slug: 'carlos-cardoso',
    nombre: 'Carlos Cardoso',
    rol: 'Founder y consultor senior de marketing sanitario',
    bio: 'Consultor con más de 15 años de experiencia en marketing digital, ecommerce y growth. Desde 2018 trabaja exclusivamente con clínicas privadas, consultas y profesionales sanitarios en Sevilla. Su enfoque combina captación medible con prudencia sanitaria: nada de promesas clínicas, sí trazabilidad de cada llamada, WhatsApp y formulario.',
    bioCorta:
      'Consultor con +15 años en marketing digital. Especializado desde 2018 en captación online para clínicas privadas en Sevilla.',
    foto: '/images/carlos-cardoso.jpeg',
    experiencia:
      '+15 años en marketing digital · +8 años en sector sanitario · clínicas privadas en Sevilla',
    credenciales: [
      'Especialista en SEO técnico y SEO local para sector sanitario',
      'Especialista en Google Ads para clínicas privadas',
      'Conocimiento aplicado de la Ley de Publicidad Sanitaria y LOPD',
      'Estrategia de CRO y medición de conversiones para webs de clínica',
    ],
    sameAs: ['https://www.linkedin.com/in/carlos-cardoso-75025721/'],
  },
}

export function getAutor(slug: string): Autor | undefined {
  return autores[slug]
}

export function getAutoresList(): Autor[] {
  return Object.values(autores)
}
