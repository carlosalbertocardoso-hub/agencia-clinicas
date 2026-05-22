export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

function dataLayer(): unknown[] {
  if (typeof window === 'undefined') return []
  window.dataLayer = window.dataLayer || []
  return window.dataLayer
}

// Extrae el slug de especialidad de rutas como /especialidades/clinicas-dentales-sevilla
export function getEspecialidadFromPath(path?: string): string {
  const p = path ?? (typeof window !== 'undefined' ? window.location.pathname : '')
  const match = p.match(/\/especialidades\/([^/]+)/)
  if (!match) return ''
  // Quita el sufijo geográfico (-sevilla, -en-sevilla, etc.)
  return match[1].replace(/-(?:en-)?sevilla$/, '')
}

export function pageview(url: string) {
  dataLayer().push({
    event: 'page_view',
    page_path: url,
    especialidad: getEspecialidadFromPath(url),
    lead_source: 'web',
  })
}

export function event({
  action,
  category,
  label,
  value,
}: {
  action: string
  category?: string
  label?: string
  value?: number
}) {
  dataLayer().push({
    event: action,
    event_category: category,
    event_label: label,
    value,
  })
}

// Evento clave GA4 — marcar como conversión en GA4 > Eventos > generate_lead
export function generateLead({
  lead_type,
  especialidad,
  page_title,
}: {
  lead_type: 'contacto' | 'auditoria'
  especialidad?: string
  page_title?: string
}) {
  dataLayer().push({
    event: 'generate_lead',
    lead_type,
    especialidad: especialidad ?? getEspecialidadFromPath(),
    lead_source: 'web',
    page_title: page_title ?? (typeof document !== 'undefined' ? document.title : ''),
  })
}

export function grantConsent() {
  if (typeof window === 'undefined') return
  dataLayer().push([
    'consent',
    'update',
    {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    },
  ])
  dataLayer().push({ event: 'consent_granted' })
}

export function denyConsent() {
  if (typeof window === 'undefined') return
  dataLayer().push([
    'consent',
    'update',
    {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    },
  ])
  dataLayer().push({ event: 'consent_denied' })
}
