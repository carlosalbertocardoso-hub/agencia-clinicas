import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, MapPin, MessageCircle, Search, ShieldCheck, Target } from 'lucide-react'
import { especialidades, getEspecialidadBySlug } from '@/data/especialidades'
import { servicios } from '@/data/servicios'
import { specialtyRelatedServices } from '@/data/crossLinks'
import { buildFAQSchema, buildServiceSchema } from '@/lib/schemas'
import { buildOgUrl } from '@/lib/og/buildOgUrl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import FaqSection from '@/components/shared/FaqSection'
import GoogleBusinessMap from '@/components/shared/GoogleBusinessMap'
import LocalTestimonials from '@/components/shared/LocalTestimonials'

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
      'En Sevilla hay más de 400 clínicas dentales. El paciente no llama a la mejor, llama a la que aparece primero con buenas reseñas. Trabajamos para que esa sea la tuya.',
    keyText:
      'Un implante o una ortodoncia es una decisión de meses, no de minutos. El paciente compara precios, lee reseñas, mira fotos del equipo y busca si la web le explica el proceso. Si no encuentra respuestas claras en tu clínica, las busca en la de enfrente.',
    pain:
      'La competencia dental en Sevilla no se gana con la mejor técnica, se gana siendo visible cuando el paciente busca. Si tu clínica no aparece en Google Maps por urgencias, por Nervión o por ortodoncia invisible, esas búsquedas las captura otra clínica cada día.',
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
      'Alguien que busca psicólogo ya ha dado el paso más difícil. Tu trabajo es que cuando llegue a tu web, sienta que está en el sitio correcto.',
    keyText:
      'En psicología, el marketing no puede sonar a venta. Quien busca ayuda para ansiedad, una crisis de pareja o un problema con sus hijos necesita encontrar claridad y cercanía, no un embudo de conversión. Trabajamos para que tu consulta sea visible y para que quien llegue entienda tu enfoque antes de escribirte.',
    pain:
      'La mayoría de psicólogos en Sevilla dependen de Doctoralia o del boca a boca. Eso funciona hasta que no funciona. Si alguien busca "psicóloga infantil Triana" o "terapia de pareja online Sevilla" y tu nombre no aparece, esa persona va a otro profesional, no porque seas peor, sino porque no te encontró.',
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
      'En estética, el paciente no busca el precio más bajo, busca al médico que le dé más confianza. El problema es que si no apareces bien, ni siquiera llega a conocerte.',
    keyText:
      'Medicina estética es uno de los sectores donde la brecha entre la calidad real del profesional y su presencia digital es más grande. Clínicas con mucho rigor y equipo excelente compiten con perfiles de Instagram de dudosa credibilidad. Una web clara y un Google bien trabajado cambian quién te llama.',
    pain:
      'En Sevilla hay mucha oferta estética y mucho ruido barato. Si tu presencia digital no transmite criterio médico real, recibes consultas de personas que buscan el precio más bajo y comparan cinco sitios antes de decidir. Eso no es el paciente que quieres, y tampoco es el que se queda.',
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
      'Alguien con dolor de espalda no planifica. Busca en Google, mira las reseñas de los que están cerca y llama al primero que le da confianza y tiene hueco.',
    keyText:
      'En fisioterapia, la proximidad decide más que en cualquier otra especialidad. El paciente busca "fisio cerca" o "dolor lumbar Sevilla Este" y llama al primero que aparece con buena ficha, horario claro y forma de contacto rápida. Si tu clínica no está ahí, no te descarta, es que directamente no te ve.',
    pain:
      'El mayor problema de muchas clínicas de fisio en Sevilla es invisible: tienen pacientes fijos pero no saben cuántas personas con dolor buscan cerca de ellos cada semana y acaban llamando a otro sitio. La ficha de Google sin actualizar, sin fotos recientes o con horarios incorrectos cuesta citas todos los días.',
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
  'clinicas-reproduccion-asistida-sevilla': {
    h1: 'Marketing digital para clínicas de reproducción asistida en Sevilla',
    hero:
      'Las parejas que buscan fertilidad no deciden en un día. Pasan semanas comparando clínicas, leyendo sobre equipos médicos y buscando señales de que van a estar bien tratadas.',
    keyText:
      'En reproducción asistida, la primera consulta no es el principio del proceso: es el final de semanas de investigación. La web debe responder preguntas antes de que las hagan, el equipo médico debe ser visible y el proceso debe estar explicado con honestidad. No para vender más rápido, sino para que quien llegue ya haya decidido que quiere trabajar contigo.',
    pain:
      'Las clínicas de fertilidad en Sevilla que no tienen web clara, equipo médico visible y FAQs específicas por tratamiento pierden comparaciones a favor de clínicas de Madrid o Barcelona que simplemente tienen mejor presencia digital. La distancia ya no es un freno si la confianza digital no está.',
    searches: ['Clínica fertilidad Sevilla', 'Reproducción asistida Sevilla', 'FIV Sevilla', 'Preservación fertilidad', 'Primera valoración fertilidad'],
    trust: ['Privacidad y tono sensible', 'Equipo médico visible', 'Procesos explicados con claridad', 'FAQs prudentes', 'Formulario discreto y fácil'],
    serviceNotes: {
      'seo-medico': 'SEO local para fertilidad, FIV, preservación, donación y búsquedas de alta intención.',
      'google-ads': 'Campañas prudentes por intención real, con negativas para evitar búsquedas informativas poco cualificadas.',
      'diseno-web': 'Landings por tratamiento con confianza, privacidad, proceso, equipo y contacto discreto.',
    },
    cta: 'Revisar captación en reproducción asistida',
    faqs: [
      {
        id: '1',
        pregunta: '¿Cómo hacer marketing en reproducción asistida sin resultar agresivo?',
        respuesta: 'Con información clara, tono prudente, privacidad, autoridad médica y llamadas a la acción discretas. No usamos presión ni promesas sobre resultados clínicos.',
      },
      {
        id: '2',
        pregunta: '¿Qué tratamientos conviene trabajar primero?',
        respuesta: 'Depende de la clínica, pero suelen requerir páginas específicas FIV, preservación de fertilidad, donación, diagnóstico y primera valoración.',
      },
      {
        id: '3',
        pregunta: '¿Cómo se mide la calidad del contacto?',
        respuesta: 'Medimos llamadas, formularios, tratamiento consultado, zona, intención y capacidad de seguimiento interno, no solo volumen de leads.',
      },
    ],
  },
  'pedagogos-sevilla': {
    h1: 'Marketing digital para pedagogos en Sevilla',
    hero:
      'Una familia que busca ayuda para su hijo no sabe si necesita un pedagogo, un psicólogo o un profesor particular. Quien aparece primero con una respuesta clara es quien recibe la llamada.',
    keyText:
      'En pedagogía, el reto del marketing no es competir con otros pedagogos. Es aparecer cuando una familia escribe "mi hijo tiene problemas en el cole" o "dificultades de lectura Sevilla" y no sabe bien a quién llamar. Una web que explica qué haces, para quién y cómo es la primera valoración resuelve esa duda antes de que busquen en otro sitio.',
    pain:
      'La mayoría de pedagogos en Sevilla trabajan por recomendación y tienen lista de espera en algunos momentos del año. Pero entre septiembre y octubre, cuando los colegios detectan dificultades, hay familias buscando ayuda urgente que no saben tu nombre. Si no apareces en esas búsquedas, no entras en su lista.',
    searches: ['Pedagogo Sevilla', 'Gabinete psicopedagógico Sevilla', 'Dificultades de aprendizaje', 'Apoyo educativo Sevilla', 'Orientación familiar'],
    trust: ['Método de trabajo explicado', 'Tono familiar y profesional', 'Especialización visible', 'Proceso de primera valoración', 'Privacidad de menores'],
    serviceNotes: {
      'seo-medico': 'SEO local para pedagogía, psicopedagogía, dificultades de aprendizaje y zonas de Sevilla.',
      'diseno-web': 'Web clara para familias con servicios, método, primera valoración y formularios simples.',
      'redes-sociales': 'Contenido educativo que refuerza confianza sin exponer casos ni datos de menores.',
    },
    cta: 'Revisar mi gabinete pedagógico',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué buscan las familias antes de contactar?',
        respuesta: 'Suelen buscar confianza, especialización, cercanía, método, experiencia con casos similares y una primera orientación clara.',
      },
      {
        id: '2',
        pregunta: '¿Qué contenidos puede publicar un pedagogo?',
        respuesta: 'Contenidos sobre aprendizaje, hábitos, orientación familiar, señales de alerta y proceso de trabajo, siempre sin exponer menores ni prometer resultados.',
      },
      {
        id: '3',
        pregunta: '¿SEO local o redes sociales?',
        respuesta: 'SEO local ayuda a captar búsquedas activas; redes ayudan a educar y generar recuerdo. La prioridad depende de demanda local y agenda.',
      },
    ],
  },
  'dermatologos-sevilla': {
    h1: 'Marketing digital para dermatólogos en Sevilla',
    hero:
      'Dermatología tiene un problema específico: la mitad de las búsquedas son informativas y la otra mitad son personas que ya quieren consulta privada. Captar solo la segunda mitad es el trabajo.',
    keyText:
      'En dermatología conviven pacientes que buscan "¿qué es este lunar?" con pacientes que buscan "dermatólogo privado Sevilla revisión". El primero lee un artículo y se va. El segundo quiere cita. Una buena estrategia digital no intenta captar a los dos de la misma manera: tiene páginas informativas que dan confianza y páginas de servicio que convierten.',
    pain:
      'Muchos dermatólogos privados en Sevilla reciben consultas de personas que solo tienen dudas genéricas que no llegan a convertirse en cita. Eso no es un problema de volumen, es un problema de segmentación. Con páginas por patología, formularios breves y campañas bien ajustadas, se reduce el ruido y mejora la calidad de lo que llega.',
    searches: ['Dermatólogo Sevilla', 'Revisión lunares Sevilla', 'Acné dermatólogo', 'Manchas piel Sevilla', 'Alopecia dermatólogo'],
    trust: ['Autoridad médica', 'Indicaciones claras', 'Equipo y tecnología', 'Fotos prudentes si proceden', 'FAQs por motivo de consulta'],
    serviceNotes: {
      'seo-medico': 'SEO por motivos de consulta, tratamientos, dermatología estética y búsquedas locales.',
      'google-ads': 'Campañas Search para intención privada con negativas para evitar consultas genéricas.',
      'diseno-web': 'Páginas por patología o tratamiento con confianza, proceso y contacto rápido.',
    },
    cta: 'Revisar captación dermatológica',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué servicios dermatológicos conviene posicionar?',
        respuesta: 'Suelen tener sentido revisión de lunares, acné, manchas, alopecia, dermatología estética y consultas privadas específicas, según equipo y demanda.',
      },
      {
        id: '2',
        pregunta: '¿Se puede combinar dermatología médica y estética?',
        respuesta: 'Sí, pero conviene separar mensajes y páginas para no mezclar intenciones distintas ni perder rigor médico.',
      },
      {
        id: '3',
        pregunta: '¿Cómo filtrar mejor las solicitudes?',
        respuesta: 'Con páginas específicas, formularios claros, FAQs, segmentación local y medición de calidad del contacto.',
      },
    ],
  },
  'nutricionistas-sevilla': {
    h1: 'Marketing digital para nutricionistas en Sevilla',
    hero:
      'Internet está lleno de dietas gratis, influencers con batidos y coaches sin titulación. Tu consulta necesita diferenciarse de todo eso, no mezclarse con ello.',
    keyText:
      'El mayor problema de los nutricionistas en Sevilla no es la competencia entre ellos. Es que compiten con contenido gratuito de redes que suena igual de autoritario. Una web que explica tu método real, para qué tipo de paciente trabajas mejor y cómo es el seguimiento diferencia tu consulta de un blog de recetas con formulario de contacto.',
    pain:
      'Muchos nutricionistas en Sevilla publican contenido educativo pero reciben consultas de personas que quieren un plan de dieta rápido o que no entienden qué diferencia a un dietista-nutricionista titulado de cualquier otra opción online. La web y el SEO pueden filtrar eso antes de que llegue al formulario.',
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
  'oftalmologos-sevilla': {
    h1: 'Marketing digital para oftalmólogos en Sevilla',
    hero:
      'Quien busca cirugía de cataratas o una revisión privada en Sevilla no hace clic en el primero que aparece. Compara. Tu clínica tiene que aparecer y convencer.',
    keyText:
      'En oftalmología, las búsquedas de alta intención son concretas: cirugía refractiva en Sevilla, cataratas operación precio, segunda opinión oftalmólogo. Son pocas pero valen mucho. Tener páginas específicas por procedimiento con el equipo visible, el proceso explicado y el contacto claro marca la diferencia entre ser una opción real o no aparecer en la comparación.',
    pain:
      'Muchas clínicas oftalmológicas en Sevilla tienen una web con un listado de servicios y poco más. El paciente que investiga durante días antes de pedir cita de cirugía refractiva necesita más que eso: quiere saber quién le va a operar, qué pruebas hacen antes, qué pasa si hay complicaciones. Si tu web no responde esas preguntas, las responde la de otra clínica.',
    searches: ['Oftalmólogo Sevilla', 'Clínica oftalmológica Sevilla', 'Cirugía refractiva Sevilla', 'Cataratas Sevilla', 'Revisión vista privada'],
    trust: ['Equipo médico visible', 'Tecnología y pruebas explicadas', 'Procedimientos claros', 'Segunda opinión', 'Contacto y ubicación visibles'],
    serviceNotes: {
      'seo-medico': 'SEO local para revisiones, patologías, procedimientos y búsquedas por zona.',
      'google-ads': 'Campañas para consultas privadas y procedimientos con intención alta.',
      'diseno-web': 'Páginas de cirugía, cataratas, retina o revisión con proceso, equipo y FAQs.',
    },
    cta: 'Revisar mi clínica oftalmológica',
    faqs: [
      {
        id: '1',
        pregunta: '¿Qué búsquedas suelen captar más intención?',
        respuesta: 'Revisión privada, cirugía refractiva, cataratas, retina, segunda opinión y clínica oftalmológica cercana suelen tener intención más clara.',
      },
      {
        id: '2',
        pregunta: '¿Cómo explicar procedimientos sin prometer resultados?',
        respuesta: 'Describiendo proceso, valoración previa, tecnología, equipo y expectativas prudentes, sin garantías clínicas ni claims absolutos.',
      },
      {
        id: '3',
        pregunta: '¿Tiene sentido Google Ads en oftalmología?',
        respuesta: 'Puede tenerlo si se mide calidad de contacto y se usan landings específicas por procedimiento o motivo de consulta.',
      },
    ],
  },
  'pediatria-sevilla': {
    h1: 'Marketing digital para pediatras en Sevilla',
    hero:
      'Una familia que busca pediatra privado en Sevilla a las 9 de la noche lo hace desde el móvil, en dos minutos, comparando reseñas. Tu ficha de Google y tu web son tu primera consulta.',
    keyText:
      'En pediatría, la confianza se lee en segundos. Los padres miran las fotos del equipo, las reseñas de otras familias, si hay pediatras con subespecialidad y si existe forma de contactar rápido cuando hay urgencia leve. Una web que responde eso de forma clara convierte visitas en llamadas sin que la familia necesite buscar más.',
    pain:
      'Muchos pediatras privados en Sevilla tienen llenas las agendas de pacientes de siempre pero no saben que cada semana nuevas familias en su zona buscan pediatra y acaban llamando a otro porque la ficha de Google estaba incompleta o la web tardaba demasiado en cargar desde el móvil.',
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
      'Quien busca un cirujano privado en Sevilla no toma esa decisión en tres minutos. Lee el currículum del médico, busca reseñas de casos parecidos al suyo, mira si la web explica el proceso. Tu presencia digital tiene que estar a la altura de esa investigación.',
    keyText:
      'En cirugía y procedimientos especializados, el paciente llega informado. Ha buscado el nombre del cirujano en Google, ha leído si hay casos similares documentados, ha comparado la información de varias clínicas. Si tu web tiene solo un listado de servicios sin contexto, sin equipo visible, sin proceso explicado, lo que proyecta es falta de transparencia, no sencillez.',
    pain:
      'Muchos especialistas quirúrgicos en Sevilla tienen una reputación clínica excelente que su web no refleja en absoluto. El resultado es que pacientes que podrían haber elegido su clínica acaban llamando a otra porque la otra aparecía antes en Google y explicaba mejor qué esperar del procedimiento.',
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
    'ia-para-clinicas': {
    h1: 'Marketing con IA para tu clínica en Sevilla',
    hero:
      'Tienes Google Ads, una web, redes sociales y reseñas. El problema no es qué falta, es que gestionar todo eso bien requiere más horas de las que tienes. Aquí es donde entra la automatización.',
    keyText:
      'La mayoría de clínicas en Sevilla no tienen un problema de herramientas, tienen un problema de tiempo y de interpretación. Las campañas están activas pero nadie analiza qué palabras traen pacientes reales. El contenido web existe pero no se actualiza. Las reseñas se acumulan sin respuesta. Aplicamos IA y automatización donde hay fricción real: seguimiento de campañas, generación de contenido SEO, cualificación de leads antes de que lleguen a recepción.',
    pain:
      'Hemos visto clínicas con presupuesto de Google Ads razonable que perdían la mitad en búsquedas irrelevantes porque nadie revisaba las palabras negativas. O clínicas con 40 reseñas de 5 estrellas que no aparecían en el top 3 de Maps porque la ficha tenía datos incompletos. Son problemas solucionables, no con más herramientas, sino con alguien que revise los datos y actúe.',
    searches: ['ahorrar tiempo marketing clínica', 'automatizar captación pacientes', 'optimizar campañas sin esfuerzo', 'informes automáticos clínica', 'delegar marketing digital'],
    trust: ['Menos tiempo gestionando, más tiempo para tu clínica', 'Decisiones basadas en datos, no en corazonadas', 'Sin necesidad de conocimientos técnicos', 'Informes claros, sin tecnicismos', 'Probamos y ajustamos, no prometemos milagros'],
    serviceNotes: {
      'seo-medico': 'Generamos contenido optimizado para que tu clínica aparezca en Google sin que tengas que escribirlo tú. Analizamos qué buscan realmente los pacientes en Sevilla y adaptamos la estrategia.',
      'google-ads': 'Ajustamos las campañas según los datos: qué palabras funcionan, qué anuncios convierten y qué tipo de paciente contacta. Sin tener que revisar tú las pujas cada semana.',
      'diseno-web': 'Incorporamos herramientas que responden dudas frecuentes 24/7 y cualifican leads antes de que lleguen a tu recepción. Tu web conectada con los datos de tus campañas para que veas en un panel qué está funcionando.',
      'redes-sociales': 'Planificamos y optimizamos el contenido para que publicar en redes no te robe horas. Analizamos qué publicaciones generan más interés y ajustamos sin que tengas que estar pendiente.',
    },
    cta: 'Ver cómo podemos ayudarte a automatizar tu captación',
    faqs: [
      {
        id: '1',
        pregunta: '¿Voy a tener que aprender a usar herramientas nuevas?',
        respuesta: 'No. Nosotros nos encargamos de la configuración y el mantenimiento. Tú recibes informes claros y tomas las decisiones sobre tu clínica.',
      },
      {
        id: '2',
        pregunta: '¿Cuánto tiempo puedo ahorrar?',
        respuesta: 'Algunos gestores pasan de revisar campañas y contenido varias horas a la semana a recibir informes automáticos y dedicar solo 15 minutos a validar resultados.',
      },
      {
        id: '3',
        pregunta: '¿Un chatbot para mi clínica no va a resultar frío?',
        respuesta: 'Bien configurado, responde dudas inmediatas (horarios, precios orientativos) y deriva al equipo las conversaciones que requieren trato humano. Los pacientes valoran la inmediatez y tu equipo reduce llamadas repetitivas.',
      },
      {
        id: '4',
        pregunta: '¿Cómo sé que las campañas funcionan si no las reviso yo?',
        respuesta: 'Recibirás informes periódicos claros: contactos recibidos, coste por contacto, canales que funcionan y evolución. Si algo no funciona, lo ajustamos. No hace falta que seas experto en marketing.',
      },
      {
        id: '5',
        pregunta: '¿Esto sirve para cualquier tipo de clínica?',
        respuesta: 'Sí, pero lo adaptamos a tu especialidad, tamaño y presupuesto. No es lo mismo una clínica dental que una consulta de psicología. La tecnología ayuda, pero la estrategia la personalizamos para ti.',
      },
    ],
  },
}

const specialtyMeta: Record<string, { title: string; description: string }> = {
  'clinicas-dentales-sevilla': {
    title: 'Clínicas dentales en Sevilla que no aparecen en Google: por qué ocurre y cómo cambiarlo | iclinicas',
    description:
      'En Sevilla hay más de 400 clínicas dentales. El paciente hace clic en la que aparece primero con buenas reseñas. Si la tuya no está ahí para implantes, ortodoncia o urgencias, te explicamos qué está fallando.',
  },
  'psicologos-sevilla': {
    title: 'Cómo llegan pacientes a una consulta de psicología en Sevilla sin depender de Doctoralia | iclinicas',
    description:
      'La mayoría de psicólogos en Sevilla dependen de recomendaciones o plataformas externas. El SEO local y una web clara permiten que alguien que busca ayuda te encuentre directamente, sin intermediarios.',
  },
  'medicina-estetica-sevilla': {
    title: 'Medicina estética en Sevilla: cómo atraer pacientes que no buscan solo el precio más bajo | iclinicas',
    description:
      'Muchas clínicas estéticas en Sevilla compiten por precio en lugar de por criterio. Con una web y campañas bien enfocadas, puedes llegar a pacientes que valoran la seguridad y la profesionalidad por encima del descuento.',
  },
  'fisioterapia-sevilla': {
    title: 'Fisioterapia en Sevilla: captar pacientes de zona cuando buscan en Google Maps | iclinicas',
    description:
      'En fisioterapia, la cercanía lo decide casi todo. Si tu ficha de Google no aparece cuando alguien busca fisio en tu barrio o zona, estás perdiendo citas a personas que ya quieren reservar.',
  },
  'clinicas-reproduccion-asistida-sevilla': {
    title: 'Reproducción asistida en Sevilla: presencia digital para una decisión que no se toma a la ligera | iclinicas',
    description:
      'Los pacientes de fertilidad comparan clínicas durante semanas antes de llamar. Tu web, equipo médico visible y FAQs claras son lo que marca la diferencia entre ser una opción y no serlo.',
  },
  'pedagogos-sevilla': {
    title: 'Pedagogos en Sevilla: llegar a familias que buscan ayuda sin saber bien dónde buscar | iclinicas',
    description:
      'Las familias que necesitan apoyo educativo no siempre saben que buscan un pedagogo. Una buena web y SEO local te ponen delante de ellas cuando buscan dificultades de aprendizaje, apoyo escolar o psicopedagogía.',
  },
  'dermatologos-sevilla': {
    title: 'Dermatólogos en Sevilla: separar búsquedas con intención real de consultas informativas sin valor | iclinicas',
    description:
      'En dermatología, muchas búsquedas son informativas y pocas tienen intención privada clara. Con páginas por patología y campañas bien segmentadas, captas la parte que sí convierte sin gastar en el resto.',
  },
  'nutricionistas-sevilla': {
    title: 'Nutricionistas en Sevilla: diferenciarse cuando internet está lleno de consejos gratis | iclinicas',
    description:
      'El mayor problema de los nutricionistas no es la competencia entre ellos, es competir con el contenido gratuito de redes. Una web que explica tu método y tus resultados reales cambia cómo el paciente te percibe.',
  },
  'oftalmologos-sevilla': {
    title: 'Oftalmólogos en Sevilla: captar consultas privadas de cirugía y revisión con web y SEO | iclinicas',
    description:
      'Las búsquedas de cirugía refractiva, cataratas o revisión privada en Sevilla tienen intención alta. Si tu clínica no aparece con páginas específicas y un equipo visible, esas consultas van a otro sitio.',
  },
  'pediatria-sevilla': {
    title: 'Pediatras privados en Sevilla: por qué las familias eligen por Google Maps más que por recomendación | iclinicas',
    description:
      'Una familia que busca pediatra privado en Sevilla mira la ficha de Google, las reseñas y si hay sitio esta semana. Si tu perfil está incompleto o tarda en cargarse desde el móvil, la cita va a otro pediatra.',
  },
  'clinicas-cirugia-sevilla': {
    title: 'Cirugía privada en Sevilla: captar pacientes que investigan antes de decidir | iclinicas',
    description:
      'Quien busca un cirujano privado en Sevilla no hace clic en el primero que aparece. Compara credenciales, lee experiencia y busca que le expliquen el proceso. Tu web debe estar a la altura de esa búsqueda.',
  },
  'ia-para-clinicas': {
    title: 'IA y automatización para clínicas en Sevilla: menos horas gestionando, más pacientes captando | iclinicas',
    description:
      'La mayoría de clínicas no tienen un problema de herramientas, tienen un problema de tiempo. Aplicamos automatización donde hay fricción real: campañas, contenido SEO y cualificación de leads antes de que lleguen a recepción.',
  },
}

const longTailKeywordsEsp: Record<string, string[]> = {
  'clinicas-dentales-sevilla': ['implantes dentales Sevilla', 'ortodoncia invisible Sevilla', 'dentista cerca', 'odonlogía privada'],
  'psicologos-sevilla': ['psicólogo ansiedad Sevilla', 'terapia de pareja Sevilla', 'psicólogo infantil Sevilla', 'terapia online Sevilla'],
  'medicina-estetica-sevilla': ['ácido hialurónico Sevilla', 'Botox Sevilla', 'tratamientos faciales Sevilla', 'medicina estética'],
  'fisioterapia-sevilla': ['fisioterapeuta cerca', 'rehabilitación Sevilla', 'fisio deportivo Sevilla', 'dolor de espalda'],
  'clinicas-reproduccion-asistida-sevilla': ['FIV Sevilla', 'fertilidad Sevilla', 'reproducción asistida Sevilla', 'preservación fertilidad'],
  'pedagogos-sevilla': ['pedagogo Sevilla', 'apoyo educativo', 'psicopedagogo Sevilla', 'dificultades aprendizaje'],
  'dermatologos-sevilla': ['dermatólogo Sevilla', 'revisión lunares', 'acné tratamiento', 'dermatología estética'],
  'nutricionistas-sevilla': ['nutricionista Sevilla', 'pérdida de peso', 'nutrición deportiva', 'dieta saludable'],
  'oftalmologos-sevilla': ['oftalmólogo Sevilla', 'cirugía ocular', 'cataratas Sevilla', 'revisión vista'],
  'pediatria-sevilla': ['pediatra privado Sevilla', 'pediatra cerca', 'medicina infantil', 'pediatría Sevilla'],
  'clinicas-cirugia-sevilla': ['cirujano Sevilla', 'segunda opinión médica', 'cirugía privada', 'especialista quirúrgico'],
  'ia-para-clinicas': ['ia clinicas Sevilla', 'chatbot sanitario', 'automatizacion marketing clinicas', 'analitica predictiva pacientes'],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const especialidad = getEspecialidadBySlug(params.slug)
  const content = specialtyContent[params.slug]
  const meta = specialtyMeta[params.slug]

  if (!especialidad) {
    return { title: 'Especialidad no encontrada' }
  }

  const desc = meta?.description || content?.hero || especialidad.descripcionLarga
  const truncatedDesc = desc.length > 160 ? desc.substring(0, 157) + '...' : desc
  const ogTitle = content?.h1 || `Marketing digital para ${especialidad.nombre} en Sevilla`
  const ogImage = buildOgUrl({
    title: ogTitle,
    category: 'A quién ayudamos',
    subtitle: `${especialidad.nombre} · Sevilla`,
  })

  return {
    title: meta?.title || `${ogTitle} | iclinicas`,
    description: truncatedDesc,
    alternates: {
      canonical: `/especialidades/${params.slug}`,
    },
    openGraph: {
      title: meta?.title || ogTitle,
      description: truncatedDesc,
      url: `https://www.iclinicas.es/especialidades/${params.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta?.title || ogTitle,
      description: truncatedDesc,
      images: [ogImage],
    },
    keywords: [
      `marketing digital ${especialidad.nombre.toLowerCase()} Sevilla`,
      ...(content?.searches || []),
      ...(longTailKeywordsEsp[params.slug] || []),
    ],
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

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-h1 font-heading text-primary mb-4">Contenido no disponible</h1>
          <p className="text-text-muted">Lo sentimos, no pudimos cargar el contenido de esta especialidad.</p>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedServices = especialidad.servicios
    .map((slug) => servicios.find((servicio) => servicio.slug === slug))
    .filter(Boolean)

  const serviceSchema = buildServiceSchema({
    name: content.h1,
    description: content.hero,
    url: `https://www.iclinicas.es/especialidades/${especialidad.slug}`,
    serviceType: [
      `Marketing sanitario para ${especialidad.nombre}`,
      'SEO local sanitario',
      'Google Ads para clínicas',
      'Diseño web sanitario',
    ],
  })
  const faqSchema = {
    ...buildFAQSchema(
      content.faqs.map((faq) => ({
        question: faq.pregunta,
        answer: faq.respuesta,
      }))
    ),
    '@id': `https://www.iclinicas.es/especialidades/${especialidad.slug}#faq`,
  }
  const serviceSchemaWithFaq = {
    ...serviceSchema,
    subjectOf: {
      '@id': faqSchema['@id'],
    },
  }

  return (
    <>
      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaWithFaq) }} suppressHydrationWarning />
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow">

        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Especialidades', href: '/especialidades' },
                { label: especialidad.nombre, href: `/especialidades/${especialidad.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start my-6">
              <div>
                <p className="text-label text-accent mb-4">Especialistas en clínicas de Sevilla</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">
                  {content.h1 || `Marketing para clínicas de ${especialidad.nombre} en Sevilla`}
                </h1>
                <p className="text-base sm:text-lg text-text-muted mb-6">{content.hero}</p>
                <div className="bg-surface border border-slate-200 rounded-lg p-6 mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-text mb-3">
                    El reto real de las clínicas de {especialidad.nombre.toLowerCase()} en Sevilla
                  </h2>
                  <p className="text-text-muted leading-relaxed">{content.pain}</p>
                </div>
                <p className="text-text leading-relaxed font-medium">{content.keyText}</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-3">
                  ¿Quieres revisar esta especialidad?
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Analizamos Google, web, campañas, reputación y puntos de contacto de tu clínica en Sevilla.
                </p>
                <a href="#formulario-auditoria" className="btn-primary btn-primary-lg block text-center">
                  {content.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                <Search size={28} strokeWidth={1.6} className="text-primary mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-5">Qué búsquedas conviene captar</h2>
                <ul className="space-y-3">
                  {content.searches.map((search) => (
                    <li key={search} className="flex gap-3 text-text-muted">
                      <MapPin size={18} strokeWidth={1.8} className="text-primary flex-shrink-0 mt-1" />
                      <span>{search}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                <ShieldCheck size={28} strokeWidth={1.6} className="text-primary mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-5">Qué confianza necesita esta especialidad</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-8 text-center">
              Servicios de marketing con mayor retorno para {especialidad.nombre.toLowerCase()}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6">
              Captación sanitaria sin perder rigor
            </h2>
            <p className="text-text-muted">
              Adaptamos mensajes, campañas y páginas a la forma en la que se decide cada servicio sanitario privado. El objetivo es mejorar visibilidad, confianza y solicitudes cualificadas sin promesas clínicas ni presión comercial.
            </p>
          </div>
        </section>

        <FaqSection faqs={content.faqs} title={`Preguntas frecuentes sobre marketing digital para ${especialidad.nombre.toLowerCase()} en Sevilla`} />

        <GoogleBusinessMap />

        <LocalTestimonials />

        {(() => {
          const related = specialtyRelatedServices[params.slug] || []
          if (related.length === 0) return null
          return (
            <section className="section-padding bg-white">
              <div className="container-custom max-w-3xl text-center">
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">Servicios recomendados para tu especialidad</h2>
                <p className="text-text-muted mb-6">Estos servicios son los que más ayudan a las clínicas de esta especialidad:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {related.map((item) => (
                    <Link key={item.href} href={item.href} className="inline-flex items-center rounded-full border border-slate-200 bg-surface hover:bg-primary/5 hover:border-primary px-4 py-2 text-sm font-medium text-text-muted transition hover:text-primary">{item.label}</Link>
                  ))}
                  <Link href="/contacto" className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">auditoría gratuita</Link>
                </div>
              </div>
            </section>
          )
        })()}

        <section id="formulario-auditoria" className="section-padding section-primary">
          <div className="container-custom">
            <Target size={32} strokeWidth={1.6} className="mx-auto mb-5 text-[#FFD166]" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
                ¿Quieres revisar tu captación en esta especialidad?
              </h2>
              <p className="text-base sm:text-lg text-white">
                Revisaremos cómo aparece tu clínica en Google, qué transmite tu web y qué oportunidades pueden estar frenando nuevas solicitudes.
              </p>
              <p className="text-sm opacity-80 mt-4 text-white">
                La auditoría no te obliga a contratar. Sirve para saber qué mejorar primero y si tiene sentido trabajar juntos.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-lg border border-white/20 p-6 sm:p-8 shadow-lg">
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
    </>
  )
}
