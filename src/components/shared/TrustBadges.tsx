export default function TrustBadges() {
  const badges = [
    { icon: '✓', label: 'Marketing Médico Especializado' },
    { icon: '⭐', label: '4.9/5 Satisfacción' },
    { icon: '📊', label: '500+ Clínicas Atendidas' },
    { icon: '🎯', label: '10+ Años de Experiencia' },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-accent rounded-lg text-sm text-text font-medium shadow-sm hover:shadow-md transition"
        >
          <span className="text-base">{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
