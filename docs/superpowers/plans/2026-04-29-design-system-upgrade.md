# Design System Upgrade - 10 Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply 10 design system improvements (hero, cards, sections, testimonios, CTA, footer, transitions, typography, spacing, borders/shadows) to all pages and components.

**Architecture:** 
- **Phase 1 (Parallel):** Global styles (globals.css, tailwind.config.ts, header/footer components)
- **Phase 2 (Parallel):** Hero section improvements across all pages
- **Phase 3 (Parallel):** Card and component styling (4 tasks: services, especialidades, testimonios, CTA)
- **Phase 4 (Parallel):** Page-specific updates (7 pages)
- **Phase 5 (Sequential):** Build verification and final commit

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, React Hook Form, SVG icons

---

## Phase 1: Global Styles & Components (Parallel Tasks 1-3)

### Task 1: Update globals.css with Refined Typography & Spacing

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add typography hierarchy classes**

Replace the current heading styles with refined typography:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

h1 {
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
}

h2 {
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

h3 {
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
}

h4 {
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

body {
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-label {
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

- [ ] **Step 2: Update spacing scale classes**

Add consistent spacing utilities after `.container-custom`:

```css
.section-padding {
  padding: 5rem 1rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding: 7rem 2rem;
  }
}

.py-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .py-section {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
}
```

- [ ] **Step 3: Refine button and card styles**

Update button styles with uppercase and proper transitions:

```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-primary:hover {
  opacity: 0.9;
  background-color: var(--color-primary-light);
  box-shadow: 0 4px 12px rgba(10, 107, 94, 0.15);
}

.btn-primary-lg {
  padding: 1rem 3rem;
  font-size: 1rem;
}

.btn-secondary {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  box-shadow: 0 4px 12px rgba(10, 107, 94, 0.15);
}

.card {
  background-color: var(--color-neutral);
  border: 1px solid var(--color-neutral-dark);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--color-primary);
  transform: translateY(-4px);
}

.card-service {
  border-top: 4px solid var(--color-secondary);
}

.card-service:hover {
  border-top-color: var(--color-primary);
}

.card-testimonial {
  border-left: 4px solid var(--color-neutral-dark);
}

.card-testimonial:hover {
  border-left-color: var(--color-secondary);
}

/* Global link hover */
a {
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-secondary);
}

/* Section primary background */
.section-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border-top: 4px solid var(--color-secondary);
}

.section-primary h1,
.section-primary h2,
.section-primary h3,
.section-primary h4 {
  color: var(--color-text-light);
}

/* Input focus states */
input:focus,
textarea:focus,
select:focus {
  outline: none;
  ring: 2px;
  ring-color: var(--color-primary);
}
```

- [ ] **Step 4: Run build to verify no errors**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed|error"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "style: refine typography hierarchy, spacing scale, and component styles"
```

---

### Task 2: Update tailwind.config.ts with Extended Colors

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Extend fontSize configuration**

```typescript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1.1' }],
  '6xl': ['3.75rem', { lineHeight: '1.1' }],
  'h1': ['3rem', { lineHeight: '1.1', fontWeight: '400' }],
  'h2': ['2rem', { lineHeight: '1.1', fontWeight: '400' }],
  'h3': ['1.5rem', { lineHeight: '1.1', fontWeight: '400' }],
  'h4': ['1.25rem', { lineHeight: '1.1', fontWeight: '400' }],
},

boxShadow: {
  'none': 'none',
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
},
```

- [ ] **Step 2: Ensure spacing scale exists**

Verify spacing in tailwind config includes:

```typescript
spacing: {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
}
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts
git commit -m "config: extend Tailwind with refined typography and spacing scales"
```

---

### Task 3: Redesign Header and Footer Components

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update Header with refined styling**

Update Header className for better visual hierarchy:

```tsx
<header className="sticky top-0 z-50 bg-neutral border-b border-neutral-darker">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <span className="text-xl font-serif font-light text-primary">
        iclinicas
      </span>
    </div>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-8">
      {/* Add gap and hover states */}
    </div>

    {/* CTA Button */}
    <button className="btn-primary text-xs md:text-sm">
      AGENDAR CITA
    </button>
  </nav>
</header>
```

Refine dropdown menus:

```tsx
<div className="absolute left-0 mt-0 w-56 bg-neutral border border-neutral-darker 
              rounded shadow-md py-2 z-50">
  {/* Dropdown items */}
</div>
```

- [ ] **Step 2: Update Footer with dark background and refined structure**

Replace Footer.tsx content:

```tsx
export default function Footer() {
  return (
    <footer className="bg-tertiary text-white border-t-4 border-t-secondary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-serif font-light text-white mb-3">
              iclinicas
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Agencia de marketing digital especializada en clínicas y profesionales sanitarios en Sevilla.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center 
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 20v-7.21H5.73V9.25h2.56V7.07c0-2.54 1.55-3.93 3.83-3.93 1.09 0 2.02.08 2.29.12v2.65h-1.57c-1.23 0-1.47.59-1.47 1.45v1.9h2.93l-.39 3.54h-2.54V20" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center 
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 3.8a8.4 8.4 0 01-2.4.66A4.2 4.2 0 0018.5 3c-.9.54-1.9.92-2.95 1.13A4.18 4.18 0 0014.3 2c-2.3 0-4.17 1.87-4.17 4.17 0 .33.04.65.13.95A11.86 11.86 0 012.4 2.84a4.15 4.15 0 001.3 5.57A4.17 4.17 0 012.6 8.1v.05a4.17 4.17 0 003.35 4.09 4.2 4.2 0 01-1.89.07 4.17 4.17 0 003.89 2.9A8.37 8.37 0 011 17.54a11.84 11.84 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.32 8.32 0 0019 3.8" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center 
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.5 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm4.5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li><a href="/servicios/seo-medico" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">SEO Médico</a></li>
              <li><a href="/servicios/google-ads" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Google Ads</a></li>
              <li><a href="/servicios/diseno-web" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Diseño Web</a></li>
              <li><a href="/servicios/redes-sociales" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Redes Sociales</a></li>
            </ul>
          </div>

          {/* Column 3: Especialidades */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2">
              <li><a href="/especialidades/clinicas-dentales-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Clínicas Dentales</a></li>
              <li><a href="/especialidades/psicologos-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Psicólogos</a></li>
              <li><a href="/especialidades/medicina-estetica-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Medicina Estética</a></li>
              <li><a href="/especialidades/fisioterapia-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Fisioterapia</a></li>
            </ul>
          </div>

          {/* Column 4: Legales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legales
            </h4>
            <ul className="space-y-2">
              <li><a href="/politica-privacidad" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Política Privacidad</a></li>
              <li><a href="/terminos-legales" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Términos Legales</a></li>
              <li><a href="/contacto" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © 2026 iclinicas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "design: redesign header and footer with refined styling and structure"
```

---

## Phase 2: Hero Sections (Parallel Tasks 4-5)

### Task 4: Update Home Page Hero Section

**Files:**
- Modify: `src/app/page.tsx` (HeroSection component)

- [ ] **Step 1: Update HeroSection component**

In the HeroSection section of home page, update styling:

```tsx
<section className="py-section md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom">
    <div className="text-center max-w-3xl mx-auto mb-12">
      
      <h1 className="text-5xl md:text-6xl font-serif font-light text-primary leading-tight mb-4">
        Consigue Más Pacientes en Sevilla
      </h1>
      
      <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed mb-8">
        Marketing digital especializado para clínicas, dentistas, psicólogos y profesionales sanitarios. 
        Estrategias comprobadas que aumentan tu captación de pacientes.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link
          href="/contacto"
          className="btn-primary btn-primary-lg inline-flex items-center justify-center gap-2"
        >
          AGENDAR CITA GRATIS <span>→</span>
        </Link>
        <Link
          href="/casos-de-exito"
          className="btn-secondary inline-flex items-center justify-center gap-2"
        >
          VER CASOS DE ÉXITO <span>→</span>
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          10+ años de experiencia
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          +500 clínicas asesoradas
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Resultados garantizados
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Run build and verify**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "design: upgrade home hero section with refined typography and CTA layout"
```

---

### Task 5: Update Dynamic Page Hero Sections (Especialidades, Servicios, Blog)

**Files:**
- Modify: `src/app/especialidades/[slug]/page.tsx`
- Modify: `src/app/servicios/[slug]/page.tsx`
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Update especialidades/[slug] hero**

In the hero section of especialidades page:

```tsx
<section className="py-section md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom">
    <h1 className="text-4xl md:text-5xl font-serif font-light text-primary mb-4">
      {especialidad.nombre}
    </h1>
    <p className="text-lg text-text-muted max-w-2xl">
      {especialidad.descripcion}
    </p>
  </div>
</section>
```

- [ ] **Step 2: Update servicios/[slug] hero**

In the hero section of servicios page:

```tsx
<section className="py-section md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom">
    <h1 className="text-4xl md:text-5xl font-serif font-light text-primary mb-4">
      {servicio.nombre}
    </h1>
    <p className="text-lg text-text-muted max-w-2xl">
      {servicio.descripcion}
    </p>
  </div>
</section>
```

- [ ] **Step 3: Update blog/[slug] hero**

In the hero section of blog detail page:

```tsx
<section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom max-w-2xl">
    <h1 className="text-4xl md:text-5xl font-serif font-light text-primary mb-4">
      {post.titulo}
    </h1>
    <div className="flex gap-4 items-center text-sm text-text-muted">
      <span>{new Date(post.fecha).toLocaleDateString('es-ES')}</span>
      <span>•</span>
      <span>{post.tiempoLectura} min de lectura</span>
      <span>•</span>
      <span className="bg-secondary/20 text-primary px-3 py-1 rounded-full">
        {post.categoria}
      </span>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 5: Commit**

```bash
git add src/app/especialidades/[slug]/page.tsx src/app/servicios/[slug]/page.tsx src/app/blog/[slug]/page.tsx
git commit -m "design: upgrade dynamic page hero sections with refined typography"
```

---

## Phase 3: Cards & Components (Parallel Tasks 6-9)

### Task 6: Redesign Service & Speciality Cards

**Files:**
- Modify: `src/components/home/ServiciosSection.tsx`
- Modify: `src/components/home/EspecialidadesGrid.tsx`
- Modify: `src/components/shared/EspecialidadCard.tsx`

- [ ] **Step 1: Update ServiciosSection cards**

Replace card styling in ServiciosSection:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {servicios.map((servicio) => (
    <Link key={servicio.id} href={`/servicios/${servicio.slug}`}>
      <div className="card card-service p-8 h-full min-h-64 cursor-pointer group">
        {/* Icon */}
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 
                       group-hover:bg-primary transition-colors duration-300">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            {/* Service icon SVG */}
          </svg>
        </div>
        
        <h3 className="text-h4 font-serif font-light text-primary mb-2">
          {servicio.nombre}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {servicio.descripcion}
        </p>
        
        <div className="mt-6 flex items-center gap-2 text-secondary text-sm font-semibold">
          Conocer más <span>→</span>
        </div>
      </div>
    </Link>
  ))}
</div>
```

- [ ] **Step 2: Update EspecialidadesGrid cards**

Replace card styling in EspecialidadesGrid:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {especialidades.map((esp) => (
    <Link key={esp.id} href={`/especialidades/${esp.slug}`}>
      <div className="card card-service p-8 h-full min-h-64 cursor-pointer group">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {esp.icon}
        </div>
        
        <h3 className="text-h4 font-serif font-light text-primary mb-2">
          {esp.nombre}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {esp.descripcion}
        </p>
      </div>
    </Link>
  ))}
</div>
```

- [ ] **Step 3: Update EspecialidadCard component**

Refactor EspecialidadCard.tsx:

```tsx
export default function EspecialidadCard({ especialidad }: EspecialidadCardProps) {
  return (
    <Link href={`/especialidades/${especialidad.slug}`}>
      <div className="card card-service p-8 h-full min-h-64 cursor-pointer group">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {especialidad.icon}
        </div>
        <h3 className="text-h4 font-serif font-light text-primary mb-2">
          {especialidad.nombre}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {especialidad.descripcion}
        </p>
        <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-semibold">
          Explorar <span>→</span>
        </div>
      </div>
    </Link>
  )
}
```

- [ ] **Step 4: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ServiciosSection.tsx src/components/home/EspecialidadesGrid.tsx src/components/shared/EspecialidadCard.tsx
git commit -m "design: redesign service and speciality cards with refined styling"
```

---

### Task 7: Redesign Testimonials Section

**Files:**
- Modify: `src/components/home/TestimoniosSection.tsx`

- [ ] **Step 1: Update testimonials layout and styling**

Replace TestimoniosSection content:

```tsx
export default function TestimoniosSection() {
  return (
    <section className="py-section bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif font-light text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Testimonios reales de clínicas que han transformado su captación de pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="card card-testimonial p-8 flex flex-col hover:shadow-lg 
                        transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-secondary">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="italic text-text leading-relaxed mb-6 flex-1">
                "{testimonio.texto}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-darker">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center 
                              justify-center text-tertiary font-semibold">
                  {testimonio.nombre.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text">{testimonio.nombre}</p>
                  <p className="text-sm text-text-muted">{testimonio.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add src/components/home/TestimoniosSection.tsx
git commit -m "design: redesign testimonials section with star ratings and refined layout"
```

---

### Task 8: Redesign CTA Sections

**Files:**
- Modify: `src/components/home/CtaFinal.tsx`
- Modify: `src/components/home/BlogPreviewSection.tsx`

- [ ] **Step 1: Update CtaFinal section**

Replace CtaFinal.tsx:

```tsx
export default function CtaFinal() {
  return (
    <section className="section-primary py-section md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
          ¿Listo para transformar tu clínica?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
          Únete a más de 500 clínicas y profesionales sanitarios que ya están captando 
          más pacientes con nuestras estrategias de marketing digital.
        </p>

        <Link
          href="/contacto"
          className="btn-primary btn-primary-lg inline-flex items-center justify-center gap-2 
                    bg-secondary hover:bg-opacity-90"
        >
          AGENDAR AUDITORÍA GRATIS <span>→</span>
        </Link>

        {/* Subtext */}
        <p className="text-sm text-white/70 mt-8">
          Sin compromiso • Diagnóstico completo • 30 minutos de consulta
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update BlogPreviewSection CTA**

In BlogPreviewSection, update the CTA styling:

```tsx
<div className="text-center">
  <Link
    href="/blog"
    className="btn-primary inline-flex items-center justify-center gap-2"
  >
    VER TODO EL BLOG <span>→</span>
  </Link>
</div>
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add src/components/home/CtaFinal.tsx src/components/home/BlogPreviewSection.tsx
git commit -m "design: redesign CTA sections with prominent buttons and refined hierarchy"
```

---

## Phase 4: Page-Specific Updates (Parallel Tasks 9-15)

### Task 9: Update Static Pages (Nosotros, Contacto, Politica, Terminos)

**Files:**
- Modify: `src/app/nosotros/page.tsx`
- Modify: `src/app/contacto/page.tsx`
- Modify: `src/app/politica-privacidad/page.tsx`
- Modify: `src/app/terminos-legales/page.tsx`

- [ ] **Step 1: Update nosotros page**

Update page structure:

```tsx
// Hero
<section className="py-section md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom max-w-2xl">
    <h1 className="text-5xl md:text-6xl font-serif font-light text-primary mb-4">
      Sobre Nosotros
    </h1>
    <p className="text-lg text-text-muted">
      Los especialistas que tu clínica necesita
    </p>
  </div>
</section>

// Content sections with refined spacing
<section className="py-section">
  <div className="container-custom max-w-3xl">
    <h2 className="text-h2 font-serif font-light text-primary mb-8">
      Nuestra misión
    </h2>
    {/* Content */}
  </div>
</section>
```

- [ ] **Step 2: Update contacto page**

Update contact form container styling:

```tsx
<div className="bg-neutral p-12 rounded border border-neutral-dark shadow-sm">
  <h2 className="text-h3 font-serif font-light text-primary mb-8">
    Cuéntanos tu situación
  </h2>
  <ContactForm />
</div>
```

- [ ] **Step 3: Update politica-privacidad and terminos-legales**

Add consistent header and styling:

```tsx
<section className="py-section md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container-custom max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-serif font-light text-primary mb-4">
      Política de Privacidad
    </h1>
  </div>
</section>

<section className="py-section">
  <div className="container-custom max-w-3xl prose prose-sm">
    {/* Content */}
  </div>
</section>
```

- [ ] **Step 4: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 5: Commit**

```bash
git add src/app/nosotros/page.tsx src/app/contacto/page.tsx src/app/politica-privacidad/page.tsx src/app/terminos-legales/page.tsx
git commit -m "design: update static pages with refined typography and spacing"
```

---

### Task 10: Update Blog Listing and Cases Pages

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/casos-de-exito/page.tsx`

- [ ] **Step 1: Update blog listing layout**

Update blog grid styling:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {blogPosts.map((post) => (
    <Link key={post.id} href={`/blog/${post.slug}`}>
      <article className="card p-0 overflow-hidden h-full hover:shadow-lg 
                         transition-all duration-300">
        {/* Image placeholder */}
        <div className="h-48 bg-primary/10 flex items-center justify-center">
          <svg className="w-16 h-16 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4.5-4.5 3 3 4.5-4.5V15z" />
          </svg>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            <span className="bg-secondary/20 text-primary text-xs px-3 py-1 rounded-full">
              {post.categoria}
            </span>
            <span className="text-xs text-text-muted">
              {post.tiempoLectura} min
            </span>
          </div>

          <h3 className="text-h4 font-serif font-light text-primary mb-2">
            {post.titulo}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-semibold">
            Leer artículo <span>→</span>
          </div>
        </div>
      </article>
    </Link>
  ))}
</div>
```

- [ ] **Step 2: Update casos-de-exito page**

Update cases grid:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {casos.map((caso) => (
    <div key={caso.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center 
                     justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{caso.resultado}</div>
          <p className="text-white/90 text-sm mt-2">Aumento en captación</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-h4 font-serif font-light text-primary mb-2">
          {caso.titulo}
        </h3>
        <p className="text-xs text-text-muted mb-2">{caso.clinica}</p>
        <p className="text-xs text-secondary font-semibold mb-4">{caso.especialidad}</p>
        <p className="text-sm text-text-muted leading-relaxed">{caso.descripcion}</p>
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/page.tsx src/app/casos-de-exito/page.tsx
git commit -m "design: update blog listing and cases pages with refined card styling"
```

---

### Task 11: Update ContactForm Component

**Files:**
- Modify: `src/components/shared/ContactForm.tsx`

- [ ] **Step 1: Update form styling with refined inputs**

Update input and form styling:

```tsx
<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  <div>
    <label htmlFor="nombre" className="block text-sm font-semibold text-text mb-2">
      Nombre *
    </label>
    <input
      {...register('nombre', { required: true, maxLength: 100 })}
      type="text"
      id="nombre"
      placeholder="Tu nombre"
      maxLength={100}
      className="w-full px-4 py-3 border border-neutral-dark rounded 
                focus:ring-2 focus:ring-primary focus:border-transparent 
                transition-all duration-200"
    />
  </div>

  {/* Similar for other inputs */}

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full btn-primary btn-primary-lg uppercase tracking-widest 
             disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Enviando...' : 'ENVIAR MENSAJE'}
  </button>

  {error && (
    <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
      <p className="text-red-800 text-sm font-semibold">Error</p>
      <p className="text-red-700 text-sm">{error}</p>
    </div>
  )}

  {submitted && (
    <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
      <p className="text-green-800 font-semibold">✓ ¡Mensaje enviado!</p>
      <p className="text-green-700 text-sm mt-1">
        Te contactaremos en las próximas 24 horas.
      </p>
    </div>
  )}
</form>
```

- [ ] **Step 2: Run build**

```bash
npm run build 2>&1 | grep -E "Compiled|Failed"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/ContactForm.tsx
git commit -m "design: refine contact form with better input styling and feedback states"
```

---

## Phase 5: Build Verification and Final Commit

### Task 12: Final Build and Testing

**Files:**
- None (verification only)

- [ ] **Step 1: Run production build**

```bash
npm run build 2>&1
```

Expected output includes:
- `✓ Compiled successfully`
- `✓ Generating static pages (24/24)`
- Page size information

- [ ] **Step 2: Verify no CSS/styling errors**

Check for any CSS warnings:

```bash
npm run build 2>&1 | grep -i "warn\|error" | grep -v "preload"
```

Expected: No styling-related warnings

- [ ] **Step 3: Check build output size**

```bash
npm run build 2>&1 | grep "First Load JS"
```

Expected: First Load JS remains under 120kB

- [ ] **Step 4: Verify git status**

```bash
git status --short
```

Expected: All files committed, no uncommitted changes

- [ ] **Step 5: Create summary commit**

```bash
git log --oneline -12
```

Should show commits from design system implementation

---

## Summary

**Total Tasks:** 12
**Files Modified:** 20+
**Files Created:** 0 (enhancement only)
**Commits:** 11 design-related + 1 summary = 12 total

**Changes Span:**
- Global styles (globals.css, tailwind.config.ts)
- Layout components (Header, Footer)
- 9 pages (home, especialidades, servicios, blog, casos, contacto, nosotros, politica, terminos)
- 5+ section components
- 1 form component

**Improvements Applied:**
1. ✅ Hero section typography and CTA layout
2. ✅ Service/speciality card redesign with icons and borders
3. ✅ Primary section styling with separators
4. ✅ Testimonials with star ratings and avatars
5. ✅ CTA sections with prominent buttons
6. ✅ Footer with dark background and structure
7. ✅ Global transitions and hover states
8. ✅ Typography hierarchy (5rem H1, refined scales)
9. ✅ Consistent spacing (py-20, py-28)
10. ✅ Refined borders and shadows

