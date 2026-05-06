'use server'

import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const contactToEmail = process.env.CONTACT_TO_EMAIL || 'info@iclinicas.es'
const fromEmail = process.env.RESEND_FROM_EMAIL

export interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  clinica?: string
  especialidad?: string
  zona?: string
  web?: string
  objetivo?: string
  mensaje?: string
  privacidad?: boolean
  comunicaciones?: boolean
}

function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('Contact form email is not configured: missing RESEND_API_KEY')
      return {
        success: false,
        error: 'El envio de emails no esta configurado. Falta RESEND_API_KEY en Vercel.',
      }
    }

    if (!fromEmail) {
      console.error('Contact form email is not configured: missing RESEND_FROM_EMAIL')
      return {
        success: false,
        error: 'El envio de emails no esta configurado. Falta RESEND_FROM_EMAIL en Vercel.',
      }
    }

    if (!data.nombre?.trim() || data.nombre.length > 100) {
      return { success: false, error: 'Nombre invalido' }
    }
    if (!data.email?.trim() || data.email.length > 255) {
      return { success: false, error: 'Email invalido' }
    }
    if (!data.telefono?.trim() || data.telefono.length > 20) {
      return { success: false, error: 'Telefono invalido' }
    }
    if (data.mensaje && data.mensaje.length > 5000) {
      return { success: false, error: 'Mensaje demasiado largo' }
    }
    if (!data.privacidad) {
      return { success: false, error: 'Debes aceptar la politica de privacidad para enviar el formulario.' }
    }

    const sanitizedNombre = sanitizeHtml(data.nombre)
    const sanitizedClinica = sanitizeHtml(data.clinica || '')
    const sanitizedEspecialidad = sanitizeHtml(data.especialidad || '')
    const sanitizedZona = sanitizeHtml(data.zona || '')
    const sanitizedWeb = sanitizeHtml(data.web || '')
    const sanitizedObjetivo = sanitizeHtml(data.objetivo || '')
    const sanitizedMensaje = sanitizeHtml(data.mensaje || '')

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iclinicas.es'

    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: contactToEmail,
      replyTo: data.email,
      subject: `Nueva consulta de ${sanitizedNombre} - ${sanitizedClinica || 'Sin clinica'}`,
      html: `
        <h2>Nueva consulta de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitizedNombre}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(data.email)}</p>
        <p><strong>Telefono:</strong> ${sanitizeHtml(data.telefono)}</p>
        <p><strong>Clinica:</strong> ${sanitizedClinica || 'No especificada'}</p>
        <p><strong>Especialidad:</strong> ${sanitizedEspecialidad || 'No especificada'}</p>
        <p><strong>Zona:</strong> ${sanitizedZona || 'No especificada'}</p>
        <p><strong>Web actual:</strong> ${sanitizedWeb || 'No especificada'}</p>
        <p><strong>Que quiere mejorar:</strong> ${sanitizedObjetivo || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${sanitizedMensaje || 'Sin mensaje'}</p>
        <hr />
        <p><strong>Consentimiento tratamiento de datos:</strong> ${data.privacidad ? 'Aceptado' : 'No aceptado'}</p>
        <p><strong>Comunicaciones comerciales:</strong> ${data.comunicaciones ? 'Aceptadas' : 'No aceptadas'}</p>
      `,
    })

    if (adminEmail.error) {
      console.error('Error sending admin contact email:', adminEmail.error)
      return {
        success: false,
        error: 'No se ha podido enviar el formulario. Revisa la configuracion de email.',
      }
    }

    console.info('Admin contact email sent:', adminEmail.data?.id)

    const confirmationEmail = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Hemos recibido tu solicitud - iclinicas',
      html: `
        <h2>Hola ${sanitizedNombre}</h2>
        <p>Gracias por contactar con iclinicas.</p>
        <p>Hemos recibido tu solicitud. Revisaremos tu caso y nos pondremos en contacto contigo en las proximas 24 horas laborables.</p>
        <p>Mientras tanto, puedes seguir explorando nuestros servicios en <a href="${siteUrl}">${siteUrl}</a></p>
        <p>Saludos,<br/>Equipo iclinicas</p>
      `,
    })

    if (confirmationEmail.error) {
      console.error('Confirmation email failed, but admin email was sent:', confirmationEmail.error)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending contact form email:', error)
    return { success: false, error: 'Error al enviar el formulario. Intenta de nuevo.' }
  }
}
