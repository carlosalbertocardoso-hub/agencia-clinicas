import Image from 'next/image'
import Link from 'next/link'
import type { Autor } from '@/data/autores'

export default function AuthorBox({ autor }: { autor: Autor }) {
  return (
    <aside className="mb-12 bg-white border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row gap-5 items-start">
      <Image
        src={autor.foto}
        alt={`${autor.nombre} — ${autor.rol}`}
        width={72}
        height={72}
        className="rounded-full border border-primary/20 object-cover flex-shrink-0"
      />
      <div>
        <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
          Sobre el autor
        </p>
        <p className="font-heading text-lg font-semibold text-text mb-1">{autor.nombre}</p>
        <p className="text-sm font-medium text-primary mb-2">
          Consultor Senior de Marketing Sanitario
        </p>
        <p className="text-sm text-text-muted leading-relaxed mb-3">
          {autor.bioCorta} Trabaja estrategias de captación para clínicas privadas con prudencia
          sanitaria, medición de conversiones y conocimiento aplicado de la Ley de Publicidad
          Sanitaria.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/autores/${autor.slug}`}
            rel="author"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver perfil completo
          </Link>
          {autor.sameAs.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="author noopener noreferrer me"
              className="text-sm font-semibold text-primary hover:underline"
            >
              LinkedIn
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
