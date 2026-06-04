import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Search, Megaphone, Layout, PhoneCall, MapPin, Repeat,
  ShieldCheck, ClipboardCheck, Target, ArrowRight,
  CheckCircle2, BarChart3, Clock3, MousePointerClick, LineChart
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import JsonLd from '@/components/seo/JsonLd'
import { buildOgUrl } from '@/lib/og/buildOgUrl'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schemas'

const ogImage = buildOgUrl({
  title: 'Captación de pacientes privados para clínicas premium en Sevilla',
  category: 'Landing',
  subtitle: 'SEO, Google Ads y conversión para clínicas de alto ticket',
})

export const metadata: Metadata = {
  title: 'Captación de pacientes privados para clínicas premium en Sevilla',
  description:
    'Deja de depender del boca a boca. Atrae pacientes privados de alto poder adquisitivo con SEO local, Google Ads y landing pages optimizadas para clínicas en Sevilla.',
  keywords: [
    'marketing clínicas premium Sevilla',
    'captación pacientes privados Sevilla',
    'marketing médico Sevilla',
    'SEO local clínicas Sevilla',
    'Google Ads clínicas Sevilla',
    'landing pages clínicas privadas',
    'captación pacientes alto ticket',
    'marketing medicina estética Sevilla',
    'publicidad clínicas dentales Sevilla',
  ],
  alternates: {
    canonical: '/marketing-clinicas-premium-sevilla',
  },
  openGraph: {
    title: 'Captación de pacientes privados para clínicas premium en Sevilla | iclinicas',
    description:
      'Deja de depender del boca a boca. Atrae pacientes privados de alto poder adquisitivo con SEO local, Google Ads y landing pages optimizadas para clínicas en Sevilla.',
    url: 'https://www.iclinicas.es/marketing-clinicas-premium-sevilla',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captación de pacientes privados para clínicas premium en Sevilla | iclinicas',
    description:
      'Deja de depender del boca a boca. Atrae pacientes privados de alto poder adquisitivo con SEO local, Google Ads y landing pages optimizadas para clínicas en Sevilla.',
    images: [ogImage],
  },
}

const servicioSchema = buildServiceSchema({
  name: 'Captación de pacientes privados para clínicas premium en Sevilla',
  description:
    'SEO local por especialidad y zona, Google Ads con segmentación por capacidad económica, landing pages optimizadas, tracking real de conversiones y automatización de seguimiento de leads para clínicas de alto ticket en Sevilla.',
  url: 'https://www.iclinicas.es/marketing-clinicas-premium-sevilla',
  serviceType: ['Marketing Médico', 'SEO Local para Clínicas', 'Google Ads para Clínicas', 'Captación de Pacientes Privados'],
})

const faqData = [
  {
    question: '¿Por qué solo en Sevilla?',
    answer:
      'Porque el SEO local y la publicidad médica funcionan por cercanía. Conocemos los barrios, la competencia y cómo busca un paciente aquí.',
  },
  {
    question: '¿Garantizáis pacientes?',
    answer:
      'No. Sería éticamente cuestionable y legalmente imprudente. Garantizamos medición real y optimización basada en datos.',
  },
  {
    question: '¿Qué necesitáis de la clínica?',
    answer:
      'Acceso a Google Business Profile, web y 15 minutos a la semana.',
  },
  {
    question: '¿Qué pasa si no funciona?',
    answer:
      'Medimos desde el día 1. Si algo no funciona, lo ajustamos o paramos. Sin permanencia.',
  },
]

const faqSchema = {
  ...buildFAQSchema(faqData),
  '@id': 'https://www.iclinicas.es/marketing-clinicas-premium-sevilla#faq',
}

const servicioSchemaWithFaq = {
  ...servicioSchema,
  subjectOf: {
    '@id': faqSchema['@id'],
  },
}

const servicios = [
  {
    icon: Search,
    title: 'SEO local por especialidad y zona',
    description:
      'Posicionamos tu clínica en las búsquedas que realmente importan: por tratamiento, por barrio y por intención de compra.',
  },
  {
    icon: Megaphone,
    title: 'Google Ads con segmentación por capacidad económica',
    description:
      'Campañas orientadas a pacientes privados con alto poder adquisitivo. Segmentamos por zona, renta y términos de alta intención.',
  },
  {
    icon: Layout,
    title: 'Landing pages que convierten consultas en citas',
    description:
      'Páginas diseñadas para convertir tráfico en solicitudes de cita. Sin distracciones, con mensajes claros y llamadas a la acción visibles.',
  },
  {
    icon: PhoneCall,
    title: 'Tracking real de llamadas, formularios y WhatsApp',
    description:
      'Sabrás exactamente qué canales generan contactos reales. Medimos cada conversión para optimizar tu inversión.',
  },
  {
    icon: MapPin,
    title: 'Optimización de Google Business Profile',
    description:
      'Tu perfil de Google es la primera impresión. Lo optimizamos para aparecer en el Local Pack y convertir visitas en contactos.',
  },
  {
    icon: Repeat,
    title: 'Automatización de seguimiento de leads',
    description:
      'Los pacientes que llaman o escriben no siempre reservan al instante. Automatizamos el seguimiento para no perder ninguna oportunidad.',
  },
]

const indicadores = [
  { label: 'Foco local', value: 'Sevilla', detail: 'zonas, barrios y búsquedas con intención real' },
  { label: 'Tiempo de revisión', value: '48h', detail: 'diagnóstico inicial sin compromiso' },
  { label: 'Dedicación clínica', value: '15 min', detail: 'validación semanal, sin reuniones interminables' },
]

const sectores = [
  'Medicina estética premium',
  'Clínicas dentales de alto ticket (implantes, ortodoncia invisible, estética dental)',
  'Clínicas privadas multiespecialidad',
  'Dermatología, tricología y cirugía menor estética',
  'Fertilidad, traumatología y fisioterapia avanzada',
]

const mapaCaptacion = [
  {
    icon: Search,
    title: 'Demanda local',
    description: 'Detectamos qué busca el paciente privado por tratamiento, zona y urgencia comercial.',
  },
  {
    icon: MousePointerClick,
    title: 'Entrada cualificada',
    description: 'SEO, Ads y Google Business Profile llevan tráfico a páginas pensadas para solicitar cita.',
  },
  {
    icon: BarChart3,
    title: 'Medición completa',
    description: 'Llamadas, formularios y WhatsApp quedan trazados para leer calidad del contacto.',
  },
  {
    icon: Repeat,
    title: 'Seguimiento',
    description: 'El lead que no reserva al instante no se pierde: queda priorizado para recepción.',
  },
]

const pasos = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico gratuito en 48h',
    description:
      'Revisamos Google, web, competencia y detectamos fugas. Sin compromiso.',
  },
  {
    icon: Target,
    title: 'Plan con 3 prioridades',
    description:
      'Te decimos exactamente qué, cuánto cuesta y qué resultado esperar.',
  },
  {
    icon: ShieldCheck,
    title: 'Ejecución y medición',
    description:
      'Nos encargamos, tú validas 15 min/semana. Medimos cada paso.',
  },
]

const enlacesRelacionados = [
  {
    href: '/servicios/seo-medico',
    label: 'SEO local para clínicas',
    description: 'Visibilidad en Google, Maps y búsquedas por tratamiento en Sevilla.',
  },
  {
    href: '/servicios/google-ads',
    label: 'Google Ads para clínicas',
    description: 'Campañas con intención real, negativas y lectura de calidad del lead.',
  },
  {
    href: '/servicios/diseno-web',
    label: 'Diseño web sanitario',
    description: 'Landing pages y webs preparadas para convertir visitas en solicitudes.',
  },
  {
    href: '/especialidades/clinicas-dentales-sevilla',
    label: 'Clínicas dentales en Sevilla',
    description: 'Captación para implantes, ortodoncia, estética dental y tratamientos de valor.',
  },
  {
    href: '/especialidades/medicina-estetica-sevilla',
    label: 'Medicina estética en Sevilla',
    description: 'Comunicación prudente, campañas y landings para tratamientos premium.',
  },
  {
    href: '/especialidades/dermatologos-sevilla',
    label: 'Dermatólogos en Sevilla',
    description: 'SEO, web y campañas para consultas privadas y dermatología estética.',
  },
]

export default function MarketingClinicasPremiumSevillaPage() {
  return (
    <>
      <JsonLd data={[servicioSchemaWithFaq, faqSchema]} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* ═══ HERO ═══ */}
          <section className="relative overflow-hidden bg-[#062F2B] text-white">
            <Image
              src="/images/hero-clinica-marketing.jpg"
              alt="Equipo revisando datos de marketing sanitario para una clínica privada"
              fill
              sizes="100vw"
              quality={78}
              className="pointer-events-none object-cover opacity-[0.24] mix-blend-luminosity"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#062F2B] via-primary/90 to-primary/45" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
            <div className="container-custom relative z-10 py-14 sm:py-16 md:py-20">
              <BreadcrumbNav items={[{ label: 'Marketing clínicas premium Sevilla', href: '/marketing-clinicas-premium-sevilla' }]} />
              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <p className="text-label mb-4 text-[#FFD166]">Landing premium para clínicas privadas</p>
                  <h1 className="mb-6 text-4xl font-heading font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                    Captación de pacientes privados para clínicas premium en Sevilla
                  </h1>
                  <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
                    Si tu clínica tiene tratamientos de alto valor pero dependes demasiado del boca a boca o de las aseguradoras, hay un margen que se te escapa cada semana.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contacto"
                      className="inline-flex w-full items-center justify-center rounded-md bg-[#FFD166] px-7 py-4 text-base font-semibold text-[#073F38] shadow-lg transition hover:bg-white sm:w-auto"
                    >
                      Solicitar diagnóstico gratuito en 48h
                      <ArrowRight size={18} strokeWidth={1.8} className="ml-2" />
                    </Link>
                    <Link
                      href="#sistema"
                      className="inline-flex w-full items-center justify-center rounded-md border border-white/70 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-primary sm:w-auto"
                    >
                      Ver sistema de captación
                    </Link>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-white/75">
                    <span>Sin promesas irreales</span>
                    <span className="text-white/35">·</span>
                    <span>Sin permanencia</span>
                    <span className="text-white/35">·</span>
                    <span>Medición desde el día 1</span>
                  </div>
                </div>

                <aside className="rounded-lg border border-white/18 bg-white/95 p-5 text-text shadow-2xl backdrop-blur sm:p-6">
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.05em] text-accent">Panel de diagnóstico</p>
                      <h2 className="mt-1 text-2xl font-heading font-semibold text-text">Qué revisamos primero</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <LineChart size={24} strokeWidth={1.7} className="text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Visibilidad en Google Maps y búsquedas por tratamiento.',
                      'Páginas que reciben tráfico pero no generan contactos.',
                      'Campañas activas con gasto sin lectura de calidad.',
                      'Fugas entre llamada, WhatsApp, formulario y recepción.',
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-md bg-surface px-4 py-3">
                        <CheckCircle2 size={18} strokeWidth={1.8} className="mt-0.5 flex-shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-text-muted">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {indicadores.map((item) => (
                      <div key={item.label} className="rounded-md bg-white p-3 text-center shadow-sm">
                        <p className="text-lg font-bold text-primary">{item.value}</p>
                        <p className="text-[11px] font-semibold uppercase leading-tight text-text-muted">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-white">
            <div className="container-custom grid grid-cols-1 divide-y divide-border py-0 md:grid-cols-3 md:divide-x md:divide-y-0">
              {indicadores.map((item) => (
                <div key={item.label} className="py-5 md:px-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-accent">{item.label}</p>
                  <p className="mt-1 text-3xl font-heading font-semibold text-text">{item.value}</p>
                  <p className="mt-1 text-sm text-text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ EL PROBLEMA ═══ */}
          <section className="py-section">
            <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-label mb-3 text-accent">Problema de captación</p>
                <h2 className="mb-5 text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                  El paciente privado no espera
                </h2>
                <p className="text-lg leading-relaxed text-text-muted">
                  El paciente privado de alto poder adquisitivo busca, compara y elige antes de llamar. Si no apareces cuando busca tratamiento y zona, la decisión se toma en otra web.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ['Busca', 'Google, Maps y reseñas antes de contactar.'],
                    ['Compara', 'Especialidad, confianza, precio percibido y cercanía.'],
                    ['Elige', 'La clínica que responde mejor a su intención.'],
                  ].map(([title, text], index) => (
                    <div key={title} className="relative rounded-md bg-bg p-5">
                      <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="mb-2 text-xl font-heading font-semibold text-text">{title}</h3>
                      <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-border pt-5 font-semibold text-text">
                  No es cuestión de gastar más. Es cuestión de medir, optimizar y convertir.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ SISTEMA ═══ */}
          <section id="sistema" className="py-section bg-[#0A3F38] text-white">
            <div className="container-custom">
              <div className="mb-10 max-w-3xl">
                <p className="text-label mb-3 text-[#FFD166]">Sistema de captación</p>
                <h2 className="mb-4 text-3xl font-heading font-semibold text-white sm:text-4xl md:text-5xl">
                  Una ruta completa desde la búsqueda hasta la cita
                </h2>
                <p className="text-base text-white/78 sm:text-lg">
                  El objetivo no es acumular clics. Es conectar demanda local, confianza sanitaria, medición y seguimiento para que recepción trabaje contactos con más intención.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {mapaCaptacion.map((item, index) => (
                  <article key={item.title} className="relative rounded-lg border border-white/14 bg-white/[0.07] p-5 backdrop-blur">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#FFD166] text-[#073F38]">
                        <item.icon size={22} strokeWidth={1.7} />
                      </div>
                      <span className="text-sm font-semibold text-white/45">0{index + 1}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/72">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ QUÉ HACEMOS ═══ */}
          <section className="py-section bg-surface">
            <div className="container-custom">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-label mb-3 text-accent">Ejecución</p>
                  <h2 className="text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                    Qué hacemos
                  </h2>
                </div>
                <p className="max-w-xl text-text-muted">
                  Un sistema completo de captación para clínicas premium. Sin humo, con métricas reales.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {servicios.map((s) => (
                  <div
                    key={s.title}
                    className="group rounded-lg border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-primary/15 bg-primary/10">
                      <s.icon size={22} strokeWidth={1.6} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-text mb-3 transition group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ SECTORES PRIORITARIOS ═══ */}
          <section className="py-section">
            <div className="container-custom">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="lg:sticky lg:top-28">
                  <p className="text-label mb-3 text-accent">Especialización</p>
                  <h2 className="mb-4 text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                    Sectores prioritarios
                  </h2>
                  <p className="text-text-muted">
                    Trabajamos con clínicas donde un paciente privado de alto valor marca la diferencia.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {sectores.map((sector) => (
                    <div
                      key={sector}
                      className="rounded-lg border border-border border-l-4 border-l-accent bg-white p-6 transition hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} strokeWidth={1.8} className="text-accent flex-shrink-0 mt-0.5" />
                        <h3 className="text-sm sm:text-base font-semibold text-text">{sector}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ PROCESO EN 3 PASOS ═══ */}
          <section className="py-section bg-surface">
            <div className="container-custom">
              <div className="mb-10 text-center">
                <p className="text-label mb-3 text-accent">Método de trabajo</p>
                <h2 className="mb-4 text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                  Proceso en 3 pasos
                </h2>
                <p className="mx-auto max-w-2xl text-text-muted">
                  De la auditoría a la ejecución. Sin burocracia, sin reuniones interminables.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pasos.map((paso, index) => (
                  <div key={paso.title} className="relative rounded-lg border border-border bg-white p-6 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                      <paso.icon size={24} strokeWidth={1.6} />
                    </div>
                    <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-text mb-2">
                      {paso.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                      {paso.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ FAQ ═══ */}
          <section className="py-section">
            <div className="container-custom max-w-3xl">
              <div className="mb-10 text-center">
                <p className="text-label mb-3 text-accent">Dudas habituales</p>
                <h2 className="text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                  Preguntas Frecuentes
                </h2>
              </div>
              <div className="space-y-3">
                {faqData.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-border rounded-lg overflow-hidden bg-white hover:shadow-sm transition"
                  >
                    <summary className="w-full px-4 sm:px-6 py-4 text-left font-semibold text-text hover:bg-slate-50 transition flex justify-between items-center gap-4 list-none cursor-pointer">
                      <span className="text-base">{faq.question}</span>
                      <span className="transform transition-transform duration-200 text-accent group-open:rotate-180 flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="px-4 sm:px-6 py-4 border-t border-border text-text-muted bg-slate-50 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ ENLAZADO INTERNO ═══ */}
          <section className="section-padding bg-surface">
            <div className="container-custom">
              <div className="mb-10 text-center">
                <p className="text-label mb-3 text-accent">También puede interesarte</p>
                <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-heading font-semibold text-text sm:text-4xl md:text-5xl">
                  Servicios y especialidades relacionados con esta landing
                </h2>
                <p className="mx-auto max-w-2xl text-text-muted">
                  Esta página conecta con las áreas que más suelen influir en la captación privada de clínicas premium en Sevilla.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {enlacesRelacionados.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-md"
                  >
                    <h3 className="mb-2 text-xl font-heading font-semibold text-text transition group-hover:text-primary">
                      {item.label}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      Ver página relacionada
                      <ArrowRight size={16} strokeWidth={1.8} className="ml-2" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ FORMULARIO FINAL ═══ */}
          <section id="formulario-auditoria" className="section-primary relative overflow-hidden py-16 sm:py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,209,102,0.16),transparent_45%)]" />
            <div className="container-custom relative z-10">
              <div className="mx-auto mb-9 max-w-3xl text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/12">
                  <Clock3 size={26} strokeWidth={1.7} className="text-[#FFD166]" />
                </div>
                <h2 className="mb-6 text-2xl font-heading font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  ¿Quieres saber cuántos pacientes está perdiendo tu clínica cada semana sin que lo sepas?
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-white/85 sm:text-xl">
                  Solicita un diagnóstico gratuito. En 48h sabrás qué está frenando tu captación y qué 3 prioridades conviene abordar primero.
                </p>
                <p className="mt-4 text-sm text-white/75">
                  Sin compromiso. Sin permanencia. Respuesta en menos de 24h laborables.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <aside className="rounded-lg border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
                  <Target size={30} strokeWidth={1.7} className="mb-5 text-[#FFD166]" />
                  <h3 className="mb-4 text-2xl font-heading font-semibold text-white">
                    Qué recibirás en el diagnóstico
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Revisión de Google Business Profile, web y campañas si existen.',
                      'Lectura de competencia local en Sevilla por tratamientos prioritarios.',
                      'Mapa de fugas entre tráfico, contacto, WhatsApp, formulario y recepción.',
                      'Plan con 3 acciones priorizadas para captar mejor demanda privada.',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/78">
                        <CheckCircle2 size={17} strokeWidth={1.8} className="mt-0.5 flex-shrink-0 text-[#FFD166]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>

                <div className="rounded-lg border border-white/20 bg-white p-6 shadow-lg sm:p-8">
                  <h3 className="mb-3 text-2xl font-heading font-semibold text-text md:text-3xl">
                    Solicita una auditoría gratuita
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-text-muted">
                    Cuéntanos brevemente tu caso y revisaremos dónde puede estar perdiendo oportunidades tu clínica premium en Sevilla.
                  </p>
                  <ContactForm
                    especialidad="Clínicas premium en Sevilla"
                    buttonText="Solicitar diagnóstico gratuito"
                    variant="compact"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
