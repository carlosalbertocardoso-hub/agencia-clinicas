import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Términos Legales | iMarketing Clínicas',
  alternates: {
    canonical: '/terminos-legales',
  },
  robots: 'noindex',
}

export default function TerminosLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <BreadcrumbNav items={[{ label: 'Términos Legales', href: '/terminos-legales' }]} />

            <h1 className="text-h1 font-heading text-primary mb-8">Términos y Condiciones</h1>

            <div className="prose prose-sm max-w-none space-y-6 text-text-muted">
              <div>
                <h2 className="text-h3 font-heading text-text mb-4">1. Objeto</h2>
                <p>
                  Estos términos regulan el uso de la web imarketingclinicas.com y los servicios de marketing digital que ofrecemos
                  para profesionales sanitarios.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">2. Usuario</h2>
                <p>
                  El usuario es cualquier persona que acceda a nuestra web o contrate nuestros servicios. Al usar nuestra web,
                  aceptas estos términos.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">3. Servicios</h2>
                <p>Ofrecemos:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Consultoría de marketing digital especializada en sector sanitario</li>
                  <li>Servicios de SEO, Google Ads, diseño web y gestión de redes sociales</li>
                  <li>Auditorías gratuitas y propuestas personalizadas</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">4. Limitación de responsabilidad</h2>
                <p>
                  iMarketing Clínicas no se responsabiliza por: (a) Interrupción o indisponibilidad temporal de la web; (b)
                  Virus o código malicioso; (c) Resultados específicos de las campañas (que dependen de factores ajenos a
                  nuestro control).
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">5. Propiedad intelectual</h2>
                <p>
                  Todo contenido de esta web (textos, imágenes, logotipos, diseño) es propiedad de iMarketing Clínicas o sus
                  licenciantes. No puedes reproducir, distribuir o modificar sin autorización explícita.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">6. Aceptación de términos</h2>
                <p>
                  Al enviar cualquier formulario, confirmas que has leído y aceptas nuestra política de privacidad.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">7. Legislación aplicable</h2>
                <p>Estos términos se rigen por la legislación española. Jurisdicción: juzgados de Sevilla.</p>
              </div>

              <div className="bg-secondary p-6 rounded mt-8">
                <p className="text-sm">
                  <strong>Última actualización:</strong> Mayo 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
