'use client'

import Link from 'next/link'
import { useState } from 'react'
import { especialidades } from '@/data/especialidades'
import { servicios } from '@/data/servicios'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">Pacientes</div>
          <div className="text-2xl font-bold text-accent">Sevilla</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {/* A quién ayudamos */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('especialidades')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-text hover:text-primary transition font-medium">
              A quién ayudamos
            </button>
            {openDropdown === 'especialidades' && (
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-4 z-50">
                {especialidades.map((esp) => (
                  <Link
                    key={esp.id}
                    href={`/especialidades/${esp.slug}`}
                    className="block px-4 py-2 text-text hover:bg-secondary hover:text-primary transition text-sm"
                  >
                    {esp.icono} {esp.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Servicios */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('servicios')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-text hover:text-primary transition font-medium">
              Servicios
            </button>
            {openDropdown === 'servicios' && (
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-4 z-50">
                {servicios.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/servicios/${srv.slug}`}
                    className="block px-4 py-2 text-text hover:bg-secondary hover:text-primary transition text-sm"
                  >
                    {srv.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/casos-de-exito" className="text-text hover:text-primary transition font-medium">
            Casos de éxito
          </Link>
          <Link href="/nosotros" className="text-text hover:text-primary transition font-medium">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-text hover:text-primary transition font-medium">
            Contacto
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contacto"
          className="hidden md:block bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
        >
          Hablemos
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-text"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container-custom py-4 space-y-2">
            <Link href="/especialidades" className="block py-2 text-text hover:text-primary">
              A quién ayudamos
            </Link>
            <Link href="/servicios" className="block py-2 text-text hover:text-primary">
              Servicios
            </Link>
            <Link href="/casos-de-exito" className="block py-2 text-text hover:text-primary">
              Casos de éxito
            </Link>
            <Link href="/nosotros" className="block py-2 text-text hover:text-primary">
              Nosotros
            </Link>
            <Link href="/contacto" className="block py-2 text-text hover:text-primary">
              Contacto
            </Link>
            <div className="pt-4">
              <Link
                href="/contacto"
                className="block bg-accent text-white px-4 py-2 rounded-lg text-center hover:bg-opacity-90"
              >
                Hablemos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
