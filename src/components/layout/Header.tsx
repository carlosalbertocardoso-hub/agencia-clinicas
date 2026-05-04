'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { especialidades } from '@/data/especialidades'
import { servicios } from '@/data/servicios'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
            <rect width="32" height="32" rx="8" fill="#0A6B5E" />
            <path d="M14 8h4v6h6v4h-6v6h-4v-6H8v-4h6z" fill="white" />
            <path d="M22 22l6 6" stroke="#E8A030" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="text-xl font-heading font-semibold text-primary">
            Pacientes Sevilla
          </div>
        </Link>

        <nav className="hidden lg:flex gap-10 items-center">
          <Link href="/" className="text-text hover:text-primary transition font-medium text-sm">
            Inicio
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('servicios')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="text-text hover:text-primary transition font-medium text-sm"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'servicios'}
              onFocus={() => setOpenDropdown('servicios')}
            >
              Servicios
            </button>
            {openDropdown === 'servicios' && (
              <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                {servicios.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/servicios/${srv.slug}`}
                    className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm"
                  >
                    {srv.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('especialidades')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="text-text hover:text-primary transition font-medium text-sm"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'especialidades'}
              onFocus={() => setOpenDropdown('especialidades')}
            >
              A quién ayudamos
            </button>
            {openDropdown === 'especialidades' && (
              <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/especialidades"
                  className="block px-4 py-2 text-primary hover:bg-slate-50 transition text-sm font-semibold"
                >
                  Ver todas las especialidades
                </Link>
                {especialidades.map((esp) => (
                  <Link
                    key={esp.id}
                    href={`/especialidades/${esp.slug}`}
                    className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm"
                  >
                    {esp.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('recursos')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="text-text hover:text-primary transition font-medium text-sm"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'recursos'}
              onFocus={() => setOpenDropdown('recursos')}
            >
              Recursos
            </button>
            {openDropdown === 'recursos' && (
              <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                <Link href="/recursos" className="block px-4 py-2 text-primary hover:bg-slate-50 transition text-sm font-semibold">
                  Centro de recursos
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm">
                  Blog y guías
                </Link>
                <Link href="/casos-de-exito" className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm">
                  Diagnósticos representativos
                </Link>
              </div>
            )}
          </div>
          <Link href="/contacto" className="text-text hover:text-primary transition font-medium text-sm">
            Contacto
          </Link>
        </nav>

        <Link href="/contacto" className="hidden md:block btn-cta text-sm">
          Solicitar auditoría
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-text"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav id="mobile-navigation" className="container-custom py-4 space-y-3">
            <Link href="/" onClick={closeMobileMenu} className="block py-2 text-text hover:text-primary font-medium">
              Inicio
            </Link>
            <Link href="/servicios" onClick={closeMobileMenu} className="block py-2 text-text hover:text-primary font-medium">
              Servicios
            </Link>
            <Link href="/especialidades" onClick={closeMobileMenu} className="block py-2 text-text hover:text-primary font-medium">
              A quién ayudamos
            </Link>
            <Link href="/recursos" onClick={closeMobileMenu} className="block py-2 text-text hover:text-primary font-medium">
              Recursos
            </Link>
            <Link href="/contacto" onClick={closeMobileMenu} className="block py-2 text-text hover:text-primary font-medium">
              Contacto
            </Link>
            <div className="pt-4">
              <Link href="/contacto" onClick={closeMobileMenu} className="block btn-cta text-center text-sm">
                Solicitar auditoría
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
