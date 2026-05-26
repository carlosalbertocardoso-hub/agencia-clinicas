import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import { formatDateES } from '@/lib/utils/dates'

export default function BlogPreviewSection() {
  const articulosRecientes = blogPosts.slice(0, 3)

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">Ideas para mejorar tu clínica online</h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Consejos claros para que más pacientes te encuentren, confíen en ti y pidan cita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-10 md:mb-12">
          {articulosRecientes.map((articulo) => (
            <Link key={articulo.id} href={`/blog/${articulo.slug}`}>
              <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {articulo.imagen && (
                    <Image
                      src={articulo.imagen}
                      alt={articulo.imagenAlt || articulo.titulo}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition"
                    />
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase">
                      {articulo.categoria}
                    </span>
                    <span className="text-xs text-text-muted">{articulo.tiempoLectura} lectura</span>
                  </div>

                  <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text group-hover:text-primary transition line-clamp-2">
                    {articulo.titulo}
                  </h3>

                  <p className="text-text-muted text-sm mb-4 line-clamp-2">{articulo.excerpt}</p>

                  <div className="flex justify-between items-center text-xs text-text-muted">
                    <time dateTime={articulo.fechaPublicacion}>{formatDateES(articulo.fechaPublicacion)}</time>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer <ArrowRight size={14} strokeWidth={1.8} />
                    </span>
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
