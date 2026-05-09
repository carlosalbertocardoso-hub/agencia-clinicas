import Link from 'next/link'
import {
  Activity,
  Apple,
  Baby,
  Bot,
  Brain,
  CircleDot,
  Dna,
  Eye,
  GraduationCap,
  ScanFace,
  Stethoscope,
  Wand2,
} from 'lucide-react'

interface EspecialidadCardProps {
  titulo: string
  subtitulo: string
  slug: string
  icono: string
  ariaLabel: string
}

const iconMap: Record<string, React.ReactNode> = {
  Tooth: <CircleDot size={28} strokeWidth={1.6} />,
  Brain: <Brain size={28} strokeWidth={1.6} />,
  Sparkles: <Wand2 size={28} strokeWidth={1.6} />,
  Activity: <Activity size={28} strokeWidth={1.6} />,
  Dna: <Dna size={28} strokeWidth={1.6} />,
  GraduationCap: <GraduationCap size={28} strokeWidth={1.6} />,
  ScanFace: <ScanFace size={28} strokeWidth={1.6} />,
  Apple: <Apple size={28} strokeWidth={1.6} />,
  Eye: <Eye size={28} strokeWidth={1.6} />,
  Baby: <Baby size={28} strokeWidth={1.6} />,
  Hospital: <Stethoscope size={28} strokeWidth={1.6} />,
  Bot: <Bot size={28} strokeWidth={1.6} />,
}

export default function EspecialidadCard({
  titulo,
  subtitulo,
  slug,
  icono,
  ariaLabel,
}: EspecialidadCardProps) {
  const lucideIcon = iconMap[icono] || icono

  return (
    <Link href={`/especialidades/${slug}`} aria-label={ariaLabel} className="block h-full">
      <article className="card h-full p-6 cursor-pointer group hover:shadow-md transition-shadow">
        <div className="w-14 h-14 rounded-md border border-primary/20 bg-white flex items-center justify-center mb-5 transition text-primary group-hover:border-primary/45">
          {typeof lucideIcon === 'string' ? <CircleDot size={28} strokeWidth={1.6} /> : lucideIcon}
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-3 text-text group-hover:text-primary transition">
          {titulo}
        </h3>
        <p className="text-text-muted text-sm mb-6 leading-relaxed">{subtitulo}</p>
        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-white">
          Ver estrategia específica
        </span>
      </article>
    </Link>
  )
}
