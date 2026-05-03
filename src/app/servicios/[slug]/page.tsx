import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ClipboardCheck, Search, Target } from 'lucide-react'
import { servicios, faqsPorServicio } from '@/data/servicios'
import { buildBreadcrumbSchema, buildServiceSchema } from '@/lib/schemas'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import FaqSection from '@/components/shared/FaqSection'

interface Props {
  params: {
    slug: string
  }
}

const metadataBySlug: Record<string, { title: string; description: string }> = {
  'seo-medico': {
    title: 'SEO local para clínicas en Sevilla | Pacientes Sevilla',
    description:
      'Mejora la visibilidad de tu clínica en Google y Google Maps. SEO local para clínicas privadas en Sevilla: tratamientos, reseñas, web, contenido y medición.',
  },
  'google-ads': {
    title: 'Google Ads para clínicas en Sevilla | Captación de pacientes',
    description:
      'Campañas de Google Ads para clínicas privadas en Sevilla. Captamos búsquedas con intención real y medimos llamadas, formularios, WhatsApp y calidad del contacto.',
  },
  'diseno-web': {
    title: 'Diseño web para clínicas en Sevilla | Webs que convierten citas',
    description:
      'Diseñamos y optimizamos webs para clínicas privadas en Sevilla. Webs claras, rápidas y orientadas a convertir visitas en llamadas, WhatsApp y solicitudes de cita.',
  },
  'redes-sociales': {
    title: 'Redes sociales para clínicas en Sevilla | Contenido sanitario',
    description:
      'Gestión de redes sociales para clínicas privadas en Sevilla. Contenido sanitario profesional para generar confianza, explicar tratamientos y apoyar la captación de pacientes.',
  },
}

const serviceContent: Record<
  string,
  {
    problem: string
    keyCopy: string
    sections: Array<{ title: string; items: string[] }>
    metrics: string[]
    fit: string
  }
> = {
  'seo-medico': {
    problem:
      'Tu clínica puede ser buena, tener pacientes satisfechos y aun así no aparecer cuando alguien busca en Google tu especialidad, tu tratamiento o una clínica cercana. En Sevilla la competencia local pesa mucho: ficha de Google, reseñas, web, contenidos y ubicación deben contar la misma historia.',
    keyCopy:
      'No trabajamos SEO como una lista técnica. Lo enfocamos a una pregunta: qué busca un paciente antes de elegir una clínica como la tuya y por qué debería contactar contigo.',
    sections: [
      {
        title: 'Qué revisamos',
        items: [
          'Google Business Profile, categorías, servicios, fotos, reseñas y publicaciones.',
          'Web, arquitectura, páginas de tratamientos, enlazado interno y velocidad.',
          'Búsquedas locales por especialidad, barrio, zona y competencia directa.',
          'Search Console, páginas con impresiones, clics y oportunidades de mejora.',
        ],
      },
      {
        title: 'Qué optimizamos',
        items: [
          'Titles, metas, encabezados y contenido de servicios con intención sanitaria real.',
          'Páginas por tratamiento, ubicación o necesidad cuando aportan valor.',
          'Schema local/sanitario cuando procede y señales de confianza visibles.',
          'Reseñas, FAQs, fotos reales y mensajes que ayudan a decidir.',
        ],
      },
    ],
    metrics: ['Visibilidad local', 'Clics orgánicos', 'Llamadas', 'WhatsApp', 'Formularios', 'Calidad de solicitudes'],
    fit:
      'Tiene sentido para clínicas que dependen demasiado del boca a boca, aparecen por debajo de competidores o tienen una web con servicios importantes poco visibles.',
  },
  'google-ads': {
    problem:
      'Pagar anuncios no es una estrategia si no sabes qué búsquedas activan los clics, qué contactos llegan y cuáles se convierten en citas rentables. En salud privada importa tanto atraer demanda como filtrar consultas poco cualificadas.',
    keyCopy:
      'Google Ads no consiste en poner anuncios. Consiste en controlar inversión, captar intención real y medir si las llamadas, WhatsApp y formularios tienen calidad para tu clínica.',
    sections: [
      {
        title: 'Qué configuramos',
        items: [
          'Campañas Search por especialidad, tratamiento, zona y urgencia de búsqueda.',
          'Segmentación local en Sevilla capital, provincia, barrios o radios concretos.',
          'Palabras clave negativas para evitar gasto en empleo, formación, barato o consultas no rentables.',
          'Anuncios con mensajes prudentes, claros y alineados con normativa sanitaria.',
        ],
      },
      {
        title: 'Qué optimizamos',
        items: [
          'Landing pages específicas para cada servicio o tratamiento prioritario.',
          'Tracking de llamadas, formularios, WhatsApp y eventos clave.',
          'Coste por contacto, tasa de conversión y lectura cualitativa de solicitudes.',
          'Presupuesto según servicios con mayor margen, capacidad de agenda y estacionalidad.',
        ],
      },
    ],
    metrics: ['Coste por contacto', 'Solicitudes por canal', 'Calidad del lead', 'Tasa de conversión', 'Gasto inútil evitado'],
    fit:
      'Tiene sentido si necesitas activar demanda más rápido, lanzar un tratamiento, cubrir huecos de agenda o comprobar qué servicios generan contactos privados de más valor.',
  },
  'diseno-web': {
    problem:
      'Una web sanitaria no puede limitarse a ser bonita. Debe explicar qué haces, por qué confiar, dónde estás y cómo contactar sin fricción, especialmente desde móvil. Si no lo consigue, las visitas se van a otra clínica.',
    keyCopy:
      'Tratamos la web como un activo comercial de la clínica: confianza, claridad, contacto y medición. El diseño importa, pero la conversión importa más.',
    sections: [
      {
        title: 'Qué debe incluir',
        items: [
          'Home clara con especialidad, ubicación, equipo y vías de contacto visibles.',
          'Páginas de tratamientos con dudas frecuentes, proceso, confianza y CTA.',
          'Fotos reales, reseñas, instalaciones, ubicación, horarios y equipo.',
          'Formularios simples, botón de llamada y WhatsApp accesibles desde móvil.',
        ],
      },
      {
        title: 'Qué cuidamos',
        items: [
          'UX móvil, velocidad, estructura SEO básica y legibilidad del contenido.',
          'Landings para campañas con mensajes concretos por tratamiento.',
          'Conexión con WhatsApp, formularios o sistemas de cita si procede.',
          'Analítica para saber qué páginas generan contactos y dónde se pierde gente.',
        ],
      },
    ],
    metrics: ['Clics a llamada', 'WhatsApp', 'Formularios', 'Conversión por página', 'Velocidad', 'Rendimiento móvil'],
    fit:
      'Tiene sentido si tu web no refleja el nivel real de la clínica, recibe visitas pero pocos contactos o no permite medir qué está pasando.',
  },
  'redes-sociales': {
    problem:
      'Las redes de una clínica no deberían perseguir likes vacíos. Deben reforzar confianza, resolver dudas, mostrar criterio profesional y acompañar al paciente antes de buscar la web, llamar o pedir cita.',
    keyCopy:
      'Trabajamos contenido sanitario con intención: educar, tranquilizar, explicar y derivar a un siguiente paso claro sin sonar agresivos.',
    sections: [
      {
        title: 'Qué planificamos',
        items: [
          'Calendario editorial por especialidad, dudas frecuentes y momentos de decisión.',
          'Posts, reels y piezas informativas con tono profesional y comprensible.',
          'Contenido sobre equipo, instalaciones, proceso de primera visita y FAQs.',
          'Piezas reutilizables para campañas, landings y comunicación de recepción.',
        ],
      },
      {
        title: 'Qué optimizamos',
        items: [
          'Coherencia visual para que la presencia digital esté al nivel de la clínica.',
          'Derivación a WhatsApp, llamada, web o formulario según objetivo.',
          'Mensajes que evitan presión comercial y respetan la sensibilidad sanitaria.',
          'Medición de consultas, tráfico, mensajes y apoyo a campañas.',
        ],
      },
    ],
    metrics: ['Mensajes', 'Clics a web', 'WhatsApp', 'Contenido con más respuesta', 'Apoyo a campañas', 'Consultas atribuidas'],
    fit:
      'Tiene sentido si tu clínica necesita generar confianza antes de la cita, explicar tratamientos complejos o dar coherencia a una presencia social irregular.',
  },
}

const serviceCtas: Record<string, string> = {
  'seo-medico': 'Quiero revisar el SEO de mi clínica',
  'google-ads': 'Quiero revisar mis campañas',
  'diseno-web': 'Quiero revisar mi web',
  'redes-sociales': 'Quiero revisar mis redes',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = servicios.find((s) => s.slug === params.slug)

  if (!servicio) {
    return { title: 'Servicio no encontrado' }
  }

  const pageMeta = metadataBySlug[servicio.slug]

  return {
    title: pageMeta?.title || `${servicio.nombre} | Pacientes Sevilla`,
    description: pageMeta?.description || servicio.descripcion,
    alternates: {
      canonical: `/servicios/${params.slug}`,
    },
    openGraph: {
      title: pageMeta?.title || servicio.nombre,
      description: pageMeta?.description || servicio.descripcion,
      url: `https://pacientessevilla.com/servicios/${params.slug}`,
      images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
    },
  }
}

export async function generateStaticParams() {
  return servicios.map((svc) => ({ slug: svc.slug }))
}

export default function ServicioPage({ params }: Props) {
  const servicio = servicios.find((s) => s.slug === params.slug)

  if (!servicio) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-h1 font-heading text-primary mb-4">Servicio no encontrado</h1>
          <p className="text-text-muted">Lo sentimos, no pudimos encontrar este servicio.</p>
        </main>
        <Footer />
      </div>
    )
  }

  const content = serviceContent[servicio.slug]
  const serviceCta = serviceCtas[servicio.slug] || 'Solicitar auditoría gratuita'
  const faqs = faqsPorServicio[servicio.slug] || []
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Servicios', url: 'https://pacientessevilla.com/servicios' },
    { name: servicio.nombre, url: `https://pacientessevilla.com/servicios/${servicio.slug}` },
  ])
  const serviceSchema = buildServiceSchema({
    name: `${servicio.nombre} en Sevilla`,
    description: servicio.descripcion,
    url: `https://pacientessevilla.com/servicios/${servicio.slug}`,
  })
  const relatedLinks: Record<string, Array<{ href: string; label: string }>> = {
    'seo-medico': [
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas privadas' },
      { href: '/servicios/diseno-web', label: 'diseño web para clínicas' },
      { href: '/especialidades/clinicas-dentales-sevilla', label: 'marketing para clínicas dentales en Sevilla' },
      { href: '/especialidades/psicologos-sevilla', label: 'marketing para psicólogos en Sevilla' },
    ],
    'google-ads': [
      { href: '/servicios/diseno-web', label: 'landing y diseño web para clínicas' },
      { href: '/servicios/seo-medico', label: 'SEO local para clínicas' },
      { href: '/especialidades/medicina-estetica-sevilla', label: 'marketing para medicina estética en Sevilla' },
      { href: '/especialidades/clinicas-cirugia-sevilla', label: 'marketing para clínicas quirúrgicas en Sevilla' },
    ],
    'diseno-web': [
      { href: '/servicios/seo-medico', label: 'SEO local para clínicas' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas privadas' },
      { href: '/blog/diseno-web-clinicas', label: 'guía de diseño web para clínicas' },
    ],
    'redes-sociales': [
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas privadas' },
      { href: '/servicios/diseno-web', label: 'diseño web para clínicas' },
      { href: '/especialidades/medicina-estetica-sevilla', label: 'marketing para medicina estética en Sevilla' },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Servicios', href: '/servicios' },
                { label: servicio.nombre, href: `/servicios/${servicio.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start my-6">
              <div>
                {servicio.imagen && (
                  <div className="mb-6 rounded-lg overflow-hidden shadow-md h-48 md:h-56 relative">
                    <Image src={servicio.imagen} alt={servicio.nombre} fill className="object-cover" />
                  </div>
                )}

                <p className="text-label text-accent mb-4">Servicio especializado para clínicas</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{servicio.nombre}</h1>
                <p className="text-base sm:text-lg text-text-muted mb-6">{servicio.descripcion}</p>

                <div className="bg-surface border border-slate-200 rounded-lg p-6 mb-6">
                  <p className="font-semibold text-text mb-2">Problema que resuelve</p>
                  <p className="text-text-muted leading-relaxed">{content.problem}</p>
                </div>

                <p className="text-text leading-relaxed font-medium">{content.keyCopy}</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm lg:sticky lg:top-24">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                  ¿Quieres ver oportunidades de mejora?
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Podemos revisar este área de tu captación sin compromiso y decirte qué conviene mejorar primero.
                </p>
                <a href="#formulario-auditoria" className="btn-primary btn-primary-lg block text-center">
                  {serviceCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="que-revisamos" className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              {content.sections.map((section) => (
                <div key={section.title} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                    <ClipboardCheck size={22} strokeWidth={1.6} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-5">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-text-muted">
                        <Check size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6">
                  Qué resultados medimos
                </h2>
                <p className="text-text-muted mb-6">
                  Los resultados dependen del punto de partida, especialidad, zona, inversión y capacidad de seguimiento de cada clínica. Por eso medimos contactos reales y calidad, no solo métricas de marketing.
                </p>
                <div className="flex flex-wrap gap-3">
                  {content.metrics.map((metric) => (
                    <span key={metric} className="px-4 py-2 rounded-full bg-surface border border-slate-200 text-sm font-medium text-text">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <Search size={28} strokeWidth={1.6} className="text-primary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Para qué clínicas tiene sentido</h3>
                <p className="text-text-muted text-sm leading-relaxed">{content.fit}</p>
              </div>
            </div>
          </div>
        </section>

        {faqs.length > 0 && <FaqSection faqs={faqs} title={`Preguntas sobre ${servicio.nombre.toLowerCase()}`} />}

        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6">
              También puede interesarte
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {(relatedLinks[servicio.slug] || []).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-text-muted transition hover:border-primary hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                auditoría gratuita
              </Link>
            </div>
          </div>
        </section>

        <section id="formulario-auditoria" className="section-padding section-primary">
          <div className="container-custom">
            <Target size={32} strokeWidth={1.6} className="mx-auto mb-5 text-[#FFD166]" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
                ¿Quieres revisar si este servicio encaja con tu clínica?
              </h2>
              <p className="text-base sm:text-lg text-white">
                Cuéntanos brevemente tu caso y revisaremos dónde puede estar perdiendo oportunidades tu clínica.
              </p>
              <p className="text-sm opacity-80 mt-4 text-white">
                La auditoría no te obliga a contratar. Sirve para saber qué mejorar primero y si tiene sentido trabajar juntos.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-lg border border-white/20 p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                Solicita una auditoría gratuita
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Revisaremos Google, web, campañas, reputación o conversión según el servicio que estás consultando.
              </p>
              <ContactForm especialidad={servicio.nombre} buttonText={serviceCta} variant="compact" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
