import type { Metadata } from 'next'
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
        <section className="bg-gradient-to-b from-secondary to-white py-16">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Sobre nosotros', href: '/nosotros' }]} />

            <div className="max-w-3xl mx-auto text-center my-12">
              <h1 className="text-h1 font-heading text-primary mb-6">Somos especialistas en marketing para clínicas</h1>
              <p className="text-xl text-text-muted mb-8">
                10+ años ayudando a profesionales sanitarios en Sevilla a atraer más pacientes a través de estrategias digitales
                efectivas.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-h2 font-heading mb-8">Nuestra historia</h2>

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

        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-h2 font-heading mb-12 text-center">Nuestros valores</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-heading text-h4 mb-3 text-text">Resultados sobre promesas</h3>
                <p className="text-text-muted text-sm">
                  No nos importan las vanity metrics. Medimos pacientes generados, ingresos aumentados, ROI comprobado.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-heading text-h4 mb-3 text-text">Privacidad y ética</h3>
                <p className="text-text-muted text-sm">
                  Cumplimos GDPR, regulación sanitaria y código de ética. Nunca exponemos datos de pacientes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-heading text-h4 mb-3 text-text">Innovación continua</h3>
                <p className="text-text-muted text-sm">
                  Algoritmos de Google cambian cada mes. Nosotros nos mantenemos adelante. Tu estrategia nunca queda obsoleta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-h2 font-heading mb-6">Nuestro equipo</h2>
            <p className="text-text-muted mb-8">
              Especialistas en SEO médico, Google Ads, diseño web y redes sociales. Cada miembro aporta 10+ años en el sector. No
              hay inexpertos en tu cuenta.
            </p>

            <div className="bg-secondary p-8 rounded-lg border border-gray-100">
              <p className="text-text font-semibold mb-2">¿Preguntas sobre nosotros?</p>
              <p className="text-text-muted mb-6">
                Llámanos, escríbenos o agenda una videollamada. Nos encanta hablar sobre marketing y clínicas.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
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
