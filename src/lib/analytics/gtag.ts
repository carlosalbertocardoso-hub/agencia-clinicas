export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function pageview(url: string) {
  if (!GA_ID || typeof window === 'undefined') return
  window.gtag?.('event', 'page_view', { page_path: url })
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
  if (!GA_ID || typeof window === 'undefined') return
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

export function grantConsent() {
  if (typeof window === 'undefined') return
  window.gtag?.('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
}

export function denyConsent() {
  if (typeof window === 'undefined') return
  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
}
