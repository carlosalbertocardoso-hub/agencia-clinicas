# Design.md — Pacientes Sevilla

Guía de diseño para mantener la web consistente, clara y orientada a captación de clínicas privadas en Sevilla.

## Identidad

Pacientes Sevilla es una agencia de marketing sanitario para clínicas, consultas y profesionales privados. La interfaz debe transmitir rigor, cercanía, confianza sanitaria y claridad comercial.

El diseño evita el aspecto de agencia genérica: nada de claims exagerados, efectos decorativos innecesarios o composición de landing ruidosa. La prioridad es que un gerente de clínica entienda rápido qué se ofrece, por qué es relevante y cuál es el siguiente paso.

## Paleta

Tokens principales definidos en `src/app/globals.css` y `tailwind.config.ts`:

```css
--color-primary: #0A6B5E;
--color-primary-dark: #085249;
--color-accent: #8B6D11;
--color-accent-dark: #6E560D;
--color-bg: #FCF9F2;
--color-surface: #F4F1EA;
--color-text: #1A1A1A;
--color-text-muted: #5A5A5A;
--color-border: #E5E1D8;
```

Uso recomendado:

- `primary`: CTAs principales, iconos, enlaces activos, footer y bloques de autoridad.
- `accent`: detalles de confianza, etiquetas, CTAs destacados sobre fondos oscuros.
- `bg`: fondo principal cálido.
- `surface`: secciones alternas y bloques secundarios.
- `text-muted`: párrafos, descripciones y microcopy.

## Tipografía

```css
--font-heading: 'Newsreader', Georgia, serif;
--font-body: 'Inter', 'Geist', system-ui, sans-serif;
```

Reglas:

- Usar `font-heading` en H1, H2, H3 y titulares editoriales.
- Usar `font-body` en párrafos, formularios, navegación y botones.
- No escalar fuentes con viewport width.
- Mantener `letter-spacing` normal salvo etiquetas pequeñas en uppercase.

## Responsive

Breakpoints Tailwind configurados:

```ts
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

Patrones:

- Mobile first siempre.
- Cards en `grid-cols-1`, tablet en `md:grid-cols-2`, desktop en `lg:grid-cols-3` o `lg:grid-cols-4` según densidad.
- CTAs principales deben ser `w-full` en móvil y `sm:w-auto` en desktop.
- Sidebars sticky solo desde `lg`.
- Usar `section-padding` y `container-custom` antes que padding manual repetido.

## Layout

Clases base:

- `container-custom`: ancho máximo y padding horizontal responsive.
- `section-padding`: separación vertical de secciones.
- `py-section`: separación vertical para páginas internas.
- `section-primary`: fondo verde principal con texto blanco.
- `section-dim` / `bg-surface`: bandas alternas.

No usar cards dentro de cards. Las secciones deben respirar como bandas completas; las cards se reservan para elementos repetidos, formularios y bloques cerrados de contenido.

## Componentes

### Hero

Debe contener:

- Un único H1 por página.
- Subheadline claro orientado a captación.
- CTA principal visible.
- CTA secundario si aporta navegación útil.
- Imagen real o representativa con `next/image`, `priority` y alt descriptivo.

### Cards de especialidad

Formato en home:

- Título: `[Especialidad] en Sevilla.`
- Subtítulo: beneficio directo.
- Botón: `Ver estrategia específica`.
- `aria-label` descriptivo en el enlace.

### Botones

CTAs preferentes:

- `Solicitar auditoría gratuita`
- `Solicitar Auditoría de mi Clínica`
- `Hablemos de tu Centro`
- `Ver estrategia específica`

Evitar:

- `Enviar`
- `Saber más` cuando haya una alternativa más concreta.
- Claims agresivos como `multiplica pacientes`.

### Formularios

El formulario debe:

- Pedir solo datos necesarios según contexto.
- Mostrar microcopy claro.
- Incluir política de privacidad.
- Usar mensajes de error comprensibles.
- Mantener el botón a ancho completo en móvil.

## Accesibilidad

Requisitos mínimos:

- Enlaces con texto o `aria-label` descriptivo.
- Imágenes con alt útil, no keyword stuffing.
- Contraste suficiente en CTAs y textos sobre fondos oscuros.
- Botones y campos con estados `focus`.
- No depender solo del color para comunicar estado.

## SEO Visual y CRO

Cada página debe reforzar:

- Sevilla y contexto local de forma natural.
- Confianza sanitaria.
- Beneficio de negocio: pacientes privados, agenda, calidad de solicitudes.
- Medición: llamadas, WhatsApp, formularios y coste por contacto.
- Prudencia legal: sin prometer pacientes garantizados ni resultados clínicos.

## Imágenes

Reglas:

- Priorizar `next/image`.
- Hero con `priority`.
- Alt descriptivo del contenido visible o función de la imagen.
- Evitar imágenes rotas, genéricas o demasiado oscuras si deben transmitir confianza.

## Iconos

Usar `lucide-react` para iconos funcionales:

- `ShieldCheck`: seguridad/normativa.
- `Scale`: criterio legal.
- `FileCheck`: documento verificado.
- `Search`: SEO/local.
- `Megaphone`: campañas.
- `MapPin`: Sevilla/ubicación.

Mantener `strokeWidth` entre `1.6` y `1.8` para coherencia visual.

## Criterios de Calidad

Antes de cerrar cambios visuales:

```bash
npm run build
```

Comprobar especialmente:

- Home en móvil.
- Cards sin textos desbordados.
- CTAs visibles y legibles.
- Un único H1 por página.
- No introducir cambios visuales que parezcan una landing genérica.
