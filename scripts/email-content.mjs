/**
 * Generador de contenido para emails de iClínicas
 *
 * Estilo: Carlos — directo, profesional, cercano, español de España (vosotros).
 * Ver MEMORY.md para reglas completas.
 */

const SPECIALTY_LABELS = {
  'MED-EST': 'medicina estética',
  'DENTAL': 'odontología',
  'DERMA': 'dermatología',
  'MULTI': 'centro médico',
  'FERT': 'fertilidad',
  'TRAUM': 'traumatología',
  'PSICO': 'psicología',
  'FISIO': 'fisioterapia',
  'OFTA': 'oftalmología',
}

function specLabel(spec) {
  return SPECIALTY_LABELS[spec?.toUpperCase()?.trim()] || 'vuestro sector'
}

/**
 * Normaliza un string: quita espacios extra, capitaliza primera letra,
 * asegura que termine en punto.
 */
function clean(text) {
  if (!text) return ''
  return text.trim().replace(/\.$/, '') + '.'
}

/**
 * Construye las variables del email para una clínica.
 *
 * @param {object} clinic - Datos de la clínica (Nombre, Especialidad, Web...)
 * @param {object|null} dafo - Objeto DAFO con fortalezas/debilidades/oportunidades/amenazas
 * @returns {object} Variables para la plantilla HTML
 */
export function buildVars(clinic, dafo) {
  const name = (clinic.Nombre || clinic.name || 'vuestra clínica').trim()
  const spec = (clinic.Especialidad || clinic.specialty || '').toUpperCase().trim()
  const hasDafo = Boolean(dafo && dafo.fortalezas?.length)

  // ─── 1. Saludo ──────────────────────────────────────────
  const saludo = `Hola, equipo de ${name},`

  // ─── 2. Presentación ────────────────────────────────────
  const presentacion = 'Soy Carlos Cardoso, de iClínicas. Ayudo a clínicas privadas de Sevilla a captar pacientes de alto valor sin depender solo del boca a boca.'

  // ─── 3. Gancho personalizado ────────────────────────────
  let gancho = ''
  if (hasDafo && dafo.fortalezas[0]) {
    const f = clean(dafo.fortalezas[0])
    gancho = `He dedicado tiempo a revisar ${name}. ${f.charAt(0).toUpperCase() + f.slice(1)}`
  } else {
    const label = specLabel(spec)
    const ganchos = {
      'DENTAL': `He revisado la presencia digital de ${name} y he visto que tenéis recorrido para mejorar cómo os encuentran los pacientes que buscan tratamientos dentales en Sevilla.`,
      'MED-EST': `He dedicado tiempo a analizar ${name} dentro del contexto de la medicina estética en Sevilla. He visto aspectos que podrían estar limitando la captación de pacientes privados.`,
      'DERMA': `He estado revisando clínicas de dermatología en Sevilla y me he fijado en ${name}. Hay algunas cosas que probablemente os interese conocer.`,
      'FERT': `He analizado ${name} porque en fertilidad los pacientes comparan mucho antes de contactar. He visto margen para mejorar cómo os encuentran.`,
      'TRAUM': `He revisado ${name}. En traumatología, muchas búsquedas nacen de una necesidad concreta, y he visto que hay oportunidades para captar mejor esa demanda.`,
      'PSICO': `He echado un vistazo a ${name}. En psicología, la confianza es clave desde el primer contacto, y hay aspectos que podrían ayudar a transmitirla mejor.`,
    }
    gancho = ganchos[spec] || `He estado revisando la presencia digital de ${name} y he visto varias cosas que me gustaría compartiros.`
  }

  const intro = `${presentacion}\n\n${gancho}`

  // ─── 4. Tres oportunidades ──────────────────────────────
  let op1, op2, op3

  if (hasDafo) {
    const d = dafo.debilidades || []
    const o = dafo.oportunidades || []
    const a = dafo.amenazas || []

    op1 = {
      titulo: d[0] ? clean(d[0]).replace(/\.$/, '') : 'Presencia digital con margen de mejora',
      texto: o[0] ? clean(o[0]) : 'Conviene revisar cómo os ven los pacientes antes de contactar.',
    }

    op2 = {
      titulo: o[1] ? clean(o[1]).replace(/\.$/, '') : d[1] ? clean(d[1]).replace(/\.$/, '') : 'Ficha de Google con potencial por desarrollar',
      texto: o[1]
        ? clean(o[1]).replace(d[1] ? ` ${clean(d[1])}` : '')
        : d[1] ? clean(d[1]) : '',
    }

    op3 = {
      titulo: a[0] ? clean(a[0]).replace(/\.$/, '') : `Contexto competitivo en ${specLabel(spec)}`,
      texto: a[0]
        ? clean(a[0])
        : 'Otras clínicas están trabajando su presencia digital. Conviene revisar la vuestra para no perder posición a corto plazo.',
    }
  } else {
    op1 = fallbacks[spec]?.op1 || fallbacks['DEFAULT'].op1
    op2 = fallbacks[spec]?.op2 || fallbacks['DEFAULT'].op2
    op3 = fallbacks[spec]?.op3 || fallbacks['DEFAULT'].op3
  }

  // ─── 5. Propuesta ──────────────────────────────────────
  const oferta = {
    titulo: 'Diagnóstico breve de captación',
    texto: 'Si os encaja, os preparo una revisión breve de vuestra presencia en Google, web y competencia local. La idea es que os llevéis prioridades claras, no un informe eterno.',
    badge: 'Gratuito · Sin compromiso',
    cta: 'Recibir diagnóstico breve',
    nota: 'Respuesta directa de Carlos · Sin compromiso',
  }

  // ─── 6. Cierre ──────────────────────────────────────────
  const cierre = 'Si no es buen momento, no pasa nada. Pero si os interesa verlo con calma, os lo preparo y lo revisamos cuando os venga bien.'

  // ─── Asunto ─────────────────────────────────────────────
  const asunto = hasDafo
    ? `${name} — 3 oportunidades de mejora en captación digital`
    : `${name} — oportunidades de captación para ${specLabel(spec)} en Sevilla`

  return {
    email_title: asunto,
    saludo,
    hero_title: asunto,
    hero_copy: 'No os escribo por casualidad. He estado revisando cómo se presentan varias clínicas privadas en Sevilla y he preparado una lectura breve, pensada para dirección.',
    intro,
    observacion_personalizada: '',
    titulo_oportunidades: 'Tres cosas que he visto desde fuera:',
    oportunidad_1_titulo: op1.titulo,
    oportunidad_1_texto: op1.texto,
    oportunidad_2_titulo: op2.titulo,
    oportunidad_2_texto: op2.texto,
    oportunidad_3_titulo: op3.titulo,
    oportunidad_3_texto: op3.texto,
    diagnostico_titulo: oferta.titulo,
    diagnostico_texto: oferta.texto,
    entregable_1: 'Qué se ve desde fuera cuando un paciente os busca',
    entregable_2: 'Qué puntos pueden estar frenando contactos de calidad',
    entregable_3: 'Qué tres acciones tendría sentido priorizar primero',
    cta_badge: oferta.badge,
    cta_texto: oferta.cta,
    cta_url: 'https://www.iclinicas.es/contacto',
    cta_nota: oferta.nota,
    firma_nombre: 'Carlos Cardoso\niClínicas — Captación de pacientes para clínicas premium en Sevilla',
    cierre,
    unsubscribe_url: 'mailto:info@iclinicas.es?subject=BAJA',
  }
}

// ─── Fallbacks por especialidad (sin DAFO) ───────────────
const fallbacks = {
  DENTAL: {
    op1: {
      titulo: 'Tratamientos dentales con margen de visibilidad',
      texto: 'Implantes, ortodoncia o estética dental suelen tener búsquedas muy concretas. Si esas páginas no están bien trabajadas, es fácil que el contacto vaya a otra clínica.',
    },
    op2: {
      titulo: 'La ficha de Google puede aportar más confianza',
      texto: 'Fotos, servicios, publicaciones y respuestas a reseñas ayudan a que un paciente os elija antes de entrar en la web. Es una pieza sencilla, pero muy importante.',
    },
    op3: {
      titulo: 'Competencia local alrededor de los mismos tratamientos',
      texto: 'El sector dental en Sevilla está muy disputado. La diferencia suele estar en aparecer bien, explicar mejor y facilitar el contacto en el momento adecuado.',
    },
  },
  'MED-EST': {
    op1: {
      titulo: 'Tratamientos con alta demanda pero poca diferenciación visible',
      texto: 'En estética, muchos pacientes comparan antes de escribir. Si los tratamientos principales no explican bien vuestro enfoque, la decisión se desplaza hacia la clínica que mejor lo comunica.',
    },
    op2: {
      titulo: 'La confianza se trabaja también antes del contacto',
      texto: 'Las reseñas, las fotos del equipo y la forma de explicar cada tratamiento ayudan a reducir dudas. Bien ordenado, eso puede mejorar la calidad de los contactos que llegan.',
    },
    op3: {
      titulo: 'Otras clínicas invirtiendo en visibilidad local',
      texto: 'En Sevilla hay clínicas de estética trabajando su presencia en Google de forma constante. Conviene revisar si estáis apareciendo con suficiente fuerza en los tratamientos que más os interesan.',
    },
  },
  DERMA: {
    op1: {
      titulo: 'El paciente busca problemas concretos, no solo especialidades',
      texto: 'Acné, manchas, alopecia, lunares o tratamientos con láser necesitan páginas claras y útiles. Ese contenido ayuda a captar a pacientes que todavía están comparando opciones.',
    },
    op2: {
      titulo: 'La experiencia del equipo debe verse en la web',
      texto: 'Si el equipo tiene recorrido, conviene explicarlo de forma sencilla y visible. Eso aporta confianza antes de pedir cita.',
    },
    op3: {
      titulo: 'Otras clínicas pueden ocupar las búsquedas de mayor intención',
      texto: 'Cuando una clínica trabaja bien las dudas frecuentes y los tratamientos, gana presencia justo en el momento en el que el paciente está decidiendo.',
    },
  },
  FERT: {
    op1: {
      titulo: 'Decisiones meditadas que necesitan contenido claro',
      texto: 'Conviene explicar procesos, tiempos, pruebas y acompañamiento con un lenguaje sencillo. Eso ayuda a que el paciente llegue con menos dudas.',
    },
    op2: {
      titulo: 'La confianza pesa tanto como la visibilidad',
      texto: 'Equipo, metodología, casos explicados con prudencia y preguntas frecuentes pueden hacer que la clínica transmita más seguridad antes del primer contacto.',
    },
    op3: {
      titulo: 'Competidores con mensajes más fáciles de entender',
      texto: 'Si otras clínicas explican mejor el proceso del paciente, pueden recibir contactos aunque vuestra propuesta sea igual o más sólida.',
    },
  },
  TRAUM: {
    op1: {
      titulo: 'Búsquedas por dolor o lesión con mucha intención',
      texto: 'Rodilla, hombro, espalda o lesiones deportivas necesitan contenidos claros que expliquen opciones y faciliten pedir cita.',
    },
    op2: {
      titulo: 'Especialistas y tecnología deben estar visibles',
      texto: 'Cuando el paciente ve equipo, experiencia y pasos de atención, entiende mejor por qué contactar con vosotros.',
    },
    op3: {
      titulo: 'Clínicas y aseguradoras compiten por las mismas búsquedas',
      texto: 'Si no se trabaja la presencia local, es fácil que la demanda acabe en portales u otros centros con más visibilidad.',
    },
  },
  PSICO: {
    op1: {
      titulo: 'Motivos de consulta que merecen páginas propias',
      texto: 'Ansiedad, pareja, autoestima, duelo o terapia infantil no deberían quedar mezclados en una página genérica. Cada necesidad tiene un lenguaje distinto.',
    },
    op2: {
      titulo: 'El tono puede facilitar el primer contacto',
      texto: 'Una web clara, humana y sin exceso de tecnicismos ayuda a que la persona sienta que puede escribir sin sentirse juzgada.',
    },
    op3: {
      titulo: 'Directorios y portales ocupan mucha visibilidad',
      texto: 'Si la clínica no trabaja su propia presencia, el paciente suele acabar comparando en plataformas donde todos parecen iguales.',
    },
  },
  DEFAULT: {
    op1: {
      titulo: 'Presencia en Google con margen de mejora',
      texto: 'Cuando un paciente busca vuestra especialidad en Sevilla, conviene que os encuentre rápido y con información clara. Merece la pena revisarlo.',
    },
    op2: {
      titulo: 'La web puede ayudar a convertir mejor las visitas',
      texto: 'Una estructura clara por servicio y mensajes sencillos ayudan a que el paciente dé el siguiente paso con confianza.',
    },
    op3: {
      titulo: 'Otras clínicas están trabajando su visibilidad',
      texto: 'Conviene revisar vuestra presencia digital para no perder posición a corto plazo frente a competidores que ya están invirtiendo en estos canales.',
    },
  },
}
