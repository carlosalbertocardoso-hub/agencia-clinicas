import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Search, Megaphone, Monitor, Star, 
  MapPin, AlertCircle, TrendingDown,
  ShieldCheck, ChevronRight, BarChart3, 
  CheckCircle2, FileCheck 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rediseño Home | iclinicas — Vista previa',
  robots: { index: false, follow: false },
}

// ─── Data ───────────────────────────────────────────

const painPoints = [
  { icon: MapPin, title: 'Sin visibilidad local', desc: 'Tus pacientes no te encuentran en Google Maps ni en búsquedas cercanas.' },
  { icon: TrendingDown, title: 'Anuncios sin retorno', desc: 'Gastas en publicidad pero no llegan citas reales a tu consulta.' },
  { icon: Monitor, title: 'Web que no convence', desc: 'Los pacientes entran, miran y se van sin pedir cita ni llamar.' },
  { icon: AlertCircle, title: 'Sin sistema de captación', desc: 'Dependes del boca a boca y no tienes un flujo de pacientes predecible.' },
]

const especialidades = [
  { nombre: 'Clínicas Dentales', icono: '🦷' },
  { nombre: 'Psicólogos', icono: '🧠' },
  { nombre: 'Medicina Estética', icono: '✨' },
  { nombre: 'Fisioterapeutas', icono: '💪' },
  { nombre: 'Reproducción Asistida', icono: '🔬' },
  { nombre: 'Dermatólogos', icono: '🔍' },
  { nombre: 'Nutricionistas', icono: '🥗' },
  { nombre: 'Oftalmólogos', icono: '👁️' },
  { nombre: 'Pediatras', icono: '👶' },
  { nombre: 'Clínicas Quirúrgicas', icono: '🏥' },
]

const servicios = [
  {
    icon: Search, color: 'text-[#0A6B5E]', bgColor: 'bg-[#0A6B5E]/10',
    title: 'SEO Médico',
    subtitle: 'Aparece cuando te buscan',
    bullets: ['SEO local por especialidad y barrio de Sevilla', 'Contenido sanitario optimizado', 'Google Business Profile y Maps']
  },
  {
    icon: Megaphone, color: 'text-[#E8A030]', bgColor: 'bg-[#E8A030]/10',
    title: 'Google Ads para Clínicas',
    subtitle: 'Pacientes que buscan, no curiosos',
    bullets: ['Campañas segmentadas por tratamiento', 'Landing pages que convierten', 'Optimización por coste por cita']
  },
  {
    icon: Monitor, color: 'text-[#0A6B5E]', bgColor: 'bg-[#0A6B5E]/10',
    title: 'Diseño Web Sanitario',
    subtitle: 'Tu mejor recepcionista 24/7',
    bullets: ['Web rápida y orientada a conversión', 'Cumple normativa LOPD sanitaria', 'Formularios que generan citas']
  },
  {
    icon: Star, color: 'text-[#E8A030]', bgColor: 'bg-[#E8A030]/10',
    title: 'Redes Sociales y Contenido',
    subtitle: 'Confianza antes del primer contacto',
    bullets: ['Contenido profesional alineado con normativa', 'Gestión de reputación (Google, Doctoralia)', 'Coherencia entre canales']
  },
]

const pasos = [
  { num: '01', title: 'Auditoría gratuita', desc: 'Revisamos tu presencia online actual al completo.' },
  { num: '02', title: 'Diagnóstico', desc: 'Identificamos lo que frena tus oportunidades.' },
  { num: '03', title: 'Estrategia', desc: 'Diseñamos el plan a medida para tu clínica.' },
  { num: '04', title: 'Ejecución', desc: 'Implementamos y optimizamos cada canal.' },
  { num: '05', title: 'Resultados', desc: 'Medimos, ajustamos y escalamos lo que funciona.' },
]

const blogPosts = [
  { cat: 'SEO Local', title: 'Errores SEO que alejan pacientes de tu clínica dental', excerpt: 'Los 7 errores más comunes que hacen que los pacientes no te encuentren en Google.', date: '12 Mar 2026' },
  { cat: 'Google Ads', title: 'Google Ads para psicólogos: guía para no perder dinero', excerpt: 'Cómo segmentar campañas para atraer pacientes privados sin malgastar el presupuesto.', date: '28 Feb 2026' },
  { cat: 'Diseño Web', title: 'Diseño web para clínicas: lo que ningún paciente te dice', excerpt: 'Por qué los pacientes entran a tu web y se van sin pedir cita (y cómo solucionarlo).', date: '15 Feb 2026' },
]

export default function RedisenoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F2]">
      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E1D8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          <span className="text-xl font-heading font-bold text-[#0A6B5E]">iclinicas</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5A5A]">
            <a href="#" className="hover:text-[#0A6B5E] transition">Servicios</a>
            <a href="#" className="hover:text-[#0A6B5E] transition">A quién ayudamos</a>
            <a href="#" className="hover:text-[#0A6B5E] transition">Casos de éxito</a>
            <a href="#" className="hover:text-[#0A6B5E] transition">Recursos</a>
          </nav>
          <Link href="/contacto" className="hidden sm:inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold bg-[#E8A030] text-white hover:bg-[#8B6D11] transition shadow-sm">
            Auditoría gratuita
          </Link>
          <button className="md:hidden p-2 text-[#0A6B5E]" aria-label="Menú">☰</button>
        </div>
      </header>

      <main className="flex-grow">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A6B5E] via-[#085249] to-[#0A6B5E]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #E8A030 0%, transparent 50%)' }} />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#E8A030] bg-[#E8A030]/10 px-3 py-1.5 rounded mb-5">
                Especialistas solo en marketing sanitario
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-tight mb-5">
                ¿Tu clínica podría tener más pacientes privados en Sevilla?
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl mb-8 leading-relaxed">
                SEO local, Google Ads, diseño web y contenido para clínicas, consultas y profesionales sanitarios. 
                Resultados medibles, sin promesas falsas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <Link href="/contacto" className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded text-base font-semibold bg-[#E8A030] text-white hover:bg-[#8B6D11] transition shadow-lg">
                  Solicitar auditoría gratuita
                </Link>
                <Link href="/servicios" className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded text-base font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition">
                  Ver casos de éxito
                </Link>
              </div>
              <p className="text-sm text-white/60 mb-8">Sin compromiso · Diagnóstico en 48h · Sin compromiso</p>
              
              {/* Trust bar */}
              <div className="flex flex-wrap gap-6 sm:gap-8 text-sm border-t border-white/15 pt-6">
                <div><span className="font-bold text-white">+8 años</span><span className="text-white/60 block">de experiencia</span></div>
                <div><span className="font-bold text-white">+50 clínicas</span><span className="text-white/60 block">en Sevilla</span></div>
                <div><span className="font-bold text-white">+200 campañas</span><span className="text-white/60 block">gestionadas</span></div>
              </div>

              {/* Specialty chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Dentales', 'Psicólogos', 'Estética', 'Fisioterapia', 'Dermatología', 'Nutrición'].map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PAIN POINTS ═══ */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">
                Por qué las clínicas en Sevilla no llenan su agenda
              </h2>
              <p className="text-base text-[#5A5A5A] max-w-2xl mx-auto">
                Estos son los problemas que vemos en la mayoría de clínicas antes de trabajar con nosotros.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {painPoints.map((p) => (
                <div key={p.title} className="bg-white rounded-lg border border-[#E5E1D8] p-6 sm:p-7 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-[#0A6B5E]/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-[#0A6B5E]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ESPECIALIDADES ═══ */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#F4F1EA]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">A quién ayudamos</h2>
              <p className="text-base text-[#5A5A5A] max-w-2xl mx-auto">
                Trabajamos con clínicas y profesionales sanitarios de todas las especialidades en Sevilla.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {especialidades.map((e) => (
                <div key={e.nombre} className="bg-white rounded-lg border border-[#E5E1D8] p-4 sm:p-5 text-center hover:border-[#0A6B5E]/30 hover:shadow-sm transition cursor-pointer">
                  <span className="text-2xl sm:text-3xl block mb-2">{e.icono}</span>
                  <span className="text-xs sm:text-sm font-medium text-[#1A1A1A]">{e.nombre}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/especialidades" className="inline-flex items-center gap-1.5 text-[#0A6B5E] font-semibold text-sm hover:underline">
                Ver todas las especialidades <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ SERVICIOS ═══ */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">Servicios de marketing sanitario</h2>
              <p className="text-base text-[#5A5A5A] max-w-3xl mx-auto">
                Conectamos SEO local, publicidad médica, diseño web y reputación online en un sistema de captación medible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {servicios.map((s) => (
                <div key={s.title} className="bg-white rounded-lg border border-[#E5E1D8] p-6 sm:p-7 hover:shadow-md transition group">
                  <div className={`w-11 h-11 rounded-lg ${s.bgColor} flex items-center justify-center mb-4`}>
                    <s.icon size={22} className={s.color} />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#E8A030] mb-1 block">{s.subtitle}</span>
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-[#1A1A1A] mb-3">{s.title}</h3>
                  <ul className="space-y-1.5 mb-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-xs sm:text-sm text-[#5A5A5A] flex gap-2">
                        <CheckCircle2 size={14} className="text-[#0A6B5E] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/servicios" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A6B5E] group-hover:gap-2 transition-all">
                    Saber más <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROCESO ═══ */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#F4F1EA]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">Cómo trabajamos</h2>
              <p className="text-base text-[#5A5A5A] max-w-2xl mx-auto">
                De la auditoría a los resultados, siempre con datos y transparencia.
              </p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-[#0A6B5E]/20" />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 relative">
                {pasos.map((p) => (
                  <div key={p.num} className="text-center relative">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#0A6B5E] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10 shadow-sm">
                      {p.num}
                    </div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1.5">{p.title}</h3>
                    <p className="text-xs text-[#5A5A5A] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AUTORIDAD ═══ */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">
                Por qué las clínicas confían en nosotros
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg border border-[#E5E1D8] p-6 sm:p-8">
                <ShieldCheck size={24} className="text-[#0A6B5E] mb-4" />
                <h3 className="text-lg font-heading font-semibold text-[#1A1A1A] mb-3">Especialización real en salud</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  No somos una agencia generalista que también hace clínicas. Solo trabajamos con 
                  profesionales sanitarios. Conocemos la Ley de Publicidad Sanitaria, la LOPD, 
                  los códigos deontológicos y cómo comunica un paciente con su médico.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-[#E5E1D8] p-6 sm:p-8">
                <BarChart3 size={24} className="text-[#E8A030] mb-4" />
                <h3 className="text-lg font-heading font-semibold text-[#1A1A1A] mb-3">Resultados medibles y transparentes</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  Cada mes sabrás exactamente cuántas llamadas, formularios y WhatsApp ha generado 
                  tu presencia online. Sin humo, sin métricas vanity. Te presentamos informes claros 
                  con el coste por contacto real de cada canal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BLOG ═══ */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#F4F1EA]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] mb-4">Recursos para tu clínica</h2>
              <p className="text-base text-[#5A5A5A] max-w-2xl mx-auto">
                Artículos y guías sobre captación de pacientes privados, marketing sanitario y SEO local en Sevilla.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <div key={post.title} className="bg-white rounded-lg border border-[#E5E1D8] overflow-hidden hover:shadow-md transition">
                  <div className="h-40 bg-gradient-to-br from-[#0A6B5E]/20 to-[#E8A030]/20 flex items-center justify-center">
                    <FileCheck size={36} className="text-[#0A6B5E]/30" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#E8A030]">{post.cat}</span>
                    <h3 className="text-sm sm:text-base font-heading font-semibold text-[#1A1A1A] mt-1.5 mb-2">{post.title}</h3>
                    <p className="text-xs text-[#5A5A5A] mb-3 leading-relaxed">{post.excerpt}</p>
                    <span className="text-xs text-[#5A5A5A]">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/recursos" className="inline-flex items-center gap-1.5 text-[#0A6B5E] font-semibold text-sm hover:underline">
                Ver todos los recursos <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#0A6B5E] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #E8A030 0%, transparent 50%)' }} />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4 leading-tight">
              ¿Listo para llenar tu agenda de pacientes privados?
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Solicita tu auditoría gratuita y descubre qué puedes mejorar en la captación online de tu clínica.
            </p>
            <Link href="/contacto" className="inline-flex w-full sm:w-auto items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded text-base font-semibold bg-[#E8A030] text-white hover:bg-[#8B6D11] transition shadow-lg text-lg">
              Solicitar auditoría gratuita
            </Link>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#1A1A1A] text-white/70 pt-12 sm:pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <span className="text-lg font-heading font-bold text-white block mb-3">iclinicas</span>
              <p className="text-sm leading-relaxed">Agencia de marketing sanitario en Sevilla. Especializados en captación de pacientes privados para clínicas y profesionales de la salud.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">SEO Médico</a></li>
                <li><a href="#" className="hover:text-white transition">Google Ads</a></li>
                <li><a href="#" className="hover:text-white transition">Diseño Web</a></li>
                <li><a href="#" className="hover:text-white transition">Redes Sociales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/aviso-legal" className="hover:text-white transition">Aviso Legal</a></li>
                <li><a href="/politica-privacidad" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="/cookies" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Sevilla, España</li>
                <li><a href="/contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-xs text-center text-white/40">
            © 2026 iclinicas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}