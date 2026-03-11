import { useState } from 'react'

const WHATSAPP_NUMBER = '593984815516'

export default function EnrollForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    colegio: '',
    materia: '',
    modalidad: '',
    mensaje: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `*Nueva Inscripción - Riemann Academy*`,
      ``,
      `*Nombre:* ${form.nombre}`,
      `*Email:* ${form.email}`,
      `*Teléfono:* ${form.telefono}`,
      form.colegio ? `*Colegio:* ${form.colegio}` : '',
      `*Materia de interés:* ${form.materia}`,
      `*Modalidad:* ${form.modalidad}`,
      form.mensaje ? `*Mensaje:* ${form.mensaje}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-500 mb-2">Solicitud enviada</h3>
        <p className="text-gray-500 mb-6">
          Se abrió WhatsApp con tu información. Envía el mensaje para completar tu inscripción.
          Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ nombre: '', email: '', telefono: '', colegio: '', materia: '', modalidad: '', mensaje: '' }) }}
          className="text-accent-500 hover:text-accent-600 font-semibold text-sm"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <h3 className="text-xl font-bold text-navy-500 mb-1">Formulario de Inscripción</h3>
      <p className="text-gray-400 text-sm mb-6">Completa tus datos y te contactaremos por WhatsApp.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
          <input
            type="text"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="juan@email.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            required
            value={form.telefono}
            onChange={handleChange}
            placeholder="+593 9XX XXX XXX"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Colegio</label>
          <input
            type="text"
            name="colegio"
            value={form.colegio}
            onChange={handleChange}
            placeholder="Nombre del colegio"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Materia de interés *</label>
          <select
            name="materia"
            required
            value={form.materia}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors bg-white"
          >
            <option value="">Seleccionar...</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Física">Física</option>
            <option value="Estadística">Estadística</option>
            <option value="Varias materias">Varias materias</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Modalidad *</label>
          <select
            name="modalidad"
            required
            value={form.modalidad}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors bg-white"
          >
            <option value="">Seleccionar...</option>
            <option value="Virtual">Virtual</option>
            <option value="Presencial (Quito)">Presencial (Quito)</option>
            <option value="Ambas">Ambas</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={3}
          placeholder="¿En qué temas necesitas apoyo? ¿Tienes algún examen próximo?"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
        Enviar Inscripción por WhatsApp
      </button>

      <p className="text-center text-gray-400 text-xs mt-3">
        Al enviar, se abrirá WhatsApp con tu información pre-llenada.
      </p>
    </form>
  )
}
