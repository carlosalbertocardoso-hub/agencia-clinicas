export default function PorQueNosotrosSection() {
  const razones = [
    {
      icono: '🎯',
      titulo: 'Especialización médica',
      descripcion:
        'Entendemos el sector sanitario. Sabemos qué buscan los pacientes, cómo deciden y cómo convertir visitantes en consultas.',
    },
    {
      icono: '📊',
      titulo: 'Resultados probados',
      descripcion:
        'Más de 500 clínicas han aumentado sus pacientes con nosotros. Datos reales, casos documentados, métricas transparentes.',
    },
    {
      icono: '🚀',
      titulo: 'Estrategia integral',
      descripcion:
        'No hacemos una sola cosa. Combinamos SEO, Google Ads, diseño web y redes sociales para máximo impacto.',
    },
    {
      icono: '💬',
      titulo: 'Atención personalizada',
      descripcion:
        'Tu asesor es un especialista dedicado a tu caso. Respuestas rápidas, estrategia adaptada, revisiones mensuales.',
    },
    {
      icono: '💰',
      titulo: 'ROI garantizado',
      descripcion:
        'Nos importa tu inversión. Trabajamos con modelos de pago por resultados cuando es posible. Transparencia total.',
    },
    {
      icono: '🏆',
      titulo: 'Experiencia local',
      descripcion:
        'Conocemos Sevilla, Andalucía y el mercado sanitario local. Estrategias geo-segmentadas que funcionan en tu zona.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">¿Por qué confían en nosotros?</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Lo que nos diferencia de otras agencias de marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {razones.map((razon, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition hover:border-primary">
              <div className="text-5xl mb-4">{razon.icono}</div>
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{razon.titulo}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{razon.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
