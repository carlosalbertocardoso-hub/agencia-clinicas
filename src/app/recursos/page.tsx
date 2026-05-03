import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, BookOpenText, FileSearch, MapPin, Megaphone, MonitorSmartphone } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Recursos de marketing sanitario para clÃ­nicas en Sevilla | Pacientes Sevilla',
  description:
    'GuÃ­as, diagnÃ³sticos y contenidos prÃ¡cticos sobre SEO local, Google Ads, diseÃ±o web, reputaciÃ³n y captaciÃ³n de pacientes privados en Sevilla.',
  alternates: {
    canonical: '/recursos',
  },
  openGraph: {
    title: 'Recursos de marketing sanitario para clÃ­nicas en Sevilla',
    description: 'Contenido prÃ¡ctico para mejorar la captaciÃ³n online de clÃ­nicas privadas en Sevilla.',
    url: 'https://pacientessevilla.com/recursos',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
  },
}

const categorias = [
  {
    title: 'SEO local y Google Maps',
    description: 'CÃ³mo aparecer cuando un paciente busca especialidad, tratamiento o clÃ­nica cercana en Sevilla.',
    href: '/blog/errores-seo-dentistas',
    icon: MapPin,
  },
  {
    title: 'Google Ads y captaciÃ³n privada',
    description: 'CampaÃ±as con intenciÃ³n real, mensajes prudentes, negativas y mediciÃ³n de calidad.',
    href: '/blog/google-ads-psicologos',
    icon: Megaphone,
  },
  {
    title: 'Web, CRO y conversiÃ³n',
    description: 'Elementos que ayudan a convertir visitas mÃ³viles en llamadas, WhatsApp y solicitudes.',
    href: '/blog/diseno-web-clinicas',
    icon: MonitorSmartphone,
  },
]

const hubs = [
  {
    title: 'Blog y guÃ­as',
    description: 'ArtÃ­culos prÃ¡cticos sobre captaciÃ³n, SEO, Ads, diseÃ±o web y reputaciÃ³n para clÃ­nicas.',
    href: '/blog',
    icon: BookOpenText,
  },
  {
    title: 'DiagnÃ³sticos representativos',
    description: 'Escenarios habituales que muestran quÃ© solemos revisar antes de proponer un plan.',
    href: '/casos-de-exito',
    icon: FileSearch,
  },
  {
    title: 'AuditorÃ­a de captaciÃ³n',
    description: 'RevisiÃ³n gratuita de Google, web, campaÃ±as, reseÃ±as y puntos de contacto de tu clÃ­nica.',
    href: '/contacto',
    icon: BarChart3,
  },
]

export default function RecursosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-section bg-gradient-to-br from-bg to-surface">
          <div className="container-custom">
            <BreadcrumbNav items={[{ label: 'Recursos', href: '/recursos' }]} />

            <div className="max-w-3xl mx-auto text-center my-8">
              <p className="text-label text-accent mb-4">Recursos</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
                Recursos de marketing sanitario para clÃ­nicas privadas en Sevilla
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-muted">
                GuÃ­as, diagnÃ³sticos y contenidos prÃ¡cticos para entender quÃ© puede estar frenando tu visibilidad, confianza y solicitudes de cita.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {hubs.map((hub) => (
                <Link key={hub.href} href={hub.href} className="block h-full">
                  <article className="card h-full p-6 sm:p-8 group">
                    <div className="w-12 h-12 rounded-md border border-primary/20 bg-white text-primary flex items-center justify-center mb-4">
                      <hub.icon size={22} strokeWidth={1.7} />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-text mb-3 group-hover:text-primary transition">
                      {hub.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed mb-5">{hub.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                      Ver recurso <ArrowRight size={15} strokeWidth={1.8} />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4">
                GuÃ­as por problema de captaciÃ³n
              </h2>
              <p className="text-text-muted">
                Contenidos pensados para gerentes y profesionales sanitarios que quieren tomar mejores decisiones antes de invertir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {categorias.map((categoria) => (
                <Link key={categoria.href} href={categoria.href} className="block h-full">
                  <article className="bg-white border border-slate-200 rounded-lg p-6 h-full group hover:border-primary transition">
                    <categoria.icon size={24} strokeWidth={1.7} className="text-primary mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-text mb-3 group-hover:text-primary transition">
                      {categoria.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">{categoria.description}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-3">
                  Ãšltimos artÃ­culos
                </h2>
                <p className="text-text-muted">Ideas aplicables a SEO local, Ads y web de clÃ­nicas privadas.</p>
              </div>
              <Link href="/blog" className="text-primary font-semibold hover:underline">
                Ver todos los artÃ­culos
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full">
                  <article className="bg-white border border-slate-200 rounded-lg p-6 h-full group hover:shadow-md transition">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">{post.categoria}</p>
                    <h3 className="font-heading text-xl font-semibold text-text mb-3 group-hover:text-primary transition">
                      {post.titulo}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding section-primary">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
              Â¿Quieres aplicar esto a tu clÃ­nica?
            </h2>
            <p className="text-base sm:text-lg text-white mb-8">
              Revisamos tu situaciÃ³n concreta y te decimos quÃ© acciones tienen mÃ¡s sentido para ganar visibilidad, confianza y solicitudes cualificadas.
            </p>
            <Link href="/contacto" className="inline-flex w-full sm:w-auto items-center justify-center bg-[#FFD166] text-[#073F38] px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white hover:text-primary transition">
              Solicitar auditorÃ­a gratuita
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
