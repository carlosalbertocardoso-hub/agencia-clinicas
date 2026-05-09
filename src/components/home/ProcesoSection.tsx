export default function ProcesoSection() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Auditoría gratuita en 48h',
      descripcion:
        'Sin compromiso y sin reuniones interminables. Revisamos tu presencia en Google, web, campañas, reseñas y competencia local. En 48h sabrás qué está frenando tus pacientes.',
      beneficio: 'Saber por dónde empezar sin pagar ni un euro.',
    },
    {
      numero: '02',
      titulo: 'Plan con 3 prioridades',
      descripcion:
        'Te presentamos un plan claro con las 3 cosas que más impacto pueden tener en tu captación: visibilidad, confianza, conversión o inversión. Sin tecnicismos ni informes de 50 páginas.',
      beneficio: 'Saber exactamente qué hacer y cuánto cuesta.',
    },
    {
      numero: '03',
      titulo: 'Nosotros lo ejecutamos',
      descripcion:
        'Ponemos en marcha la estrategia mientras tú sigues con tu clínica. Solo necesitas 15 minutos a la semana para validar resultados. Del marketing nos encargamos nosotros.',
      beneficio: 'Ahorrar horas de trabajo cada semana.',
    },
    {
      numero: '04',
      titulo: 'Resultados medibles cada mes',
      descripcion:
        'Cada mes recibes un informe claro: contactos recibidos, coste por paciente, canales que funcionan y próximos pasos. Ajustamos lo que no funciona y potenciamos lo que sí.',
      beneficio: 'Saber si estás ganando o perdiendo dinero.',
    },
  ]

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">
            Así trabajamos contigo
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Sin reuniones interminables, sin informes que no entiendes, sin tener que convertirte en experto en marketing. 
            Tú te ocupas de tu clínica; nosotros de que lleguen los pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pasos.map((paso, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 relative hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 text-5xl sm:text-6xl font-bold text-slate-100 opacity-50">
                {paso.numero}
              </div>

              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">{paso.numero}</div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{paso.titulo}</h3>
                <p className="text-text-muted text-sm mb-3">{paso.descripcion}</p>
                <p className="text-xs font-semibold text-accent flex items-center gap-1">
                  <span>✓</span> {paso.beneficio}
                </p>
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
