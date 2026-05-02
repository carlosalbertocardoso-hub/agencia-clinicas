'use client'

import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/schemas'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const breadcrumbSchema = buildBreadcrumbSchema(
    items.map((item) => ({
      name: item.label,
      url: `https://pacientessevilla.com${item.href}`,
    }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav className="flex flex-wrap gap-2 text-sm mb-6 text-text-muted font-body">
        <Link href="/" className="hover:text-primary transition">
          Inicio
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <span className="text-slate-300">/</span>
            {index === items.length - 1 ? (
              <span className="text-text font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary transition">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
