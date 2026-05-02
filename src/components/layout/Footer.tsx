import { ExternalLink, Globe2, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-t-accent py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-3">
              Pacientes Sevilla
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ayudamos a clínicas y profesionales sanitarios en Sevilla a mejorar su presencia online y recibir más solicitudes.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center
                                     justify-center hover:bg-accent transition-colors duration-200">
                <Globe2 size={18} strokeWidth={1.6} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center
                                     justify-center hover:bg-accent transition-colors duration-200">
                <Send size={18} strokeWidth={1.6} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center
                                     justify-center hover:bg-accent transition-colors duration-200">
                <ExternalLink size={18} strokeWidth={1.6} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li><a href="/servicios/seo-medico" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Aparecer mejor en Google</a></li>
              <li><a href="/servicios/google-ads" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Anuncios para recibir solicitudes</a></li>
              <li><a href="/servicios/diseno-web" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Web que transmite confianza</a></li>
              <li><a href="/servicios/redes-sociales" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Presencia cuidada en redes</a></li>
            </ul>
          </div>

          {/* Column 3: Especialidades */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2">
              <li><a href="/especialidades/clinicas-dentales-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Clínicas Dentales</a></li>
              <li><a href="/especialidades/psicologos-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Psicólogos</a></li>
              <li><a href="/especialidades/medicina-estetica-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Medicina Estética</a></li>
              <li><a href="/especialidades/fisioterapia-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Fisioterapia</a></li>
              <li><a href="/especialidades/nutricionistas-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Nutrición</a></li>
              <li><a href="/especialidades/pediatria-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Pediatría</a></li>
              <li><a href="/especialidades/clinicas-cirugia-sevilla" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Cirugía</a></li>
            </ul>
          </div>

          {/* Column 4: Legales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legales
            </h4>
            <ul className="space-y-2">
              <li><a href="/politica-privacidad" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Política Privacidad</a></li>
              <li><a href="/terminos-legales" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Términos Legales</a></li>
              <li><a href="/contacto" className="text-sm text-gray-300 hover:text-accent transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-light/30 pt-8">
          <p className="text-xs text-gray-400 text-center">
            © 2026 Pacientes Sevilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
