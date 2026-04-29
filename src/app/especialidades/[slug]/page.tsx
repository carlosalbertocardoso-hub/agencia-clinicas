import type { Metadata } from 'next'
import { especialidades, getEspecialidadBySlug } from '@/data/especialidades'
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const especialidad = getEspecialidadBySlug(params.slug)

  if (!especialidad) {
    return {
      title: 'Especialidad no encontrada',
    }
  }

  return {
    title: `Marketing ${especialidad.nombre} en Sevilla | Pacientes Sevilla`,
    description: especialidad.descripcionLarga,
    openGraph: {
      title: `Marketing ${especialidad.nombre} en Sevilla`,
      description: especialidad.descripcionLarga,
      url: `https://pacientessevilla.com/especialidades/${params.slug}`,
      images: [
        {
          url: '/images/og-default.svg',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return especialidades.map((esp) => ({
    slug: esp.slug,
  }))
}

// FAQs por especialidad
const faqsPorEspecialidad: Record<string, Array<{ id: string; pregunta: string; respuesta: string }>> = {
  'clinicas-dentales-sevilla': [
    {
      id: '1',
      pregunta: '¿Cuál es el costo promedio de una campaña SEO para una clínica dental?',
      respuesta:
        'Varía entre €600-2.000/mes según competencia. Ofrecemos auditoría gratuita para proponer presupuesto personalizado.',
    },
    {
      id: '2',
      pregunta: '¿Cuánto tiempo para ver resultados en Google Ads?',
      respuesta: 'Resultados inmediatos (días). Primeros pacientes en la primera semana según configuración.',
    },
    {
      id: '3',
      pregunta: '¿Qué tipos de tratamientos promocionamos mejor?',
      respuesta:
        'Implantes, blanqueamiento, ortodoncia y estética dental tienen gran demanda. Adaptamos la estrategia a tu oferta.',
    },
  ],
  'psicologos-sevilla': [
    {
      id: '1',
      pregunta: '¿Es ético hacer publicidad siendo psicólogo?',
      respuesta:
        'Sí. Mientras respetes el código de ética y la privacidad de pacientes, es totalmente ético y recomendable.',
    },
    {
      id: '2',
      pregunta: '¿Qué especialidades de psicología se promocionan mejor?',
      respuesta:
        'Terapia individual, ansiedad, depresión, pareja, infantil. Adaptamos a tu especialidad y enfoque.',
    },
    {
      id: '3',
      pregunta: '¿Cómo garantizáis la confidencialidad de los pacientes?',
      respuesta:
        'Seguimos GDPR y normativa sanitaria. No usamos datos de pacientes, solo generamos leads calificados.',
    },
  ],
  'medicina-estetica-sevilla': [
    {
      id: '1',
      pregunta: '¿Cuáles son los tratamientos más demandados?',
      respuesta:
        'Botox, ácido hialurónico, lifting no invasivo, liposcultura. Adaptamos a tu cartera de servicios.',
    },
    {
      id: '2',
      pregunta: '¿Funciona el marketing digital para medicina estética?',
      respuesta:
        'Excelentemente. Es uno de los sectores con mayor ROI. Generamos muchas consultas mensuales.',
    },
    {
      id: '3',
      pregunta: '¿Cómo controlamos la calidad de los leads?',
      respuesta:
        'Segmentación geográfica, demográfica e intereses. Solo atraemos gente realmente interesada en tratamientos.',
    },
  ],
  'fisioterapia-sevilla': [
    {
      id: '1',
      pregunta: '¿Qué tipos de lesiones tratáis en fisioterapia?',
      respuesta:
        'Lesiones deportivas, cervicalgia, lumbalgia, lesiones de hombro, rodilla. Trabajamos con marketing para cualquier especialidad de fisioterapia.',
    },
    {
      id: '2',
      pregunta: '¿Funciona el marketing digital para clínicas de fisioterapia?',
      respuesta:
        'Muy efectivo. Pacientes buscan "fisioterapia cerca" y especialidades específicas en Google. Con SEO y Google Ads captas pacientes locales.',
    },
    {
      id: '3',
      pregunta: '¿Cuál es el presupuesto típico en Google Ads para fisioterapia?',
      respuesta:
        'Entre €300-1.200/mes según competencia local. Ofrecemos auditoría gratuita para proponer estrategia y presupuesto personalizado.',
    },
  ],
  'nutricion-sevilla': [
    {
      id: '1',
      pregunta: '¿Es legal hacer publicidad siendo nutricionista?',
      respuesta:
        'Sí. Mientras respetes normativa profesional y privacidad de pacientes, la publicidad es totalmente legal y recomendable.',
    },
    {
      id: '2',
      pregunta: '¿Qué servicios de nutrición se promocionan mejor?',
      respuesta:
        'Nutrición clínica, pérdida de peso, nutrición deportiva, alergias alimentarias. Adaptamos campaña a tu especialización.',
    },
    {
      id: '3',
      pregunta: '¿Cuánto cuesta una campaña de marketing para nutricionistas?',
      respuesta:
        'Desde €400/mes en SEO hasta €800-1.500/mes en Google Ads según objetivos. Evaluamos en auditoría gratuita.',
    },
  ],
  'pediatria-sevilla': [
    {
      id: '1',
      pregunta: '¿Cómo hacer marketing ético en pediatría?',
      respuesta:
        'Enfocando en beneficios para la salud infantil, privacidad de datos, y contenido educativo. No usamos datos de menores, solo generamos consultas.',
    },
    {
      id: '2',
      pregunta: '¿A quién llega principalmente el marketing en pediatría?',
      respuesta:
        'A padres que buscan "pediatra especializado", "desarrollo infantil", "vacunas". Nos dirigimos a padres preocupados por salud de sus hijos.',
    },
    {
      id: '3',
      pregunta: '¿Cuál es el ROI en marketing para clínicas pediátricas?',
      respuesta:
        'Alto. Pacientes pediátricos generan relaciones largo plazo. Con marketing efectivo, aumentas consultas en 250-300%.',
    },
  ],
  'cirugia-sevilla': [
    {
      id: '1',
      pregunta: '¿Puedo hacer publicidad siendo cirujano?',
      respuesta:
        'Sí. Siguiendo código de ética médica y colegio profesional, la publicidad es ética y efectiva para atraer pacientes.',
    },
    {
      id: '2',
      pregunta: '¿Qué procedimientos quirúrgicos se publicitan mejor?',
      respuesta:
        'Cirugía bariátrica, cirugía oncológica, cirugía vascular, traumatología. Adaptamos estrategia a tu especialidad quirúrgica.',
    },
    {
      id: '3',
      pregunta: '¿Cómo garantizáis confidencialidad en cirugía?',
      respuesta:
        'Seguimos GDPR y regulaciones sanitarias. No publicamos datos de pacientes, solo generamos leads cualificados y anónimos.',
    },
  ],
}

export default function EspecialidadPage({ params }: Props) {
  const especialidad = getEspecialidadBySlug(params.slug)

  if (!especialidad) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-h1 font-heading text-primary mb-4">Especialidad no encontrada</h1>
          <p className="text-text-muted">Lo sentimos, no pudimos encontrar esta especialidad.</p>
        </main>
        <Footer />
      </div>
    )
  }

  const faqs = faqsPorEspecialidad[especialidad.slug] || []

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Especialidades', url: 'https://pacientessevilla.com/especialidades' },
    { name: especialidad.nombre, url: `https://pacientessevilla.com/especialidades/${especialidad.slug}` },
  ])

  const serviceSchema = buildServiceSchema({
    name: `Marketing ${especialidad.nombre} en Sevilla`,
    description: especialidad.descripcionLarga,
    url: `https://pacientessevilla.com/especialidades/${especialidad.slug}`,
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary to-white py-16">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Especialidades', href: '/especialidades' },
                { label: especialidad.nombre, href: `/especialidades/${especialidad.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">{especialidad.icono}</div>
                <h1 className="text-h1 font-heading text-primary mb-6">{especialidad.nombre}</h1>
                <p className="text-lg text-text-muted mb-8">{especialidad.descripcionLarga}</p>

                <div className="bg-neutral border-l-4 p-6 rounded" style={{ borderColor: especialidad.color }}>
                  <p className="font-semibold text-text mb-2">Resultado promedio:</p>
                  <p className="text-2xl font-bold" style={{ color: especialidad.color }}>
                    {especialidad.resultados}
                  </p>
                </div>
              </div>

              <div className="bg-neutral border border-neutral-dark rounded p-8 shadow-lg">
                <h2 className="text-h3 font-heading text-text mb-6">Solicita auditoría gratis</h2>
                <ContactForm especialidad={especialidad.nombre} buttonText="Solicitar auditoría" />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios relacionados */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <h2 className="text-h2 font-heading mb-8 text-center">Servicios para {especialidad.nombre}</h2>

            <div className="space-y-4">
              {especialidad.servicios.map((servicio, idx) => (
                <div key={idx} className="bg-neutral p-6 rounded border border-neutral-dark hover:border-primary transition">
                  <h3 className="font-semibold text-text mb-2">
                    {idx + 1}. {servicio.charAt(0).toUpperCase() + servicio.slice(1)}
                  </h3>
                  <p className="text-text-muted text-sm">
                    Estrategia especializada de {servicio.toLowerCase()} diseñada específicamente para{' '}
                    {especialidad.nombre.toLowerCase()} en Sevilla.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué es importante */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-h2 font-heading mb-8 text-center">
              ¿Por qué marketing digital para {especialidad.nombre.toLowerCase()}?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Tu público está en internet</h3>
                  <p className="text-text-muted">
                    Pacientes buscan {especialidad.nombre.toLowerCase()} en Google y redes sociales antes de
                    contactar. Si no apareces, tus competidores los captan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Captación precisa</h3>
                  <p className="text-text-muted">
                    Marketing digital permite atraer solo personas interesadas en tu especialidad, no público aleatorio.
                    Menos presupuesto, más pacientes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">💼</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Crecimiento escalable</h3>
                  <p className="text-text-muted">
                    A diferencia de publicidad tradicional, el marketing digital permite crecer gradualmente según tus
                    resultados. Aumentas presupuesto cuando ves ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {faqs.length > 0 && <FaqSection faqs={faqs} title={`Preguntas sobre marketing para ${especialidad.nombre}`} />}

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container-custom text-center">
            <h2 className="text-h2 font-heading mb-6">Listo para crecer tu consulta?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Auditoría gratuita, sin compromiso. Descubre cómo otros {especialidad.nombre.toLowerCase()} están
              captando más pacientes en Sevilla.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-accent text-text px-8 py-4 rounded hover:bg-opacity-90 transition text-lg font-semibold"
            >
              Solicitar auditoría gratis
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
