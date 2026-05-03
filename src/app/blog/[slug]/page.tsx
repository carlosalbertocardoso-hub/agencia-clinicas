import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/schemas'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'

interface Props {
  params: {
    slug: string
  }
}

function renderMarkdown(content: string) {
  let visibleBlocks = 0
  let ctaInserted = false

  return content
    .trim()
    .split('\n')
    .map((line, index) => {
      const trimmed = line.trim()

      if (!trimmed) return null

      const maybeInsertCta = () => {
        visibleBlocks += 1

        if (ctaInserted || visibleBlocks < 5) {
          return null
        }

        ctaInserted = true

        return (
          <aside key={`cta-${index}`} className="my-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="font-heading text-xl font-semibold text-text mb-2">
              ¿Quieres detectar estos puntos en tu clínica?
            </p>
            <p className="text-sm text-text-muted mb-4">
              Revisamos tu caso y te indicamos qué mejorar primero en Google, web, campañas o conversión.
            </p>
            <Link href="/contacto" className="font-semibold text-primary hover:underline">
              Solicitar auditoría gratuita
            </Link>
          </aside>
        )
      }

      if (trimmed.startsWith('# ')) {
        return (
          <Fragment key={index}>
            {maybeInsertCta()}
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mt-10 mb-4">
              {trimmed.replace('# ', '')}
            </h2>
          </Fragment>
        )
      }

      if (trimmed.startsWith('## ')) {
        return (
          <Fragment key={index}>
            {maybeInsertCta()}
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text mt-8 mb-3">
              {trimmed.replace('## ', '')}
            </h3>
          </Fragment>
        )
      }

      if (trimmed.startsWith('- ')) {
        return (
          <Fragment key={index}>
            {maybeInsertCta()}
            <li className="ml-5 list-disc text-text-muted leading-relaxed">
              {trimmed.replace('- ', '')}
            </li>
          </Fragment>
        )
      }

      return (
        <Fragment key={index}>
          {maybeInsertCta()}
          <p className="text-text-muted leading-relaxed mb-4">
            {trimmed}
          </p>
        </Fragment>
      )
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return { title: 'Artículo no encontrado' }
  }

  return {
    title: `${post.titulo} | Pacientes Sevilla Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.titulo,
      description: post.excerpt,
      url: `https://pacientessevilla.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.fecha,
      images: [{ url: post.imagen || '/images/og-default.svg', width: 1200, height: 630 }],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  const relatedPosts = blogPosts.filter((p) => p.id !== post?.id).slice(0, 3)
  const contextualLinks: Record<string, Array<{ href: string; label: string }>> = {
    'errores-seo-dentistas': [
      { href: '/servicios/seo-medico', label: 'SEO local para clínicas' },
      { href: '/especialidades/clinicas-dentales-sevilla', label: 'marketing para clínicas dentales en Sevilla' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'google-ads-psicologos': [
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas privadas' },
      { href: '/especialidades/psicologos-sevilla', label: 'marketing para psicólogos en Sevilla' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'diseno-web-clinicas': [
      { href: '/servicios/diseno-web', label: 'diseño web para clínicas' },
      { href: '/servicios/seo-medico', label: 'SEO local para clínicas' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
  }

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
  const articleSchema = buildArticleSchema({
    headline: post.titulo,
    description: post.excerpt,
    url: `https://pacientessevilla.com/blog/${post.slug}`,
    image: post.imagen,
    datePublished: post.fecha,
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        <section className="py-section pb-8 md:pb-10">
          <div className="container-custom">
            <BreadcrumbNav
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.titulo, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="max-w-3xl mx-auto my-8">
              <div className="flex gap-4 mb-6 items-center">
                <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.categoria}
                </span>
                <span className="text-sm text-text-muted">{post.tiempoLectura} lectura</span>
                <span className="text-sm text-text-muted">·</span>
                <span className="text-sm text-text-muted">{post.fecha}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{post.titulo}</h1>
              <p className="text-xl text-text-muted">{post.excerpt}</p>
            </div>

            {post.imagen && (
              <div className="max-w-5xl mx-auto rounded-lg overflow-hidden border border-slate-200 shadow-sm relative aspect-[16/7] bg-surface">
                <Image src={post.imagen} alt={post.titulo} fill priority className="object-cover" />
              </div>
            )}
          </div>
        </section>

        <section className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 md:px-8">
          <div className="container-custom max-w-3xl">
            <article className="mb-12 text-text">
              {renderMarkdown(post.contenido)}
            </article>

            <div className="bg-surface p-6 rounded-lg border border-slate-200 mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-4">
                Enlaces útiles para profundizar
              </h2>
              <div className="flex flex-wrap gap-3">
                {(contextualLinks[post.slug] || []).map((item) => (
                  <Link key={item.href} href={item.href} className="btn-secondary">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-4">
                ¿Quieres aplicarlo a tu clínica?
              </h2>
              <p className="text-text-muted mb-6">
                Este artículo es una guía general. Si quieres revisar tu caso, analizamos Google, web, campañas y puntos de contacto para decirte qué mejorar primero.
              </p>
              <ContactForm buttonText="Solicitar auditoría gratuita" variant="compact" />
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
                      <div className="h-40 bg-surface relative overflow-hidden">
                        {relPost.imagen && (
                          <img src={relPost.imagen} alt={relPost.titulo} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                        )}
                      </div>
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
