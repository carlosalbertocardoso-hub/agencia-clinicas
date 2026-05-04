# Pacientes Sevilla

Web de captación para **Pacientes Sevilla**, agencia de marketing sanitario especializada en clínicas privadas, consultas y profesionales de salud en Sevilla.

La propuesta central del proyecto es convertir Google, web, campañas, reputación y conversión en un sistema medible de captación de pacientes privados, con comunicación prudente para el sector sanitario.

## Stack

- **Framework:** Next.js 14 con App Router
- **Lenguaje:** TypeScript
- **UI:** React
- **Estilos:** Tailwind CSS + tokens en `src/app/globals.css`
- **Iconos:** `lucide-react`
- **Formularios:** React Hook Form + Server Actions
- **Email:** Resend
- **Hosting:** Vercel

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
npm run sitemap   # Generar sitemap con next-sitemap
```

## Variables de entorno

El formulario de contacto usa Resend. Configura estas variables en `.env.local` y en Vercel:

```env
RESEND_API_KEY=...
RESEND_FROM_EMAIL="Pacientes Sevilla <email_verificado_en_resend>"
CONTACT_TO_EMAIL=tu_email_destino
NEXT_PUBLIC_SITE_URL=https://tu-dominio-o-preview
```

Notas importantes:

- `RESEND_FROM_EMAIL` debe ser un remitente o dominio verificado en Resend.
- Si cambias variables en Vercel, haz redeploy para que entren en vigor.
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
design.md
DEPLOYMENT.md
```

## Páginas principales

- `/`
- `/contacto`
- `/recursos`
- `/blog`
- `/blog/errores-seo-dentistas`
- `/blog/google-ads-psicologos`
- `/blog/diseno-web-clinicas`
- `/servicios`
- `/servicios/seo-medico`
- `/servicios/google-ads`
- `/servicios/diseno-web`
- `/servicios/redes-sociales`
- `/especialidades`
- `/especialidades/clinicas-dentales-sevilla`
- `/especialidades/psicologos-sevilla`
- `/especialidades/medicina-estetica-sevilla`
- `/especialidades/fisioterapia-sevilla`
- `/especialidades/nutricionistas-sevilla`
- `/especialidades/pediatria-sevilla`
- `/especialidades/clinicas-cirugia-sevilla`
- `/politica-privacidad`
- `/terminos-legales`

## Servicios

- SEO local para clínicas en Sevilla
- Google Ads para clínicas privadas
- Diseño web para clínicas orientado a captar citas
- Redes sociales y contenido sanitario

## Arquitectura de contenido

La navegación principal se organiza en:

- **A quién ayudamos:** páginas por tipo de clínica o profesional sanitario.
- **Servicios:** páginas por canal o solución de captación.
- **Recursos:** hub editorial con blog, diagnósticos y guías.
- **Contacto:** auditoría gratuita de captación online.

## A quién ayudamos

- Clínicas dentales
- Psicólogos
- Medicina estética
- Fisioterapia
- Nutricionistas
- Pediatría
- Clínicas quirúrgicas y especialistas

## Recursos

- `/recursos`: hub principal de contenidos.
- `/blog`: artículos y guías.
- `/casos-de-exito`: diagnósticos representativos y escenarios de mejora.

## Diseño

La guía visual está en:

- [`design.md`](./design.md)

Incluye paleta, tipografías, breakpoints, reglas responsive, cards, CTAs, formularios, accesibilidad y criterios CRO/SEO visual.

## SEO y datos estructurados

El proyecto incluye:

- Metadata por página.
- Canonicals.
- Open Graph.
- JSON-LD global `ProfessionalService`.
- Breadcrumb schema en páginas internas.
- FAQ schema en FAQs.
- Article schema en artículos del blog.

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

1. Configurar variables de entorno en Vercel.
2. Verificar remitente en Resend.
3. Hacer deploy o redeploy.
4. Probar formulario.
5. Revisar logs en Vercel y Resend si no llegan emails.

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

Incidencias corregidas en la última revisión:

- Enlaces placeholder del footer sustituidos por rutas reales.
- WhatsApp ficticio oculto hasta disponer de número real.
- Microcopy de error del formulario actualizado para no dirigir a WhatsApp sin dato válido.
- Header mejorado con atributos ARIA y cierre de menú móvil al navegar.
- Hero corregido para que imagen y overlays no intercepten clics del header en móvil.
- Textos de navegación y recursos revisados para evitar codificación rota.

## Documentación adicional

- [`Claude.md`](./Claude.md): convenciones internas originales del proyecto.
- [`design.md`](./design.md): sistema visual y reglas UI/CRO.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md): despliegue y troubleshooting en Vercel/Resend.

## Contacto del proyecto

Cliente: Carlos Cardoso, consultor digital en Sevilla.
