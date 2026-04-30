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
      <div className="card card-service h-full p-6 cursor-pointer group hover:shadow-md transition-shadow">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-4xl group-hover:bg-primary/20 transition">
          {icono}
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-3 text-text group-hover:text-primary transition">
          {nombre}
        </h3>
        <p className="text-text-muted text-sm mb-6 leading-relaxed">{descripcionCorta}</p>
        <div
          className="inline-block px-4 py-2 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: color + '15',
            color: color,
          }}
        >
          {resultados}
        </div>
      </div>
    </Link>
  )
}
