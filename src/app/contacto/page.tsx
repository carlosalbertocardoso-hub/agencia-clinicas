import type { Metadata } from 'next'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Solicitar auditoría gratuita | iclinicas',
  description:
    'Solicita una auditoría gratuita para tu clínica en Sevilla. Revisamos Google, web, campañas, reseñas y puntos de contacto para detectar oportunidades de captación.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Solicita una auditoría gratuita - iclinicas',
    description: 'Revisamos Google, web y puntos de conversión de tu clínica en Sevilla.',
    url: 'https://www.iclinicas.es/contacto',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solicita una auditoría gratuita - iclinicas',
    description: 'Revisamos Google, web y puntos de conversión de tu clínica en Sevilla.',
    images: ['/images/og-default.png'],
  },
}

export default function ContactoPage() {
  const puntos = [
    'Visibilidad en Google y Google Maps.',
    'Web y mensajes principales.',
    'Facilidad de contacto desde móvil.',
    'Reseñas y confianza.',
    'Competencia local.',
    'Oportunidades rápidas de mejora.',
    'Medición de llamadas, formularios y WhatsApp.',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Contacto', href: '/contacto' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Auditoría gratuita de captación online para clínicas en Sevilla
              </h1>
              <p className="text-xl text-text-muted">
                Revisaremos cómo aparece tu clínica en Google, qué transmite tu web y qué puntos pueden estar frenando nuevas solicitudes de cita.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-5">Qué revisamos</h2>
              <ul className="space-y-3 mb-6">
                {puntos.map((punto) => (
                  <li key={punto} className="flex gap-3 text-text-muted">
                    <CheckCircle2 size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-muted">
                Sin compromiso. Te responderemos en menos de 24h laborables con una visión clara y accionable.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                Revisemos dónde está perdiendo oportunidades tu clínica
              </h2>
              <p className="text-sm text-text-muted mb-8">
                Cuéntanos lo esencial y revisaremos Google, web, anuncios, redes, agenda o captación según tu caso.
              </p>
              <ContactForm buttonText="Solicitar auditoría gratuita" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Mail size={28} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">Email</h3>
                <a href="mailto:info@iclinicas.es" className="text-primary hover:underline">
                  info@iclinicas.es
                </a>
              </div>

              {/* TODO: Añadir WhatsApp cuando exista un número real de contacto. */}

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <MapPin size={28} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">Ubicación</h3>
                <p className="text-text-muted">Sevilla, España</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-text mb-4">Respuesta clara, sin compromiso</h3>
              <p className="text-text-muted mb-4">
                Te indicaremos qué conviene revisar primero y si tiene más sentido actuar sobre Google, web, campañas, reseñas o medición.
              </p>
              <p className="text-text-muted text-sm">
                Horario de atención: lunes a viernes, 09:00-19:00. Sábados bajo cita previa.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
