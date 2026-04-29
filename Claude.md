# CLAUDE.md — PacientesSevilla Web

## Proyecto
Agencia de marketing digital especializada en sector sanitario en Sevilla.
Referencia estructural: conseguirpacientes.com
Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS
Deployment: Vercel

---

## Estructura del proyecto
---

## Convenciones de código

- Componentes: PascalCase, archivo = nombre del componente
- Server Components por defecto — usar 'use client' SOLO cuando sea necesario
  (interactividad: formularios, menú mobile, animaciones con estado)
- Metadata: generateMetadata() en CADA page.tsx, nunca hardcodeada en <head>
- JSON-LD: siempre en <script type="application/ld+json"> dentro del page.tsx
- Imágenes: SIEMPRE next/image, nunca <img>. Alt text descriptivo obligatorio.
- Formularios: React Hook Form + Server Actions. No client-side fetch para forms.
- Estilos: Tailwind utility classes. CSS variables en globals.css para tokens.
- Internacionalización: todo el copy en español castellano. Sin Lorem Ipsum.

---

## Paleta y tipografía

```css
--color-primary:       #0A6B5E;   /* Verde médico profundo */
--color-primary-light: #0E8C7A;
--color-secondary:     #F5F0E8;   /* Blanco cálido */
--color-accent:        #E8A030;   /* Ámbar confianza */
--color-text:          #1A1F2E;
--color-text-muted:    #6B7280;
--font-heading:        'DM Serif Display', serif;
--font-body:           'DM Sans', sans-serif;
```

---

## SEO — Reglas obligatorias

1. Cada page.tsx DEBE exportar generateMetadata() con:
   - title (incluye keyword + ciudad "Sevilla")
   - description (150-160 caracteres, incluye CTA)
   - canonical (URL absoluta)
   - openGraph (title, description, image, url, locale: 'es_ES')
   - twitter (card: 'summary_large_image')

2. H1 ÚNICO por página. Incluye keyword principal + "Sevilla" cuando aplique.

3. H2/H3 con variaciones semánticas de la keyword (no repetir H1 exacto).

4. Alt text en todas las imágenes: descriptivo, no keyword stuffing.

5. Internal linking obligatorio:
   - Páginas de especialidad → enlazar a servicios relacionados
   - Páginas de servicio → enlazar a especialidades relevantes
   - Home → enlazar a todas las especialidades y servicios

6. Breadcrumb con Schema.org BreadcrumbList en TODAS las páginas internas.

7. Estructura URL limpia: /especialidades/[slug]/ y /servicios/[slug]/

---

## GEO — Generative Engine Optimization

- robots.txt: permitir GPTBot, ClaudeBot, Google-Extended, PerplexityBot, cohere-ai
- /public/llms.txt: descripción completa de la agencia para LLMs
- Contenido E-E-A-T en todo el copy:
  · Mencionar experiencia y años en el sector
  · Citar casos reales con métricas
  · Localización Sevilla/Andalucía presente en copy y schema
- FAQ pages con Schema.org FAQPage en páginas de especialidad
- Citas y testimonios reales con nombre y clínica

---

## Structured Data (JSON-LD)

### En layout.tsx (global):
- Organization + LocalBusiness + WebSite con SearchAction

### En cada /servicios/[slug]/page.tsx:
- Service (provider apunta al @id de Organization)

### En cada /especialidades/[slug]/page.tsx:
- Service + FAQPage + BreadcrumbList

### En /casos-de-exito/page.tsx:
- ItemList con los casos

Usar los builders de src/lib/schemas.ts, nunca escribir JSON-LD inline a mano.

---

## Componentes clave y su responsabilidad

| Componente | Tipo | Notas |
|---|---|---|
| Header | Client | Sticky, mega-menu especialidades |
| Footer | Server | Links SEO, schema LocalBusiness |
| HeroSection | Server | H1, CTA, trust badges, next/image |
| EspecialidadesGrid | Server | Grid de tarjetas, datos de especialidades.ts |
| ContactForm | Client | React Hook Form + Server Action |
| FaqSection | Server | Acordeón + schema FAQPage |
| BreadcrumbNav | Server | Schema BreadcrumbList |
| LocalBusinessSchema | Server | JSON-LD en layout |

---

## Performance targets (Core Web Vitals)

- LCP: < 2.5s → hero image con priority={true}, preconnect fonts
- INP: < 100ms → minimizar 'use client', no librerías pesadas
- CLS: < 0.1 → width/height explícitos en todas las imágenes
- PageSpeed mobile: > 90
- PageSpeed desktop: > 95

Acciones obligatorias:
✅ next/image con sizes="..." y priority en imagen hero
✅ <link rel="preconnect"> para Google Fonts en layout.tsx
✅ Lazy load en imágenes below-the-fold (por defecto en next/image)
✅ SVGs inline para iconos de especialidades (no requests adicionales)
✅ prefers-reduced-motion: sin animaciones pesadas en mobile

---

## Lo que NO se debe hacer

❌ Usar pages/ directory (siempre app/)
❌ <img> en lugar de next/image
❌ Páginas sin generateMetadata()
❌ Imágenes sin alt text
❌ <a href="#"> sin texto descriptivo
❌ Contenido duplicado entre páginas de especialidad (cada una es única)
❌ Lorem Ipsum — todo el copy en español real
❌ 'use client' sin necesidad real
❌ Hardcodear URLs (usar constantes en src/lib/config.ts)
❌ CSS custom fuera de Tailwind salvo tokens en globals.css
❌ Bloquear AI crawlers en robots.txt

---

## Comandos habituales

```bash
npm run dev          # Desarrollo local (http://localhost:3000)
npm run build        # Build de producción
npm run lint         # ESLint
npx next-sitemap     # Regenerar sitemap.xml
```

---

## Contacto del proyecto
Cliente: Carlos Cardoso — Consultor Digital, Sevilla
Referencia: conseguirpacientes.com
