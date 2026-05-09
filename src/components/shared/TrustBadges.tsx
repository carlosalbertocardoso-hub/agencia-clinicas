import { BadgeCheck, TrendingUp, Building2, BarChart3 } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    { icon: Building2, label: '+8 años en marketing sanitario', sublabel: 'Desde 2018' },
    { icon: BadgeCheck, label: '+50 clínicas', sublabel: 'En Sevilla y provincia' },
    { icon: BarChart3, label: '+200 campañas gestionadas', sublabel: 'SEO, Ads y contenido' },
    { icon: TrendingUp, label: 'ROI medio 8/10', sublabel: 'En clientes con seguimiento' },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/95 border border-accent rounded-lg text-sm text-text font-medium shadow-sm backdrop-blur transition"
        >
          <badge.icon size={16} strokeWidth={1.7} className="text-primary flex-shrink-0" />
          <span>
            <span className="font-semibold">{badge.label}</span>
            {badge.sublabel && <span className="text-text-muted text-xs ml-1">· {badge.sublabel}</span>}
          </span>
        </div>
      ))}
    </div>
  )
}
