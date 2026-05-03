import Link from 'next/link'
import { Check, ChevronRight, Megaphone, MousePointerClick, Search, Star } from 'lucide-react'

const serviciosHome = [
  {
    href: '/servicios/seo-medico',
    icon: Search,
    title: 'SEO Local: Domina Google Maps en tu barrio (Nervión, Los Remedios, Triana...)',
    description:
      'Optimizamos tu presencia en Google Business Profile, Google Maps y búsquedas por especialidad para que tu centro médico aparezca cuando un paciente privado busca una clínica cercana en Sevilla.',
    bullets: [
      'SEO local por especialidad, zona y tratamiento.',
      'Arquitectura de páginas para servicios rentables.',
      'Medición de llamadas, formularios y WhatsApp.',
    ],
  },
  {
    href: '/servicios/google-ads',
    icon: Megaphone,
    title: 'Publicidad Médica (Ads): Atrae pacientes privados y reduce la dependencia de mutuas.',
    description:
      'Creamos campañas de publicidad médica con mensajes responsables, segmentación local y landings preparadas para captar solicitudes de pacientes privados altamente rentables.',
    bullets: [
      'Campañas Search con intención real de cita.',
      'Negativas para evitar gasto en contactos poco útiles.',
      'Optimización por calidad de solicitud, no solo por clics.',
    ],
  },
  {
    href: '/servicios/redes-sociales',
    icon: Star,
    title: 'Reputación Online: Consigue reseñas reales en Google y Doctoralia.',
    description:
      'Ordenamos reseñas, contenido y prueba de confianza para que el paciente perciba seguridad antes de contactar, sin promesas sanitarias ni comunicación agresiva.',
    bullets: [
      'Reseñas reales y respuestas prudentes.',
      'Contenido sanitario alineado con normativa.',
      'Coherencia entre web, redes, Google y recepción.',
    ],
  },
]

export default function ServiciosSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">
            Marketing sanitario para captar pacientes privados en Sevilla
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto">
            No hacemos acciones sueltas. Conectamos SEO local, publicidad médica, reputación online,
            web y automatización de citas para reducir fricción en recepción y mejorar la rentabilidad
            comercial de tu clínica dentro del marco de la Ley de Publicidad Sanitaria en España.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {serviciosHome.map((servicio) => (
            <Link key={servicio.href} href={servicio.href}>
              <article className="card card-service h-full p-6 sm:p-8 cursor-pointer group">
                <div className="w-12 h-12 rounded-md border border-primary/20 bg-white flex items-center justify-center mb-4">
                  <servicio.icon size={22} strokeWidth={1.6} className="text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-text group-hover:text-primary transition">
                  {servicio.title}
                </h3>
                <p className="text-text-muted mb-6">{servicio.description}</p>

                <ul className="space-y-2 mb-6">
                  {servicio.bullets.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex gap-2">
                      <Check size={16} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1 text-primary font-semibold transition">
                  Hablemos de tu Centro <ChevronRight size={16} strokeWidth={1.8} />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contacto" className="btn-primary btn-primary-lg inline-flex w-full sm:w-auto items-center justify-center gap-2">
            Solicitar Auditoría de mi Clínica <MousePointerClick size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  )
}
