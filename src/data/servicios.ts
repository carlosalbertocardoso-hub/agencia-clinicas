import type { Servicio } from '@/types'

export const servicios: Servicio[] = [
  {
    id: '1',
    nombre: 'SEO local para clínicas en Sevilla',
    slug: 'seo-medico',
    descripcion:
      'Haz que tu clínica aparezca cuando un paciente busca tu especialidad, tu tratamiento o una clínica cercana en Sevilla.',
    imagen: '/images/hero-clinica-marketing.png',
    caracteristicas: [
      'Auditoría de Google Business Profile, web, Search Console y competencia local',
      'Optimización de páginas de servicios, tratamientos, titles, metas y arquitectura',
      'SEO local por barrio, zona y búsquedas cercanas cuando tenga sentido',
      'Mejora de reseñas, señales de confianza, fotos y mensajes principales',
      'Schema sanitario/local cuando proceda y medición de llamadas, WhatsApp y formularios',
      'Informes claros sobre visibilidad, clics, contactos y oportunidades de mejora',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'fisioterapia-sevilla'],
  },
  {
    id: '2',
    nombre: 'Google Ads para clínicas privadas en Sevilla',
    slug: 'google-ads',
    descripcion:
      'Campañas para captar búsquedas con intención real: personas que ya están buscando una clínica, tratamiento o profesional sanitario.',
    imagen: '/images/hero-clinica-marketing.png',
    caracteristicas: [
      'Campañas Search por especialidad, tratamiento, zona y nivel de intención',
      'Segmentación local en Sevilla capital, provincia, barrios o áreas concretas',
      'Palabras clave negativas para reducir gasto en consultas poco útiles',
      'Landing pages pensadas para generar confianza y facilitar el contacto',
      'Tracking de llamadas, formularios y WhatsApp con lectura de calidad del contacto',
      'Optimización por coste, volumen y calidad de solicitud, no solo por clics',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'medicina-estetica-sevilla', 'clinicas-cirugia-sevilla'],
  },
  {
    id: '3',
    nombre: 'Diseño web para clínicas en Sevilla orientado a captar citas',
    slug: 'diseno-web',
    descripcion:
      'Creamos o mejoramos webs sanitarias pensadas para transmitir confianza, explicar tus servicios y convertir visitas en solicitudes de cita.',
    imagen: '/images/hero-clinica-marketing.png',
    caracteristicas: [
      'Home clara con propuesta de valor, especialidad, ubicación y vías de contacto',
      'Páginas de tratamientos, landings de campañas y FAQs para resolver dudas reales',
      'Botones de llamada, WhatsApp y formulario visibles desde móvil',
      'Equipo, fotos reales, reseñas, ubicación y señales de confianza bien ordenadas',
      'SEO básico, velocidad, UX móvil, accesibilidad y estructura preparada para medir',
      'Analítica de conversión para saber qué páginas generan solicitudes',
    ],
    especialidades: ['clinicas-dentales-sevilla', 'psicologos-sevilla', 'medicina-estetica-sevilla'],
  },
  {
    id: '4',
    nombre: 'Redes sociales para clínicas en Sevilla que quieren generar confianza',
    slug: 'redes-sociales',
    descripcion:
      'Una presencia profesional que refuerza confianza, explica tratamientos y acompaña la decisión del paciente antes de pedir cita.',
    imagen: '/images/hero-clinica-marketing.png',
    caracteristicas: [
      'Calendario editorial adaptado a tu especialidad y a dudas frecuentes de pacientes',
      'Posts, reels y piezas informativas con tono sanitario, claro y prudente',
      'Contenido sobre equipo, instalaciones, proceso, FAQs y pruebas de confianza',
      'Creatividades para campañas y derivación a web, WhatsApp o llamada',
      'Coherencia visual para que la clínica parezca tan profesional online como en consulta',
      'Medición de mensajes, tráfico, consultas y apoyo real a la captación',
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
      pregunta: '¿Cuánto tarda el SEO local para una clínica?',
      respuesta:
        'Depende del punto de partida, la especialidad y la competencia en Sevilla. Algunas mejoras de ficha, mensajes o páginas pueden notarse antes, pero el SEO local suele requerir varios meses de trabajo constante.',
    },
    {
      id: '2',
      pregunta: '¿Qué diferencia hay entre SEO y Google Ads?',
      respuesta:
        'Google Ads puede activar visibilidad inmediata mientras haya inversión. El SEO construye presencia orgánica y local de forma progresiva. En muchas clínicas conviene combinar ambos con medición clara.',
    },
    {
      id: '3',
      pregunta: '¿Necesito crear páginas por tratamiento?',
      respuesta:
        'Normalmente sí, si cada tratamiento tiene búsquedas, dudas y criterios de decisión distintos. Una página específica ayuda a Google y al paciente a entender mejor tu especialización.',
    },
    {
      id: '4',
      pregunta: '¿Se puede trabajar SEO si ya tengo web?',
      respuesta:
        'Sí. Primero revisamos si la web actual puede aprovecharse. A veces basta con reorganizar contenidos, mejorar páginas y corregir bloqueos técnicos; otras veces conviene una landing o rediseño parcial.',
    },
    {
      id: '5',
      pregunta: '¿Cómo medimos si está funcionando?',
      respuesta:
        'Medimos visibilidad, clics, llamadas, formularios, WhatsApp, páginas que generan contacto y calidad de las solicitudes. No nos quedamos solo en posiciones.',
    },
  ],
  'google-ads': [
    {
      id: '1',
      pregunta: '¿Cuánto invertir al mes en Google Ads?',
      respuesta:
        'No hay una cifra universal. Depende de la especialidad, zona, competencia, valor de cada paciente y capacidad de seguimiento. Antes de escalar inversión conviene revisar landing, tracking y calidad del contacto.',
    },
    {
      id: '2',
      pregunta: '¿Cuándo se empiezan a ver solicitudes?',
      respuesta:
        'Las campañas pueden generar contactos desde los primeros días si hay demanda y la propuesta es clara. Aun así, las primeras semanas sirven para filtrar búsquedas, ajustar mensajes y mejorar la calidad.',
    },
    {
      id: '3',
      pregunta: '¿Qué pasa si ya he probado Ads y no funcionó?',
      respuesta:
        'Revisamos estructura, palabras clave, negativas, anuncios, landing, medición y seguimiento comercial. Muchas campañas fallan por llevar tráfico a una web que no convierte o por medir solo clics.',
    },
    {
      id: '4',
      pregunta: '¿Cómo evitáis leads de baja calidad?',
      respuesta:
        'Trabajamos palabras clave de intención, exclusiones, mensajes claros, landings específicas y lectura de llamadas/formularios para ajustar hacia solicitudes más relevantes.',
    },
    {
      id: '5',
      pregunta: '¿Necesito una landing específica?',
      respuesta:
        'En campañas importantes suele ser recomendable. Una landing por tratamiento o necesidad reduce distracciones, explica mejor la oferta y facilita que el paciente contacte desde móvil.',
    },
  ],
  'diseno-web': [
    {
      id: '1',
      pregunta: '¿Necesito una web nueva o mejorar la actual?',
      respuesta:
        'Depende de si tu web transmite confianza, carga rápido, se entiende en móvil y genera llamadas o solicitudes. Si la base es buena, podemos mejorarla por fases.',
    },
    {
      id: '2',
      pregunta: '¿Qué debe tener una web de clínica?',
      respuesta:
        'Mensaje claro, tratamientos bien explicados, equipo, ubicación, reseñas, fotos reales, FAQs, llamada, WhatsApp, formulario sencillo, velocidad y medición de conversiones.',
    },
    {
      id: '3',
      pregunta: '¿Cuánto tarda una web sanitaria?',
      respuesta:
        'Varía según número de páginas, tratamientos, materiales y aprobaciones internas. Una landing puede ir más rápido; una web completa requiere más trabajo de contenido, estructura y revisión.',
    },
    {
      id: '4',
      pregunta: '¿Se puede conectar con WhatsApp, formulario o software de cita?',
      respuesta:
        'Sí. Podemos preparar llamadas, WhatsApp, formularios y enlaces a sistemas de cita siempre que la herramienta lo permita y se respete la privacidad.',
    },
    {
      id: '5',
      pregunta: '¿Cómo sé si la web convierte?',
      respuesta:
        'Configuramos medición de clics a teléfono, WhatsApp, formularios y páginas clave. Después analizamos qué visitas terminan en contacto y dónde se pierden oportunidades.',
    },
  ],
  'redes-sociales': [
    {
      id: '1',
      pregunta: '¿Qué redes necesita mi clínica?',
      respuesta:
        'Depende de la especialidad y del tipo de paciente. No se trata de estar en todas, sino de cuidar los canales donde puedes reforzar confianza y apoyar la decisión.',
    },
    {
      id: '2',
      pregunta: '¿Sirven las redes para captar pacientes?',
      respuesta:
        'Pueden ayudar, pero rara vez deberían ser el único canal. Funcionan mejor como apoyo a la confianza, la educación sanitaria, el recuerdo de marca y las campañas.',
    },
    {
      id: '3',
      pregunta: '¿Cada cuánto publicar?',
      respuesta:
        'Mejor una frecuencia sostenible y útil que publicar mucho sin criterio. Definimos un calendario realista según equipo, especialidad y objetivos.',
    },
    {
      id: '4',
      pregunta: '¿Qué contenidos puede publicar una clínica sin ser agresiva?',
      respuesta:
        'FAQs, explicación de tratamientos, criterios de seguridad, equipo, instalaciones, proceso de primera visita, cuidados generales y contenido educativo con prudencia sanitaria.',
    },
    {
      id: '5',
      pregunta: '¿Cómo medimos si aportan?',
      respuesta:
        'Miramos mensajes, visitas a la web, clics a WhatsApp, consultas atribuidas, contenido que mejor responde dudas y apoyo a campañas. No valoramos solo likes.',
    },
  ],
}
