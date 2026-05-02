import { BadgeCheck, BarChart3, Star, Target } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    { icon: BadgeCheck, label: 'Especialistas en clínicas' },
    { icon: Star, label: 'Trato claro y cercano' },
    { icon: BarChart3, label: 'Más contactos interesados' },
    { icon: Target, label: 'Enfocados en Sevilla' },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/95 border border-accent rounded-lg text-sm text-text font-medium shadow-sm backdrop-blur transition"
        >
          <badge.icon size={16} strokeWidth={1.7} className="text-primary flex-shrink-0" />
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
