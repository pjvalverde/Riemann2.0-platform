export default function Pricing() {
  const plans = [
    {
      name: 'Clase Individual',
      price: '$25',
      unit: '/ hora',
      description: 'Ideal para reforzar temas puntuales o preparar exámenes específicos.',
      features: [
        'Sesión de 60 minutos',
        'Cualquier materia (Mate, Física, Estadística)',
        'Virtual o presencial',
        'Material de apoyo incluido',
        'Flexibilidad de horario',
      ],
      cta: 'Agendar Clase',
      popular: false,
    },
    {
      name: 'Plan Mensual',
      price: '$90',
      unit: '/ mes',
      description: 'Acompañamiento continuo para mejorar consistentemente tu rendimiento.',
      features: [
        '4 sesiones de 60 minutos',
        'Plan de estudio personalizado',
        'Seguimiento semanal de progreso',
        'Acceso a material extra',
        'Preparación para exámenes',
        'Comunicación directa por WhatsApp',
      ],
      cta: 'Elegir Plan Mensual',
      popular: true,
    },
    {
      name: 'Plan Intensivo',
      price: '$160',
      unit: '/ mes',
      description: 'Para estudiantes que necesitan un apoyo más fuerte y frecuente.',
      features: [
        '8 sesiones de 60 minutos',
        'Plan de estudio avanzado',
        'Seguimiento continuo',
        'Simulacros de exámenes',
        'Preparación IB/AP intensiva',
        'Asesoría para postulaciones',
      ],
      cta: 'Elegir Plan Intensivo',
      popular: false,
    },
  ]

  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-accent-600 text-sm font-semibold">Precios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Planes <span className="text-accent-500">accesibles</span> y flexibles
          </h2>
          <p className="text-gray-600 text-lg">
            Inversión en educación con resultados comprobables.
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-2xl shadow-navy-500/25 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-400 text-navy-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Más Popular
                </div>
              )}

              <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy-500'}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-navy-500'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                  {plan.unit}
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-8 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent-400' : 'text-green-500'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/25'
                    : 'bg-navy-500 hover:bg-navy-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Precios en USD. Los planes pueden pagarse mensualmente. Primera consulta informativa sin costo.
        </p>
      </div>
    </section>
  )
}
