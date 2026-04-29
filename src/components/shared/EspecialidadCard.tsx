import Link from 'next/link'

interface EspecialidadCardProps {
  nombre: string
  slug: string
  descripcionCorta: string
  icono: string
  resultados: string
  color: string
}

export default function EspecialidadCard({
  nombre,
  slug,
  descripcionCorta,
  icono,
  resultados,
  color,
}: EspecialidadCardProps) {
  return (
    <Link href={`/especialidades/${slug}`}>
      <div className="h-full bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group">
        <div className="text-5xl mb-4">{icono}</div>
        <h3 className="font-heading text-h4 mb-3 text-text group-hover:text-primary transition">
          {nombre}
        </h3>
        <p className="text-text-muted text-sm mb-4">{descripcionCorta}</p>
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-opacity-10 text-opacity-100"
          style={{
            backgroundColor: color + '20',
            color: color,
          }}
        >
          {resultados}
        </div>
      </div>
    </Link>
  )
}
