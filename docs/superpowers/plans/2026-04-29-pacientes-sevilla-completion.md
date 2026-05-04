# iMarketing Clínicas: Completion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the remaining phases (5-6) of iMarketing Clínicas website by implementing dynamic service pages, additional content pages, server actions, and completing specialty FAQs.

**Architecture:** 
- **Task 1 (Parallel):** Add FAQ content for 4 remaining specialties (modifies existing file)
- **Task 2 (Parallel):** Create dynamic `/servicios/[slug]/page.tsx` following specialty page pattern
- **Task 3 (Parallel):** Create static pages: `/nosotros`, `/contacto`, `/politica-privacidad`, `/terminos-legales`, `/casos-de-exito`
- **Task 4 (Parallel):** Create blog infrastructure (`/blog`, `/blog/[slug]`, `data/blog.ts`)
- **Task 5 (Sequential after Task 3):** Implement ContactForm server action for email submission

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, React Hook Form, Server Components, JSON-LD schemas

---

## Task 1: Complete Specialty FAQs

**Files:**
- Modify: `src/app/especialidades/[slug]/page.tsx:50-110` (faqsPorEspecialidad object)

- [ ] **Step 1: Add FAQs for Fisioterapia**
- [ ] **Step 2: Add FAQs for Nutrición**
- [ ] **Step 3: Add FAQs for Pediatría**
- [ ] **Step 4: Add FAQs for Cirugía**
- [ ] **Step 5: Commit**

---

## Task 2: Create Dynamic Service Pages

**Files:**
- Create: `src/app/servicios/[slug]/page.tsx`
- Modify: `src/data/servicios.ts` (add service FAQs)

- [ ] **Step 1: Create service FAQs data in servicios.ts**
- [ ] **Step 2: Create servicios/[slug]/page.tsx**
- [ ] **Step 3: Commit**

---

## Task 3: Create Static Content Pages

**Files:**
- Create: `src/app/nosotros/page.tsx`
- Create: `src/app/contacto/page.tsx`
- Create: `src/app/politica-privacidad/page.tsx`
- Create: `src/app/terminos-legales/page.tsx`
- Create: `src/app/casos-de-exito/page.tsx`

- [ ] **Step 1: Create /nosotros/page.tsx**
- [ ] **Step 2: Create /contacto/page.tsx**
- [ ] **Step 3: Create /politica-privacidad/page.tsx**
- [ ] **Step 4: Create /terminos-legales/page.tsx**
- [ ] **Step 5: Create /casos-de-exito/page.tsx**
- [ ] **Step 6: Commit all static pages**

---

## Task 4: Create Blog Infrastructure

**Files:**
- Create: `src/data/blog.ts`
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create blog data file src/data/blog.ts**
- [ ] **Step 2: Create /blog/page.tsx**
- [ ] **Step 3: Create /blog/[slug]/page.tsx**
- [ ] **Step 4: Commit blog infrastructure**

---

## Task 5: Implement ContactForm Server Action

**Files:**
- Create: `src/app/actions/sendEmail.ts`
- Modify: `src/components/shared/ContactForm.tsx`
- Create/Modify: `.env.example`

- [ ] **Step 1: Create server action for email**
- [ ] **Step 2: Update ContactForm to use server action**
- [ ] **Step 3: Update .env.example with email variables**
- [ ] **Step 4: Commit server action**

---

**Summary:**
- 5 major tasks
- 18 files to create
- 2 files to modify
- 5 commits total
- Tasks 1-4 independent (can run parallel)
- Task 5 depends on Task 3 completion
