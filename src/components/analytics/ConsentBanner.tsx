'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { grantConsent, denyConsent } from '@/lib/analytics/gtag'

const COOKIE_NAME = 'iclinicas_consent'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 año en segundos

type ConsentValue = 'granted' | 'denied'

function readConsentCookie(): ConsentValue | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]+)')
  )
  if (!match) return null
  const value = decodeURIComponent(match[1])
  return value === 'granted' || value === 'denied' ? value : null
}

function writeConsentCookie(value: ConsentValue) {
  if (typeof document === 'undefined') return
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie =
    `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readConsentCookie()
    if (stored === 'granted') {
      grantConsent()
      return
    }
    if (stored === 'denied') {
      denyConsent()
      return
    }
    setVisible(true)
  }, [])

  function persist(value: ConsentValue) {
    writeConsentCookie(value)
  }

  function handleAccept() {
    grantConsent()
    persist('granted')
    setVisible(false)
  }

  function handleReject() {
    denyConsent()
    persist('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-text">
          Usamos cookies propias y de terceros para analizar el uso del sitio y mejorar tu
          experiencia. Puedes aceptar, rechazar o leer más en nuestra{' '}
          <Link href="/politica-privacidad" className="underline hover:no-underline">
            política de privacidad
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text hover:bg-bg"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
