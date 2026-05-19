import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Lightbulb, ShieldCheck, Target, ExternalLink, ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import { buildOgUrl } from '@/lib/og/buildOgUrl'

const ogImage = buildOgUrl({
  title: 'Quién está detrás de iclinicas',
  category: 'Sobre nosotros',
  subtitle: 'Carlos Cardoso · Marketing sanitario en Sevilla',
})

export const metadata: Metadata = {
  title: 'Sobre iclinicas | Agencia de marketing sanitario en Sevilla',
  description:
    'Carlos Cardoso, consultor con +15 años en marketing digital y ecommerce. Especializado en captación online para clínicas privadas en Sevilla desde 2018.',
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Sobre iclinicas | Carlos Cardoso',
    description: 'Quién hay detrás de iclinicas, cómo trabajamos y por qué nos especializamos en marketing para clínicas privadas en Sevilla.',
    url: 'https://www.iclinicas.es/nosotros',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre iclinicas | Carlos Cardoso',
    description: 'Quién hay detrás de iclinicas, cómo trabajamos y por qué nos especializamos en marketing para clínicas privadas en Sevilla.',
    images: [ogImage],
  },
}

const personReference = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.iclinicas.es/autores/carlos-cardoso#person',
  name: 'Carlos Cardoso',
  url: 'https://www.iclinicas.es/autores/carlos-cardoso',
  mainEntityOfPage: 'https://www.iclinicas.es/autores/carlos-cardoso',
  worksFor: { '@id': 'https://www.iclinicas.es/#organization' },
}

const criterios = [
  {
    icon: Target,
    titulo: 'Captación medible',
    descripcion:
      'Medimos llamadas, WhatsApp, formularios y calidad de contacto. Las visitas importan si ayudan a generar oportunidades reales.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Prudencia sanitaria',
    descripcion:
      'Cuidamos privacidad, tono, expectativas y credibilidad. No usamos promesas clínicas ni claims que no puedan sostenerse.',
  },
  {
    icon: Lightbulb,
    titulo: 'Claridad para dirección',
    descripcion:
      'Explicamos qué se hace, por qué se hace y qué decisión permite tomar. El marketing debe ser entendible para quien gestiona la clínica.',
  },
]

const especialidadesAtendidas = [
  'Clínicas dentales',
  'Psicólogos y terapeutas',
  'Medicina estética',
  'Fisioterapia',
  'Reproducción asistida',
  'Dermatología',
  'Nutricionistas',
  'Oftalmología',
  'Pediatría',
  'Clínicas quirúrgicas',
]

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personReference) }}
        suppressHydrationWarning
      />

      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Sobre nosotros', href: '/nosotros' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <p className="text-label text-accent mb-4">La agencia detrás de iclinicas</p>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Marketing sanitario con criterio, experiencia y medición real
              </h1>
              <p className="text-xl text-text-muted">
                Especialistas en captación online para clínicas privadas en Sevilla. No somos una agencia generalista que también hace salud — somos exclusivamente marketing sanitario.
              </p>
            </div>
          </div>
        </section>

        {/* Fundador */}
        <section className="section-padding bg-surface">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

              <div>
                <Image
                  src="/images/carlos-cardoso.jpeg"
                  alt="Carlos Cardoso — Fundador de iclinicas"
                  width={96}
                  height={96}
                  className="rounded-full border-2 border-primary/20 mb-6 object-cover"
                />
                <p className="text-label text-accent mb-3">Fundador</p>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-4">
                  Carlos Cardoso
                </h2>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  Consultor de marketing digital con más de 15 años de experiencia en proyectos de captación online, ecommerce y estrategia de contenido. Desde 2018 trabajo exclusivamente con clínicas privadas, consultas y profesionales sanitarios en Sevilla.
                </p>
                <p className="text-base text-text-muted leading-relaxed mb-6">
                  La especialización no fue una decisión de nicho de mercado: fue el resultado de comprobar que el sector sanitario tiene lógicas de decisión, normativa y sensibilidad propias que una agencia generalista no suele entender bien.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/autores/carlos-cardoso"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary rounded-full px-4 py-2 hover:bg-primary-dark transition"
                  >
                    Ver perfil de autor
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/carlos-cardoso-75025721/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-full px-4 py-2 hover:bg-primary hover:text-white transition"
                  >
                    Ver perfil en LinkedIn
                    <ExternalLink size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Experiencia</p>
                  <p className="font-semibold text-text">+15 años en marketing digital y ecommerce</p>
                  <p className="text-sm text-text-muted mt-1">SEO, SEM, analítica, estrategia de contenido y CRO en sectores de alta competencia.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Especialización sanitaria</p>
                  <p className="font-semibold text-text">Desde 2018, exclusivamente clínicas privadas</p>
                  <p className="text-sm text-text-muted mt-1">Marketing con conocimiento de la Ley de Publicidad Sanitaria, LOPD y el comportamiento del paciente privado en Sevilla.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Enfoque</p>
                  <p className="font-semibold text-text">Consultor independiente, no agencia de producción masiva</p>
                  <p className="text-sm text-text-muted mt-1">Cada clínica trabaja directamente conmigo. Sin cuentas delegadas a juniors ni plantillas copiadas.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Por qué iclinicas */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Por qué existe iclinicas</h2>

            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                iclinicas nace para resolver un problema muy concreto: clínicas excelentes que no aparecen bien en Google, webs que no transmiten su nivel real y campañas que generan dudas porque nadie sabe qué contactos llegan ni cuáles valen.
              </p>
              <p>
                No trabajamos como una agencia genérica. Miramos el recorrido completo del paciente privado en Sevilla: búsqueda, primera impresión, confianza, web, llamada, WhatsApp, formulario, seguimiento y medición. Todo el ciclo, no solo una parte.
              </p>
              <p>
                Nuestro papel es ayudarte a decidir prioridades con claridad: qué conviene mejorar primero, por qué importa y qué resultado de negocio busca. Sin prometer un número concreto de pacientes, sin métricas infladas y sin lenguaje innecesariamente técnico.
              </p>
            </div>
          </div>
        </section>

        {/* Especialidades atendidas */}
        <section className="section-padding bg-surface">
          <div className="container-custom max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">
              Especialidades con las que trabajamos
            </h2>
            <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
              Cada especialidad tiene pacientes con comportamientos distintos, términos de búsqueda propios y criterios de confianza diferentes. Conocemos esas diferencias.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {especialidadesAtendidas.map((esp) => (
                <span
                  key={esp}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-text"
                >
                  {esp}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Criterios de trabajo */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">
                Nuestros criterios de trabajo
              </h2>
              <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">
                No son valores de decoración corporativa. Son los tres principios que guían cada decisión que tomamos con una clínica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {criterios.map(({ icon: Icon, titulo, descripcion }) => (
                  <div key={titulo} className="card p-8">
                    <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{titulo}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lo que no hacemos */}
        <section className="section-padding bg-surface">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">
              Lo que no hacemos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'No prometemos un número concreto de pacientes',
                'No fabricamos testimonios ni casos inventados',
                'No usamos métricas de vanidad como sustituto de resultados',
                'No trabajamos con clínicas que no tenemos capacidad real de ayudar',
                'No usamos frases clínicas que puedan inducir a error al paciente',
                'No delegamos la cuenta de tu clínica a perfiles sin experiencia',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start bg-white border border-slate-200 rounded-lg p-4">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">×</span>
                  <p className="text-sm text-text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">¿Hablamos de tu clínica?</h2>
            <p className="text-text-muted mb-8">
              Podemos revisar tu presencia en Google, tu web y tus puntos de contacto para detectar oportunidades concretas de mejora.
            </p>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <p className="text-text font-semibold mb-2">Auditoría gratuita de captación online</p>
              <p className="text-text-muted mb-6">
                Sin compromiso. Respuesta en menos de 24h laborables. Explicado en lenguaje claro.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contacto" className="btn-primary">
                  Solicitar auditoría gratuita
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-cardoso-75025721/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition"
                >
                  LinkedIn
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
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
