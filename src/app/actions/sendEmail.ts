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

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Email to admin
    await resend.emails.send({
      from: 'contacto@pacientessevilla.com',
      to: 'hola@pacientessevilla.com',
      subject: `Nueva consulta de ${data.nombre} - ${data.clinica || 'Sin clínica'}`,
      html: `
        <h2>Nueva consulta de contacto</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Clínica:</strong> ${data.clinica || 'No especificada'}</p>
        <p><strong>Especialidad:</strong> ${data.especialidad || 'No especificada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.mensaje || 'Sin mensaje'}</p>
      `,
    })

    // Confirmation email to user
    await resend.emails.send({
      from: 'contacto@pacientessevilla.com',
      to: data.email,
      subject: 'Hemos recibido tu solicitud - Pacientes Sevilla',
      html: `
        <h2>¡Hola ${data.nombre}!</h2>
        <p>Gracias por contactar con Pacientes Sevilla.</p>
        <p>Hemos recibido tu solicitud de auditoría. Un especialista se pondrá en contacto contigo en las próximas 24 horas.</p>
        <p>Mientras tanto, puedes seguir explorando nuestros servicios en <a href="https://pacientessevilla.com">pacientessevilla.com</a></p>
        <p>Saludos,<br/>Equipo Pacientes Sevilla</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Error al enviar el formulario. Intenta de nuevo.' }
  }
}
