export default function GoogleBusinessMap() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="ubicacion-sevilla">
      <div className="container-custom">
        <div className="max-w-3xl mb-6">
          <p className="text-label text-accent mb-3">SEO local en Sevilla</p>
          <h2 id="ubicacion-sevilla" className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Agencia de marketing sanitario en Sevilla
          </h2>
          <p className="text-text-muted">
            Trabajamos desde Sevilla para clínicas privadas que necesitan mejorar su presencia en Google,
            Google Maps, web y campañas con una visión local y medible.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white aspect-[16/10] md:aspect-[16/7]">
          <iframe
            title="Ubicación de iClínicas en Avenida Reina Mercedes 1, Sevilla"
            src="https://www.google.com/maps?q=Avd.%20Reina%20Mercedes%201%2C%2041012%20Sevilla&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
