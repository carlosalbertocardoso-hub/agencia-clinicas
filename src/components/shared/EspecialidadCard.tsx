import Link from 'next/link'
import {
  Smile,
  Brain,
  Wand2,
  Dumbbell,
  UtensilsCrossed,
  Baby,
  Stethoscope,
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
  Tooth: <Smile size={32} />,
  Brain: <Brain size={32} />,
  Sparkles: <Wand2 size={32} />,
  Activity: <Dumbbell size={32} />,
  Apple: <UtensilsCrossed size={32} />,
  Baby: <Baby size={32} />,
  Hospital: <Stethoscope size={32} />,
}

export default function EspecialidadCard({
  nombre,
  slug,
  descripcionCorta,
  icono,
  resultados,
  color,
}: EspecialidadCardProps) {
  // Usar el icono Lucide mapeado, con fallback al emoji
  const lucideIcon = iconMap[icono] || icono

  return (
    <Link href={`/especialidades/${slug}`}>
      <div className="card card-service h-full p-6 cursor-pointer group hover:shadow-md transition-shadow">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition text-primary">
          {typeof lucideIcon === 'string' ? <span className="text-4xl">{lucideIcon}</span> : lucideIcon}
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
