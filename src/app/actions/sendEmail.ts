'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  clinica?: string
  especialidad?: string
  mensaje?: string
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
    // Validate and sanitize inputs
    if (!data.nombre?.trim() || data.nombre.length > 100) {
      return { success: false, error: 'Nombre inválido' }
    }
    if (!data.email?.trim() || data.email.length > 255) {
      return { success: false, error: 'Email inválido' }
    }
    if (!data.telefono?.trim() || data.telefono.length > 20) {
      return { success: false, error: 'Teléfono inválido' }
    }
    if (data.mensaje && data.mensaje.length > 5000) {
      return { success: false, error: 'Mensaje demasiado largo' }
    }

    const sanitizedNombre = sanitizeHtml(data.nombre)
    const sanitizedClinica = sanitizeHtml(data.clinica || '')
    const sanitizedEspecialidad = sanitizeHtml(data.especialidad || '')
    const sanitizedMensaje = sanitizeHtml(data.mensaje || '')

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pacientessevilla.com'

    // Email to admin
    await resend.emails.send({
      from: 'noreply@pacientessevilla.com',
      to: 'hola@pacientessevilla.com',
      subject: `Nueva consulta de ${sanitizedNombre} - ${sanitizedClinica || 'Sin clínica'}`,
      html: `
        <h2>Nueva consulta de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitizedNombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Clínica:</strong> ${sanitizedClinica || 'No especificada'}</p>
        <p><strong>Especialidad:</strong> ${sanitizedEspecialidad || 'No especificada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${sanitizedMensaje || 'Sin mensaje'}</p>
      `,
    })

    // Confirmation email to user
    await resend.emails.send({
      from: 'noreply@pacientessevilla.com',
      to: data.email,
      subject: 'Hemos recibido tu solicitud - Pacientes Sevilla',
      html: `
        <h2>¡Hola ${sanitizedNombre}!</h2>
        <p>Gracias por contactar con Pacientes Sevilla.</p>
        <p>Hemos recibido tu solicitud de auditoría. Un especialista se pondrá en contacto contigo en las próximas 24 horas.</p>
        <p>Mientras tanto, puedes seguir explorando nuestros servicios en <a href="${siteUrl}">${siteUrl}</a></p>
        <p>Saludos,<br/>Equipo Pacientes Sevilla</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Error al enviar el formulario. Intenta de nuevo.' }
  }
}
