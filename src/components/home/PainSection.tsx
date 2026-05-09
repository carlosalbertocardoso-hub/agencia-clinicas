export default function PainSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">
          ¿Cuántos pacientes pierde tu clínica cada semana sin que lo sepas?
        </h2>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed text-center mb-8">
          El paciente privado no llama al primero que encuentra. Compara, lee reseñas, mira Google Maps y elige. 
          Si no apareces cuando te busca, el paciente va a otro centro. No es marketing, es comportamiento real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center hover:shadow-md transition">
            <p className="text-3xl font-bold text-primary font-heading">76%</p>
            <p className="text-sm text-text-muted mt-1">de pacientes busca especialistas por Google antes de reservar cita</p>
            <p className="text-xs text-text-muted mt-2 italic">Fuente: Google Health Research</p>
          </div>
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center hover:shadow-md transition">
            <p className="text-3xl font-bold text-primary font-heading">63%</p>
            <p className="text-sm text-text-muted mt-1">descarta clínicas que no aparecen en los primeros resultados</p>
          </div>
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center hover:shadow-md transition">
            <p className="text-3xl font-bold text-primary font-heading">3-5</p>
            <p className="text-sm text-text-muted mt-1">pacientes potenciales pierde una clínica a la semana por no estar visible en Google</p>
            <p className="text-xs text-text-muted mt-2 italic">Estimación basada en el sector sanitario local en Sevilla</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary bg-surface rounded-r-lg p-5 mb-4">
          <p className="text-text-muted italic leading-relaxed">
            &ldquo;Cada semana que tu clínica no aparece en los primeros resultados de Google, 
            tus competidores están ocupando ese espacio. Y el paciente que te buscaba a ti 
            acaba pidiendo cita en otro lado.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
