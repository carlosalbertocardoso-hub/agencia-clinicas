import type { Servicio } from '@/types'

export const servicios: Servicio[] = [
  {
    id: '1',
    nombre: 'Aparecer mejor en Google',
    slug: 'seo-medico',
    descripcion:
      'Trabajamos para que tu clínica sea más visible cuando una persona busca tus servicios en Sevilla.',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    caracteristicas: [
      'Revisión de cómo aparece tu clínica en Google',
      'Mejora de tus páginas principales',
      'Textos claros para tus servicios',
      'Mejor presencia en búsquedas locales',
      'Seguimiento mensual de avances',
      'Recomendaciones fáciles de entender',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'fisioterapia-sevilla'],
  },
  {
    id: '2',
    nombre: 'Anuncios para recibir más solicitudes',
    slug: 'google-ads',
    descripcion:
      'Creamos anuncios para personas que ya están buscando una clínica o tratamiento como el tuyo.',
    imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    caracteristicas: [
      'Anuncios orientados a tu zona y especialidad',
      'Control del presupuesto',
      'Páginas claras para pedir información',
      'Revisión de consultas recibidas',
      'Ajustes para evitar gastos innecesarios',
      'Informes sencillos de entender',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'medicina-estetica-sevilla', 'clinicas-cirugia-sevilla'],
  },
  {
    id: '3',
    nombre: 'Web que transmite confianza',
    slug: 'diseno-web',
    descripcion:
      'Mejoramos o creamos una web clara, rápida y preparada para que más personas pidan cita.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    caracteristicas: [
      'Diseño profesional y fácil de usar',
      'Buena experiencia desde móvil',
      'Botones claros para pedir cita',
      'Textos que explican tus servicios',
      'Carga rápida y segura',
      'Formulario sencillo para nuevos contactos',
      'Revisión de resultados mensuales',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'medicina-estetica-sevilla'],
  },
  {
    id: '4',
    nombre: 'Presencia cuidada en redes',
    slug: 'redes-sociales',
    descripcion: 'Te ayudamos a mostrar una imagen profesional y cercana para que tu clínica genere confianza antes de la primera visita.',
    imagen: 'https://images.unsplash.com/photo-1611162617263-4ec3d744e2f6?w=700&q=80',
    caracteristicas: [
      'Ideas de contenido para tu especialidad',
      'Publicaciones claras y profesionales',
      'Imagen visual coherente',
      'Respuesta organizada a consultas',
      'Revisión de lo que funciona mejor',
      'Anuncios cuando tenga sentido',
      'Informe mensual sin tecnicismos',
    ],
    especialidades: ['psicologos-sevilla', 'medicina-estetica-sevilla', 'nutricionistas-sevilla'],
  },
]

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug)
}

export function getServicioById(id: string): Servicio | undefined {
  return servicios.find((s) => s.id === id)
}

export const faqsPorServicio: Record<string, Array<{ id: string; pregunta: string; respuesta: string }>> = {
  'seo-medico': [
    {
      id: '1',
      pregunta: '¿Cuánto se tarda en aparecer mejor en Google?',
      respuesta: 'Normalmente hacen falta varios meses de trabajo constante. Depende de tu especialidad, tu zona y cómo esté ahora tu web.',
    },
    {
      id: '2',
      pregunta: '¿Qué diferencia hay entre mejorar Google y poner anuncios?',
      respuesta: 'Mejorar tu presencia en Google es un trabajo progresivo. Los anuncios pueden traer contactos antes, pero requieren presupuesto activo.',
    },
    {
      id: '3',
      pregunta: '¿Cómo sabe Google qué servicios ofrece mi clínica?',
      respuesta: 'Tu web debe explicar bien tus tratamientos, tu ubicación y tu especialidad. Nosotros revisamos esos textos y los ordenamos para que se entiendan mejor.',
    },
  ],
  'google-ads': [
    {
      id: '1',
      pregunta: '¿Cuánto debería invertir en anuncios?',
      respuesta: 'Depende de tu especialidad y de la competencia en tu zona. Antes de invertir fuerte, conviene revisar qué servicio quieres impulsar y cuánto vale para tu clínica una nueva cita.',
    },
    {
      id: '2',
      pregunta: '¿Los anuncios pueden traer solicitudes rápido?',
      respuesta: 'Sí, pueden generar contactos antes que otras acciones, siempre que estén bien orientados y la página donde llega la persona transmita confianza.',
    },
    {
      id: '3',
      pregunta: '¿Cómo evitamos gastar en personas que no interesan?',
      respuesta: 'Limitamos la zona, elegimos bien los servicios a promocionar y revisamos qué consultas llegan para ajustar la inversión.',
    },
  ],
  'diseno-web': [
    {
      id: '1',
      pregunta: '¿Qué hace que una web de clínica funcione mejor?',
      respuesta: 'Que explique rápido qué haces, transmita confianza, se vea bien en móvil y permita pedir información sin complicaciones.',
    },
    {
      id: '2',
      pregunta: '¿Es mejor tener web o redes sociales?',
      respuesta: 'La web debe ser tu base principal. Las redes ayudan a reforzar confianza, pero muchas personas deciden pedir cita después de revisar tu web.',
    },
    {
      id: '3',
      pregunta: '¿Cuánto cuesta mejorar o crear una web para clínica?',
      respuesta: 'Depende de si necesitas una web completa, una mejora puntual o una página para un servicio concreto. Primero revisamos tu caso.',
    },
  ],
  'redes-sociales': [
    {
      id: '1',
      pregunta: '¿Qué redes necesita mi clínica?',
      respuesta: 'Depende de tu especialidad y de tus pacientes. No se trata de estar en todas, sino de cuidar las que de verdad ayudan a generar confianza.',
    },
    {
      id: '2',
      pregunta: '¿Cada cuánto debería publicar?',
      respuesta: 'Mejor publicar menos y bien que mucho sin criterio. Buscamos una presencia constante, profesional y fácil de mantener.',
    },
    {
      id: '3',
      pregunta: '¿Cómo sé si las redes están ayudando?',
      respuesta: 'Miramos si generan mensajes, llamadas, visitas a la web y confianza antes de la primera cita. No nos quedamos solo en los me gusta.',
    },
  ],
}
