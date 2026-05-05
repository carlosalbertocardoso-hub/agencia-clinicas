import type { Metadata } from 'next'
import { Lightbulb, ShieldCheck, Target } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Sobre iMarketing Clínicas | Agencia para clínicas privadas',
  description:
    'Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla. Estrategia, medición y comunicación sanitaria clara.',
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Sobre iMarketing Clínicas',
    description: 'Quiénes somos y cómo ayudamos a clínicas privadas de Sevilla a ordenar su captación online.',
    url: 'https://iclinicas.es/nosotros',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
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
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Especialistas en captación online para clínicas privadas en Sevilla
              </h1>
              <p className="text-xl text-text-muted mb-8">
                Ayudamos a gerentes, doctores y responsables de consulta a entender qué funciona en Google, web, campañas y conversión sin depender de informes confusos.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Nuestro enfoque</h2>

            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                iMarketing Clínicas nace para resolver un problema muy concreto: clínicas excelentes que no aparecen bien en Google, webs que no transmiten su nivel real y campañas que generan dudas porque nadie sabe qué contactos llegan.
              </p>

              <p>
                No trabajamos como una agencia genérica. Miramos el recorrido completo del paciente privado: búsqueda, primera impresión, confianza, web, llamada, WhatsApp, formulario, seguimiento y medición.
              </p>

              <p>
                Nuestro papel es ayudarte a decidir prioridades con claridad: qué conviene mejorar primero, por qué importa y qué resultado de negocio busca. Sin prometer un número concreto de pacientes, sin métricas infladas y sin lenguaje innecesariamente técnico.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-12 text-center">Nuestros criterios</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Target size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Captación medible</h3>
                <p className="text-text-muted text-sm">
                  Medimos llamadas, WhatsApp, formularios y calidad de contacto. Las visitas importan si ayudan a generar oportunidades reales.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Prudencia sanitaria</h3>
                <p className="text-text-muted text-sm">
                  Cuidamos privacidad, tono, expectativas y credibilidad. No usamos promesas clínicas ni claims que no puedan sostenerse.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Lightbulb size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">Claridad para dirección</h3>
                <p className="text-text-muted text-sm">
                  Explicamos qué se hace, por qué se hace y qué decisión permite tomar. El marketing debe ser entendible para quien gestiona la clínica.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <a href="/contacto" className="btn-primary">
                Solicitar auditoría gratuita
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
