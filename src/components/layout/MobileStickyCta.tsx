import { Mail, Phone } from 'lucide-react'

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden px-3 pb-3 pointer-events-none">
      <div className="pointer-events-auto grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
        <a
          href="tel:+34600258938"
          aria-label="Llamar a iClínicas"
          className="btn-primary text-sm inline-flex items-center justify-center gap-2 px-3 py-3"
        >
          <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
          Llamar
        </a>
        <a
          href="mailto:info@iclinicas.es"
          aria-label="Enviar email a iClínicas"
          className="btn-secondary text-sm inline-flex items-center justify-center gap-2 px-3 py-3"
        >
          <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
          Email
        </a>
      </div>
    </div>
  )
}
