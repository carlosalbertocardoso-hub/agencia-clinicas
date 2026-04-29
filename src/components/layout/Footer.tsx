import Link from 'next/link'
import { especialidades } from '@/data/especialidades'
import { servicios } from '@/data/servicios'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h3 className="font-bold text-xl mb-4">Pacientes Sevilla</h3>
            <p className="text-sm opacity-80">
              Agencia de marketing digital especializada en clínicas y profesionales sanitarios en
              Sevilla.
            </p>
          </div>

          {/* Columna 2: A quién ayudamos */}
          <div>
            <h4 className="font-bold mb-4">A quién ayudamos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {especialidades.slice(0, 4).map((esp) => (
                <li key={esp.id}>
                  <Link href={`/especialidades/${esp.slug}`} className="hover:opacity-100 transition">
                    {esp.nombre}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/especialidades" className="hover:opacity-100 transition font-semibold">
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {servicios.slice(0, 3).map((srv) => (
                <li key={srv.id}>
                  <Link href={`/servicios/${srv.slug}`} className="hover:opacity-100 transition">
                    {srv.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Empresa */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/nosotros" className="hover:opacity-100 transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos-de-exito" className="hover:opacity-100 transition">
                  Casos de éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-100 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 5: Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="mailto:hola@pacientessevilla.com" className="hover:opacity-100 transition">
                  hola@pacientessevilla.com
                </a>
              </li>
              <li>
                <a href="tel:+34XXX" className="hover:opacity-100 transition">
                  +34 XXX XXX XXX
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:opacity-100 transition font-semibold">
                  Contactar →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-80">
            <div>
              <p>&copy; {currentYear} Pacientes Sevilla. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6 md:justify-end">
              <Link href="/politica-privacidad" className="hover:opacity-100 transition">
                Política de privacidad
              </Link>
              <Link href="/terminos-legales" className="hover:opacity-100 transition">
                Términos legales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
