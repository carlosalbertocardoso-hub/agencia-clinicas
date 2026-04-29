export interface Especialidad {
  id: string
  nombre: string
  slug: string
  descripcionCorta: string
  descripcionLarga: string
  icono: string
  color: string
  resultados: string
  servicios: string[]
}

export interface Servicio {
  id: string
  nombre: string
  slug: string
  descripcion: string
  caracteristicas: string[]
  precio?: string
  especialidades: string[]
}

export interface CasoExito {
  id: string
  titulo: string
  clinica: string
  especialidad: string
  resultado: string
  resultadoValue: number
  resultadoUnit: string
  imagen: string
  descripcion: string
}

export interface Testimonio {
  id: string
  nombre: string
  clinica: string
  cargo: string
  texto: string
  rating: number
  imagen?: string
}

export interface FAQ {
  id: string
  pregunta: string
  respuesta: string
}

export interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  clinica?: string
  especialidad?: string
  mensaje?: string
}
