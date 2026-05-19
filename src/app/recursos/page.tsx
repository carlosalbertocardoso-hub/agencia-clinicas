import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, BookOpenText, FileSearch, MapPin, Megaphone, MonitorSmartphone } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import { blogPosts } from '@/data/blog'
import { buildOgUrl } from '@/lib/og/buildOgUrl'

const ogImage = buildOgUrl({
  title: 'Recursos de marketing sanitario',
  category: 'Recursos',
  subtitle: 'Captación online para clínicas privadas en Sevilla',
})

export const metadata: Metadata = {
  title: 'Recursos de marketing sanitario para clínicas en Sevilla | iclinicas',
  description:
    'Guías, diagnósticos y contenidos prácticos sobre SEO local, Google Ads, diseño web, reputación y captación de pacientes privados en Sevilla.',
  alternates: {
    canonical: '/recursos',
  },
  openGraph: {
    title: 'Recursos de marketing sanitario para clínicas en Sevilla',
    description: 'Contenido práctico para mejorar la captación online de clínicas privadas en Sevilla.',
    url: 'https://www.iclinicas.es/recursos',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos de marketing sanitario para clínicas en Sevilla',
    description: 'Contenido práctico para mejorar la captación online de clínicas privadas en Sevilla.',
    images: [ogImage],
  },
}

const categorias = [
  {
    title: 'SEO local y Google Maps',
    description: 'Cómo aparecer cuando un paciente busca especialidad, tratamiento o clínica cercana en Sevilla.',
    href: '/blog/errores-seo-dentistas',
    icon: MapPin,
  },
  {
    title: 'Google Ads y captación privada',
    description: 'Campañas con intención real, mensajes prudentes, negativas y medición de calidad.',
    href: '/blog/google-ads-psicologos',
    icon: Megaphone,
  },
  {
    title: 'Web, CRO y conversión',
    description: 'Elementos que ayudan a convertir visitas móviles en llamadas, WhatsApp y solicitudes.',
    href: '/blog/diseno-web-clinicas',
    icon: MonitorSmartphone,
  },
]

const hubs = [
  {
    title: 'Blog y guías',
    description: 'Artículos prácticos sobre captación, SEO, Ads, diseño web y reputación para clínicas.',
    href: '/blog',
    icon: BookOpenText,
  },
  {
    title: 'Diagnósticos representativos',
    description: 'Escenarios habituales que muestran qué solemos revisar antes de proponer un plan.',
    href: '/casos-de-exito',
    icon: FileSearch,
  },
  {
    title: 'Auditoría de captación',
    description: 'Revisión gratuita de Google, web, campañas, reseñas y puntos de contacto de tu clínica.',
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
                Recursos de marketing sanitario para clínicas privadas en Sevilla
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-muted">
                Guías, diagnósticos y contenidos prácticos para entender qué puede estar frenando tu visibilidad, confianza y solicitudes de cita.
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
                Guías por problema de captación
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
                  Últimos artículos
                </h2>
                <p className="text-text-muted">Ideas aplicables a SEO local, Ads y web de clínicas privadas.</p>
              </div>
              <Link href="/blog" className="text-primary font-semibold hover:underline">
                Ver todos los artículos
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
              ¿Quieres aplicar esto a tu clínica?
            </h2>
            <p className="text-base sm:text-lg text-white mb-8">
              Revisamos tu situación concreta y te decimos qué acciones tienen más sentido para ganar visibilidad, confianza y solicitudes cualificadas.
            </p>
            <Link href="/contacto" className="inline-flex w-full sm:w-auto items-center justify-center bg-[#FFD166] text-[#073F38] px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white hover:text-primary transition">
              Solicitar auditoría gratuita
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
