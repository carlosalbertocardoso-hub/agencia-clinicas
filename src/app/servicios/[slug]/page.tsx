import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ClipboardCheck, Search, Target } from 'lucide-react'
import { servicios, faqsPorServicio } from '@/data/servicios'
import { buildServiceSchema } from '@/lib/schemas'
import { buildOgUrl } from '@/lib/og/buildOgUrl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import FaqSection from '@/components/shared/FaqSection'
import GoogleBusinessMap from '@/components/shared/GoogleBusinessMap'

interface Props {
  params: {
    slug: string
  }
}

const metadataBySlug: Record<string, { title: string; description: string }> = {
  'seo-medico': {
    title: 'SEO para clínicas privadas en Sevilla — aparecer donde busca el paciente | iclinicas',
    description:
      'Tu clínica puede no aparecer en Google aunque seas bueno. Trabajamos SEO local real: ficha de Google, páginas por tratamiento, reseñas y medición de contactos. Sin atajos.',
  },
  'google-ads': {
    title: 'Google Ads para clínicas en Sevilla — sin gastar en clics que no convierten | iclinicas',
    description:
      'Muchas clínicas pagan anuncios y no saben qué citas generan. Configuramos campañas con negativas, tracking de llamadas y lectura de calidad del contacto. Solo búsquedas con intención real.',
  },
  'diseno-web': {
    title: 'Diseño web para clínicas en Sevilla — webs que piden cita, no solo que gustan | iclinicas',
    description:
      'Una web bonita que no convierte no sirve. Diseñamos webs para clínicas donde el paciente entiende qué haces, confía y contacta desde el móvil en menos de un minuto.',
  },
  'marketing-para-clinicas': {
    title: 'Agencia de marketing para clínicas | iclinicas',
    description:
      'Captación de pacientes para clínicas privadas: auditoría, SEO local, Google Ads, web y medición de contactos cualificados. Exclusivamente sector sanitario.',
  },
  'redes-sociales': {
    title: 'Redes sociales para clínicas en Sevilla — contenido que genera confianza, no likes | iclinicas',
    description:
      'En salud, las redes no son para viralizarse. Son para que el paciente te conozca antes de llamar. Planificamos contenido sanitario que explica, tranquiliza y deriva a contacto.',
  },
}

const longTailKeywordsServicios: Record<string, string[]> = {
  'seo-medico': ['SEO médico Sevilla', 'posicionamiento web clínicas', 'Google Maps clínicas Sevilla', 'auditoría SEO sanitario'],
  'google-ads': ['Google Ads pacientes', 'anuncios clínicas Sevilla', 'PPC sanitario', 'campañas ads médicas'],
  'diseno-web': ['diseño web sanitario', 'landing page clínica', 'web conversión pacientes', 'página web médico Sevilla'],
  'marketing-para-clinicas': ['agencia marketing clínicas', 'captación pacientes privados', 'marketing sanitario España', 'consultoría marketing clínicas'],
  'redes-sociales': ['redes sociales clínicas', 'Instagram psicólogos Sevilla', 'contenido sanitario', 'marketing contenido médico'],
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
  'marketing-para-clinicas': {
    problem:
      'La mayoría de clínicas en España invierten en marketing sin saber qué genera pacientes. Tienen una web, quizás anuncios activos, un perfil en Instagram que se actualiza cuando hay tiempo, y al final del mes no saben qué canal trajo cada cita. Eso no es un problema de presupuesto: es un problema de estrategia y medición.',
    keyCopy:
      'Antes de proponer nada, revisamos cómo aparece tu clínica en Google, qué transmite tu web y si tu inversión actual está generando contactos cualificados. La auditoría es el punto de partida, no el cierre de una venta.',
    sections: [
      {
        title: 'Cómo revisamos la captación',
        items: [
          'Google Business Profile: categorías, servicios, reseñas, fotos, horarios y coherencia con la web.',
          'Web: velocidad en móvil, claridad del mensaje, facilidad de contacto y páginas por tratamiento.',
          'Campañas activas: búsquedas, negativas, landing y medición real de contactos por canal.',
          'Competencia local: qué clínicas aparecen por delante y qué hacen diferente.',
        ],
      },
      {
        title: 'Qué construimos juntos',
        items: [
          'Plan de captación priorizando los canales con mayor retorno para tu especialidad y zona.',
          'SEO local para aparecer cuando el paciente busca tu especialidad cerca o en Sevilla.',
          'Google Ads si necesitas resultados antes de que el SEO madure o al lanzar un tratamiento.',
          'Web o landing orientada a convertir visitas en llamadas, formularios y WhatsApp.',
        ],
      },
    ],
    metrics: ['Llamadas', 'Formularios', 'WhatsApp', 'Coste por contacto', 'Calidad de solicitudes', 'Retorno por canal'],
    fit:
      'Tiene sentido si gestionas una clínica privada y no sabes qué canal de marketing genera más citas, si has invertido en una agencia generalista sin ver resultados claros, o si quieres revisar la captación antes de escalar inversión.',
  },
  'seo-medico': {
    problem:
      'En Sevilla hay cientos de clínicas buenas que nadie encuentra. El paciente busca "dentista Nervión" o "psicólogo ansiedad Sevilla" y hace clic en lo que aparece primero, con mejores reseñas y una ficha completa. Si tu clínica no está ahí, estás perdiendo contactos a favor de competidores que no son necesariamente mejores.',
    keyCopy:
      'Antes de tocar una sola línea de código o cambiar un título, miramos qué busca realmente un paciente de tu especialidad en Sevilla. Luego decidimos qué conviene hacer primero.',
    sections: [
      {
        title: 'Por dónde empezamos',
        items: [
          'Tu ficha de Google: categorías, servicios, horarios, fotos recientes y gestión de reseñas.',
          'Web: velocidad, páginas por tratamiento, enlazado entre servicios y facilidad de contacto desde móvil.',
          'Búsquedas reales de tu especialidad en Sevilla: qué buscan, cómo buscan y quién está por delante de ti.',
          'Search Console: qué páginas ya reciben visitas y cuáles están a un ajuste de subir.',
        ],
      },
      {
        title: 'Qué cambia en la práctica',
        items: [
          'Titles, metas y encabezados escritos para lo que busca el paciente, no para lo que suena bien en despacho.',
          'Páginas de tratamientos específicos cuando aportan más que una página genérica de servicios.',
          'Datos estructurados sanitarios y señales de confianza visibles donde el paciente las necesita.',
          'Gestión activa de reseñas, FAQs y fotos reales que ayudan a decidir antes de llamar.',
        ],
      },
    ],
    metrics: ['Visibilidad local', 'Clics orgánicos', 'Llamadas', 'WhatsApp', 'Formularios', 'Calidad de solicitudes'],
    fit:
      'Encaja sobre todo si dependes demasiado del boca a boca, si competidores menos buenos que tú aparecen antes en Google, o si tienes tratamientos de valor que nadie encuentra en tu web.',
  },
  'google-ads': {
    problem:
      'La mayoría de clínicas que han probado Google Ads y lo han dejado cometieron el mismo error: anuncios sin negativas, sin landing específica y sin saber si las llamadas que llegaban valían algo. El dinero se fue en clics de personas que buscaban trabajo, precios de hace diez años o información que no tenía intención de compra.',
    keyCopy:
      'El objetivo de Ads no es tener impresiones. Es saber qué búsquedas generan citas, cuánto cuesta cada contacto y si ese contacto tiene sentido para tu clínica. Lo demás es ruido.',
    sections: [
      {
        title: 'Cómo lo montamos',
        items: [
          'Campañas por especialidad, tratamiento y zona, no una campaña genérica para todo.',
          'Segmentación en Sevilla capital, barrios concretos o radio desde tu clínica según lo que funcione.',
          'Listado extenso de negativas: empleo, formación, "gratis", precios de hace años y búsquedas sin intención privada.',
          'Anuncios con mensajes claros, sin promesas clínicas y dentro de la normativa sanitaria.',
        ],
      },
      {
        title: 'Qué medimos mientras corre',
        items: [
          'Landings por servicio o tratamiento, no la home genérica de la clínica.',
          'Tracking de llamadas, formularios y WhatsApp con atribución real por campaña.',
          'Coste por contacto, conversión por landing y lectura cualitativa de solicitudes recibidas.',
          'Reparto de presupuesto según margen del tratamiento, disponibilidad de agenda y temporada.',
        ],
      },
    ],
    metrics: ['Coste por contacto', 'Solicitudes por canal', 'Calidad del lead', 'Tasa de conversión', 'Gasto evitado en clics sin intención'],
    fit:
      'Tiene más sentido cuando necesitas resultados antes de que el SEO madure, al lanzar un tratamiento nuevo, o cuando tienes huecos de agenda que cubrir en un plazo concreto.',
  },
  'diseno-web': {
    problem:
      'Una web médica atractiva que no convierte es solo un gasto de diseño. El problema suele estar en el móvil: el 70% del tráfico de las clínicas en Sevilla llega desde teléfono, y muchas webs tardan cinco segundos en cargar, tienen el botón de llamada enterrado o no explican qué hace exactamente esa clínica en las primeras tres líneas.',
    keyCopy:
      'La web es el único activo digital que controlas completamente. Vale la pena que trabaje para ti: que explique bien, que genere confianza y que permita contactar en diez segundos.',
    sections: [
      {
        title: 'Lo que no puede faltar',
        items: [
          'Home que deja claro en segundos: qué especialidad, dónde estás y cómo contactar.',
          'Páginas por tratamiento con proceso, dudas frecuentes, fotos reales y CTA visible.',
          'Equipo, instalaciones y reseñas donde el paciente las busca, no solo en el footer.',
          'Formulario corto, botón de llamada y acceso a WhatsApp accesibles desde el primer scroll en móvil.',
        ],
      },
      {
        title: 'En lo que nos fijamos',
        items: [
          'Velocidad y UX móvil primero. Una web bonita que carga lento pierde al paciente antes de que la vea.',
          'Landings específicas para campañas, separadas de la web principal si hace falta.',
          'Conexión con WhatsApp Business, formularios o sistemas de cita según cómo trabaje la clínica.',
          'Analítica que diga qué páginas generan contactos reales y dónde abandona la gente.',
        ],
      },
    ],
    metrics: ['Clics a llamada', 'WhatsApp', 'Formularios', 'Conversión por página', 'Velocidad de carga', 'Rendimiento en móvil'],
    fit:
      'Tiene sentido cuando la web no refleja el nivel real de la clínica, cuando llegan visitas pero pocos contactos, o cuando nadie sabe por qué los formularios no funcionan.',
  },
  'redes-sociales': {
    problem:
      'Muchas clínicas publican en Instagram sin saber si eso genera algo. El problema no es publicar poco. Es publicar sin propósito: consejos genéricos que cualquiera puede encontrar en Google, fotos de stock y felicitaciones de festivos. El paciente lo ve y no aprende nada sobre ti ni sobre por qué debería llamarte.',
    keyCopy:
      'En salud, las redes no son para crecer rápido. Son para que alguien que ya te ha buscado en Google confirme que eres de confianza antes de llamar. Ese es el trabajo.',
    sections: [
      {
        title: 'Lo que planificamos contigo',
        items: [
          'Calendario editorial anclado en tus especialidades, las dudas reales de tus pacientes y los momentos del año en que más buscan.',
          'Piezas informativas, explicativas y de equipo con tono profesional, no de gabinete de comunicación.',
          'Contenido sobre cómo es la primera visita, qué esperar, proceso y qué diferencia tu consulta.',
          'Piezas que tienen vida fuera de redes: para campañas, para la web y para recepción.',
        ],
      },
      {
        title: 'Lo que medimos',
        items: [
          'Coherencia visual con el nivel real de la clínica, no un perfil que parece de otra empresa.',
          'Derivación a WhatsApp, llamada o web cuando el contenido genera interés concreto.',
          'Mensajes que no suenan a venta y no prometen resultados que no se pueden garantizar.',
          'Contactos, mensajes directos, clics y apoyo medible a campañas de pago.',
        ],
      },
    ],
    metrics: ['Mensajes directos', 'Clics a web', 'WhatsApp', 'Publicaciones con más respuesta', 'Apoyo a campañas', 'Consultas atribuidas a redes'],
    fit:
      'Encaja cuando la clínica necesita generar confianza antes de la primera cita, cuando explica tratamientos complejos que necesitan contexto o cuando el perfil actual no refleja el nivel real del equipo.',
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
  const desc = pageMeta?.description || servicio.descripcion
  const truncatedDesc = desc.length > 160 ? desc.substring(0, 157) + '...' : desc
  const ogImage = buildOgUrl({
    title: servicio.nombre,
    category: 'Servicio',
    subtitle: 'Marketing sanitario en Sevilla',
  })

  return {
    title: pageMeta?.title || `${servicio.nombre} | iclinicas`,
    description: truncatedDesc,
    alternates: {
      canonical: `/servicios/${params.slug}`,
    },
    openGraph: {
      title: pageMeta?.title || servicio.nombre,
      description: truncatedDesc,
      url: `https://www.iclinicas.es/servicios/${params.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta?.title || servicio.nombre,
      description: truncatedDesc,
      images: [ogImage],
    },
    keywords: [
      `${servicio.nombre.toLowerCase()} Sevilla`,
      ...(longTailKeywordsServicios[params.slug] || []),
    ],
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
  const serviceSchema = buildServiceSchema({
    name: `${servicio.nombre} en Sevilla`,
    description: servicio.descripcion,
    url: `https://www.iclinicas.es/servicios/${servicio.slug}`,
  })

  const relatedLinks: Record<string, Array<{ href: string; label: string }>> = {
    'marketing-para-clinicas': [
      { href: '/servicios/seo-medico', label: 'SEO para clínicas' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/servicios/diseno-web', label: 'diseño web sanitario' },
      { href: '/blog/seo-para-clinicas-guia', label: 'guía de SEO para clínicas' },
      { href: '/especialidades/clinicas-dentales-sevilla', label: 'marketing para clínicas dentales' },
    ],
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
    <>
      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />
      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.pregunta,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.respuesta,
            },
          })),
        }) }} suppressHydrationWarning />
      )}
      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow">

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
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">
                  {`${servicio.nombre} para clínicas en Sevilla`}
                </h1>
                <p className="text-base sm:text-lg text-text-muted mb-6">{servicio.descripcion}</p>

                <div className="bg-surface border border-slate-200 rounded-lg p-6 mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-text mb-3">
                    El reto real de la captación online para clínicas en Sevilla
                  </h2>
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
                  Estrategias de {servicio.nombre.toLowerCase()} con mayor retorno para el sector salud
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

        {faqs.length > 0 && <FaqSection faqs={faqs} title={`Preguntas frecuentes sobre ${servicio.nombre.toLowerCase()} médico en Sevilla`} />}

        <GoogleBusinessMap />

        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6">
              Servicios de marketing sanitario relacionados con {servicio.nombre.toLowerCase()}
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
    </>
  )
}
