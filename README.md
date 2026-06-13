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

## Scripts

```bash
npm run dev       # Servidor local
npm run build     # Build de producción
npm run start     # Servir build de producción
npm run lint      # Lint de Next/ESLint
npm run blog:new -- "Título"       # Crear borrador MDX manual
npm run blog:agent                 # Generar borrador con el agente editorial
npm run blog:publish -- "slug"     # Publicar un borrador revisado
npm run qa:interactions # QA real con Playwright sobre rutas, header, móvil y formulario
npm run sitemap   # Generar sitemap con next-sitemap
```

## Variables de entorno

El formulario de contacto usa Resend. Configura estas variables en `.env.local` y en el panel de hosting:

```env
RESEND_API_KEY=...
RESEND_FROM_EMAIL="iclinicas <email_verificado_en_resend>"
CONTACT_TO_EMAIL=tu_email_destino
NEXT_PUBLIC_SITE_URL=https://www.iclinicas.es
```

Notas importantes:

- `RESEND_FROM_EMAIL` debe ser un remitente o dominio verificado en Resend.
- Si cambias variables en el hosting, haz redeploy para que entren en vigor.
- `CONTACT_TO_EMAIL` es el buzón donde llegan las solicitudes del formulario.

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
    marketing-clinicas-premium-sevilla/
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
  blog/
    drafts/
agents/
  blog-publisher/
public/
  llms.txt
  llms-full.txt
  robots.txt
docs/
design.md
DEPLOYMENT.md
```

## Páginas principales

```txt
/
/contacto
/recursos
/blog
/nosotros
/casos-de-exito
/servicios
/servicios/marketing-para-clinicas
/servicios/seo-medico
/servicios/google-ads
/servicios/diseno-web
/servicios/redes-sociales
/especialidades
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
/blog/seo-para-clinicas-guia
/blog/seo-vs-google-ads-clinicas
/blog/cuanto-cuesta-marketing-clinica
/blog/captacion-pacientes-privados
/blog/medir-roi-marketing-clinica
/blog/google-business-profile-clinicas
/blog/conseguir-resenas-google-clinica
/blog/palabras-clave-clinicas-privadas
/blog/landing-pages-clinicas
/blog/lopd-marketing-sanitario
/blog/marketing-psicologos-sevilla
/blog/errores-seo-dentistas
/blog/google-ads-psicologos
/blog/diseno-web-clinicas
/politica-privacidad
/terminos-legales
```

## Servicios

- Marketing para clínicas (hub principal de captación)
- SEO local para clínicas en Sevilla
- Google Ads para clínicas privadas
- Diseño web para clínicas orientado a captar citas
- Redes sociales y contenido sanitario

## Arquitectura de contenido

La navegación principal del header:

- **Servicios:** páginas por canal o solución de captación.
- **A quién ayudamos:** páginas por tipo de clínica o profesional sanitario (`/especialidades`).
- **Contacto:** auditoría gratuita de captación online.

El hub `/recursos` y el blog existen y están en el sitemap y footer, pero no en el header principal.

`/marketing-clinicas-premium-sevilla` tiene un 301 redirect permanente hacia `/servicios/marketing-para-clinicas` (configurado en `next.config.js`).

## A quién ayudamos

- Clínicas dentales
- Psicólogos
- Medicina estética
- Fisioterapia
- Clínicas de reproducción asistida
- Pedagogos
- Dermatólogos
- Nutricionistas
- Oftalmólogos
- Pediatras
- Clínicas quirúrgicas y especialistas
- IA para clínicas

## Recursos

- `/recursos`: hub principal de contenidos.
- `/blog`: artículos y guías (14 posts publicados).
- `/casos-de-exito`: diagnósticos representativos y escenarios de mejora.

## Blog y agente editorial

Los artículos del blog se gestionan como archivos MDX en:

- `content/blog/*.mdx`: artículos publicados.
- `content/blog/drafts/*.mdx`: borradores pendientes de revisión.

La fuente de datos de la web está en `src/data/blog.ts`, que lee esos archivos y solo publica los que tienen `status: "published"`.

El agente editorial vive en `agents/blog-publisher`:

- `prompts/system-editorial.md`: instrucciones de redacción, SEO, tono y normativa sanitaria.
- `topics.json`: briefs preaprobados que el agente puede convertir en borradores.
- `index.mjs`: script que genera un borrador MDX usando la API de Anthropic.

Automatización:

- `.github/workflows/blog-agent.yml` se ejecuta cada lunes a las 07:00 UTC.
- Requiere el secret `ANTHROPIC_API_KEY` en GitHub.
- Usa `claude-3-5-haiku-20241022` por defecto, configurable con la variable `ANTHROPIC_MODEL`.
- Crea una Pull Request con un borrador en `content/blog/drafts`.
- No publica directo: el artículo se revisa, se publica con `npm run blog:publish -- "slug"` y se despliega tras el merge.

## Diseño

La guía visual está en:

- [`design.md`](./design.md)

Incluye paleta, tipografías, breakpoints, reglas responsive, cards, CTAs, formularios, accesibilidad y criterios CRO/SEO visual.

## SEO y datos estructurados

El proyecto incluye:

- Metadata por página.
- Canonicals.
- Open Graph.
- JSON-LD global `Organization` + `LocalBusiness` (`ProfessionalService`).
- `Person` schema para Carlos Cardoso con `knowsAbout` y `sameAs`.
- Breadcrumb schema en páginas internas.
- FAQ schema en FAQs (generado a nivel de página para evitar duplicados).
- Article schema en artículos del blog.

**Nota sobre FAQPage schema:** Se generan a nivel de página en `src/app/especialidades/[slug]/page.tsx` y `src/app/servicios/[slug]/page.tsx` usando etiquetas `<script>` directas. El componente `FaqSection` solo renderiza el HTML visual, sin generar schema.

**GEO (motores de IA):** `public/llms.txt` y `public/llms-full.txt` indexan el contenido para ChatGPT, Perplexity y otros AI crawlers. `public/robots.txt` los permite explícitamente.

La home usa keywords locales como:

- `marketing medico sevilla`
- `seo local clinicas sevilla`
- `publicidad clinicas dentales sevilla`
- `captacion pacientes privados`

## Formulario

Componente principal:

- `src/components/shared/ContactForm.tsx`

Server Action:

- `src/app/actions/sendEmail.ts`

El envío principal al administrador es prioritario. El email de confirmación al usuario no bloquea la recepción del lead si falla.

## Deploy

Ver guía completa:

- [`DEPLOYMENT.md`](./DEPLOYMENT.md)

Resumen:

1. Configurar variables de entorno en el hosting.
2. Verificar remitente en Resend.
3. Hacer deploy o redeploy.
4. Probar formulario.
5. Revisar logs del hosting y Resend si no llegan emails.

## Comprobación antes de publicar

```bash
npm run build
```

Revisar:

- Home en móvil y desktop.
- Formulario de contacto.
- CTAs principales.
- Un único H1 por página.
- Imágenes con alt descriptivo.
- Textos sin promesas sanitarias o claims no verificables.

## QA visual y CRO

La última auditoría local se hizo con Playwright sobre 24 rutas y 4 viewports:

- Desktop: `1440x900`
- Laptop: `1280x800`
- Tablet: `768x1024`
- Mobile: `390x844`

Resultado final de la pasada `after`:

- `96` comprobaciones.
- `0` incidencias detectadas por el script.
- Sin imágenes rotas.
- Sin H1 duplicados.
- Sin scroll horizontal inesperado.
- Sin enlaces `href="#"`.
- Sin WhatsApp/teléfono ficticio visible.
- Menú móvil operativo.

Las capturas se generan en `qa-screenshots/`. Esa carpeta está ignorada en Git para no subir artefactos pesados al repositorio.

Para repetir la batería interactiva:

```bash
npm run dev
npm run qa:interactions
```

También se puede apuntar a otro entorno:

```bash
QA_BASE_URL=https://www.iclinicas.es npm run qa:interactions
```

## Documentación adicional

- [`CLAUDE.md`](./CLAUDE.md): convenciones operativas del proyecto (código, SEO, GEO, arquitectura).
- [`design.md`](./design.md): sistema visual y reglas UI/CRO.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md): despliegue y troubleshooting del hosting/Resend.

## Contacto del proyecto

Cliente: Carlos Cardoso, consultor digital en Sevilla.
