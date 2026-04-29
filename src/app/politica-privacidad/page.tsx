import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Pacientes Sevilla',
  robots: 'noindex',
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <BreadcrumbNav items={[{ label: 'Política de Privacidad', href: '/politica-privacidad' }]} />

            <h1 className="text-h1 font-heading text-primary mb-8">Política de Privacidad</h1>

            <div className="prose prose-sm max-w-none space-y-6 text-text-muted">
              <div>
                <h2 className="text-h3 font-heading text-text mb-4">1. Responsable del tratamiento</h2>
                <p>
                  Pacientes Sevilla S.L. (en adelante "Responsable") es responsable del tratamiento de tus datos personales. Nos
                  comprometemos a proteger tu privacidad conforme a GDPR.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">2. Datos que recopilamos</h2>
                <p>A través de nuestros formularios recopilamos:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Nombre y apellidos</li>
                  <li>Email y teléfono</li>
                  <li>Nombre de tu clínica</li>
                  <li>Especialidad médica</li>
                  <li>Mensaje o consulta</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">3. Finalidad del tratamiento</h2>
                <p>Usamos tus datos para:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Responder tu consulta o solicitud de auditoría</li>
                  <li>Enviar información sobre nuestros servicios (con tu consentimiento)</li>
                  <li>Mejorar nuestros servicios</li>
                  <li>Cumplir obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">4. Base legal</h2>
                <p>El tratamiento de tus datos se basa en tu consentimiento expresado en el formulario de contacto.</p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">5. Duración del almacenamiento</h2>
                <p>Conservaremos tus datos mientras sea necesario para cumplir las finalidades indicadas, o según exija la ley.</p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">6. Derechos del usuario</h2>
                <p>Tienes derecho a:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Acceder a tus datos personales</li>
                  <li>Solicitar la rectificación de datos inexactos</li>
                  <li>Solicitar la supresión de tus datos</li>
                  <li>Oponerme al tratamiento de tus datos</li>
                  <li>Solicitar la limitación del tratamiento</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacta con nosotros en <strong>hola@pacientessevilla.com</strong>
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">7. Seguridad de datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso, alteración,
                  pérdida o divulgación no autorizada.
                </p>
              </div>

              <div>
                <h2 className="text-h3 font-heading text-text mb-4">8. Cambios a esta política</h2>
                <p>Podemos actualizar esta política en cualquier momento. Cambios significativos serán notificados.</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg mt-8">
                <p className="text-sm">
                  <strong>Última actualización:</strong> Abril 2024
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
