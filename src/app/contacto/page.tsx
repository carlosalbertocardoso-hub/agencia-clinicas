import type { Metadata } from 'next'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Pacientes Sevilla - Revisión gratuita',
  description:
    'Contacta con Pacientes Sevilla. Revisamos gratis la presencia online de tu clínica y te contamos cómo mejorarla.',
  openGraph: {
    title: 'Contacto - Pacientes Sevilla',
    description: 'Solicita una revisión gratuita de la presencia online de tu clínica',
    url: 'https://pacientessevilla.com/contacto',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Contacto', href: '/contacto' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">Cuéntanos qué quieres mejorar</h1>
              <p className="text-xl text-text-muted">
                Revisamos cómo te encuentran hoy los pacientes y te explicamos qué pasos pueden ayudarte a recibir más solicitudes.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom max-w-2xl">
            <div className="bg-white p-12 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-8">Revisar mi presencia online</h2>
              <ContactForm buttonText="Enviar solicitud" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <Mail size={28} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">Email</h3>
                <a href="mailto:hola@pacientessevilla.com" className="text-primary hover:underline">
                  hola@pacientessevilla.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <MessageCircle size={28} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">WhatsApp</h3>
                <a href="https://wa.me/34600000000" className="text-primary hover:underline">
                  +34 600 00 00 00
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                  <MapPin size={28} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">Ubicación</h3>
                <p className="text-text-muted">Sevilla, España</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102760.24063387158!2d-6.0376!3d37.3891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be1469%3A0x9c26aace7c8d6a93!2sSevilla!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-text mb-4">¿Tienes prisa?</h3>
              <p className="text-text-muted mb-6">
                Responde el formulario y te contactaremos en las próximas 24 horas para entender tu caso.
              </p>
              <p className="text-text-muted text-sm">
                Horario de atención: Lunes a viernes 9am-7pm. Sábados bajo demanda.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
