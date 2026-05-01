export interface BlogPost {
  id: string
  titulo: string
  slug: string
  excerpt: string
  contenido: string
  fecha: string
  categoria: string
  tiempoLectura: string
  imagen?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titulo: '10 errores SEO que cometen los dentistas en Sevilla',
    slug: 'errores-seo-dentistas',
    excerpt: 'Descubre los errores más comunes en SEO que reducen tu visibilidad en Google. Cómo evitarlos y posicionar tu clínica dental.',
    imagen: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    contenido: `
# 10 errores SEO que cometen los dentistas en Sevilla

## Introducción
Los dentistas en Sevilla pierden miles de euros en pacientes potenciales por errores básicos de SEO. En este artículo te mostramos los 10 errores más comunes y cómo evitarlos.

### Error 1: No tener palabras clave locales
La mayoría de dentistas ignoran la importancia de palabras clave locales como "dentista Sevilla", "implantes dentales en Sevilla", etc.

### Error 2: Meta descriptions genéricas
Las descripciones deben ser únicas, descriptivas y con CTA. "Clínica dental" no funciona.

### Error 3: Contenido duplicado
No copies el mismo contenido en múltiples páginas. Google penaliza duplicados.

### Error 4: Falta de schema dental
Schema.org para "dentista" y "clínica dental" ayuda a Google a entender qué haces.

### Error 5: Imágenes sin alt text
Todo paciente que busca "sonrisa perfecta" ve imágenes. Sin alt text, Google no las indexa.

### Error 6: Velocidad lenta
Site speed es ranking factor. Optimiza imágenes, minifica CSS/JS.

### Error 7: Falta de reviews
Reseñas en Google, Trustpilot, PacientesDentales. Reviews = posicionamiento + confianza.

### Error 8: Mobile unfriendly
50%+ búsquedas son mobile. Si tu web no es responsive, pierdes mitad de tráfico.

### Error 9: No linkear entre páginas
Enlaza "implantes dentales" → "precio implantes" → "garantía implantes". Link juice interno.

### Error 10: Ignorar análiticos
Si no mides, no mejoras. Monitorea posiciones, clics, CTR en Google Search Console.

## Resumen
Evita estos 10 errores y ya estás por encima del 90% de dentistas en Sevilla.
    `,
    fecha: '28 de abril, 2024',
    categoria: 'SEO',
    tiempoLectura: '8 min',
  },
  {
    id: '2',
    titulo: 'Google Ads para psicólogos: Guía completa 2024',
    slug: 'google-ads-psicologos',
    excerpt: 'Cómo configurar campañas de Google Ads efectivas si eres psicólogo en Sevilla. Palabras clave, presupuesto y conversión.',
    imagen: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    contenido: `
# Google Ads para Psicólogos: Guía Completa 2024

## Introducción
Google Ads para psicólogos es diferente. No vendo productos. Vendo consultas. Esto cambia todo.

## Palabras clave relevantes para psicólogos
- "psicólogo Sevilla"
- "psicólogo ansiedad Sevilla"
- "terapia parejas Sevilla"
- "psicólogo infantil Sevilla"
- "depresión Sevilla psicólogo"

## Presupuesto recomendado
Mínimo €300/mes para resultados. Ideal €800-1.200/mes para campañas combinadas.

## Estructura de campañas
1. Campaña por especialidad (ansiedad, depresión, pareja)
2. Palabras clave de marca (tu nombre + "psicólogo")
3. Remarketing a web sin conversión

## Tasa de conversión esperada
3-8% en psicología. Pacientes buscan específicamente y conversion rate es alta.

## Tips finales
- Landing page específica por especialidad
- Prueba social: "Atiende a 200+ pacientes al año"
- CTA claro: "Pedir cita" o "Llamar"
    `,
    fecha: '25 de abril, 2024',
    categoria: 'Google Ads',
    tiempoLectura: '12 min',
  },
  {
    id: '3',
    titulo: 'Diseño web para clínicas: qué convierte pacientes',
    slug: 'diseno-web-clinicas',
    excerpt: 'Elementos clave en una web médica que convierte visitantes en pacientes. Ejemplos de clínicas que crecieron 3x.',
    imagen: 'https://images.unsplash.com/photo-1611162617263-4ec3d744e2f6?w=800&q=80',
    contenido: `
# Diseño Web para Clínicas: Qué Convierte Pacientes

## Introducción
Tu web es el primer contacto con pacientes potenciales. Un mal diseño pierde 70% de visitantes.

## Elemento 1: Hero claro
- H1 con especialidad + ciudad
- Foto confiable (médico, consultorio, staff)
- CTA visible: "Pedir cita", "Llamar", "Auditoría gratis"

## Elemento 2: Trust signals
- Logo de colegio profesional
- Años de experiencia
- Número de pacientes atendidos
- Reviews de pacientes reales

## Elemento 3: Servicio/Especialidades
Lista clara y visual. No párrafos largos.

## Elemento 4: Testimonios
Fotos + nombre + especialidad que trataba + resultado.

## Elemento 5: Contacto múltiple
- Teléfono (click-to-call en mobile)
- WhatsApp
- Email
- Formulario

## Elemento 6: FAQ section
Responde preguntas frecuentes. Ayuda SEO + conversión.

## Elemento 7: Velocidad
PageSpeed > 90. Optimiza imágenes, minifica código.

## Casos de éxito
Clínica dental Sevilla: 0 a 500 pacientes/mes con web optimizada.
Psicología: rediseño aumentó conversiones 380%.

## Conclusión
Web bien diseñada = máquina de generación de pacientes.
    `,
    fecha: '22 de abril, 2024',
    categoria: 'Diseño Web',
    tiempoLectura: '10 min',
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
