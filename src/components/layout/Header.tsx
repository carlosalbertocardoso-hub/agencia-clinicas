'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { especialidades } from '@/data/especialidades'
import { servicios } from '@/data/servicios'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimerRef = useRef<number | null>(null)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const closeDropdown = () => setOpenDropdown(null)

  const openMenu = (menu: string) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    setOpenDropdown(menu)
  }

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = window.setTimeout(() => setOpenDropdown(null), 180)
  }

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="" width="32" height="32" className="flex-shrink-0" aria-hidden="true" />
          <div className="text-xl font-heading font-semibold text-primary">
            iMarketing Clínicas
          </div>
        </Link>

        <nav className="hidden lg:flex gap-10 items-center">
          <Link href="/" className="text-text hover:text-primary transition font-medium text-sm">
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => openMenu('servicios')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              className="text-text hover:text-primary transition font-medium text-sm"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'servicios'}
              onClick={() => openMenu('servicios')}
              onFocus={() => openMenu('servicios')}
              onKeyDown={(event) => {
                if (event.key === 'Escape') closeDropdown()
              }}
            >
              Servicios
            </button>
            {openDropdown === 'servicios' && (
              <div
                className="absolute left-0 top-full z-50 w-64 pt-3"
                onMouseEnter={() => openMenu('servicios')}
                onMouseLeave={scheduleCloseMenu}
              >
                <div className="bg-white border border-slate-100 rounded-lg shadow-lg py-2">
                  {servicios.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/servicios/${srv.slug}`}
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm"
                    >
                      {srv.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => openMenu('especialidades')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              className="text-text hover:text-primary transition font-medium text-sm"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'especialidades'}
              onClick={() => openMenu('especialidades')}
              onFocus={() => openMenu('especialidades')}
              onKeyDown={(event) => {
                if (event.key === 'Escape') closeDropdown()
              }}
            >
              A quién ayudamos
            </button>
            {openDropdown === 'especialidades' && (
              <div
                className="absolute left-0 top-full z-50 w-64 pt-3"
                onMouseEnter={() => openMenu('especialidades')}
                onMouseLeave={scheduleCloseMenu}
              >
                <div className="bg-white border border-slate-100 rounded-lg shadow-lg py-2">
                  <Link
                    href="/especialidades"
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-primary hover:bg-slate-50 transition text-sm font-semibold"
                  >
                    Ver todas las especialidades
                  </Link>
                  {especialidades.map((esp) => (
                    <Link
                      key={esp.id}
                      href={`/especialidades/${esp.slug}`}
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-text hover:bg-slate-50 hover:text-primary transition text-sm"
                    >
                      {esp.nombre}
                    </Link>
                  ))}
                </div>
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
