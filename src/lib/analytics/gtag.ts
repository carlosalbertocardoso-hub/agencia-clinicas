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

export function pageview(url: string) {
  dataLayer().push({ event: 'page_view', page_path: url })
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
