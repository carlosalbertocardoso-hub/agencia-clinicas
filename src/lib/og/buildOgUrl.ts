const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.iclinicas.es'

export function buildOgUrl(params: {
  title: string
  category?: string
  subtitle?: string
}): string {
  const qs = new URLSearchParams()
  qs.set('title', params.title)
  if (params.category) qs.set('category', params.category)
  if (params.subtitle) qs.set('subtitle', params.subtitle)
  return `${BASE}/api/og?${qs.toString()}`
}
