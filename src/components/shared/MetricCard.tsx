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

  return (
    <div className={`${bgColor} text-white rounded-lg p-8 text-center`}>
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <div className="text-5xl font-bold mb-2">{valor}</div>
      <p className="text-sm font-medium opacity-90">{label}</p>
    </div>
  )
}
