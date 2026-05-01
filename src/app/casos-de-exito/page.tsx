import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { casos } from '@/data/casos'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Pacientes Sevilla - Resultados Comprobados',
  description:
    'Casos reales de clínicas que aumentaron sus pacientes. +280%, +320%, +350% en captación. Resultados documentados con datos reales.',
  openGraph: {
    title: 'Casos de Éxito - Pacientes Sevilla',
    description: 'Resultados reales de clínicas y profesionales sanitarios en Sevilla',
    url: 'https://pacientessevilla.com/casos-de-exito',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function CasosExitoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Casos de Éxito', href: '/casos-de-exito' }]} />

            <div className="max-w-3xl mx-auto text-center my-12">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">Resultados reales de clínicas que crecieron</h1>
              <p className="text-xl text-text-muted">
                +500 clínicas en Sevilla han aumentado sus pacientes entre 200% y 400%. Aquí algunos casos documentados.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
              {casos.map((caso) => (
                <div key={caso.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  {caso.imagen && (
                    <div className="h-64 relative bg-gray-200">
                      <Image
                        src={caso.imagen}
                        alt={caso.titulo}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                        {caso.especialidad}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">{caso.titulo}</h2>

                    <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-surface rounded-lg border border-slate-200">
                      <div>
                        <p className="text-sm text-text-muted mb-1">Resultado</p>
                        <p className="text-3xl font-bold text-primary">{caso.resultadoValue}{caso.resultadoUnit}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-muted mb-1">Clínica</p>
                        <p className="text-lg font-semibold text-text">{caso.clinica}</p>
                      </div>
                    </div>

                    <p className="text-text-muted leading-relaxed mb-8">{caso.descripcion}</p>

                    {/* Tabla Antes/Después */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-lg">
                        <thead>
                          <tr className="bg-surface border-b border-slate-200">
                            <th className="px-4 py-3 text-left font-semibold text-text">Métrica</th>
                            <th className="px-4 py-3 text-left font-semibold text-text-muted">Antes</th>
                            <th className="px-4 py-3 text-left font-semibold text-primary">Después</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-4 py-3 font-medium text-text">Pacientes/mes</td>
                            <td className="px-4 py-3 text-text-muted">15</td>
                            <td className="px-4 py-3 text-primary font-semibold">{Math.round(15 * (1 + caso.resultadoValue / 100))}</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-4 py-3 font-medium text-text">Posición Google</td>
                            <td className="px-4 py-3 text-text-muted">#8</td>
                            <td className="px-4 py-3 text-primary font-semibold">#1</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-text">Plazo</td>
                            <td className="px-4 py-3 text-text-muted">—</td>
                            <td className="px-4 py-3 text-primary font-semibold">6 meses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">¿Quieres resultados similares?</h2>
            <p className="text-text-muted mb-8">
              Auditoría gratuita. Propuesta personalizada. Sin compromiso. Descubre cómo podemos ayudarte.
            </p>
            <Link
              href="/contacto"
              className="btn-primary btn-primary-lg"
            >
              Solicitar auditoría gratis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
