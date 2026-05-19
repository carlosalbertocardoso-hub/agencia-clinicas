const formatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Madrid',
})

export function formatDateES(iso: string): string {
  return formatter.format(new Date(iso))
}

export function toISODate(iso: string): string {
  return new Date(iso).toISOString().split('T')[0]
}
