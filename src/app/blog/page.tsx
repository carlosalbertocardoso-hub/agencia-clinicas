import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Blog de marketing para clínicas en Sevilla | iclinicas',
  description:
    'Guías prácticas sobre SEO local, Google Ads, diseño web, reputación y captación de pacientes para clínicas privadas y profesionales sanitarios en Sevilla.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Guías de marketing para clínicas privadas en Sevilla',
    description: 'SEO local, Google Ads, diseño web, reputación y captación para clínicas privadas.',
    url: 'https://www.iclinicas.es/blog',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
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
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Guías de marketing digital para clínicas privadas en Sevilla
              </h1>
              <p className="text-xl text-text-muted">
                Ideas prácticas sobre SEO local, Google Ads, diseño web, reputación y captación de pacientes para clínicas y consultas sanitarias.
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
                        <img src={post.imagen} alt={post.imagenAlt || post.titulo} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
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
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              ¿Quieres aplicar estas ideas a tu clínica?
            </h2>
            <p className="text-text-muted mb-8">
              Cada clínica parte de una situación distinta. Revisamos tu caso y te decimos qué acciones tendrían más impacto en visibilidad, confianza y solicitudes de cita.
            </p>
            <Link href="/contacto" className="btn-primary btn-primary-lg">
              Solicitar auditoría gratuita
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
