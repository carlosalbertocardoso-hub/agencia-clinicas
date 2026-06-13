import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import ServiciosSection from '@/components/home/ServiciosSection'
import CtaFinal from '@/components/home/CtaFinal'
import { buildOgUrl } from '@/lib/og/buildOgUrl'

const ogImage = buildOgUrl({
  title: 'Servicios de marketing para clínicas',
  category: 'Servicios',
  subtitle: 'SEO, Google Ads, web y redes en Sevilla',
})

export const metadata: Metadata = {
  title: 'Servicios de marketing para clínicas en Sevilla | iclinicas',
  description:
    'Servicios de captación para clínicas privadas en Sevilla: SEO local, Google Ads, diseño web y medición de contactos cualificados. Sin promesas, con datos.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios de marketing para clínicas en Sevilla | iclinicas',
    description: 'Servicios de captación para clínicas privadas en Sevilla: SEO local, Google Ads, diseño web y medición de contactos cualificados. Sin promesas, con datos.',
    url: 'https://www.iclinicas.es/servicios',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de marketing para clínicas en Sevilla | iclinicas',
    description: 'Servicios de captación para clínicas privadas en Sevilla: SEO local, Google Ads, diseño web y medición de contactos cualificados. Sin promesas, con datos.',
    images: [ogImage],
  },
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-section bg-gradient-to-br from-bg to-surface">
          <div className="container-custom text-center max-w-3xl">
            <BreadcrumbNav items={[{ label: 'Servicios', href: '/servicios' }]} />
            <p className="text-label text-accent mb-4">Servicios</p>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-6">
              Un sistema de captación online para clínicas privadas en Sevilla
            </h1>
            <p className="text-lg text-text-muted">
              Trabajamos Google, web, campañas, reputación y contenido con un objetivo: que más pacientes adecuados te encuentren, confíen y contacten.
            </p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="bg-white border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-label text-accent mb-2">Punto de partida recomendado</p>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text mb-2">
                  ¿No sabes qué servicio necesitas primero?
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  Revisamos cómo aparece tu clínica en Google, qué transmite tu web y qué canales generan contactos cualificados. A partir del diagnóstico definimos qué tiene más sentido.
                </p>
              </div>
              <Link
                href="/servicios/marketing-para-clinicas"
                className="btn-primary shrink-0 inline-flex items-center gap-2"
              >
                Ver cómo trabajamos <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>
        <ServiciosSection />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
