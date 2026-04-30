import Link from 'next/link'

export default function BlogPreviewSection() {
  const articulosRecientes = [
    {
      id: '1',
      titulo: '10 errores SEO que cometen los dentistas en Sevilla',
      excerpt:
        'Descubre los errores más comunes en SEO que reducen tu visibilidad en Google. Cómo evitarlos y posicionar tu clínica dental.',
      slug: 'errores-seo-dentistas',
      fecha: '28 de abril, 2024',
      categoria: 'SEO',
      tiempo_lectura: '8 min',
    },
    {
      id: '2',
      titulo: 'Google Ads para psicólogos: Guía completa 2024',
      excerpt:
        'Cómo configurar campañas de Google Ads efectivas si eres psicólogo en Sevilla. Palabras clave, presupuesto y conversión.',
      slug: 'google-ads-psicologos',
      fecha: '25 de abril, 2024',
      categoria: 'Google Ads',
      tiempo_lectura: '12 min',
    },
    {
      id: '3',
      titulo: 'Diseño web para clínicas: qué convierte pacientes',
      excerpt:
        'Elementos clave en una web médica que convierte visitantes en pacientes. Ejemplos de clínicas que crecieron 3x.',
      slug: 'diseno-web-clinicas',
      fecha: '22 de abril, 2024',
      categoria: 'Diseño Web',
      tiempo_lectura: '10 min',
    },
  ]

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Blog: Marketing para clínicas</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Tips, estrategias y casos de estudio sobre marketing digital sanitario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articulosRecientes.map((articulo) => (
            <Link key={articulo.id} href={`/blog/${articulo.slug}`}>
              <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full group">
                {/* Imagen placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light opacity-80 group-hover:opacity-100 transition" />

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase">
                      {articulo.categoria}
                    </span>
                    <span className="text-xs text-text-muted">{articulo.tiempo_lectura} lectura</span>
                  </div>

                  <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text group-hover:text-primary transition line-clamp-2">
                    {articulo.titulo}
                  </h3>

                  <p className="text-text-muted text-sm mb-4 line-clamp-2">{articulo.excerpt}</p>

                  <div className="flex justify-between items-center text-xs text-text-muted">
                    <span>{articulo.fecha}</span>
                    <span className="text-primary font-semibold">Leer →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn-secondary"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
