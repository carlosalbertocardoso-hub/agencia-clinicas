export default function TrustBadges() {
  const badges = [
    { icon: '✓', label: 'Expertos en Marketing Sanitario' },
    { icon: '⭐', label: '4.9/5 en valoraciones' },
    { icon: '📊', label: '+500 clínicas asesoradas' },
    { icon: '🎯', label: '10+ años de experiencia' },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded text-sm text-text"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className="font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
