import Link from 'next/link'
import { CheckCircle2, HelpCircle, MapPin } from 'lucide-react'

export default function CroAuthoritySection() {
  const auditoria = [
    'Clínicas que aparecen mal en Google Maps.',
    'Webs con buena imagen pero sin conversión.',
    'Campañas sin tracking de llamadas.',
    'Formularios demasiado largos o poco visibles.',
    'Servicios rentables sin página propia.',
    'Reseñas sin estrategia.',
    'Presupuesto publicitario mal repartido.',
  ]

  const objeciones = [
    ['Ya tengo Instagram.', 'Instagram puede reforzar confianza, pero no sustituye búsquedas con intención en Google ni una web que convierta.'],
    ['Ya trabajo con Doctoralia.', 'Puede ayudar, pero tu captación no debería depender de una sola plataforma ni de tráfico que no controlas.'],
    ['Probé Google Ads y no funcionó.', 'Muchas campañas fallan por falta de landing, negativas, tracking o lectura de calidad del contacto.'],
    ['Mi web es bonita, pero no llegan contactos.', 'Entonces el problema puede estar en mensaje, móvil, CTAs, confianza, velocidad o medición.'],
    ['No quiero parecer agresivo vendiendo.', 'En salud privada se puede captar con claridad, rigor y sensibilidad, sin presión comercial.'],
  ]

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <MapPin size={28} strokeWidth={1.6} className="text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Especialistas en captación local para clínicas de Sevilla
            </h2>
            <p className="text-text-muted leading-relaxed">
              Trabajamos pensando en cómo busca un paciente privado en Sevilla: especialidad, cercanía,
              reseñas, facilidad para contactar y confianza antes de pedir cita. Sevilla capital, Nervión,
              Los Remedios, Triana, Centro, Sevilla Este, Porvenir, Aljarafe, Dos Hermanas, Mairena del
              Aljarafe, Tomares y Bormujos importan cuando la búsqueda es local.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <CheckCircle2 size={28} strokeWidth={1.6} className="text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Qué solemos detectar en una auditoría
            </h2>
            <ul className="space-y-3">
              {auditoria.map((item) => (
                <li key={item} className="flex gap-3 text-text-muted">
                  <CheckCircle2 size={17} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-8">
          <HelpCircle size={28} strokeWidth={1.6} className="text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Dudas habituales antes de invertir en marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {objeciones.map(([titulo, respuesta]) => (
              <div key={titulo} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-semibold text-text mb-2">{titulo}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{respuesta}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar auditoría gratuita
            </Link>
            <Link href="/servicios/seo-medico" className="btn-secondary">
              Analizar mi SEO local
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
