export default function Footer() {
  return (
    <footer className="bg-tertiary text-white border-t-4 border-t-secondary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-serif font-light text-white mb-3">
              Pacientes Sevilla
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Agencia de marketing digital especializada en clínicas y profesionales sanitarios en Sevilla.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 20v-7.21H5.73V9.25h2.56V7.07c0-2.54 1.55-3.93 3.83-3.93 1.09 0 2.02.08 2.29.12v2.65h-1.57c-1.23 0-1.47.59-1.47 1.45v1.9h2.93l-.39 3.54h-2.54V20" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 3.8a8.4 8.4 0 01-2.4.66A4.2 4.2 0 0018.5 3c-.9.54-1.9.92-2.95 1.13A4.18 4.18 0 0014.3 2c-2.3 0-4.17 1.87-4.17 4.17 0 .33.04.65.13.95A11.86 11.86 0 012.4 2.84a4.15 4.15 0 001.3 5.57A4.17 4.17 0 012.6 8.1v.05a4.17 4.17 0 003.35 4.09 4.2 4.2 0 01-1.89.07 4.17 4.17 0 003.89 2.9A8.37 8.37 0 011 17.54a11.84 11.84 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.32 8.32 0 0019 3.8" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center
                                     justify-center hover:bg-primary transition-colors duration-200">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.5 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm4.5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li><a href="/servicios/seo-medico" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">SEO Médico</a></li>
              <li><a href="/servicios/google-ads" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Google Ads</a></li>
              <li><a href="/servicios/diseno-web" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Diseño Web</a></li>
              <li><a href="/servicios/redes-sociales" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Redes Sociales</a></li>
            </ul>
          </div>

          {/* Column 3: Especialidades */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2">
              <li><a href="/especialidades/clinicas-dentales-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Clínicas Dentales</a></li>
              <li><a href="/especialidades/psicologos-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Psicólogos</a></li>
              <li><a href="/especialidades/medicina-estetica-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Medicina Estética</a></li>
              <li><a href="/especialidades/fisioterapia-sevilla" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Fisioterapia</a></li>
            </ul>
          </div>

          {/* Column 4: Legales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legales
            </h4>
            <ul className="space-y-2">
              <li><a href="/politica-privacidad" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Política Privacidad</a></li>
              <li><a href="/terminos-legales" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Términos Legales</a></li>
              <li><a href="/contacto" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © 2026 Pacientes Sevilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
