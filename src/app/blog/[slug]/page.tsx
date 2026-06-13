import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { getAutor } from '@/data/autores'
import { blogRelatedServices } from '@/data/crossLinks'
import { buildArticleSchema } from '@/lib/schemas'
import { formatDateES } from '@/lib/utils/dates'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import AuthorBox from '@/components/shared/AuthorBox'

interface Props {
  params: {
    slug: string
  }
}

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)

    if (!match) {
      return part
    }

    const [, label, href] = match
    const isExternal = href.startsWith('http')

    return (
      <Link
        key={`${href}-${index}`}
        href={href}
        className="font-semibold text-primary hover:underline"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </Link>
    )
  })
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
              {renderInlineMarkdown(trimmed.replace('# ', ''))}
            </h2>
          </Fragment>
        )
      }

      if (trimmed.startsWith('## ')) {
        return (
          <Fragment key={index}>
            {maybeInsertCta()}
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text mt-8 mb-3">
              {renderInlineMarkdown(trimmed.replace('## ', ''))}
            </h3>
          </Fragment>
        )
      }

      if (trimmed.startsWith('- ')) {
        return (
          <Fragment key={index}>
          {maybeInsertCta()}
          <li className="ml-5 list-disc text-text-muted leading-relaxed">
              {renderInlineMarkdown(trimmed.replace('- ', ''))}
          </li>
        </Fragment>
      )
      }

      return (
        <Fragment key={index}>
          {maybeInsertCta()}
          <p className="text-text-muted leading-relaxed mb-4">
            {renderInlineMarkdown(trimmed)}
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

  const autor = getAutor(post.autorSlug)
  const autorUrl = autor ? `https://www.iclinicas.es/autores/${autor.slug}` : undefined

  return {
    title: `${post.titulo} | iclinicas`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.titulo,
      description: post.excerpt,
      url: `https://www.iclinicas.es/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.fechaPublicacion,
      modifiedTime: post.fechaModificacion,
      ...(autorUrl ? { authors: [autorUrl] } : {}),
      images: [{ url: post.imagen || '/images/og-default.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.excerpt,
      images: [post.imagen || '/images/og-default.png'],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  const autor = post ? getAutor(post.autorSlug) : undefined
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
    'seo-para-clinicas-guia': [
      { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/servicios/diseno-web', label: 'diseño web sanitario' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'seo-vs-google-ads-clinicas': [
      { href: '/servicios/seo-medico', label: 'SEO para clínicas' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/blog/seo-para-clinicas-guia', label: 'guía de SEO para clínicas' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'cuanto-cuesta-marketing-clinica': [
      { href: '/servicios/marketing-para-clinicas', label: 'marketing para clínicas' },
      { href: '/servicios/seo-medico', label: 'SEO para clínicas' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'google-business-profile-clinicas': [
      { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
      { href: '/blog/conseguir-resenas-google-clinica', label: 'cómo conseguir reseñas en Google' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'lopd-marketing-sanitario': [
      { href: '/servicios/marketing-para-clinicas', label: 'marketing para clínicas' },
      { href: '/servicios/diseno-web', label: 'diseño web sanitario' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'captacion-pacientes-privados': [
      { href: '/servicios/marketing-para-clinicas', label: 'marketing para clínicas' },
      { href: '/blog/google-business-profile-clinicas', label: 'Google Business Profile para clínicas' },
      { href: '/blog/cuanto-cuesta-marketing-clinica', label: 'cuánto cuesta el marketing' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'medir-roi-marketing-clinica': [
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/blog/captacion-pacientes-privados', label: 'captación de pacientes privados' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'landing-pages-clinicas': [
      { href: '/servicios/diseno-web', label: 'diseño web sanitario' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'conseguir-resenas-google-clinica': [
      { href: '/blog/google-business-profile-clinicas', label: 'Google Business Profile para clínicas' },
      { href: '/servicios/seo-medico', label: 'SEO para clínicas' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'marketing-psicologos-sevilla': [
      { href: '/especialidades/psicologos-sevilla', label: 'marketing para psicólogos en Sevilla' },
      { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
      { href: '/blog/lopd-marketing-sanitario', label: 'LOPD y marketing sanitario' },
      { href: '/contacto', label: 'auditoría gratuita' },
    ],
    'palabras-clave-clinicas-privadas': [
      { href: '/servicios/seo-medico', label: 'SEO para clínicas' },
      { href: '/blog/seo-para-clinicas-guia', label: 'guía de SEO para clínicas' },
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

  const autorPageUrl = autor
    ? `https://www.iclinicas.es/autores/${autor.slug}`
    : 'https://www.iclinicas.es/nosotros'
  const articleSchema = buildArticleSchema({
    headline: post.titulo,
    description: post.excerpt,
    url: `https://www.iclinicas.es/blog/${post.slug}`,
    image: post.imagen,
    datePublished: post.fechaPublicacion,
    dateModified: post.fechaModificacion,
    author: {
      name: autor?.nombre ?? 'iclinicas',
      url: autorPageUrl,
      ...(autor && autor.sameAs.length > 0 ? { sameAs: autor.sameAs } : {}),
    },
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} suppressHydrationWarning />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">

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
                <time className="text-sm text-text-muted" dateTime={post.fechaPublicacion}>
                  {formatDateES(post.fechaPublicacion)}
                </time>
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">{post.titulo}</h1>
              <p className="text-xl text-text-muted">{post.excerpt}</p>
            </div>

            {post.imagen && (
              <div className="max-w-5xl mx-auto rounded-lg overflow-hidden border border-slate-200 shadow-sm relative aspect-[16/7] bg-surface">
                <Image src={post.imagen} alt={post.imagenAlt || post.titulo} fill priority className="object-cover" />
              </div>
            )}
          </div>
        </section>

        <section className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 md:px-8">
          <div className="container-custom max-w-3xl">
            <article className="mb-12 text-text">
              {renderMarkdown(post.contenido)}
            </article>

            {autor && <AuthorBox autor={autor} />}

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

        {(blogRelatedServices[post.slug] || []).length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">Servicios y especialidades relacionados</h2>
              <p className="text-text-muted mb-6">Estos servicios y especialidades pueden ayudarte si te ha interesado este artículo:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {(blogRelatedServices[post.slug] || []).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-surface hover:bg-primary/5 hover:border-primary px-4 py-2 text-sm font-medium text-text-muted transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  auditoría gratuita
                </Link>
              </div>
            </div>
          </section>
        )}

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
                          <Image
                            src={relPost.imagen}
                            alt={relPost.imagenAlt || relPost.titulo}
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
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
    </>
  )
}
