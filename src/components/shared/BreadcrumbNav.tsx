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
      <nav className="flex flex-wrap gap-2 text-sm mb-6 text-text-muted">
        <Link href="/" className="hover:text-primary transition">
          Inicio
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <span>/</span>
            {index === items.length - 1 ? (
              <span className="text-text font-medium">{item.label}</span>
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
