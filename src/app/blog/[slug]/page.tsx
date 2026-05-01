import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { buildBreadcrumbSchema } from '@/lib/schemas'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: `${post.titulo} | Pacientes Sevilla Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.titulo,
      description: post.excerpt,
      url: `https://pacientessevilla.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.fecha,
      images: [
        {
          url: '/images/og-default.svg',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  const relatedPosts = blogPosts.filter((p) => p.id !== post?.id).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-h1 font-heading text-primary mb-4">Artículo no encontrado</h1>
          <p className="text-text-muted mb-6">Lo sentimos, no pudimos encontrar este artículo.</p>
          <Link href="/blog" className="text-primary hover:underline font-semibold">
            Volver al blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Blog', url: 'https://pacientessevilla.com/blog' },
    { name: post.titulo, url: `https://pacientessevilla.com/blog/${post.slug}` },
  ])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <section className="py-section">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.titulo, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="max-w-3xl mx-auto my-12">
              <div className="flex gap-4 mb-6 items-center">
                <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.categoria}
                </span>
                <span className="text-sm text-text-muted">{post.tiempoLectura} lectura</span>
                <span className="text-sm text-text-muted">•</span>
                <span className="text-sm text-text-muted">{post.fecha}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{post.titulo}</h1>
              <p className="text-xl text-text-muted">{post.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <article
              className="prose prose-sm max-w-none mb-12 text-text whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: post.contenido,
              }}
            />

            <div className="bg-white p-8 rounded-lg border border-slate-200 mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-4">¿Necesitas ayuda con tu estrategia?</h2>
              <p className="text-text-muted mb-6">
                Este artículo es una guía general. Tu clínica merece estrategia personalizada. Solicita auditoría gratis.
              </p>
              <ContactForm buttonText="Solicitar auditoría" />
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="section-padding bg-surface">
            <div className="container-custom">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-center">Artículos relacionados</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relPost) => (
                  <Link key={relPost.id} href={`/blog/${relPost.slug}`}>
                    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full group">
                      <div className="h-40 bg-gradient-to-br from-primary to-primary-light opacity-80" />
                      <div className="p-6">
                        <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase">{relPost.categoria}</span>
                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 mt-3 text-text group-hover:text-primary line-clamp-2">
                          {relPost.titulo}
                        </h3>
                        <p className="text-text-muted text-sm line-clamp-2">{relPost.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
