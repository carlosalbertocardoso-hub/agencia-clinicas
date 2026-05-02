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
    imagen: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    contenido: `
La web de una clínica no tiene que impresionar por complicada. Tiene que hacer algo mucho más importante: dar confianza rápido y facilitar que una persona pida cita sin pensárselo demasiado.

Cuando alguien entra en tu web, normalmente llega con una duda concreta: necesita un dentista, un psicólogo, una revisión, un tratamiento o una segunda opinión. Si en pocos segundos no entiende qué haces, dónde estás y cómo contactar, se irá a otra clínica.

Lo primero es un mensaje claro. Una frase sencilla como "Clínica dental en Sevilla especializada en implantes y estética" funciona mejor que un texto muy creativo pero ambiguo. El paciente no quiere descifrar la web; quiere saber si puedes ayudarle.

Después viene la confianza. Fotos reales del equipo o del centro, opiniones visibles, años de experiencia, tratamientos explicados con palabras normales y una sensación general de orden. No hace falta prometer demasiado. De hecho, en salud suele funcionar mejor un tono tranquilo, profesional y humano.

También es clave que contactar sea fácil. En móvil, el teléfono y WhatsApp deben estar a mano. El formulario debe pedir solo lo necesario. Si la persona tiene que rellenar demasiados campos, probablemente lo deje para luego. Y "luego" casi nunca llega.

Una buena web también ayuda al equipo de recepción. Si explica bien los servicios, precios orientativos, horarios, ubicación y preguntas frecuentes, llegan menos llamadas repetitivas y más consultas realmente interesadas.

El objetivo no es tener una web bonita sin más. El objetivo es que la web trabaje cada día para la clínica: que transmita confianza, filtre mejor los contactos y convierta visitas en primeras citas.
    `,
    fecha: '22 de abril, 2024',
    categoria: 'Diseño Web',
    tiempoLectura: '10 min',
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
