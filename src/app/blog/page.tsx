import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Blog | Pacientes Sevilla - Marketing para Clínicas',
  description:
    'Consejos claros para clínicas y profesionales sanitarios que quieren mejorar su presencia online y recibir más solicitudes.',
  openGraph: {
    title: 'Blog - Pacientes Sevilla',
    description: 'Artículos para mejorar la presencia online de clínicas y consultas sanitarias',
    url: 'https://pacientessevilla.com/blog',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Blog', href: '/blog' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">Ideas para que más pacientes encuentren tu clínica</h1>
              <p className="text-xl text-text-muted">
                Explicaciones sencillas sobre Google, web, anuncios y presencia online para clínicas y consultas privadas.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full group">
                    <div className="h-48 bg-surface relative overflow-hidden">
                      {post.imagen && (
                        <Image
                          src={post.imagen}
                          alt={post.titulo}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                          {post.categoria}
                        </span>
                        <span className="text-xs text-text-muted">{post.tiempoLectura} lectura</span>
                      </div>

                      <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text group-hover:text-primary transition line-clamp-2">
                        {post.titulo}
                      </h3>

                      <p className="text-text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex justify-between items-center text-xs text-text-muted">
                        <span>{post.fecha}</span>
                        <span className="text-primary font-semibold inline-flex items-center gap-1">
                          Leer <ArrowRight size={14} strokeWidth={1.8} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">¿Necesitas estrategia personalizada?</h2>
            <p className="text-text-muted mb-8">
              Los artículos son guías generales. Si quieres revisar tu caso, podemos ver qué está frenando más solicitudes de cita.
            </p>
            <Link
              href="/contacto"
              className="btn-primary btn-primary-lg"
            >
              Revisar mi presencia online gratis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
