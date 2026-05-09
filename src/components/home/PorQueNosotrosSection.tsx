import { BarChart3, CircleDollarSign, Clock, MapPin, MessageCircle, Target } from 'lucide-react'

export default function PorQueNosotrosSection() {
  const razones = [
    {
      icono: Target,
      titulo: 'Te ahorramos tiempo',
      descripcion:
        'No tendrás que revisar campañas, analizar estadísticas ni perseguir a tu equipo de marketing. Nosotros lo hacemos y te presentamos solo lo que importa.',
    },
    {
      icono: CircleDollarSign,
      titulo: 'Sabes lo que pagas y lo que obtienes',
      descripcion:
        'Cada mes recibes un informe con datos reales: contactos recibidos, coste por paciente y canales que funcionan. Sin adornos ni métricas que suenan bien pero no significan nada.',
    },
    {
      icono: Clock,
      titulo: '15 minutos a la semana',
      descripcion:
        'Eso es lo único que necesitas dedicar al marketing de tu clínica. Validar resultados, tomar decisiones rápidas y seguir con tu día a día. Nosotros hacemos el resto.',
    },
    {
      icono: BarChart3,
      titulo: 'Medimos lo que importa: pacientes',
      descripcion:
        'Llamadas, formularios, WhatsApp. No nos quedamos en visitas web o impresiones. Sabemos qué campaña trae pacientes de verdad y cuál solo gasta presupuesto.',
    },
    {
      icono: MessageCircle,
      titulo: 'Hablamos tu idioma (no tecnicismos)',
      descripcion:
        'Nada de explicarte cómo funciona el algoritmo de Google o qué es el CTR. Te contamos lo que necesitas saber para decidir, con lenguaje claro y sin rodeos.',
    },
    {
      icono: MapPin,
      titulo: 'Solo trabajamos en Sevilla',
      descripcion:
        'Conocemos los barrios, la competencia local y cómo busca un paciente en Sevilla. No somos una agencia nacional con plantilla. Somos de aquí y trabajamos para clínicas de aquí.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">Por qué iclinicas</h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Porque no necesitas otra carga de trabajo. Necesitas alguien que se encargue del marketing 
            mientras tú te encargas de tu clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {razones.map((razon, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition hover:border-primary">
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
