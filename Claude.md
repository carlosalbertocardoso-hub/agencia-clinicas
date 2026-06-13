# CLAUDE.md — iclinicas

Guía operativa del proyecto para mantener el código, el copy y el SEO alineados con la web actual.

## Proyecto

iclinicas es una web de captación para una agencia de marketing sanitario especializada en clínicas privadas, consultas y profesionales de salud en Sevilla.

Objetivo principal:

Convertir la presencia digital de una clínica en un sistema medible de captación de pacientes privados en Sevilla: Google, web, campañas, reputación, contenido, formularios y conversión.

Stack:

- Next.js 14 con App Router.
- TypeScript.
- Tailwind CSS.
- React Hook Form.
- Server Actions.
- Resend para envío de formularios.
- Dominio público: https://www.iclinicas.es.

## Estructura

```txt
src/
  app/
    actions/sendEmail.ts
    blog/
    contacto/
    especialidades/
    recursos/
    servicios/
    marketing-clinicas-premium-sevilla/  ← 301 → /servicios/marketing-para-clinicas
    nosotros/
    casos-de-exito/
    layout.tsx
    page.tsx
    globals.css
  components/
    home/
    layout/
    shared/
  data/
  lib/
  types/
content/
  blog/       ← 14 posts publicados
    drafts/
agents/
  blog-publisher/
public/
  llms.txt
  llms-full.txt
  robots.txt
docs/
README.md
design.md
DEPLOYMENT.md
```

## Convenciones de código

- Componentes en PascalCase.
- Server Components por defecto.
- Usar `'use client'` solo cuando haga falta estado, eventos o hooks de cliente.
- Formularios con React Hook Form y Server Actions.
- Estilos con Tailwind y tokens globales en `src/app/globals.css`.
- Copy en español de España.
- Mantener un único H1 por página.
- No prometer pacientes garantizados, resultados clínicos ni métricas no verificadas.
- No inventar testimonios, casos reales o cifras. Los testimonios en `src/data/testimonios.ts` y `LocalTestimonials.tsx` son escenarios ilustrativos sin métricas específicas. No añadir porcentajes, multiplicadores ni cifras de resultado.
- Títulos de página: services nacionales sin "Sevilla", specialties locales con "Sevilla". Ver sección Capas de URL.
- Blog title suffix: `| iclinicas` (no `| iclinicas Blog`). Máximo ~68 chars en el title tag.

## Diseño

La guía visual actual está en:

- [`design.md`](./design.md)

Tokens principales:

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
--font-heading: 'Newsreader', Georgia, serif;
--font-body: 'Inter', 'Geist', system-ui, sans-serif;
```

Breakpoints Tailwind:

```ts
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

## Home actual

La home incluye:

- `HeroSection`
- `PainSection`
- `GarantiaNormativaSection`
- `EspecialidadesGrid`
- `ServiciosSection`
- `PorQueNosotrosSection`
- `CroAuthoritySection`
- `TestimoniosSection` ← escenarios ilustrativos, sin métricas inventadas
- `BlogPreviewSection`
- `ProcesoSection`
- `CtaFinal`

## Arquitectura actual

La navegación del header se organiza en:

- `Inicio`
- `Servicios`
- `A quién ayudamos`
- `Contacto`

`Recursos` **no está en el header**. El hub editorial `/recursos` existe y está en el sitemap pero no como enlace de navegación principal.

`A quién ayudamos` agrupa las páginas por tipo de clínica o especialidad sanitaria. La URL sigue siendo `/especialidades` para conservar estructura SEO existente.

El footer incluye: Servicios (5), A quién ayudamos (11), Navegación (con nosotros y casos-de-exito).

### Páginas de servicios

```txt
/servicios/marketing-para-clinicas   ← kernel/hub principal (nuevo)
/servicios/seo-medico
/servicios/google-ads
/servicios/diseno-web
/servicios/redes-sociales
```

### Especialidades (12)

```txt
/especialidades/clinicas-dentales-sevilla
/especialidades/psicologos-sevilla
/especialidades/medicina-estetica-sevilla
/especialidades/fisioterapia-sevilla
/especialidades/clinicas-reproduccion-asistida-sevilla
/especialidades/pedagogos-sevilla
/especialidades/dermatologos-sevilla
/especialidades/nutricionistas-sevilla
/especialidades/oftalmologos-sevilla
/especialidades/pediatria-sevilla
/especialidades/clinicas-cirugia-sevilla
/especialidades/ia-para-clinicas
```

### Capas de URL y titles (clave para SEO)

- `/servicios/*`: sin "Sevilla" en el title → alcance nacional.
- `/especialidades/*`: con "Sevilla" en el title → señal local de conversión.
- H2 template en especialidades: `El reto real para {nombre} en Sevilla` (no "de las clínicas de").

### Páginas huérfanas gestionadas

- `/marketing-clinicas-premium-sevilla` → **301 redirect** a `/servicios/marketing-para-clinicas` (en `next.config.js`). La página sigue construyéndose (estática) pero todas las visitas se redirigen.
- `/nosotros` y `/casos-de-exito` están en el sitemap y en el footer, no en el header.

### Blog y agente editorial

Los artículos del blog se guardan como MDX:

- `content/blog/*.mdx`: artículos publicados (14 posts activos).
- `content/blog/drafts/*.mdx`: borradores.

`src/data/blog.ts` lee los archivos MDX, parsea el frontmatter y expone `blogPosts` a las páginas `/blog`, `/blog/[slug]`, `/recursos`, home, autores y sitemap. Solo se muestran posts con `status: "published"`.

Posts publicados (por cluster):

**Pillar y clusters:**

- `seo-para-clinicas-guia` — pillar hub
- `seo-vs-google-ads-clinicas` — cluster estrategia
- `cuanto-cuesta-marketing-clinica` — cluster presupuesto
- `captacion-pacientes-privados` — cluster estrategia
- `medir-roi-marketing-clinica` — cluster medición

**SEO local y GBP:**

- `google-business-profile-clinicas`
- `conseguir-resenas-google-clinica`
- `palabras-clave-clinicas-privadas`

**CRO y web:**

- `landing-pages-clinicas`
- `diseno-web-clinicas`

**Legal y normativa (E-E-A-T):**

- `lopd-marketing-sanitario`

**Especialidades:**

- `marketing-psicologos-sevilla`
- `errores-seo-dentistas`
- `google-ads-psicologos`

El enlazado interno entre posts se gestiona en `src/data/crossLinks.ts` (`blogRelatedServices`) y en `src/app/blog/[slug]/page.tsx` (`contextualLinks`). Al añadir un post nuevo, actualizar ambos.

El agente editorial está en `agents/blog-publisher`:

- `prompts/system-editorial.md`: instrucciones de redacción, tono, SEO, normativa sanitaria, fuentes y checklist.
- `topics.json`: briefs preaprobados.
- `index.mjs`: generación de borradores en `content/blog/drafts`.

El workflow `.github/workflows/blog-agent.yml` se ejecuta los lunes a las 07:00 UTC y puede lanzarse manualmente. Requiere `ANTHROPIC_API_KEY` en GitHub. Usa `claude-3-5-haiku-20241022` por defecto, configurable con `ANTHROPIC_MODEL`. El agente debe abrir PR con borradores, nunca publicar directo.

Para publicar un borrador revisado:

```bash
npm run blog:publish -- "slug-del-borrador"
```

La sección "A quién ayudamos" usa cards con:

- Título: `[Especialidad] en Sevilla.`
- Subtítulo: beneficio directo.
- CTA: `Ver estrategia específica`.
- `aria-label` descriptivo.

## SEO

Reglas:

- Metadata por página usando `metadata` o `generateMetadata`, según convenga.
- Title único por página. Máximo ~68 chars.
- Meta description única por página. 150-165 chars.
- Canonical cuando la ruta lo soporte.
- Open Graph configurado.
- H1 único.
- H2/H3 claros y semánticos.
- Enlazado interno entre servicios, especialidades, recursos, blog y contacto.
- Texto local natural: Sevilla, Google Maps, Google Business Profile, barrios o zonas cuando tenga sentido.

Home actual:

- Title: `Agencia de Marketing Sanitario en Sevilla | Captación de Pacientes Privados`
- Keywords:
  - `marketing medico sevilla`
  - `seo local clinicas sevilla`
  - `publicidad clinicas dentales sevilla`
  - `captacion pacientes privados`

## GEO (Generative Engine Optimization)

Infraestructura para que motores de IA (ChatGPT, Perplexity, Gemini) citen iclinicas:

- `public/llms.txt`: índice ligero de URLs y descripciones para AI crawlers.
- `public/llms-full.txt`: versión densa con descripciones largas por sección, servicios, especialidades, proceso, normativa y posts.
- `public/robots.txt`: permite explícitamente ~30 bots IA (GPTBot, anthropic-ai, claude-web, Google-Extended, etc.).
- Schema `Person` en layout con `knowsAbout` y `sameAs` para Carlos Cardoso.
- FAQs estructuradas en todas las páginas principales.
- Tablas comparativas en posts (SEO vs Ads, etc.) — formato citable.

Al añadir contenido nuevo actualizar `llms.txt` y `llms-full.txt`.

## JSON-LD

Actualmente hay un schema global en `src/app/layout.tsx`:

- `Organization` + `LocalBusiness` (`ProfessionalService`) con `@id` cross-referenciable.
- Nombre: `iclinicas - Agencia de Marketing Sanitario`
- Localidad: Sevilla, Andalucía, ES
- Servicios: Marketing Médico, SEO Local, Google Ads para Clínicas
- Área servida: Sevilla, Nervión, Triana, Aljarafe

También existen schemas específicos en:

- **Breadcrumbs**: en cada página de especialidades y servicios
- **Service**: en cada página de especialidades y servicios
- **FAQPage**: generado a nivel de página (no en componentes compartidos) para evitar duplicados
- **Article**: en artículos de blog con autor, datePublished, dateModified
- **Person**: en `layout.tsx` para Carlos Cardoso

### Nota sobre FAQPage

Los schemas FAQPage se generan a nivel de página (en `src/app/especialidades/[slug]/page.tsx` y `src/app/servicios/[slug]/page.tsx`) usando etiquetas `<script>` directas, no dentro de componentes compartidos. Esto previene duplicados que causaban errores en Google Search Console.

## Formularios

Componente:

- `src/components/shared/ContactForm.tsx`

Server Action:

- `src/app/actions/sendEmail.ts`

Variables necesarias:

```env
RESEND_API_KEY=...
RESEND_FROM_EMAIL="iclinicas <email_verificado_en_resend>"
CONTACT_TO_EMAIL=tu_email_destino
NEXT_PUBLIC_SITE_URL=https://www.iclinicas.es
```

Notas:

- `RESEND_FROM_EMAIL` debe ser un remitente verificado en Resend.
- El envío al administrador es prioritario.
- El email de confirmación al usuario no bloquea la recepción del lead si falla.

## Imágenes

- Usar `next/image` en imágenes principales y de layout.
- Alt descriptivo obligatorio.
- La imagen hero usa `priority`.
- Evitar imágenes externas inestables o sin control.

## Accesibilidad

- Enlaces con texto descriptivo o `aria-label`.
- Botones con texto claro.
- Formularios con labels visibles.
- Contraste suficiente.
- No usar `<a href="#">`.

## Comandos

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run blog:new -- "Título del artículo"
npm run blog:agent
npm run blog:publish -- "slug-del-borrador"
npm run sitemap
```

Antes de publicar:

```bash
npm run build
```

## Documentación relacionada

- [`README.md`](./README.md): resumen general.
- [`design.md`](./design.md): diseño, responsive, UI y CRO.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md): despliegue en https://www.iclinicas.es y Resend.

## Contacto del proyecto

Cliente: Carlos Cardoso, consultor digital en Sevilla.
