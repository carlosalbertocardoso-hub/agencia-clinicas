export default function PainSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">
          ¿Por qué tu centro necesita marketing sanitario?
        </h2>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed text-center mb-8">
          Porque el paciente privado compara antes de pedir cita: Google Maps, reseñas, web, tratamientos, facilidad para contactar. Un sistema de marketing sanitario bien trabajado te ayuda a atraer pacientes privados rentables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-primary font-heading">76%</p>
            <p className="text-sm text-text-muted mt-1">de pacientes busca especialistas por Google antes de reservar</p>
          </div>
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-primary font-heading">63%</p>
            <p className="text-sm text-text-muted mt-1">descarta clínicas que no aparecen en primeros resultados</p>
          </div>
          <div className="bg-surface border border-slate-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-primary font-heading">47%</p>
            <p className="text-sm text-text-muted mt-1">de las citas se pierden por formularios largos o páginas lentas</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary bg-surface rounded-r-lg p-5 mb-4">
          <p className="text-text-muted italic leading-relaxed">
            &ldquo;Invertir en marketing sanitario no es un gasto, es una decisión estructural para cualquier clínica que quiera crecer en un mercado cada vez más competitivo.&rdquo;
          </p>
          <footer className="text-sm text-text-muted mt-2 not-italic font-medium">
            — Según el Observatorio del Sector Sanitario Privado en España, 2025
          </footer>
        </blockquote>

        <p className="text-sm text-text-muted">
          <a
            href="https://www.google.com/health"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition"
          >
            Google Health Research
          </a>
          {' '}estima que los centros con presencia local optimizada captan hasta el doble de nuevos pacientes que aquellos sin estrategia digital. Cada semana sin visibilidad en buscadores es una semana en la que tus competidores aparecen primero.
        </p>
      </div>
    </section>
  )
}
