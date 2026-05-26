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

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white w-full h-64 md:h-96">
          <iframe
            title="Ubicación oficial de iClínicas en Sevilla"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1224442688776!2d-5.9884034246700315!3d37.36327953575811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126de0e91ced67%3A0x82c90f13fb84e05d!2sIclinicas!5e0!3m2!1ses!2ses!4v1779785624714!5m2!1ses!2ses"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  )
}
