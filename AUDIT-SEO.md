# AUDIT-SEO — Estado actual del proyecto

Fecha de auditoría: 2026-05-17
Branch: `master`
Último commit: Thu May 14 15:45:39 2026 +0200 — `f6c1481 fix(seo): eliminar FAQPage duplicado y corregir estructura HTML de scripts JSON-LD`

---

## 1. Stack y configuración

- **Framework**: Next.js (versión declarada en `package.json`: `^14.0.0`).
- **Router**: App Router (existe `src/app/` con `layout.tsx`, `page.tsx`, `sitemap.ts`). No existe `pages/`.
- **Lenguaje**: TypeScript (`typescript ^5.3.0`, `tsconfig.json` referenciado en `next.config.js`).
- **Node version**: No detectado a nivel proyecto (no hay `.nvmrc` propio; el único `.nvmrc` está dentro de `node_modules/is-generator-function`). No hay `engines` en `package.json`.
- **Gestor de paquetes**: npm (presencia implícita por scripts `npm run *` en README; no se inspeccionó lock file por instrucciones, pero `package.json` no declara `packageManager`).
- **Dependencias SEO-relevantes detectadas**:
  - `next-sitemap ^4.1.3` (instalada, pero la generación de sitemap se hace nativa con `src/app/sitemap.ts`; no se observa `next-sitemap.config.*`).
  - `sharp ^0.34.5` (devDep, usada por `next/image`).
  - No detectado: `next-seo`, `schema-dts`, `web-vitals`, `@vercel/og`, `react-helmet`.
- **`next.config.js`** (`next.config.js`):
  - `images.remotePatterns`: `iclinicas.es`, `www.iclinicas.es`, `images.unsplash.com`.
  - `images.deviceSizes` y `imageSizes` personalizados.
  - `swcMinify: true`.
  - `headers()` añade `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection`, `Referrer-Policy: strict-origin-when-cross-origin` a `/:path*`.
  - No hay `redirects`, `rewrites`, `i18n`, `experimental`.
- **Hosting**: existe `vercel.json` con políticas `Cache-Control` para `/favicon.svg`, `/icon.svg`, `/images/*` (1 año, immutable) y `/_next/static/*` (1 año, immutable). No `netlify.toml`.

## 2. Estructura de rutas

```txt
src/app/
├── layout.tsx                              (198 líneas — root layout + 6 JSON-LD globales)
├── page.tsx                                (113 líneas — Home; FAQPage JSON-LD inline)
├── sitemap.ts                              (sitemap programático)
├── blog/
│   ├── page.tsx                            (98 líneas — listado blog)
│   └── [slug]/page.tsx                     (dinámica; generateStaticParams no detectado en el fragmento leído)
├── casos-de-exito/page.tsx                 (117 líneas)
├── contacto/page.tsx                       (117 líneas)
├── especialidades/
│   ├── page.tsx                            (48 líneas — hub estático)
│   └── [slug]/page.tsx                     (793 líneas — dinámica con generateStaticParams + generateMetadata)
├── nosotros/page.tsx                       (278 líneas — incluye Person schema)
├── politica-privacidad/page.tsx            (102 líneas)
├── recursos/page.tsx                       (179 líneas)
├── rediseno/page.tsx                       (357 líneas)
├── servicios/
│   ├── page.tsx                            (50 líneas — hub)
│   └── [slug]/page.tsx                     (dinámica con generateStaticParams + generateMetadata)
└── terminos-legales/page.tsx               (82 líneas)
```

Detalle por ruta:

| Path producido | Estática/Dinámica | generateStaticParams | metadata / generateMetadata | Campos definidos |
|---|---|---|---|---|
| `/` | Estática | — | `metadata` | title, description, keywords, alternates.canonical, openGraph, twitter |
| `/servicios` | Estática | — | `metadata` | title, description, alternates.canonical, openGraph, twitter |
| `/servicios/[slug]` | Dinámica (4 slugs) | sí | `generateMetadata` | title, description, alternates.canonical, openGraph, twitter, keywords |
| `/especialidades` | Estática | — | `metadata` | title, description, alternates.canonical, openGraph, twitter |
| `/especialidades/[slug]` | Dinámica (12 slugs) | sí | `generateMetadata` | title, description, alternates.canonical, openGraph, twitter, keywords |
| `/blog` | Estática | — | `metadata` | title, description, alternates.canonical, openGraph, twitter |
| `/blog/[slug]` | Dinámica (3 slugs) | sí (implícito vía sitemap; confirmado por uso de `getBlogPostBySlug`) | `generateMetadata` | title, description, alternates.canonical, openGraph (type article, publishedTime, images), twitter |
| `/contacto` | Estática | — | `metadata` | title, description, alternates.canonical, openGraph, twitter |
| `/nosotros` | Estática | — | `metadata` | title, description, alternates.canonical, openGraph, twitter |
| `/recursos` | Estática | — | (no inspeccionado a fondo, pero existe `page.tsx` 179 LOC) | — |
| `/casos-de-exito` | Estática | — | (no inspeccionado a fondo) | — |
| `/rediseno` | Estática | — | (no inspeccionado a fondo, 357 LOC) | — |
| `/politica-privacidad` | Estática | — | (no inspeccionado a fondo) | — |
| `/terminos-legales` | Estática | — | (no inspeccionado a fondo) | — |

## 3. Metadata por página (top 10)

### `/` (Home — `src/app/page.tsx`)
- **title**: `Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados`
- **description**: `Impulsa tu centro médico en Sevilla con estrategias de marketing sanitario. Captación de pacientes privados, SEO local y publicidad médica respetando la normativa.`
- **canonical**: `/` (a través de `metadataBase = https://www.iclinicas.es` definido en layout)
- **OG image**: `/images/og-default.png` (1200×630) — estática
- **robots**: heredado del layout (`index, follow, max-snippet:-1, max-image-preview:large`)
- **alternates / hreflang**: solo `es → https://www.iclinicas.es` (en layout)

### `/servicios`
- **title**: `Servicios de marketing para clínicas en Sevilla | iclinicas`
- **description**: `SEO local, Google Ads, diseño web, redes, reputación y medición para clínicas privadas y profesionales sanitarios en Sevilla.`
- **canonical**: `/servicios`
- **OG image**: `/images/og-default.png` — estática
- **hreflang**: heredado layout

### `/servicios/seo-medico` (ejemplo)
- **title**: `SEO local para clínicas en Sevilla | iclinicas`
- **description**: `Mejora la visibilidad de tu clínica en Google y Google Maps. SEO local para clínicas privadas en Sevilla: tratamientos, reseñas, web, contenido y medición.`
- **canonical**: `/servicios/seo-medico`
- **OG image**: `/images/og-default.png` — estática
- **hreflang**: heredado

### `/especialidades`
- **title**: `A quién ayudamos | Marketing sanitario en Sevilla | iclinicas`
- **description**: `Marketing digital para clínicas dentales, reproducción asistida, pedagogos, dermatólogos, nutricionistas, oftalmólogos y profesionales sanitarios en Sevilla.`
- **canonical**: `/especialidades`
- **OG image**: `/images/og-default.png` — estática

### `/especialidades/clinicas-dentales-sevilla` (ejemplo)
- **title**: `Marketing para clínicas dentales en Sevilla | iclinicas`
- **description**: `Captación online para clínicas dentales en Sevilla. SEO local, Google Ads, web y contenidos para atraer pacientes de implantes, ortodoncia, estética dental y urgencias.`
- **canonical**: `/especialidades/clinicas-dentales-sevilla`
- **OG image**: `/images/og-default.png` — estática (la misma para todas las especialidades)

### `/blog`
- **title**: `Blog de marketing para clínicas en Sevilla | iclinicas`
- **description**: `Guías prácticas sobre SEO local, Google Ads, diseño web, reputación y captación de pacientes para clínicas privadas y profesionales sanitarios en Sevilla.`
- **canonical**: `/blog`
- **OG image**: `/images/og-default.png` — estática

### `/blog/errores-seo-dentistas` (ejemplo)
- **title**: `{post.titulo} | iclinicas Blog`
- **description**: `post.excerpt`
- **canonical**: `/blog/{slug}`
- **OG**: `type: 'article'`, `publishedTime: post.fecha`, `images: post.imagen || /images/og-default.png` — **híbrida** (estática por post, no generada dinámicamente).

### `/contacto`
- **title**: `Solicitar auditoría gratuita | iclinicas`
- **description**: `Solicita una auditoría gratuita para tu clínica en Sevilla. Revisamos Google, web, campañas, reseñas y puntos de contacto para detectar oportunidades de captación.`
- **canonical**: `/contacto`
- **OG image**: `/images/og-default.png` — estática

### `/nosotros`
- **title**: `Sobre iclinicas | Agencia de marketing sanitario en Sevilla`
- **description**: `Carlos Cardoso, consultor con +15 años en marketing digital y ecommerce. Especializado en captación online para clínicas privadas en Sevilla desde 2018.`
- **canonical**: `/nosotros`
- **OG image**: `/images/og-default.png` — estática

### Layout global
- **metadataBase**: `https://www.iclinicas.es`
- **alternates.languages**: `{ es: 'https://www.iclinicas.es' }` (no es hreflang en sentido estricto multi-locale; es-ES único).
- **robots**: `{ index: true, follow: true, googleBot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }`
- **No hay generación dinámica de OG image**: todas las páginas reutilizan `/images/og-default.png` (25.4 KB).

## 4. Datos estructurados (JSON-LD / Schema)

Comando usado:
```
Grep "application/ld+json" en src/  → 7 archivos
```

Ocurrencias detectadas:

| Archivo | Línea(s) aprox. | Tipo de schema |
|---|---|---|
| `src/app/layout.tsx` | 55–196 (loop) | `WebSite`, `Organization`, `LocalBusiness + ProfessionalService + MarketingAgency` (combinado), `HowTo`, `Review` (×2) |
| `src/app/page.tsx` | 43–97 | `FAQPage` (Home) |
| `src/app/especialidades/[slug]/page.tsx` | 619, 621, 623 | `BreadcrumbList`, `Service`, `FAQPage` |
| `src/app/servicios/[slug]/page.tsx` | ~290 (no leído íntegro, mismo patrón) | `BreadcrumbList`, `Service`, (FAQPage condicional según notas en CLAUDE.md) |
| `src/app/blog/[slug]/page.tsx` | (importa `buildArticleSchema` y `buildBreadcrumbSchema`) | `Article`, `BreadcrumbList` |
| `src/app/nosotros/page.tsx` | 29–50 | `Person` (Carlos Cardoso, founder) |
| `src/components/shared/BreadcrumbNav.tsx` | 25–30 | `BreadcrumbList` (se inyecta también dentro del componente cliente) |

Funciones disponibles en `src/lib/schemas.ts`: `buildServiceSchema`, `buildBreadcrumbSchema`, `buildFAQSchema`, `buildArticleSchema`, `buildOrganizationSchema` (esta última no se está usando: el `Organization` se hardcodea en layout).

**Observación**: el `BreadcrumbNav` (cliente) emite **su propio** `BreadcrumbList` y, además, en `especialidades/[slug]` y `servicios/[slug]` se emite un segundo `BreadcrumbList` desde la página. → **Duplicación de BreadcrumbList** en páginas de especialidad/servicio.

## 5. Sitemap y robots

- **Sitemap**: `src/app/sitemap.ts` (App Router native, función `sitemap()` que retorna `MetadataRoute.Sitemap`). Lista 8 rutas estáticas + 4 servicios + 12 especialidades + 3 posts de blog = 27 URLs totales. `lastModified` = `new Date()` (timestamp de build).
- **next-sitemap.config**: No detectado. La dependencia `next-sitemap` está instalada y hay script `npm run sitemap`, pero sin config el comando no se usaría.
- **`robots.txt`**: `public/robots.txt` (103 líneas). Allow explícito para 25 user-agents de IA (GPTBot, anthropic-ai, ClaudeBot, PerplexityBot, etc.), `Disallow: /api/` para `*`, `Sitemap` declarado.
- **`src/app/robots.ts`**: No detectado.
- **`public/llms.txt`**: existe (53 líneas).
- **`public/llms-full.txt`**: existe (versión detallada).
- **`public/.well-known/ai.txt`**: existe (9 líneas, `Allow: /` para todos).
- **`public/humans.txt`**: No detectado.
- **`public/rss.xml`**: existe (referenciado en layout `<link rel="alternate" type="application/rss+xml">`).
- Otros: `public/f08d2dfa-d641-41ac-9c8b-8689836e462e.txt` y `public/.well-known/f08d2dfa-d641-41ac-9c8b-8689836e462e.txt` (parecen tokens de verificación de algún servicio).

## 6. Imágenes y rendimiento

Comandos usados:
```
Grep "next/image" src/   → 7 archivos, 8 ocurrencias
Grep "<img\s" src/        → 2 archivos, 2 ocurrencias (blog/page.tsx, blog/[slug]/page.tsx)
```

- **next/image**: 8 ocurrencias en 7 archivos (`middleware.ts` falso positivo). Archivos: `HeroSection.tsx`, `CasosExitoSection.tsx`, `nosotros/page.tsx`, `blog/[slug]/page.tsx`, `casos-de-exito/page.tsx`, `servicios/[slug]/page.tsx`.
- **`<img>` plano**: 2 ocurrencias (en `blog/page.tsx` y `blog/[slug]/page.tsx`) — revisar si se renderizan o son comentarios.
- **Carpeta `/public/images/`**:
  - `hero-clinica-marketing.png` — **1767.8 KB** ⚠️ (hero, pesa >1.7 MB)
  - `blog-diseno-web-clinicas-real.jpg` — 133.6 KB
  - `blog-google-ads-psicologos-real.jpg` — 130.9 KB
  - `blog-seo-dental-real.jpg` — 104.3 KB
  - `carlos-cardoso.jpeg` — 28.7 KB
  - `og-default.png` — 25.4 KB
  - `og-default.svg` — 2.1 KB
  - `logo.svg` — 1.0 KB
  - `logo-concepts/logo-concept-a.svg` — 1.2 KB
  - `logo-concepts/logo-concept-b.svg` — 1.1 KB
  - `logo-concepts/logo-concept-c.svg` — 0.9 KB
- **Fuentes**: No se usa `next/font`. En `src/app/layout.tsx` hay `<link rel="preconnect" href="https://fonts.googleapis.com">` y `fonts.gstatic.com`, pero **no se detecta el `<link rel="stylesheet">` o import correspondiente** — la carga de Newsreader/Inter debe hacerse vía CSS global (no inspeccionado `globals.css`).
- **Priority hint**: Sí, `HeroSection.tsx:13` aplica `priority` a la imagen hero.

## 7. Internal linking

- **Componente de "relacionados"**: existe `src/data/crossLinks.ts` con tres mapas:
  - `blogRelatedServices` (posts → servicios/especialidades)
  - `serviceRelatedSpecialties` (servicios → especialidades)
  - `specialtyRelatedServices` (especialidades → servicios; usado en `especialidades/[slug]/page.tsx:743`)
- **Componente Breadcrumb**: `src/components/shared/BreadcrumbNav.tsx` (Client Component, `'use client'`). **Sí** inyecta `BreadcrumbList` JSON-LD propio.
- **Enlaces internos en una página de especialidad muestra** (`especialidades/[slug]/page.tsx`):
  - Conteo grep `href="/"`: 1 enlace literal (`/contacto`) en el JSX.
  - Adicionales generados dinámicamente desde `specialtyRelatedServices` (3–5 enlaces a `/servicios/*` y `/especialidades/*`).
  - Más enlaces que vienen del Header/Footer/BreadcrumbNav.
  - **Conteo efectivo aproximado por página de especialidad**: ~6–8 enlaces salientes internos generados dinámicamente + cabecera/footer.

## 8. Blog

URLs detectadas en sitemap y `src/data/blog.ts`:

| Slug | URL | Título | Fecha | Categoría | Imagen | Article schema |
|---|---|---|---|---|---|---|
| `errores-seo-dentistas` | `/blog/errores-seo-dentistas` | 10 errores de SEO local que frenan la visibilidad de una clínica dental en Sevilla | `2 de mayo, 2026` | SEO local | `/images/blog-seo-dental-real.jpg` | Sí (vía `buildArticleSchema`) |
| `google-ads-psicologos` | `/blog/google-ads-psicologos` | Google Ads para psicólogos en Sevilla: cómo captar consultas con un enfoque ético | `3 de mayo, 2026` | Google Ads | `/images/blog-google-ads-psicologos-real.jpg` | Sí |
| `diseno-web-clinicas` | `/blog/diseno-web-clinicas` | Diseño web para clínicas: elementos que convierten visitas en citas | `5 de mayo, 2026` | Diseño web | `/images/blog-diseno-web-clinicas-real.jpg` | Sí |

- **Autor declarado**: en `buildArticleSchema`, `author = { '@type': 'Organization', name: 'iclinicas' }` (no persona individual; sin `Person` author en posts).
- **Categorías**: existen como campo (`categoria`), pero **NO se detectan rutas `/blog/categoria/*` ni `/blog/tag/*`**. Las categorías no tienen URL propia.
- **Solo 3 posts publicados**.
- **Formato de fecha**: string en español (`'2 de mayo, 2026'`) — **no es ISO 8601**. `Article.datePublished` recibe ese string, lo que probablemente no es válido para Google.

## 9. Contenido por especialidad (thin content check)

- Las 12 especialidades se nutren de **dos fuentes**:
  - `src/data/especialidades.ts`: metadatos cortos (id, nombre, slug, descripcionCorta, descripcionLarga, icono, color, resultados, servicios).
  - `src/app/especialidades/[slug]/page.tsx` líneas 20–453 (`specialtyContent`, `specialtyMeta`, `longTailKeywordsEsp`): contenido editorial inline en el propio componente.
- Campos por especialidad en `specialtyContent`: `h1`, `hero`, `keyText`, `pain`, `searches[]`, `trust[]`, `serviceNotes{}`, `cta`, `faqs[]` (3–5 preguntas).
- **Longitud aproximada del contenido textual por especialidad** (suma de `hero + keyText + pain + serviceNotes + faqs.respuestas`):
  - Dentales: ~1200 caracteres
  - Psicólogos: ~1300
  - Medicina estética: ~1250
  - Fisioterapia: ~1200
  - Reproducción asistida: ~1500
  - Pedagogos: ~1350
  - Dermatólogos: ~1300
  - Nutricionistas: ~1250
  - Oftalmólogos: ~1450
  - Pediatría: ~1100
  - Cirugía: ~1400
  - IA para clínicas: ~2000 (la más extensa, 5 FAQs y serviceNotes más densas)
- **Template idéntico**: las 12 comparten el mismo render JSX (`page.tsx`: 5 secciones idénticas — búsquedas, trust, servicios prioritarios, párrafo "captación sanitaria sin perder rigor", FAQ, related, formulario). El cuerpo cambia solo en strings.
- **Riesgo near-duplicate**: medio-alto. Aproximadamente 60% del HTML rendido es el mismo entre especialidades; solo cambian listas y párrafos cortos. Volumen de texto único por página ronda 1.0–1.5 KB, por debajo del estándar habitual para landings de servicio competitivas.

## 10. Tracking y analítica

Comando usado:
```
Grep -i "gtag|GTM|google-analytics|plausible|fathom|posthog|clarity|fbq|hotjar" src/
```

- **Resultado: No detectado** ningún tracker en `src/`.
- **`web-vitals`**: No instalado, no usado.
- **Variables de entorno** (`.env.example`): contiene `GOOGLE_ANALYTICS_ID=` (vacía) y `GOOGLE_SITE_VERIFICATION=` (vacía). Las claves existen como placeholder pero **no hay código que las consuma**.
- **WhatsApp button**: la memoria del proyecto menciona ausencia. No detectado en grep rápido.

## 11. Accesibilidad básica (impacto SEO)

- **Atributo `lang`**: Sí, `<html lang="es">` en `src/app/layout.tsx:183`.
- **H1 en Home**: 1 único H1 en `HeroSection.tsx:23` ("Más pacientes para tu clínica sin que el marketing te quite tiempo"). Verificado por grep en `src/components/home/`: solo 1 `<h1` resultado.
- **H1 en especialidades**: 1 por página (`page.tsx:652`).
- **Imágenes con `alt=""`**: grep no detectó ninguna instancia con alt vacío. Las imágenes hero, blog y founder tienen alt descriptivo.

## 12. Internationalización

- `next.config.js` no contiene bloque `i18n`.
- No se detecta `next-intl`, `next-i18next`.
- Único locale declarado: `es-ES` (en `metadata.openGraph.locale` y `alternates.languages.es`).
- **No es problema**: el proyecto está intencionalmente monolingüe (Sevilla, ES). Solo confirmar que no se necesitan hreflang adicionales.

## 13. Performance hints visibles en código

Comando usado:
```
Grep "next/dynamic" src/  → 0 resultados
Grep "Suspense|loading.tsx|error.tsx" src/ → 0 resultados
```

- **`next/dynamic`**: No usado.
- **`<Suspense>`**: No usado.
- **`loading.tsx`**: No detectado (ni global ni por segmento).
- **`error.tsx`**: No detectado.
- **`not-found.tsx`**: No detectado a nivel global (las páginas dinámicas devuelven un JSX inline de "no encontrada" en lugar de usar `notFound()` de Next).
- **Code splitting**: solo el implícito por rutas; no hay componentes pesados cargados dinámicamente.

## 14. Variables de entorno

Listado completo de claves en `.env.example`:

```
DATABASE_URL=
RESEND_API_KEY=
RESEND_FROM_EMAIL
CONTACT_TO_EMAIL=
GOOGLE_ANALYTICS_ID=
GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SITE_URL=https://www.iclinicas.es
```

(7 claves declaradas; `NEXT_PUBLIC_SITE_URL` viene con valor por defecto. No existe `.env.local.example`.)

## 15. Repo hygiene

- **Última fecha de commit**: `Thu May 14 15:45:39 2026 +0200`.
- **Branch actual**: `master`.
- **Cambios sin commitear** (`git status --short`):
  ```
   M .claude/settings.local.json
   M Claude.md
  ?? iclinicas-datos-contacto.md
  ?? iclinicas-email-template.html
  ?? iclinicas-emails-contacto.md
  ?? iclinicas-plan-comercial-30-dias.md
  ?? iclinicas_clinicas_sevilla.csv
  ?? public/images/logo-concepts/
  ```
- **README.md**: presente. Primeras 30 líneas:

```markdown
# iclinicas

Web de captación para **iclinicas**, agencia de marketing sanitario especializada en clínicas privadas, consultas y profesionales de salud en Sevilla.

La propuesta central del proyecto es convertir Google, web, campañas, reputación y conversión en un sistema medible de captación de pacientes privados, con comunicación prudente para el sector sanitario.

## Stack

- **Framework:** Next.js 14 con App Router
- **Lenguaje:** TypeScript
- **UI:** React
- **Estilos:** Tailwind CSS + tokens en `src/app/globals.css`
- **Iconos:** `lucide-react`
- **Formularios:** React Hook Form + Server Actions
- **Email:** Resend
- **Dominio:** https://www.iclinicas.es

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

El sitio estará disponible en:

```bash
http://localhost:3000
```
```

## 16. Hallazgos críticos

1. **CRÍTICO — Cero analítica instalada**. No hay GA4, GTM, Plausible, Clarity, Meta Pixel ni `web-vitals`. Las variables `GOOGLE_ANALYTICS_ID` / `GOOGLE_SITE_VERIFICATION` están en `.env.example` pero ningún componente las consume. Imposible medir tráfico, conversiones o Core Web Vitals reales.
2. **CRÍTICO — Hero image de 1.77 MB** (`hero-clinica-marketing.png`). Aunque se usa `priority` en `next/image`, una imagen base de ese peso degrada LCP en móvil 4G y compite con el preload de fuentes externas.
3. **ALTO — OG image única y estática** para 27 URLs (`/images/og-default.png`, 25 KB). No hay generación dinámica (`@vercel/og`/`ImageResponse`) por página/post/especialidad → todas las shares en redes muestran la misma tarjeta.
4. **ALTO — Duplicación de `BreadcrumbList` JSON-LD** en `/especialidades/[slug]` y `/servicios/[slug]`: el `BreadcrumbNav` (cliente) emite su propio JSON-LD y la página emite otro adicional con `buildBreadcrumbSchema`. Mismo patrón que ya causó el incidente FAQPage del 14 mayo.
5. **ALTO — Fechas de blog no son ISO 8601**. `fecha: '2 de mayo, 2026'` se pasa tal cual a `Article.datePublished` y `openGraph.publishedTime`, formatos no parseables por Google. Memoria del proyecto ya marcó este punto (obs 631–632).
6. **ALTO — Solo 3 posts de blog** y solo 3 slugs hardcodeados en sitemap. Para una agencia local en Sevilla, el blog está infrarrepresentado frente a las 12 especialidades y los 4 servicios. Sin categorías/tags con URL propia.
7. **MEDIO — Schemas duplicados o redundantes en layout**. El layout emite simultáneamente `LocalBusiness + ProfessionalService + MarketingAgency` (tipo combinado), más `Organization` separado, más `WebSite`, más `HowTo`, más 2 `Review`. Los `Review` aislados a nivel global (sin `itemReviewed` con `@id` apuntando al `Organization`) y `aggregateRating: 4.8/12 reviewCount` no enlazados a reseñas verificables → riesgo de penalización por Google si se interpreta como fabricado.
8. **MEDIO — Thin content / template idéntico en las 12 especialidades**. Cada página renderiza el mismo JSX con strings sustituidos; el texto único ronda 1.0–1.5 KB. Las páginas son canónicas en sitemap con priority 0.8 pero compiten entre sí por keywords muy parecidas ("marketing X Sevilla").
9. **MEDIO — `BreadcrumbNav` marcado como `'use client'`** sin razón funcional (no usa estado ni eventos). Convertirlo a Server Component reduciría JS enviado y eliminaría una fuente de duplicación de schemas.
10. **BAJO — Recursos huérfanos / archivos no comiteados**. `public/f08d2dfa-d641-41ac-9c8b-8689836e462e.txt` (raíz + `.well-known`) presente sin contexto. Archivos de planning sin commitear (`iclinicas-*.md`, `iclinicas_clinicas_sevilla.csv`). `next-sitemap` instalado pero sin config (la generación real es nativa); script `npm run sitemap` no produce nada útil. Carpeta `public/images/logo-concepts/` con 3 SVGs sin uso aparente.

---

## Anexos

### Anexo A — `public/robots.txt`

```
# robots.txt — iclinicas.es
# Optimizado para AI search visibility — Actualizado: 2026-05-09

# ============================================
# AI Training Bots
# ============================================
User-agent: GPTBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: claude-web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bytespider
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: CCBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: AI2Bot
Allow: /

User-agent: AI2Bot-Dolma
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: xAI-Bot
Allow: /

User-agent: PetalBot
Allow: /

# ============================================
# AI Search & Citation Bots
# ============================================
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-CloudVertexBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: DuckAssistBot
Allow: /

User-agent: Meta-ExternalFetcher
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: YouBot
Allow: /

# ============================================
# General
# ============================================
User-agent: *
Allow: /
Disallow: /api/

# ============================================
# Host & Sitemaps
# ============================================
Host: https://www.iclinicas.es
Sitemap: https://www.iclinicas.es/sitemap.xml
```

### Anexo B — `public/llms.txt`

```markdown
# iclinicas.es — Agencia de Marketing Sanitario en Sevilla

> iclinicas ayuda a clínicas privadas, consultas y profesionales sanitarios en Sevilla a captar pacientes mediante SEO local, Google Ads, diseño web y redes sociales.

> Para información detallada sobre todos los servicios, especialidades y proceso de trabajo, consulta [llms-full.txt](https://www.iclinicas.es/llms-full.txt).

## Sobre nosotros

Somos una agencia especializada exclusivamente en marketing sanitario para clínicas privadas en Sevilla. No trabajamos con restaurantes, tiendas ni otros sectores. Nuestra experiencia abarca 11 especialidades médicas y 4 servicios de marketing digital.

**Contacto:** https://www.iclinicas.es/contacto

## Servicios

- [SEO Médico](https://www.iclinicas.es/servicios/seo-medico): SEO local para clínicas, optimización de Google Business Profile, contenido médico especializado y estrategia de palabras clave sanitarias.
- [Google Ads para Clínicas](https://www.iclinicas.es/servicios/google-ads): Campañas de publicidad segmentadas por especialidad médica, con landing pages optimizadas y medición por cita.
- [Diseño Web Sanitario](https://www.iclinicas.es/servicios/diseno-web): Webs rápidas, orientadas a conversión, con cumplimiento LOPD/GDPR para clínicas.
- [Redes Sociales y Contenido](https://www.iclinicas.es/servicios/redes-sociales): Contenido profesional sanitario, reputación online y directorios médicos.

## Especialidades médicas

Ayudamos a estas especialidades en Sevilla:
- [Clínicas Dentales](https://www.iclinicas.es/especialidades/clinicas-dentales-sevilla) — Captación de pacientes para clínicas odontológicas
- [Psicólogos](https://www.iclinicas.es/especialidades/psicologos-sevilla) — Consultas de psicología y salud mental
- [Medicina Estética](https://www.iclinicas.es/especialidades/medicina-estetica-sevilla) — Clínicas de medicina estética en Sevilla
- [Fisioterapia](https://www.iclinicas.es/especialidades/fisioterapia-sevilla) — Centros de fisioterapia privados
- [Reproducción Asistida](https://www.iclinicas.es/especialidades/clinicas-reproduccion-asistida-sevilla) — Clínicas de fertilidad
- [Dermatología](https://www.iclinicas.es/especialidades/dermatologos-sevilla) — Consultas dermatológicas
- [Nutricionistas](https://www.iclinicas.es/especialidades/nutricionistas-sevilla) — Consultas de nutrición y dietética
- [Oftalmología](https://www.iclinicas.es/especialidades/oftalmologos-sevilla) — Clínicas oftalmológicas
- [Pediatría](https://www.iclinicas.es/especialidades/pediatria-sevilla) — Consultas pediátricas
- [Clínicas Quirúrgicas](https://www.iclinicas.es/especialidades/clinicas-cirugia-sevilla) — Centros de cirugía ambulatoria

## Recursos y blog

- [Errores SEO que cometen los dentistas en Sevilla](https://www.iclinicas.es/blog/errores-seo-dentistas)
- [Google Ads para psicólogos: cómo captar pacientes sin desperdiciar presupuesto](https://www.iclinicas.es/blog/google-ads-psicologos)
- [Diseño web para clínicas: lo que funciona en 2026](https://www.iclinicas.es/blog/diseno-web-clinicas)
- [Casos de éxito](https://www.iclinicas.es/casos-de-exito) — Escenarios representativos de diagnóstico
- [Recursos](https://www.iclinicas.es/recursos) — Guías y herramientas

## Información legal

- [Aviso Legal](https://www.iclinicas.es/terminos-legales)
- [Política de Privacidad](https://www.iclinicas.es/politica-privacidad)

## Información adicional

- **Ubicación:** Sevilla, Andalucía, España
- **Área de servicio:** Sevilla capital, Nervión, Triana, Aljarafe
- **Público objetivo:** Gerentes de clínicas privadas, directores médicos, profesionales sanitarios
- **Idioma:** Español (España)
```

### Anexo C — `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iclinicas.es',
      },
      {
        protocol: 'https',
        hostname: 'www.iclinicas.es',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  swcMinify: true,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
```

### Anexo D — `package.json`

```json
{
  "name": "iclinicas",
  "version": "1.0.0",
  "description": "Marketing digital para clínicas y sanitarios en Sevilla",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "qa:interactions": "node scripts/qa-interactions.js",
    "sitemap": "next-sitemap"
  },
  "dependencies": {
    "autoprefixer": "^10.4.16",
    "lucide-react": "^1.14.0",
    "next": "^14.0.0",
    "next-sitemap": "^4.1.3",
    "postcss": "^8.4.31",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.0",
    "resend": "^6.12.2",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.42",
    "@types/react-dom": "^18.2.17",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0",
    "sharp": "^0.34.5"
  }
}
```

### Anexo E — Página de especialidad (primera por orden alfabético: `clinicas-cirugia-sevilla` es la primera por slug; por nombre legible, `clinicas-dentales-sevilla`)

**Plantilla de página**: única, en `src/app/especialidades/[slug]/page.tsx` (793 líneas). El contenido específico de cada slug se almacena dentro del mismo archivo como objetos literales:

- `specialtyContent[slug]`: bloque editorial (h1, hero, keyText, pain, searches, trust, serviceNotes, cta, faqs).
- `specialtyMeta[slug]`: title + description SEO.
- `longTailKeywordsEsp[slug]`: keywords adicionales.

Datos de la primera especialidad por slug alfabético — **`clinicas-cirugia-sevilla`** — desde `src/data/especialidades.ts`:

```ts
{
  id: '11',
  nombre: 'Cirugía y especialistas',
  slug: 'clinicas-cirugia-sevilla',
  descripcionCorta:
    'Comunicación rigurosa para procedimientos especializados, segunda opinión y consultas de alta consideración.',
  descripcionLarga:
    'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla, con foco en autoridad médica, claridad del proceso y solicitudes cualificadas.',
  icono: 'Hospital',
  color: '#0A6B5E',
  resultados: 'Autoridad y consultas cualificadas',
  servicios: ['seo-medico', 'google-ads', 'diseno-web'],
}
```

Y desde `specialtyContent` en `src/app/especialidades/[slug]/page.tsx`:

```ts
'clinicas-cirugia-sevilla': {
  h1: 'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla',
  hero: 'Comunicación rigurosa para procedimientos especializados, segunda opinión y consultas de alta consideración.',
  keyText: 'En cirugía, el paciente no decide en una visita rápida. Investiga, compara, busca seguridad y necesita entender con claridad quién le atiende, qué experiencia tiene y cómo será el proceso.',
  pain: 'Los procedimientos de alta consideración requieren más confianza, más información y más claridad. Una web superficial o una campaña genérica no suele ser suficiente.',
  searches: ['Especialista Sevilla', 'Segunda opinión médica', 'Cirugía privada Sevilla', 'Procedimiento específico', 'Consulta quirúrgica'],
  trust: ['Autoridad médica', 'Experiencia y equipo', 'Proceso explicado', 'Confidencialidad', 'Información clara sin banalizar'],
  serviceNotes: {
    'seo-medico': 'SEO por procedimientos, especialidad, segunda opinión y autoridad médica.',
    'google-ads': 'Campañas con intención alta, landings rigurosas y medición de consultas cualificadas.',
    'diseno-web': 'Web con credenciales, proceso, equipo, FAQs y contacto discreto.',
  },
  cta: 'Revisar captación de consultas quirúrgicas',
  faqs: [
    { id: '1', pregunta: '¿Cómo se comunica un procedimiento complejo sin banalizarlo?', respuesta: 'Con claridad, rigor, credenciales, proceso y expectativas prudentes. Evitamos mensajes simplistas o promesas no verificables.' },
    { id: '2', pregunta: '¿Tiene sentido captar segundas opiniones?', respuesta: 'Sí, si la clínica tiene capacidad y especialización para atenderlas. Requiere páginas y mensajes específicos.' },
    { id: '3', pregunta: '¿Cómo se mide la calidad en cirugía?', respuesta: 'Además de formularios o llamadas, revisamos intención, procedimiento consultado, zona, urgencia, adecuación del paciente y seguimiento interno.' },
  ],
}
```

Y desde `specialtyMeta`:

```ts
'clinicas-cirugia-sevilla': {
  title: 'Marketing para clínicas quirúrgicas en Sevilla | iclinicas',
  description: 'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla. Web, SEO y campañas para consultas de alta consideración, segunda opinión y procedimientos especializados.',
}
```

El `page.tsx` renderiza (de forma idéntica para los 12 slugs) las siguientes secciones JSX, intercalando 3 scripts JSON-LD al inicio del return (BreadcrumbList + Service + FAQPage):

1. Hero con `h1` + `pain` + `keyText` + CTA lateral.
2. Sección "Qué búsquedas conviene captar" + "Qué confianza necesita esta especialidad".
3. Sección "Servicios que suelen tener más sentido" (loop sobre `relatedServices`).
4. Bloque de texto fijo "Captación sanitaria sin perder rigor".
5. `<FaqSection>` con FAQs.
6. Sección "Servicios recomendados para tu especialidad" (cross-links).
7. Sección final con formulario `<ContactForm>` y CTA.

El componente `<BreadcrumbNav>` se inyecta dentro de la primera sección y emite **su propio** BreadcrumbList JSON-LD adicional al ya emitido en cabecera de la página.
