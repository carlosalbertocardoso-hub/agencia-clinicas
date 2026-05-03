import { BarChart3, CircleDollarSign, MapPin, MessageCircle, Target, Workflow } from 'lucide-react'

export default function PorQueNosotrosSection() {
  const razones = [
    {
      icono: Target,
      titulo: 'Hablamos de pacientes, agenda y rentabilidad',
      descripcion:
        'No nos quedamos en visitas o impresiones. Priorizamos acciones que puedan traducirse en solicitudes de cita útiles.',
    },
    {
      icono: CircleDollarSign,
      titulo: 'Priorizamos impacto en solicitudes',
      descripcion:
        'Ordenamos el trabajo según lo que más puede estar frenando contactos: visibilidad, confianza, conversión o inversión mal enfocada.',
    },
    {
      icono: Workflow,
      titulo: 'Entendemos la decisión sanitaria privada',
      descripcion:
        'Una persona compara, duda y busca seguridad antes de elegir clínica. El mensaje debe acompañar ese proceso con rigor.',
    },
    {
      icono: BarChart3,
      titulo: 'Medimos llamadas, WhatsApp y formularios',
      descripcion:
        'Configuramos medición para saber qué canales generan contactos y qué calidad tienen esas solicitudes.',
    },
    {
      icono: MessageCircle,
      titulo: 'Adaptamos el mensaje a cada especialidad',
      descripcion:
        'No comunica igual una clínica dental, una consulta de psicología, una clínica estética o un especialista quirúrgico.',
    },
    {
      icono: MapPin,
      titulo: 'Mentalidad local: Sevilla y competencia cercana',
      descripcion:
        'Trabajamos con barrios, zonas, búsquedas cercanas y competidores reales, no con plantillas genéricas de agencia.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Por qué Pacientes Sevilla</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Somos un partner estratégico para ordenar tu captación online sin que tengas que convertirte en experto en SEO, Ads o analítica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {razones.map((razon, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition hover:border-primary">
              <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                <razon.icono size={22} strokeWidth={1.6} />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text">{razon.titulo}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{razon.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
