export default function ProcesoSection() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Revisamos tu situación',
      descripcion:
        'Vemos cómo aparece tu clínica en Google, cómo se entiende tu web y qué puede estar frenando nuevas solicitudes.',
    },
    {
      numero: '02',
      titulo: 'Priorizamos mejoras',
      descripcion:
        'Te explicamos qué conviene mejorar primero para que más personas te encuentren y contacten.',
    },
    {
      numero: '03',
      titulo: 'Nos ponemos en marcha',
      descripcion:
        'Trabajamos tu web, Google, anuncios o redes según lo que realmente necesita tu clínica.',
    },
    {
      numero: '04',
      titulo: 'Medimos y ajustamos',
      descripcion:
        'Revisamos contactos, llamadas y solicitudes para seguir mejorando mes a mes.',
    },
  ]

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Un proceso claro, sin complicarte</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Tú sigues gestionando tu clínica. Nosotros te ayudamos a mejorar cómo te encuentran y cómo contactan contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 relative">
              {/* Número grande de fondo */}
              <div className="absolute -top-4 -left-4 text-6xl font-bold text-slate-100 opacity-50">
                {paso.numero}
              </div>

              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-4">{paso.numero}</div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{paso.titulo}</h3>
                <p className="text-text-muted text-sm">{paso.descripcion}</p>
              </div>

              {/* Conectores entre pasos */}
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
