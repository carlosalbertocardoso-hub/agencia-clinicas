import { BarChart3, CircleDollarSign, MapPin, MessageCircle, Target, Workflow } from 'lucide-react'

export default function PorQueNosotrosSection() {
  const razones = [
    {
      icono: Target,
      titulo: 'Entendemos cómo decide un paciente',
      descripcion:
        'Una persona no elige una clínica como compra cualquier producto. Necesita claridad, confianza y facilidad para pedir cita.',
    },
    {
      icono: BarChart3,
      titulo: 'Nos centramos en contactos útiles',
      descripcion:
        'No buscamos visitas por buscar visitas. Trabajamos para que lleguen personas interesadas en tus servicios.',
    },
    {
      icono: Workflow,
      titulo: 'Miramos todo el recorrido',
      descripcion:
        'Desde que alguien te encuentra en Google hasta que llama, escribe o pide cita desde el móvil.',
    },
    {
      icono: MessageCircle,
      titulo: 'Te lo explicamos en lenguaje claro',
      descripcion:
        'Sabrás qué estamos haciendo, por qué lo hacemos y qué resultado esperamos, sin informes imposibles de leer.',
    },
    {
      icono: CircleDollarSign,
      titulo: 'Cuidamos tu inversión',
      descripcion:
        'Priorizamos acciones que puedan traducirse en más contactos, más citas y mejor presencia local.',
    },
    {
      icono: MapPin,
      titulo: 'Conocemos el mercado local',
      descripcion:
        'Trabajamos pensando en Sevilla, sus barrios y cómo buscan los pacientes una clínica privada cercana.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Por qué tiene sentido para tu clínica</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No necesitas aprender marketing. Necesitas que tu presencia online ayude a llenar mejor la agenda.
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
