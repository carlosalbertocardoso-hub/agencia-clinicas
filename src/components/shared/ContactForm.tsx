'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2 } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/sendEmail'

interface ContactFormProps {
  especialidad?: string
  buttonText?: string
}

export default function ContactForm({ especialidad, buttonText = 'Enviar mensaje' }: ContactFormProps) {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      clinica: '',
      especialidad: especialidad || '',
      mensaje: '',
      privacidad: false,
    },
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(data: any) {
    try {
      setError(null)
      const result = await sendContactEmail(data)

      if (result.success) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.error || 'Error al enviar. Intenta de nuevo.')
      }
    } catch (err) {
      setError('Error al enviar. Intenta de nuevo.')
    }
  }

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded">
        <p className="text-green-800 font-semibold flex items-center gap-2">
          <CheckCircle2 size={18} strokeWidth={1.7} />
          ¡Gracias! Hemos recibido tu solicitud.
        </p>
        <p className="text-green-700 text-sm mt-2">Te contactaremos en las próximas 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-text mb-2">
          Nombre *
        </label>
        <input
          {...register('nombre', { required: true, maxLength: 100 })}
          type="text"
          id="nombre"
          placeholder="Tu nombre"
          maxLength={100}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
          Email *
        </label>
        <input
          {...register('email', { required: true, maxLength: 255, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          type="email"
          id="email"
          placeholder="tu@email.com"
          maxLength={255}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-text mb-2">
          Teléfono *
        </label>
        <input
          {...register('telefono', { required: true, maxLength: 20 })}
          type="tel"
          id="telefono"
          placeholder="+34 600 00 00 00"
          maxLength={20}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="clinica" className="block text-sm font-semibold text-text mb-2">
          Nombre de tu clínica
        </label>
        <input
          {...register('clinica', { maxLength: 100 })}
          type="text"
          id="clinica"
          placeholder="Clínica Dental ejemplo"
          maxLength={100}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      {!especialidad && (
        <div>
          <label htmlFor="especialidad" className="block text-sm font-semibold text-text mb-2">
            Especialidad
          </label>
          <select
            {...register('especialidad')}
            id="especialidad"
            className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
          >
            <option value="">Selecciona una especialidad</option>
            <option value="Clínicas Dentales">Clínicas Dentales</option>
            <option value="Psicólogos">Psicólogos</option>
            <option value="Medicina Estética">Medicina Estética</option>
            <option value="Fisioterapia">Fisioterapia</option>
            <option value="Nutrición">Nutrición</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Cirugía">Cirugía</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-text mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          {...register('mensaje', { maxLength: 5000 })}
          id="mensaje"
          placeholder="Cuéntanos tu situación..."
          rows={4}
          maxLength={5000}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      <label className="flex gap-3 text-sm text-text-muted leading-relaxed">
        <input
          {...register('privacidad', { required: true })}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
        />
        <span>
          Acepto la{' '}
          <a href="/politica-privacidad" className="text-primary font-medium hover:underline">
            política de privacidad
          </a>{' '}
          y autorizo el contacto para responder a mi solicitud.
        </span>
      </label>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary btn-primary-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : buttonText}
      </button>
    </form>
  )
}
