import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { casos } from '@/data/casos'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Ejemplos de diagnóstico para clínicas | Pacientes Sevilla',
  description:
    'Ejemplos representativos de problemas de captación online en clínicas privadas. Sustituir por casos reales cuando existan datos verificables.',
  openGraph: {
    title: 'Ejemplos de diagnóstico - Pacientes Sevilla',
    description: 'Situaciones habituales de captación online en clínicas privadas de Sevilla.',
    url: 'https://pacientessevilla.com/casos-de-exito',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
  },
}

export default function CasosExitoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Ejemplos de diagnóstico', href: '/casos-de-exito' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Ejemplos de diagnóstico de captación online para clínicas
              </h1>
              <p className="text-xl text-text-muted">
                Estos escenarios son representativos y no se presentan como casos reales. Sirven para explicar qué solemos revisar antes de proponer un plan.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {casos.map((caso) => (
                <div key={caso.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  {caso.imagen && (
                    <div className="h-64 relative bg-gray-200">
                      <Image src={caso.imagen} alt={caso.titulo} fill className="object-cover" />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                        {caso.especialidad}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">{caso.titulo}</h2>

                    <div className="p-6 bg-surface rounded-lg border border-slate-200 mb-8">
                      <p className="text-sm text-text-muted mb-1">Enfoque de mejora</p>
                      <p className="text-lg font-semibold text-text">{caso.resultado}</p>
                    </div>

                    <p className="text-text-muted leading-relaxed mb-8">{caso.descripcion}</p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-lg">
                        <thead>
                          <tr className="bg-surface border-b border-slate-200">
                            <th className="px-4 py-3 text-left font-semibold text-text">Área</th>
                            <th className="px-4 py-3 text-left font-semibold text-text-muted">Riesgo habitual</th>
                            <th className="px-4 py-3 text-left font-semibold text-primary">Qué revisaríamos</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-4 py-3 font-medium text-text">Google</td>
                            <td className="px-4 py-3 text-text-muted">Baja visibilidad local</td>
                            <td className="px-4 py-3 text-primary font-semibold">Ficha, reseñas, servicios y búsquedas</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-4 py-3 font-medium text-text">Web</td>
                            <td className="px-4 py-3 text-text-muted">Visitas sin contacto</td>
                            <td className="px-4 py-3 text-primary font-semibold">Mensaje, móvil, CTA y confianza</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-text">Medición</td>
                            <td className="px-4 py-3 text-text-muted">No saber qué funciona</td>
                            <td className="px-4 py-3 text-primary font-semibold">Llamadas, WhatsApp y formularios</td>
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
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">¿Quieres revisar tu caso real?</h2>
            <p className="text-text-muted mb-8">
              Solicita una auditoría gratuita y analizamos tu presencia en Google, web, campañas y puntos de conversión.
            </p>
            <Link href="/contacto" className="btn-primary btn-primary-lg">
              Solicitar auditoría gratuita
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
