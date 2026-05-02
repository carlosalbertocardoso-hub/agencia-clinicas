import Link from 'next/link'
import {
  Activity,
  Apple,
  Baby,
  Brain,
  CircleDot,
  Stethoscope,
  Wand2,
} from 'lucide-react'

interface EspecialidadCardProps {
  nombre: string
  slug: string
  descripcionCorta: string
  icono: string
  resultados: string
  color: string
}

const iconMap: Record<string, React.ReactNode> = {
  Tooth: <CircleDot size={28} strokeWidth={1.6} />,
  Brain: <Brain size={28} strokeWidth={1.6} />,
  Sparkles: <Wand2 size={28} strokeWidth={1.6} />,
  Activity: <Activity size={28} strokeWidth={1.6} />,
  Apple: <Apple size={28} strokeWidth={1.6} />,
  Baby: <Baby size={28} strokeWidth={1.6} />,
  Hospital: <Stethoscope size={28} strokeWidth={1.6} />,
}

export default function EspecialidadCard({
  nombre,
  slug,
  descripcionCorta,
  icono,
  resultados,
  color,
}: EspecialidadCardProps) {
  const lucideIcon = iconMap[icono] || icono

  return (
    <Link href={`/especialidades/${slug}`}>
      <div className="card h-full p-6 cursor-pointer group hover:shadow-md transition-shadow">
        <div className="w-14 h-14 rounded-md border border-primary/20 bg-white flex items-center justify-center mb-5 transition text-primary group-hover:border-primary/45">
          {typeof lucideIcon === 'string' ? <CircleDot size={28} strokeWidth={1.6} /> : lucideIcon}
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
