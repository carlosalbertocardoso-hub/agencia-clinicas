import Link from 'next/link'
import { Globe2, Send, UsersRound } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-t-accent py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-3">
              Pacientes Sevilla
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Agencia especializada en captación online para clínicas privadas y profesionales sanitarios en Sevilla.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mt-4">
              Los resultados dependen del punto de partida, especialidad, zona, inversión y capacidad de seguimiento de cada clínica.
            </p>

            <div className="flex gap-3 mt-6">
              <Link href="/recursos" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-200" aria-label="Ver recursos de Pacientes Sevilla">
                <Globe2 size={18} strokeWidth={1.6} className="text-white" />
              </Link>
              <Link href="/contacto" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-200" aria-label="Contactar con Pacientes Sevilla">
                <Send size={18} strokeWidth={1.6} className="text-white" />
              </Link>
              <Link href="/nosotros" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-200" aria-label="Conocer el enfoque de Pacientes Sevilla">
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
              <li><a href="/especialidades/nutricionistas-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Nutrición</a></li>
              <li><a href="/especialidades/pediatria-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Pediatría</a></li>
              <li><a href="/especialidades/clinicas-cirugia-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Cirugía y especialistas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Inicio</a></li>
              <li><a href="/servicios" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Servicios</a></li>
              <li><a href="/especialidades" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">A quién ayudamos</a></li>
              <li><a href="/recursos" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Recursos</a></li>
              <li><a href="/blog" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Blog y guías</a></li>
              <li><a href="/casos-de-exito" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Diagnósticos representativos</a></li>
              <li><a href="/contacto" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Contacto</a></li>
              <li><a href="/politica-privacidad" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Política de privacidad</a></li>
              <li><a href="/terminos-legales" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Términos legales</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/30 pt-8">
          <p className="text-xs text-gray-400 text-center">
            © 2026 Pacientes Sevilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
