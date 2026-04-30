'use client'

import Link from 'next/link'
import { useState } from 'react'
import { especialidades } from '@/data/especialidades'
import { servicios } from '@/data/servicios'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-heading font-semibold text-primary">
            MedMark
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center">
          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('servicios')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-text hover:text-primary transition font-medium text-sm">
              Products
            </button>
            {openDropdown === 'servicios' && (
              <div className="absolute left-0 mt-1 w-48 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                {servicios.slice(0, 4).map((srv) => (
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

          {/* Insights Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('especialidades')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-text hover:text-primary transition font-medium text-sm">
              Insights
            </button>
            {openDropdown === 'especialidades' && (
              <div className="absolute left-0 mt-1 w-48 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                {especialidades.slice(0, 4).map((esp) => (
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

          <Link href="/contacto" className="text-text hover:text-primary transition font-medium text-sm">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button - Right Side */}
        <Link
          href="/contacto"
          className="hidden md:block btn-cta text-sm"
        >
          SCHEDULE AUDIT
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-text"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-custom py-4 space-y-3">
            <Link href="/servicios" className="block py-2 text-text hover:text-primary font-medium">
              Products
            </Link>
            <Link href="/especialidades" className="block py-2 text-text hover:text-primary font-medium">
              Insights
            </Link>
            <Link href="/contacto" className="block py-2 text-text hover:text-primary font-medium">
              Contact Us
            </Link>
            <div className="pt-4">
              <Link
                href="/contacto"
                className="block btn-cta text-center text-sm"
              >
                SCHEDULE AUDIT
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
