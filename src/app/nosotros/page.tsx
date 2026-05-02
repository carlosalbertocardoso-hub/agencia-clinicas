import type { Metadata } from 'next'
import { Lightbulb, ShieldCheck, Target } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Pacientes Sevilla - Marketing para Clínicas',
  description:
    'Somos especialistas en marketing digital para clínicas, dentistas, psicólogos y profesionales sanitarios en Sevilla. 10+ años de experiencia.',
  openGraph: {
    title: 'Sobre Pacientes Sevilla',
    description: 'Quiénes somos y cómo ayudamos a clínicas a crecer en Sevilla',
    url: 'https://pacientessevilla.com/nosotros',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Sobre nosotros', href: '/nosotros' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">Somos especialistas en marketing para clínicas</h1>
              <p className="text-xl text-text-muted mb-8">
                10+ años ayudando a profesionales sanitarios en Sevilla a atraer más pacientes a través de estrategias digitales
                efectivas.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Nuestra historia</h2>

            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                Pacientes Sevilla nació de una necesidad real: profesionales sanitarios que no sabían cómo atraer pacientes en la era
                digital. Vimos clínicas excelentes con pocos pacientes, mientras competidores mediocres con marketing efectivo crecían
                sin parar.
              </p>

              <p>
                Decidimos especializar todo nuestro conocimiento en el sector sanitario. No somos agencia genérica. Entendemos
                regulación médica, ética profesional, privacidad de pacientes y cómo decide el paciente en la consulta.
              </p>

              <p>
                Hoy trabajamos con 500+ clínicas en Sevilla y Andalucía. Cada una ha aumentado sus pacientes entre 200% y 400%. No
                prometemos milagros — prometemos estrategia, ejecución y transparencia total en resultados.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-12 text-center">Nuestros valores</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Target size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Resultados sobre promesas</h3>
                <p className="text-text-muted text-sm">
                  No nos importan las vanity metrics. Medimos pacientes generados, ingresos aumentados, ROI comprobado.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Privacidad y ética</h3>
                <p className="text-text-muted text-sm">
                  Cumplimos GDPR, regulación sanitaria y código de ética. Nunca exponemos datos de pacientes.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Lightbulb size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Innovación continua</h3>
                <p className="text-text-muted text-sm">
                  Algoritmos de Google cambian cada mes. Nosotros nos mantenemos adelante. Tu estrategia nunca queda obsoleta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">Nuestro equipo</h2>
            <p className="text-text-muted mb-8">
              Especialistas en SEO médico, Google Ads, diseño web y redes sociales. Cada miembro aporta 10+ años en el sector. No
              hay inexpertos en tu cuenta.
            </p>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <p className="text-text font-semibold mb-2">¿Preguntas sobre nosotros?</p>
              <p className="text-text-muted mb-6">
                Llámanos, escríbenos o agenda una videollamada. Nos encanta hablar sobre marketing y clínicas.
              </p>
              <a
                href="/contacto"
                className="btn-primary"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
