import type { Metadata } from 'next'
import { CheckCircle2, MapPin, MessageCircle, Search, ShieldCheck, Target } from 'lucide-react'
import { especialidades, getEspecialidadBySlug } from '@/data/especialidades'
import { servicios } from '@/data/servicios'
import { buildBreadcrumbSchema, buildServiceSchema } from '@/lib/schemas'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import FaqSection from '@/components/shared/FaqSection'

interface Props {
  params: {
    slug: string
  }
}

const specialtyContent: Record<
  string,
  {
    h1: string
    hero: string
    keyText: string
    pain: string
    searches: string[]
    trust: string[]
    serviceNotes: Record<string, string>
    cta: string
    faqs: Array<{ id: string; pregunta: string; respuesta: string }>
  }
> = {
  'clinicas-dentales-sevilla': {
    h1: 'Marketing digital para clínicas dentales en Sevilla',
    hero:
      'Te ayudamos a competir en Google Maps, explicar tratamientos de alto valor y convertir más búsquedas locales en solicitudes de cita cualificadas.',
    keyText:
      'En dental, el paciente compara precio, cercanía, confianza, reseñas y especialización. Tu marketing debe ayudarle a entender por qué tu clínica es una opción segura antes de llamar.',
    pain:
      'La competencia dental en Sevilla es alta. Si tu clínica no aparece bien por implantes, ortodoncia, estética dental, urgencias o revisiones, es probable que el paciente contacte antes con otra opción.',
    searches: ['Implantes dentales en Sevilla', 'Ortodoncia invisible', 'Dentista cerca', 'Urgencias dentales', 'Estética dental'],
    trust: ['Reseñas visibles y bien gestionadas', 'Fotos reales de clínica y equipo', 'Páginas por tratamiento', 'Opciones de financiación si aplica', 'Ubicación y horarios claros'],
    serviceNotes: {
      'seo-medico': 'SEO local y Google Maps para tratamientos, barrios, urgencias y búsquedas cercanas.',
      'google-ads': 'Campañas por tratamientos de valor con negativas para evitar búsquedas poco rentables.',
      'diseno-web': 'Landings por implantes, ortodoncia o estética dental con confianza, FAQs y contacto rápido.',
    },
    cta: 'Revisar captación dental',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué tratamientos dentales conviene priorizar?',
        respuesta: 'Suelen tener sentido implantes, ortodoncia, estética dental, urgencias y primeras revisiones, pero la prioridad depende de margen, agenda, equipo y competencia local.',
      },
      {
        id: '2',
        pregunta: '¿Google Maps es importante para una clínica dental?',
        respuesta: 'Sí. Muchas decisiones dentales empiezan en búsquedas cercanas. La ficha, reseñas, fotos, servicios y coherencia con la web influyen en la primera impresión.',
      },
      {
        id: '3',
        pregunta: '¿Se pueden filtrar pacientes que solo preguntan precio?',
        respuesta: 'No se elimina por completo, pero una web y campañas bien enfocadas ayudan a explicar valor, resolver dudas y reducir solicitudes poco cualificadas.',
      },
    ],
  },
  'psicologos-sevilla': {
    h1: 'Marketing digital para psicólogos en Sevilla',
    hero:
      'Captación ética para consultas de psicología que quieren ser encontradas por personas que necesitan ayuda y buscan un profesional de confianza.',
    keyText:
      'En psicología no se trata de presionar. Se trata de que una persona que necesita ayuda te encuentre, entienda tu enfoque y se sienta segura para dar el primer paso.',
    pain:
      'Muchas consultas dependen de recomendaciones, Doctoralia o Instagram. El problema aparece cuando una persona busca ansiedad, terapia de pareja o psicología infantil y no encuentra una propuesta clara, cercana y profesional.',
    searches: ['Psicólogo ansiedad Sevilla', 'Terapia de pareja', 'Psicólogo infantil', 'Terapia online', 'Psicóloga cerca'],
    trust: ['Tono sensible y no agresivo', 'Privacidad y claridad', 'Enfoque terapéutico explicado', 'Primera consulta bien descrita', 'Online/presencial claro'],
    serviceNotes: {
      'seo-medico': 'SEO por problemas, enfoques terapéuticos, consulta online/presencial y zona.',
      'google-ads': 'Campañas con keywords prudentes, negativas y landings específicas por necesidad.',
      'redes-sociales': 'Contenido educativo que acompaña sin trivializar ni prometer resultados emocionales.',
    },
    cta: 'Revisar mi consulta de psicología',
    faqs: [
      {
        id: '1',
        pregunta: '¿Es adecuado hacer marketing para psicólogos?',
        respuesta: 'Sí, si se hace con ética, privacidad y sensibilidad. El objetivo no es presionar, sino facilitar que una persona encuentre ayuda profesional.',
      },
      {
        id: '2',
        pregunta: '¿Qué contenidos funcionan mejor?',
        respuesta: 'Explicaciones sobre ansiedad, pareja, infancia, proceso terapéutico, primera sesión, terapia online y dudas frecuentes, siempre con prudencia.',
      },
      {
        id: '3',
        pregunta: '¿Cómo evitáis un tono demasiado comercial?',
        respuesta: 'Trabajamos mensajes claros, humanos y profesionales. Evitamos urgencias artificiales, promesas y frases que banalicen el proceso terapéutico.',
      },
    ],
  },
  'medicina-estetica-sevilla': {
    h1: 'Marketing digital para clínicas de medicina estética en Sevilla',
    hero:
      'Comunicación y captación para clínicas que necesitan explicar tratamientos, generar confianza y recibir solicitudes mejor filtradas.',
    keyText:
      'El paciente de medicina estética busca resultados, pero también seguridad, criterio profesional y confianza. Tu presencia digital debe vender sin parecer agresiva.',
    pain:
      'En estética hay mucha oferta y mucho ruido. Si tu web, anuncios o redes no transmiten rigor, naturalidad y seguridad, el paciente puede elegir por precio o por impulsos poco cualificados.',
    searches: ['Medicina estética Sevilla', 'Ácido hialurónico', 'Botox Sevilla', 'Tratamientos faciales', 'Rejuvenecimiento facial'],
    trust: ['Profesionales visibles', 'Seguridad y proceso', 'Antes/después con prudencia legal', 'FAQs por tratamiento', 'Solicitudes filtradas por interés real'],
    serviceNotes: {
      'diseno-web': 'Páginas por tratamiento con expectativas claras, seguridad, equipo y formulario sencillo.',
      'google-ads': 'Campañas por tratamiento con segmentación local y mensajes prudentes.',
      'redes-sociales': 'Contenido visual profesional, educativo y coherente con la clínica.',
    },
    cta: 'Revisar mi clínica estética',
    faqs: [
      {
        id: '1',
        pregunta: '¿Se pueden usar fotos de antes y después?',
        respuesta: 'Depende del caso, consentimiento, normativa aplicable y criterio profesional. Recomendamos revisarlo legalmente y usar siempre comunicación prudente.',
      },
      {
        id: '2',
        pregunta: '¿Cómo se mejora la calidad de las solicitudes?',
        respuesta: 'Con landings específicas, mensajes claros, FAQs, filtros en formulario y campañas orientadas a tratamientos concretos, no a curiosidad genérica.',
      },
      {
        id: '3',
        pregunta: '¿Redes o Google Ads?',
        respuesta: 'Suelen cumplir funciones distintas: redes refuerzan confianza y marca; Google Ads captura búsquedas con intención. La combinación depende de objetivos e inversión.',
      },
    ],
  },
  'fisioterapia-sevilla': {
    h1: 'Marketing digital para clínicas de fisioterapia en Sevilla',
    hero:
      'SEO local, web y campañas para captar búsquedas de dolor, rehabilitación, lesiones y fisioterapia cercana.',
    keyText:
      'Cuando una persona busca fisioterapia suele tener una necesidad concreta y cercana. Si tu clínica aparece bien, explica bien el servicio y permite contactar rápido, tienes más opciones de convertir esa búsqueda en cita.',
    pain:
      'Muchos pacientes buscan por proximidad, horario o problema concreto. Si tu ficha de Google, web y contacto móvil no están preparados, pierdes oportunidades de personas con intención inmediata.',
    searches: ['Fisioterapia cerca', 'Fisio deportiva Sevilla', 'Dolor lumbar', 'Rehabilitación', 'Lesiones deportivas'],
    trust: ['Ubicación y horarios visibles', 'Especialidades claras', 'Equipo y formación', 'Proceso de primera visita', 'Llamada y WhatsApp rápidos'],
    serviceNotes: {
      'seo-medico': 'Google Maps y páginas por dolor, lesión, rehabilitación o fisio deportiva.',
      'google-ads': 'Campañas para búsquedas cercanas y necesidades con intención de cita.',
      'diseno-web': 'Web móvil clara con contacto rápido, servicios, bonos o sesiones si procede.',
    },
    cta: 'Revisar mi clínica de fisioterapia',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué búsquedas son más interesantes en fisioterapia?',
        respuesta: 'Suelen funcionar las búsquedas cercanas y por necesidad: dolor lumbar, cervical, fisio deportiva, rehabilitación, suelo pélvico o lesión específica.',
      },
      {
        id: '2',
        pregunta: '¿Conviene trabajar Google Maps?',
        respuesta: 'Sí. La proximidad pesa mucho en fisioterapia. La ficha debe mostrar servicios, fotos, reseñas, horarios y una forma de contacto rápida.',
      },
      {
        id: '3',
        pregunta: '¿Se pueden promocionar bonos o sesiones?',
        respuesta: 'Si encaja con tu modelo, puede comunicarse con claridad. Lo importante es no reducir toda la decisión a precio y explicar valor profesional.',
      },
    ],
  },
  'nutricionistas-sevilla': {
    h1: 'Marketing digital para nutricionistas en Sevilla',
    hero:
      'Construimos una presencia profesional que explica tu método, diferencia tu consulta y convierte interés en solicitudes.',
    keyText:
      'El reto no es publicar más consejos. Es construir una presencia profesional que explique tu método, genere confianza y convierta interés en consultas.',
    pain:
      'El paciente ve consejos contradictorios en redes y no siempre distingue entre contenido general y asesoramiento profesional. Tu web y Google deben explicar por qué tu consulta es distinta.',
    searches: ['Nutricionista Sevilla', 'Pérdida de peso', 'Nutrición deportiva', 'Salud digestiva', 'Consulta nutrición online'],
    trust: ['Método explicado', 'Especialización visible', 'Consulta online/presencial', 'Autoridad profesional', 'FAQs sobre proceso y seguimiento'],
    serviceNotes: {
      'seo-medico': 'SEO para servicios, problemas frecuentes, consulta online y zonas de Sevilla.',
      'redes-sociales': 'Contenido educativo que refuerza autoridad sin quedarse en consejos genéricos.',
      'diseno-web': 'Web clara sobre método, primera consulta, seguimiento y vías de contacto.',
    },
    cta: 'Revisar mi consulta de nutrición',
    faqs: [
      {
        id: '1',
        pregunta: '¿Cómo diferenciar una consulta de nutrición en internet?',
        respuesta: 'Explicando método, especialización, proceso, seguimiento y casos de uso sin prometer resultados físicos concretos.',
      },
      {
        id: '2',
        pregunta: '¿Sirve el contenido educativo?',
        respuesta: 'Sí, si está conectado con una estrategia de confianza y conversión. Publicar consejos aislados rara vez basta.',
      },
      {
        id: '3',
        pregunta: '¿Se puede captar consulta online y presencial?',
        respuesta: 'Sí. Conviene separar mensajes y páginas cuando la experiencia, objeciones y búsquedas del paciente son distintas.',
      },
    ],
  },
  'pediatria-sevilla': {
    h1: 'Marketing digital para clínicas pediátricas en Sevilla',
    hero:
      'Presencia digital para transmitir confianza a familias que buscan pediatra privado, cercanía, disponibilidad y trato claro.',
    keyText:
      'Cuando una familia busca pediatra privado, la decisión combina confianza, rapidez, cercanía y trato. La web y Google deben transmitir todo eso en segundos.',
    pain:
      'Las familias comparan rápido: ubicación, opiniones, disponibilidad, equipo, trato y facilidad de contacto. Si esa información no aparece clara, la decisión se desplaza a otra clínica.',
    searches: ['Pediatra privado Sevilla', 'Pediatra cerca', 'Revisión pediátrica', 'Urgencias leves pediatría', 'Clínica infantil'],
    trust: ['Equipo visible', 'Opiniones y trato', 'Disponibilidad y horarios', 'Ubicación clara', 'Información para familias'],
    serviceNotes: {
      'seo-medico': 'Visibilidad local para pediatra privado, revisiones, zonas y búsquedas de familias.',
      'google-ads': 'Campañas prudentes para búsquedas de alta intención y contacto rápido.',
      'redes-sociales': 'Contenido informativo para familias, equipo, instalaciones y dudas frecuentes.',
    },
    cta: 'Revisar mi clínica pediátrica',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué busca una familia antes de llamar?',
        respuesta: 'Confianza, cercanía, disponibilidad, opiniones, equipo y claridad sobre cómo pedir cita.',
      },
      {
        id: '2',
        pregunta: '¿Hay que tener cuidado especial con el contenido?',
        respuesta: 'Sí. Debe ser informativo, prudente y respetuoso con la privacidad de menores. No usamos datos de pacientes.',
      },
      {
        id: '3',
        pregunta: '¿Google Maps influye en pediatría?',
        respuesta: 'Mucho. La cercanía y la facilidad de contacto son claves cuando una familia necesita respuesta rápida.',
      },
    ],
  },
  'clinicas-cirugia-sevilla': {
    h1: 'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla',
    hero:
      'Comunicación rigurosa para procedimientos especializados, segunda opinión y consultas de alta consideración.',
    keyText:
      'En cirugía, el paciente no decide en una visita rápida. Investiga, compara, busca seguridad y necesita entender con claridad quién le atiende, qué experiencia tiene y cómo será el proceso.',
    pain:
      'Los procedimientos de alta consideración requieren más confianza, más información y más claridad. Una web superficial o una campaña genérica no suele ser suficiente.',
    searches: ['Especialista Sevilla', 'Segunda opinión médica', 'Cirugía privada Sevilla', 'Procedimiento específico', 'Consulta quirúrgica'],
    trust: ['Autoridad médica', 'Experiencia y equipo', 'Proceso explicado', 'Confidencialidad', 'Información clara sin banalizar'],
    serviceNotes: {
      'seo-medico': 'SEO por procedimientos, especialidad, segunda opinión y autoridad médica.',
      'google-ads': 'Campañas con intención alta, landings rigurosas y medición de consultas cualificadas.',
      'diseno-web': 'Web con credenciales, proceso, equipo, FAQs y contacto discreto.',
    },
    cta: 'Revisar captación de consultas quirúrgicas',
    faqs: [
      {
        id: '1',
        pregunta: '¿Cómo se comunica un procedimiento complejo sin banalizarlo?',
        respuesta: 'Con claridad, rigor, credenciales, proceso y expectativas prudentes. Evitamos mensajes simplistas o promesas no verificables.',
      },
      {
        id: '2',
        pregunta: '¿Tiene sentido captar segundas opiniones?',
        respuesta: 'Sí, si la clínica tiene capacidad y especialización para atenderlas. Requiere páginas y mensajes específicos.',
      },
      {
        id: '3',
        pregunta: '¿Cómo se mide la calidad en cirugía?',
        respuesta: 'Además de formularios o llamadas, revisamos intención, procedimiento consultado, zona, urgencia, adecuación del paciente y seguimiento interno.',
      },
    ],
  },
}

const specialtyMeta: Record<string, { title: string; description: string }> = {
  'clinicas-dentales-sevilla': {
    title: 'Marketing para clínicas dentales en Sevilla | Pacientes Sevilla',
    description:
      'Captación online para clínicas dentales en Sevilla. SEO local, Google Ads, web y contenidos para atraer pacientes de implantes, ortodoncia, estética dental y urgencias.',
  },
  'psicologos-sevilla': {
    title: 'Marketing para psicólogos en Sevilla | Captación ética',
    description:
      'Marketing digital para psicólogos en Sevilla. SEO local, Google Ads y web profesional para consultas de ansiedad, pareja, infantil, terapia online y presencial.',
  },
  'medicina-estetica-sevilla': {
    title: 'Marketing para medicina estética en Sevilla | Pacientes Sevilla',
    description:
      'Captación online para clínicas de medicina estética en Sevilla. Web, SEO, Google Ads y contenidos para transmitir confianza, seguridad y profesionalidad.',
  },
  'fisioterapia-sevilla': {
    title: 'Marketing para fisioterapeutas en Sevilla | Captación local',
    description:
      'Marketing digital para clínicas de fisioterapia en Sevilla. SEO local, Google Ads y web para captar pacientes de dolor, lesiones, rehabilitación y fisioterapia deportiva.',
  },
  'nutricionistas-sevilla': {
    title: 'Marketing para nutricionistas en Sevilla | Pacientes Sevilla',
    description:
      'Marketing digital para nutricionistas en Sevilla. SEO, web, contenido y campañas para consultas de pérdida de peso, salud digestiva, nutrición deportiva y educación alimentaria.',
  },
  'pediatria-sevilla': {
    title: 'Marketing para pediatras en Sevilla | Captación privada',
    description:
      'Marketing digital para pediatras y clínicas pediátricas en Sevilla. Presencia online para transmitir confianza, cercanía y facilitar el contacto de familias.',
  },
  'clinicas-cirugia-sevilla': {
    title: 'Marketing para clínicas quirúrgicas en Sevilla | Pacientes Sevilla',
    description:
      'Marketing digital para clínicas quirúrgicas y especialistas en Sevilla. Web, SEO y campañas para consultas de alta consideración, segunda opinión y procedimientos especializados.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const especialidad = getEspecialidadBySlug(params.slug)
  const content = specialtyContent[params.slug]
  const meta = specialtyMeta[params.slug]

  if (!especialidad) {
    return { title: 'Especialidad no encontrada' }
  }

  return {
    title: meta?.title || `${content?.h1 || `Marketing digital para ${especialidad.nombre} en Sevilla`} | Pacientes Sevilla`,
    description: meta?.description || content?.hero || especialidad.descripcionLarga,
    alternates: {
      canonical: `/especialidades/${params.slug}`,
    },
    openGraph: {
      title: meta?.title || content?.h1 || `Marketing digital para ${especialidad.nombre} en Sevilla`,
      description: meta?.description || content?.hero || especialidad.descripcionLarga,
      url: `https://pacientessevilla.com/especialidades/${params.slug}`,
      images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
    },
  }
}

export async function generateStaticParams() {
  return especialidades.map((esp) => ({ slug: esp.slug }))
}

export default function EspecialidadPage({ params }: Props) {
  const especialidad = getEspecialidadBySlug(params.slug)

  if (!especialidad) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-h1 font-heading text-primary mb-4">Especialidad no encontrada</h1>
          <p className="text-text-muted">Lo sentimos, no pudimos encontrar esta especialidad.</p>
        </main>
        <Footer />
      </div>
    )
  }

  const content = specialtyContent[especialidad.slug]
  const relatedServices = especialidad.servicios
    .map((slug) => servicios.find((servicio) => servicio.slug === slug))
    .filter(Boolean)

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Especialidades', url: 'https://pacientessevilla.com/especialidades' },
    { name: especialidad.nombre, url: `https://pacientessevilla.com/especialidades/${especialidad.slug}` },
  ])

  const serviceSchema = buildServiceSchema({
    name: content.h1,
    description: content.hero,
    url: `https://pacientessevilla.com/especialidades/${especialidad.slug}`,
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Especialidades', href: '/especialidades' },
                { label: especialidad.nombre, href: `/especialidades/${especialidad.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-6">
              <div>
                <p className="text-label text-accent mb-4">Especialistas en clínicas de Sevilla</p>
                <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{content.h1}</h1>
                <p className="text-lg text-text-muted mb-6">{content.hero}</p>
                <div className="bg-surface border border-slate-200 rounded-lg p-6 mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-text mb-3">El reto real</h2>
                  <p className="text-text-muted leading-relaxed">{content.pain}</p>
                </div>
                <p className="text-text leading-relaxed font-medium">{content.keyText}</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                  ¿Quieres revisar esta especialidad?
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Analizamos Google, web, campañas, reputación y puntos de contacto de tu clínica en Sevilla.
                </p>
                <div className="space-y-3">
                  <a href="#formulario-auditoria" className="btn-primary btn-primary-lg block text-center">
                    {content.cta}
                  </a>
                  <a href="#servicios-prioritarios" className="btn-secondary block text-center">
                    Ver oportunidades de mejora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <Search size={28} strokeWidth={1.6} className="text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-5">Qué búsquedas conviene captar</h2>
                <ul className="space-y-3">
                  {content.searches.map((search) => (
                    <li key={search} className="flex gap-3 text-text-muted">
                      <MapPin size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                      <span>{search}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <ShieldCheck size={28} strokeWidth={1.6} className="text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-5">Qué confianza necesita esta especialidad</h2>
                <ul className="space-y-3">
                  {content.trust.map((item) => (
                    <li key={item} className="flex gap-3 text-text-muted">
                      <CheckCircle2 size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios-prioritarios" className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-center">
              Servicios que suelen tener más sentido
            </h2>
            <div className="space-y-4">
              {relatedServices.map((servicio) => (
                servicio && (
                  <div key={servicio.slug} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-primary transition">
                    <h3 className="font-heading text-xl font-semibold text-text mb-2">{servicio.nombre}</h3>
                    <p className="text-text-muted text-sm">
                      {content.serviceNotes[servicio.slug] || servicio.descripcion}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom max-w-3xl text-center">
            <MessageCircle size={32} strokeWidth={1.6} className="text-primary mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Captación sanitaria sin perder rigor
            </h2>
            <p className="text-text-muted">
              Adaptamos mensajes, campañas y páginas a la forma en la que se decide cada servicio sanitario privado. El objetivo es mejorar visibilidad, confianza y solicitudes cualificadas sin promesas clínicas ni presión comercial.
            </p>
          </div>
        </section>

        <FaqSection faqs={content.faqs} title={`Preguntas sobre marketing para ${especialidad.nombre.toLowerCase()}`} />

        <section id="formulario-auditoria" className="section-padding section-primary">
          <div className="container-custom">
            <Target size={32} strokeWidth={1.6} className="mx-auto mb-5 text-[#FFD166]" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
                ¿Quieres revisar tu captación en esta especialidad?
              </h2>
              <p className="text-lg text-white">
                Revisaremos cómo aparece tu clínica en Google, qué transmite tu web y qué oportunidades pueden estar frenando nuevas solicitudes.
              </p>
              <p className="text-sm opacity-80 mt-4 text-white">
                La auditoría no te obliga a contratar. Sirve para saber qué mejorar primero y si tiene sentido trabajar juntos.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-lg border border-white/20 p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                Solicita una auditoría gratuita
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Cuéntanos brevemente tu caso y revisaremos dónde puede estar perdiendo oportunidades tu clínica.
              </p>
              <ContactForm especialidad={especialidad.nombre} buttonText={content.cta} variant="compact" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
