export default function ProcesoSection() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Diagnóstico',
      descripcion:
        'Revisamos Google Business Profile, web, SEO local, campañas, reseñas, mensajes y competencia directa en Sevilla.',
    },
    {
      numero: '02',
      titulo: 'Prioridades',
      descripcion:
        'Te decimos qué está frenando más oportunidades: visibilidad, confianza, conversión, inversión mal enfocada o falta de medición.',
    },
    {
      numero: '03',
      titulo: 'Plan de captación',
      descripcion:
        'Definimos qué conviene hacer primero: mejorar páginas, crear landings, activar campañas, ordenar reseñas o medir correctamente.',
    },
    {
      numero: '04',
      titulo: 'Optimización mensual',
      descripcion:
        'Analizamos llamadas, formularios, WhatsApp, coste por contacto y calidad de las solicitudes para ajustar el plan.',
    },
  ]

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Un proceso claro para captar mejor</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Trabajamos con prioridades, medición y lenguaje comprensible para que el gerente sepa qué se hace y para qué.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 text-6xl font-bold text-slate-100 opacity-50">
                {paso.numero}
              </div>

              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-4">{paso.numero}</div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{paso.titulo}</h3>
                <p className="text-text-muted text-sm">{paso.descripcion}</p>
              </div>

              {idx < pasos.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-primary transform -translate-y-1/2">
                  <span className="absolute -right-2 top-1/2 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
