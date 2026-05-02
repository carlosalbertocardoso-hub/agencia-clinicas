import type { Metadata } from 'next'
import Image from 'next/image'
import { BarChart3, Check, Rocket, Target } from 'lucide-react'
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

        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Servicios', href: '/servicios' },
                { label: servicio.nombre, href: `/servicios/${servicio.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-6">
              <div>
                {/* Imagen del servicio */}
                {servicio.imagen && (
                  <div className="mb-6 rounded-lg overflow-hidden shadow-md h-48 md:h-56 relative">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{servicio.nombre}</h1>
                <p className="text-lg text-text-muted mb-6">{servicio.descripcion}</p>

                <div className="space-y-4">
                  {servicio.caracteristicas.map((caracteristica, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Check size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-text">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm sticky top-24">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-6">Solicita una consulta gratuita</h2>
                <ContactForm especialidad={servicio.nombre} buttonText="Solicitar consulta" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-center">¿Por qué contratar {servicio.nombre}?</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <BarChart3 size={26} strokeWidth={1.6} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text mb-2">Resultados medibles</h3>
                  <p className="text-text-muted">
                    No creemos en vanity metrics. Medimos lo que importa: pacientes generados y ROI de tu inversión.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target size={26} strokeWidth={1.6} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text mb-2">Especialización sanitaria</h3>
                  <p className="text-text-muted">
                    Entendemos el sector médico. No somos agencia genérica. Cada estrategia es especializada para tu tipo de clínica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Rocket size={26} strokeWidth={1.6} className="text-primary flex-shrink-0 mt-1" />
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

        <section className="section-padding section-primary">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">¿Listo para llevar tu clínica al siguiente nivel?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
              Auditoría gratuita. Propuesta personalizada. Sin compromiso. Descubre cómo {servicio.nombre.toLowerCase()} puede
              transformar tu práctica médica.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-[#FFD166] text-[#073F38] px-8 py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white hover:text-primary transition"
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
