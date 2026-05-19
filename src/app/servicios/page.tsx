import type { Metadata } from 'next'
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
    'SEO local, Google Ads, diseño web, redes, reputación y medición para clínicas privadas y profesionales sanitarios en Sevilla.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios de marketing para clínicas en Sevilla | iclinicas',
    description: 'SEO local, Google Ads, diseño web, redes, reputación y medición para clínicas privadas y profesionales sanitarios en Sevilla.',
    url: 'https://www.iclinicas.es/servicios',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de marketing para clínicas en Sevilla | iclinicas',
    description: 'SEO local, Google Ads, diseño web, redes, reputación y medición para clínicas privadas y profesionales sanitarios en Sevilla.',
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
        <ServiciosSection />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
