import type { Metadata } from 'next'
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = servicios.find((s) => s.slug === params.slug)

  if (!servicio) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return {
    title: `${servicio.nombre} para Clínicas en Sevilla | Pacientes Sevilla`,
    description: servicio.descripcion,
    openGraph: {
      title: `${servicio.nombre} en Sevilla`,
      description: servicio.descripcion,
      url: `https://pacientessevilla.com/servicios/${params.slug}`,
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
  return servicios.map((svc) => ({
    slug: svc.slug,
  }))
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
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

        <section className="bg-gradient-to-b from-secondary to-white py-16">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Servicios', href: '/servicios' },
                { label: servicio.nombre, href: `/servicios/${servicio.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-8">
              <div>
                <h1 className="text-h1 font-heading text-primary mb-6">{servicio.nombre}</h1>
                <p className="text-lg text-text-muted mb-8">{servicio.descripcion}</p>

                <div className="space-y-4">
                  {servicio.caracteristicas.map((caracteristica, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="text-primary font-bold text-xl">✓</span>
                      <span className="text-text">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral border border-neutral-dark rounded p-8 shadow-lg">
                <h2 className="text-h3 font-heading text-text mb-6">Solicita una consulta gratuita</h2>
                <ContactForm especialidad={servicio.nombre} buttonText="Solicitar consulta" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <h2 className="text-h2 font-heading mb-8 text-center">¿Por qué contratar {servicio.nombre}?</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📈</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Resultados medibles</h3>
                  <p className="text-text-muted">
                    No creemos en vanity metrics. Medimos lo que importa: pacientes generados y ROI de tu inversión.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Especialización sanitaria</h3>
                  <p className="text-text-muted">
                    Entendemos el sector médico. No somos agencia genérica. Cada estrategia es especializada para tu tipo de clínica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">👥</div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Atención dedicada</h3>
                  <p className="text-text-muted">
                    Un asesor especializado responsable de tu cuenta. Reportes mensuales, estrategia personalizada, optimización continua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {faqs.length > 0 && <FaqSection faqs={faqs} title={`Preguntas sobre ${servicio.nombre.toLowerCase()}`} />}

        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container-custom text-center">
            <h2 className="text-h2 font-heading mb-6">Listo para llevar tu clínica al siguiente nivel?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Auditoría gratuita. Propuesta personalizada. Sin compromiso. Descubre cómo {servicio.nombre.toLowerCase()} puede
              transformar tu práctica médica.
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
