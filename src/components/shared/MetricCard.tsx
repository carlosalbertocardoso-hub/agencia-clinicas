interface MetricCardProps {
  valor: string
  label: string
  icon?: string
  color?: 'primary' | 'accent'
}

export default function MetricCard({
  valor,
  label,
  icon,
  color = 'primary',
}: MetricCardProps) {
  const bgColor = color === 'primary' ? 'bg-primary' : 'bg-accent'
  const textColor = 'text-white'

  return (
    <div className={`${bgColor} ${textColor} rounded-lg p-6 text-center`}>
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <div className="text-4xl font-bold mb-1">{valor}</div>
      <p className="text-sm opacity-90">{label}</p>
    </div>
  )
}
