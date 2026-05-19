import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { getAutor, getAutoresList } from '@/data/autores'
import { blogPosts } from '@/data/blog'
import { formatDateES } from '@/lib/utils/dates'
import { buildOgUrl } from '@/lib/og/buildOgUrl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'

const BASE = 'https://www.iclinicas.es'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAutoresList().map((autor) => ({ slug: autor.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const autor = getAutor(params.slug)
  if (!autor) return { title: 'Autor no encontrado' }

  const ogImage = buildOgUrl({
    title: autor.nombre,
    category: 'Autor',
    subtitle: autor.rol,
  })

  return {
    title: `${autor.nombre} | Autor en iclinicas`,
    description: autor.bioCorta,
    alternates: { canonical: `/autores/${autor.slug}` },
    openGraph: {
      title: `${autor.nombre} · iclinicas`,
      description: autor.bioCorta,
      url: `${BASE}/autores/${autor.slug}`,
      type: 'profile',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${autor.nombre} · iclinicas`,
      description: autor.bioCorta,
      images: [ogImage],
    },
  }
}

export default function AutorPage({ params }: Props) {
  const autor = getAutor(params.slug)
  if (!autor) notFound()

  const postsDelAutor = blogPosts.filter((p) => p.autorSlug === autor.slug)
  const autorUrl = `${BASE}/autores/${autor.slug}`

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${autorUrl}#person`,
    name: autor.nombre,
    url: autorUrl,
    image: `${BASE}${autor.foto}`,
    jobTitle: autor.rol,
    description: autor.bio,
    worksFor: { '@id': `${BASE}/#organization` },
    sameAs: autor.sameAs,
    knowsAbout: [
      'Marketing digital sanitario',
      'SEO local para clínicas',
      'Google Ads para sector sanitario',
      'Ley de Publicidad Sanitaria',
      'CRO para webs de clínicas',
      'Captación de pacientes privados',
    ],
  }

  const collectionPageSchema = postsDelAutor.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${autorUrl}#collection`,
        name: `Artículos de ${autor.nombre}`,
        url: autorUrl,
        about: { '@id': `${autorUrl}#person` },
        hasPart: postsDelAutor.map((p) => ({
          '@type': 'Article',
          headline: p.titulo,
          url: `${BASE}/blog/${p.slug}`,
          datePublished: p.fechaPublicacion,
          dateModified: p.fechaModificacion,
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        suppressHydrationWarning
      />
      {collectionPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
          suppressHydrationWarning
        />
      )}

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-section">
            <div className="container-custom max-w-4xl">
              <BreadcrumbNav
                items={[
                  { label: 'Autores', href: '/autores' },
                  { label: autor.nombre, href: `/autores/${autor.slug}` },
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-[160px,1fr] gap-8 items-start mt-8">
                <Image
                  src={autor.foto}
                  alt={`${autor.nombre} — ${autor.rol}`}
                  width={160}
                  height={160}
                  className="rounded-full border-2 border-primary/20 object-cover"
                  priority
                />

                <div>
                  <p className="text-label text-accent mb-2">Autor</p>
                  <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-3">
                    {autor.nombre}
                  </h1>
                  <p className="text-lg text-text-muted mb-4">{autor.rol}</p>
                  <p className="text-base text-text leading-relaxed mb-6">{autor.bio}</p>

                  <div className="flex flex-wrap gap-3">
                    {autor.sameAs.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-full px-4 py-2 hover:bg-primary hover:text-white transition"
                      >
                        {url.includes('linkedin.com') ? 'LinkedIn' : 'Perfil externo'}
                        <ExternalLink size={14} strokeWidth={2} />
                      </a>
                    ))}
                    <Link
                      href="/nosotros"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted border border-slate-200 rounded-full px-4 py-2 hover:bg-surface transition"
                    >
                      Sobre iclinicas
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-surface">
            <div className="container-custom max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Experiencia</h2>
              <p className="text-text-muted mb-8">{autor.experiencia}</p>

              <h3 className="text-2xl font-heading font-semibold mb-4">Áreas de especialización</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {autor.credenciales.map((c) => (
                  <li
                    key={c}
                    className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-text-muted leading-relaxed"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {postsDelAutor.length > 0 && (
            <section className="section-padding">
              <div className="container-custom max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
                  Artículos firmados por {autor.nombre}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {postsDelAutor.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
                    >
                      <article className="p-6">
                        <div className="flex gap-2 mb-3 items-center">
                          <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                            {post.categoria}
                          </span>
                          <time className="text-xs text-text-muted" dateTime={post.fechaPublicacion}>
                            {formatDateES(post.fechaPublicacion)}
                          </time>
                        </div>
                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-3 text-text group-hover:text-primary transition line-clamp-2">
                          {post.titulo}
                        </h3>
                        <p className="text-text-muted text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                        <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                          Leer artículo <ArrowRight size={14} strokeWidth={1.8} />
                        </span>
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
