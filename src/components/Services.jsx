export default function Services() {
  const subjects = [
    {
      icon: '∑',
      title: 'Matemáticas',
      description: 'Álgebra, cálculo, geometría, trigonometría y matemáticas avanzadas para IB/AP.',
      topics: ['Álgebra y Funciones', 'Cálculo Diferencial e Integral', 'Probabilidad', 'Geometría Analítica'],
      color: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: 'Δ',
      title: 'Física',
      description: 'Mecánica, termodinámica, electricidad, ondas y física moderna con enfoque práctico.',
      topics: ['Mecánica Clásica', 'Termodinámica', 'Electricidad y Magnetismo', 'Ondas y Óptica'],
      color: 'from-violet-500 to-purple-500',
      bgLight: 'bg-violet-50',
      textColor: 'text-violet-600',
    },
    {
      icon: 'σ',
      title: 'Estadística',
      description: 'Estadística descriptiva, inferencial, probabilidad y análisis de datos.',
      topics: ['Estadística Descriptiva', 'Distribuciones de Probabilidad', 'Inferencia Estadística', 'Regresión y Correlación'],
      color: 'from-emerald-500 to-teal-500',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-600',
    },
  ]

  const modalities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      title: 'Clases Virtuales',
      desc: 'Desde cualquier lugar, con pizarra digital interactiva y grabación de la sesión.',
      badge: 'Más popular',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      title: 'Clases Presenciales',
      desc: 'En Quito, sesiones cara a cara para una experiencia de aprendizaje más directa.',
      badge: 'Quito',
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-accent-600 text-sm font-semibold">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Materias que <span className="text-accent-500">dominamos</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Especialización enfocada en las tres áreas cuantitativas fundamentales
            que más necesitan los estudiantes de bachillerato.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${subject.bgLight} flex items-center justify-center mb-6`}>
                <span className={`text-2xl font-serif font-bold ${subject.textColor}`}>{subject.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-navy-500 mb-3">{subject.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{subject.description}</p>

              <ul className="space-y-2.5">
                {subject.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-4 h-4 flex-shrink-0 ${subject.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modalities */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modalities.map((mod, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >
              {mod.badge && (
                <div className="absolute top-4 right-4 bg-accent-500/10 text-accent-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {mod.badge}
                </div>
              )}
              <div className="text-navy-500 mb-4">{mod.icon}</div>
              <h3 className="text-lg font-bold text-navy-500 mb-2">{mod.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
