export function generateSEOTitle(title: string, suffix = 'Sevilla | Pacientes Sevilla'): string {
  return `${title} - ${suffix}`
}

export function generateSEODescription(description: string): string {
  if (description.length > 160) {
    return description.substring(0, 157) + '...'
  }
  return description
}

export const baseUrl = 'https://pacientessevilla.com'

export function getCanonicalUrl(path: string): string {
  return `${baseUrl}${path}`
}
