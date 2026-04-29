import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Pacientes Sevilla - Consulta Gratis',
  description:
    'Contacta con Pacientes Sevilla. Auditoría gratuita para tu clínica. Marketing digital especializado en sector sanitario en Sevilla.',
  openGraph: {
    title: 'Contacto - Pacientes Sevilla',
    description: 'Solicita tu auditoría gratuita de marketing para clínicas',
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
        <section className="bg-gradient-to-b from-secondary to-white py-16">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Contacto', href: '/contacto' }]} />

            <div className="max-w-3xl mx-auto text-center my-12">
              <h1 className="text-h1 font-heading text-primary mb-6">Hablemos sobre tu clínica</h1>
              <p className="text-xl text-text-muted">
                Auditoría gratuita, propuesta personalizada, sin compromiso. Cuéntanos tu situación y te proponemos estrategia.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-2xl">
            <div className="bg-neutral p-12 rounded border border-neutral-dark shadow-lg">
              <h2 className="text-h3 font-heading text-text mb-8">Cuéntanos sobre tu clínica</h2>
              <ContactForm buttonText="Enviar solicitud" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold text-text mb-2">Email</h3>
                <a href="mailto:hola@pacientessevilla.com" className="text-primary hover:underline">
                  hola@pacientessevilla.com
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold text-text mb-2">WhatsApp</h3>
                <a href="https://wa.me/34600000000" className="text-primary hover:underline">
                  +34 600 00 00 00
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-semibold text-text mb-2">Ubicación</h3>
                <p className="text-text-muted">Sevilla, España</p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded border border-neutral-dark">
              <h3 className="font-semibold text-text mb-4">¿Tienes prisa?</h3>
              <p className="text-text-muted mb-6">
                Responde el formulario arriba y te contactaremos en las próximas 24 horas con tu auditoría personalizada.
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
