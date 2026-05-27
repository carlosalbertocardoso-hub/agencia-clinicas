import Link from 'next/link'
import Image from 'next/image'
import { Send, UsersRound } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-t-accent py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-3">
              iclinicas
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mt-4">
              Los resultados dependen del punto de partida, especialidad, zona, inversión y capacidad de seguimiento de cada clínica.
            </p>

            <div className="mt-6 mb-5 flex flex-col gap-2">
              <a
                href="https://www.credential.net/76aa0ca2-3862-4dca-8737-f1f2a18a82d2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Certificación de Google Analytics - verificar credencial"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <Image
                  src="/images/google-analytics-certification-badge.png"
                  alt="Google Analytics Certification badge"
                  width={28}
                  height={28}
                  className="rounded w-7 h-7"
                />
                <span className="text-xs text-gray-300 leading-tight">
                  Certificación<br />
                  <span className="text-white font-medium">Google Analytics</span>
                </span>
              </a>
              <a
                href="https://www.credential.net/869e1785-e5a9-4d6f-9a67-39314c927342"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Certificación en Display de Google Ads - verificar credencial"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <Image
                  src="/images/google-ads-display-certification.png"
                  alt="Google Ads Display Certification badge"
                  width={28}
                  height={28}
                  className="rounded w-7 h-7"
                />
                <span className="text-xs text-gray-300 leading-tight">
                  Certificación<br />
                  <span className="text-white font-medium">Google Ads Display</span>
                </span>
              </a>
            </div>

            <div className="flex gap-3">
              <Link href="/contacto" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-200" aria-label="Contactar con iclinicas">
                <Send size={18} strokeWidth={1.6} className="text-white" />
              </Link>
              <Link href="/nosotros" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-200" aria-label="Conocer el enfoque de iclinicas">
                <UsersRound size={18} strokeWidth={1.6} className="text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="/servicios/seo-medico" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">SEO local sanitario</a></li>
              <li><a href="/servicios/google-ads" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Google Ads para clínicas</a></li>
              <li><a href="/servicios/diseno-web" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Diseño web para clínicas</a></li>
              <li><a href="/servicios/redes-sociales" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Redes y contenido sanitario</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">A quién ayudamos</h4>
            <ul className="space-y-2">
              <li><a href="/especialidades/clinicas-dentales-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Clínicas dentales</a></li>
              <li><a href="/especialidades/psicologos-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Psicólogos</a></li>
              <li><a href="/especialidades/medicina-estetica-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Medicina estética</a></li>
              <li><a href="/especialidades/fisioterapia-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Fisioterapia</a></li>
              <li><a href="/especialidades/clinicas-reproduccion-asistida-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Reproducción asistida</a></li>
              <li><a href="/especialidades/pedagogos-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Pedagogos</a></li>
              <li><a href="/especialidades/dermatologos-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Dermatólogos</a></li>
              <li><a href="/especialidades/nutricionistas-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Nutricionistas</a></li>
              <li><a href="/especialidades/oftalmologos-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Oftalmólogos</a></li>
              <li><a href="/especialidades/pediatria-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Pediatras</a></li>
              <li><a href="/especialidades/clinicas-cirugia-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Cirugía y especialistas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Inicio</a></li>
              <li><a href="/servicios" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Servicios</a></li>
              <li><a href="/especialidades" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">A quién ayudamos</a></li>
              <li><a href="/contacto" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Contacto</a></li>
              <li><a href="/politica-privacidad" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Política de privacidad</a></li>
              <li><a href="/terminos-legales" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Términos legales</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/30 pt-8">
          <p className="text-xs text-gray-400 text-center">
            © 2026 iclinicas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
