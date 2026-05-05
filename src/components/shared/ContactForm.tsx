'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2 } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/sendEmail'

interface ContactFormProps {
  especialidad?: string
  buttonText?: string
  variant?: 'compact' | 'full' | 'inline'
}

export default function ContactForm({
  especialidad,
  buttonText = 'Solicitar auditoría gratuita',
  variant = 'full',
}: ContactFormProps) {
  const isCompact = variant === 'compact' || variant === 'inline'
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      clinica: '',
      especialidad: especialidad || '',
      zona: '',
      web: '',
      objetivo: '',
      mensaje: '',
      privacidad: false,
      comunicaciones: false,
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
        setError(result.error || 'No se ha podido enviar el formulario. Revisa los campos o escríbenos por email.')
      }
    } catch (err) {
      setError('No se ha podido enviar el formulario. Revisa los campos o escríbenos por email.')
    }
  }

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded">
        <p className="text-green-800 font-semibold flex items-center gap-2">
          <CheckCircle2 size={18} strokeWidth={1.7} />
          Gracias. Hemos recibido tu solicitud.
        </p>
        <p className="text-green-700 text-sm mt-2">Te contactaremos en menos de 24h laborables.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={variant === 'inline' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
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
          Nombre de la clínica
        </label>
        <input
          {...register('clinica', { maxLength: 100 })}
          type="text"
          id="clinica"
          placeholder="Nombre de la clínica o consulta"
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
            <option value="Clínicas dentales">Clínicas dentales</option>
            <option value="Psicólogos">Psicólogos</option>
            <option value="Medicina estética">Medicina estética</option>
            <option value="Fisioterapia">Fisioterapia</option>
            <option value="Nutrición">Nutrición</option>
            <option value="Pediatras">Pediatras</option>
            <option value="Cirugía y especialistas">Cirugía y especialistas</option>
          </select>
        </div>
      )}

      {!isCompact && (
        <>
          <div>
            <label htmlFor="zona" className="block text-sm font-semibold text-text mb-2">
              Zona o barrio
            </label>
            <input
              {...register('zona', { maxLength: 100 })}
              type="text"
              id="zona"
              placeholder="Nervión, Triana, Centro, Aljarafe..."
              maxLength={100}
              className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="web" className="block text-sm font-semibold text-text mb-2">
              Web actual
            </label>
            <input
              {...register('web', { maxLength: 255 })}
              type="text"
              id="web"
              placeholder="https://..."
              maxLength={255}
              className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="objetivo" className="block text-sm font-semibold text-text mb-2">
              Principal problema
            </label>
            <select
              {...register('objetivo')}
              id="objetivo"
              className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
            >
              <option value="">Selecciona una opción</option>
              <option value="Aparecer mejor en Google y Google Maps">Aparecer mejor en Google y Google Maps</option>
              <option value="Convertir más visitas web en citas">Convertir más visitas web en citas</option>
              <option value="Medir llamadas, WhatsApp y formularios">Medir llamadas, WhatsApp y formularios</option>
              <option value="Mejorar campañas de Google Ads">Mejorar campañas de Google Ads</option>
              <option value="Ordenar reputación, reseñas o redes">Ordenar reputación, reseñas o redes</option>
              <option value="No lo tengo claro todavía">No lo tengo claro todavía</option>
            </select>
          </div>
        </>
      )}

      <div className={variant === 'inline' ? 'md:col-span-2' : undefined}>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-text mb-2">
          Mensaje
        </label>
        <textarea
          {...register('mensaje', { maxLength: 5000 })}
          id="mensaje"
          placeholder="Cuéntanos brevemente qué te preocupa: Google, web, anuncios, redes, agenda o captación."
          rows={isCompact ? 3 : 4}
          maxLength={5000}
          className="w-full px-4 py-2 border border-slate-200 bg-white rounded focus:border-primary transition focus:outline-none"
        />
      </div>

      <label htmlFor="privacidad" className={`flex gap-3 text-sm text-text-muted leading-relaxed ${variant === 'inline' ? 'md:col-span-2' : ''}`}>
        <input
          {...register('privacidad', { required: true })}
          type="checkbox"
          id="privacidad"
          required
          aria-required="true"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
        />
        <span>
          He leído y acepto la{' '}
          <a href="/politica-privacidad" className="text-primary font-medium hover:underline">
            política de privacidad
          </a>{' '}
          y autorizo el tratamiento de mis datos para responder a mi solicitud. *
        </span>
      </label>

      <label htmlFor="comunicaciones" className={`flex gap-3 text-sm text-text-muted leading-relaxed ${variant === 'inline' ? 'md:col-span-2' : ''}`}>
        <input
          {...register('comunicaciones')}
          type="checkbox"
          id="comunicaciones"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
        />
        <span>
          Acepto recibir comunicaciones comerciales de iclinicas sobre servicios, contenidos y novedades relacionados con marketing sanitario. Podré retirar mi consentimiento en cualquier momento.
        </span>
      </label>

      {error && (
        <div className={`p-4 bg-red-50 border border-red-200 rounded ${variant === 'inline' ? 'md:col-span-2' : ''}`}>
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary btn-primary-lg disabled:opacity-50 disabled:cursor-not-allowed ${variant === 'inline' ? 'md:col-span-2 w-full' : 'w-full'}`}
      >
        {isSubmitting ? 'Enviando...' : buttonText}
      </button>
    </form>
  )
}
