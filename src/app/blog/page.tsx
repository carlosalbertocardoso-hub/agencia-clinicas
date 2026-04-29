import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Blog | Pacientes Sevilla - Marketing para Clínicas',
  description:
    'Tips, estrategias y casos de estudio sobre marketing digital para profesionales sanitarios en Sevilla. SEO, Google Ads, diseño web.',
  openGraph: {
    title: 'Blog - Pacientes Sevilla',
    description: 'Artículos sobre marketing digital especializado en sector sanitario',
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
        <section className="bg-gradient-to-b from-secondary to-white py-16">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Blog', href: '/blog' }]} />

            <div className="max-w-3xl mx-auto text-center my-12">
              <h1 className="text-h1 font-heading text-primary mb-6">Marketing Digital para Clínicas</h1>
              <p className="text-xl text-text-muted">
                Tips, estrategias y casos de estudio sobre SEO, Google Ads, diseño web y redes sociales para profesionales sanitarios.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition h-full group">
                    <div className="h-48 bg-gradient-to-br from-primary to-primary-light opacity-80 group-hover:opacity-100 transition" />

                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                          {post.categoria}
                        </span>
                        <span className="text-xs text-text-muted">{post.tiempoLectura} lectura</span>
                      </div>

                      <h3 className="font-heading text-h4 mb-3 text-text group-hover:text-primary transition line-clamp-2">
                        {post.titulo}
                      </h3>

                      <p className="text-text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex justify-between items-center text-xs text-text-muted">
                        <span>{post.fecha}</span>
                        <span className="text-primary font-semibold">Leer →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-h2 font-heading mb-6">¿Necesitas estrategia personalizada?</h2>
            <p className="text-text-muted mb-8">
              Los artículos son guías generales. Tu clínica necesita estrategia a medida. Solicita auditoría gratis.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Solicitar auditoría gratis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
