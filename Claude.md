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
- Vercel como hosting.

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
public/
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
- No inventar testimonios, casos reales o cifras.

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
- `BlogPreviewSection`
- `ProcesoSection`
- `CtaFinal`

## Arquitectura actual

La navegación pública se organiza en:

- `Inicio`
- `Servicios`
- `A quién ayudamos`
- `Recursos`
- `Contacto`

`A quién ayudamos` agrupa las páginas por tipo de clínica o especialidad sanitaria. La URL sigue siendo `/especialidades` para conservar estructura SEO existente, pero el lenguaje de navegación es más orientado al cliente.

`Recursos` es el hub editorial en `/recursos` y agrupa:

- Blog y guías.
- Diagnósticos representativos.
- Artículos por problema de captación: SEO local, Google Ads, web/CRO.

La sección "A quién ayudamos" usa cards con:

- Título: `[Especialidad] en Sevilla.`
- Subtítulo: beneficio directo.
- CTA: `Ver estrategia específica`.
- `aria-label` descriptivo.

## SEO

Reglas:

- Metadata por página usando `metadata` o `generateMetadata`, según convenga.
- Title único por página.
- Meta description única por página.
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

## JSON-LD

Actualmente hay un schema global en `src/app/layout.tsx`:

- `@type`: `ProfessionalService`
- Nombre: `iclinicas - Agencia de Marketing Sanitario`
- Localidad: Sevilla, Andalucía, ES
- Servicios: Marketing Médico, SEO Local, Google Ads para Clínicas
- Área servida: Sevilla, Nervión, Triana, Aljarafe

También existen schemas específicos en:

- Breadcrumbs.
- Servicios.
- Especialidades.
- FAQs.
- Artículos de blog.

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
npm run sitemap
```

Antes de publicar:

```bash
npm run build
```

## Documentación relacionada

- [`README.md`](./README.md): resumen general.
- [`design.md`](./design.md): diseño, responsive, UI y CRO.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md): despliegue en Vercel y Resend.

## Contacto del proyecto

Cliente: Carlos Cardoso, consultor digital en Sevilla.
