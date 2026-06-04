import { FieldValue } from 'firebase-admin/firestore'
import { NextResponse } from 'next/server'
import { getAdminDb } from '@/lib/firebase/admin'
import { isValidUnsubscribeToken } from '@/lib/email/unsubscribe'

export const runtime = 'nodejs'

function getParams(request: Request) {
  const url = new URL(request.url)

  return {
    contactId: url.searchParams.get('contactId') || url.searchParams.get('id') || '',
    token: url.searchParams.get('token') || '',
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function pageShell(title: string, content: string, status = 200) {
  return new NextResponse(
    `<!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <style>
          body{margin:0;background:#FCF9F2;color:#1A1A1A;font-family:Inter,Segoe UI,Arial,sans-serif}
          main{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
          section{max-width:560px;background:#fff;border:1px solid #E5E1D8;border-radius:10px;padding:32px;box-shadow:0 18px 40px rgba(8,82,73,.1)}
          h1{margin:0 0 12px;color:#085249;font-family:Georgia,Times New Roman,serif;font-size:32px;line-height:1.15}
          p{margin:0 0 18px;color:#5A5A5A;line-height:1.7}
          a{color:#0A6B5E;font-weight:700}
          form{display:flex;flex-direction:column;gap:12px;margin-top:22px}
          button{border:0;border-radius:7px;background:#8B6D11;color:#fff;font-weight:800;font-size:15px;padding:14px 20px;cursor:pointer}
          .secondary{display:inline-flex;align-items:center;justify-content:center;border:1px solid #E5E1D8;border-radius:7px;background:#FCF9F2;color:#085249;text-decoration:none;font-weight:800;padding:13px 20px}
          .note{font-size:13px;color:#777;margin-top:16px;margin-bottom:0}
        </style>
      </head>
      <body>
        <main>
          <section>
            ${content}
          </section>
        </main>
      </body>
    </html>`,
    {
      status,
      headers: {
        'content-type': 'text/html; charset=utf-8',
      },
    }
  )
}

function messagePage(title: string, message: string, status = 200) {
  return pageShell(title, `<h1>${title}</h1><p>${message}</p>`, status)
}

async function getPostParams(request: Request) {
  const contentType = request.headers.get('content-type') || ''

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await request.formData()

    return {
      contactId: String(formData.get('contactId') || ''),
      token: String(formData.get('token') || ''),
    }
  }

  return getParams(request)
}

async function renderConfirmation(request: Request) {
  const { contactId, token } = getParams(request)

  if (!contactId || !token || !isValidUnsubscribeToken(contactId, token)) {
    return messagePage(
      'Enlace no válido',
      'No hemos podido procesar esta baja porque el enlace no es válido o ha sido modificado.',
      400
    )
  }

  const db = getAdminDb()
  const contactRef = db.collection('contacts').doc(contactId)
  const contactSnap = await contactRef.get()

  if (!contactSnap.exists) {
    return messagePage(
      'Contacto no encontrado',
      'No hemos encontrado este contacto en nuestro registro. Si sigues recibiendo emails, responde con "baja".',
      404
    )
  }

  const contact = contactSnap.data()
  const contactName = escapeHtml(typeof contact?.name === 'string' ? contact.name : 'este contacto')

  return pageShell(
    'Confirmar baja',
    `<h1>Confirmar baja</h1>
    <p>Vas a dejar de recibir comunicaciones comerciales de iClínicas para <strong>${contactName}</strong>.</p>
    <p>Si confirmas, actualizaremos nuestro registro y no volveremos a incluir este contacto en campañas comerciales.</p>
    <form method="post" action="/api/unsubscribe">
      <input type="hidden" name="contactId" value="${contactId}" />
      <input type="hidden" name="token" value="${token}" />
      <button type="submit">Confirmar baja</button>
      <a class="secondary" href="https://www.iclinicas.es">Mantener suscripción</a>
    </form>
    <p class="note">También puedes responder al email con "baja" si prefieres que lo gestionemos manualmente.</p>`
  )
}

async function confirmUnsubscribe(request: Request) {
  const { contactId, token } = await getPostParams(request)

  if (!contactId || !token || !isValidUnsubscribeToken(contactId, token)) {
    return messagePage(
      'Enlace no válido',
      'No hemos podido procesar esta baja porque el enlace no es válido o ha sido modificado.',
      400
    )
  }

  const db = getAdminDb()
  const contactRef = db.collection('contacts').doc(contactId)
  const contactSnap = await contactRef.get()

  if (!contactSnap.exists) {
    return messagePage(
      'Contacto no encontrado',
      'No hemos encontrado este contacto en nuestro registro. Si sigues recibiendo emails, responde con "baja".',
      404
    )
  }

  const now = FieldValue.serverTimestamp()

  await contactRef.set(
    {
      outreach: {
        commercialConsent: 'unsubscribed',
        emailStatus: 'unsubscribed',
        outreachEligible: false,
        unsubscribedAt: now,
      },
      updatedAt: now,
    },
    { merge: true }
  )

  await db.collection('email_events').add({
    contactId,
    provider: 'resend',
    type: 'unsubscribed',
    source: 'unsubscribe_confirmation',
    createdAt: now,
  })

  return messagePage(
    'Baja confirmada',
    'Hemos registrado tu baja. No volveremos a enviarte comunicaciones comerciales desde iClínicas.'
  )
}

export async function GET(request: Request) {
  return renderConfirmation(request)
}

export async function POST(request: Request) {
  return confirmUnsubscribe(request)
}
