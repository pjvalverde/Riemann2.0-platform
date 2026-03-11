export default function About() {
  const credentials = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
      title: 'Formación Universitaria',
      desc: 'Ingeniería con especialización en áreas cuantitativas y experiencia en programas internacionales.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      ),
      title: 'Metodología Probada',
      desc: 'Enfoque personalizado que identifica las necesidades específicas de cada estudiante.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      title: 'Experiencia Internacional',
      desc: 'Conocimiento profundo de currículos IB, AP y programas de bachillerato exigentes.',
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-500/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-600 text-sm font-semibold">Sobre Nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-6 leading-tight">
              Más que clases particulares:{' '}
              <span className="text-accent-500">acompañamiento académico real</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              No se trata solo de resolver ejercicios. Ofrecemos un acompañamiento
              académico serio para que los estudiantes realmente mejoren su nivel
              y puedan rendir con confianza en sus materias cuantitativas.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ideal para estudiantes de colegios privados y programas internacionales
              en Quito que necesitan un apoyo más fuerte en matemáticas, física y
              estadística, ya sea para mejorar sus notas o prepararse para
              postulaciones a universidades del exterior.
            </p>

            <div className="space-y-5">
              {credentials.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-500 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-3xl p-10 text-white shadow-2xl shadow-navy-500/20">
              {/* Decorative math */}
              <div className="absolute top-6 right-8 text-white/10 text-5xl font-serif">∑</div>

              <img
                src="/images/LOGO-MARZO-2026-OFICIAL.jpg"
                alt="Riemann Academy"
                className="h-20 w-auto rounded-xl mb-8"
              />

              <h3 className="text-2xl font-bold mb-1">Riemann Academy</h3>
              <p className="text-accent-400 text-sm font-medium mb-4">Soluciones Académicas Directas</p>

              <p className="text-white/70 leading-relaxed mb-8">
                Fundada con la visión de elevar el nivel académico en materias
                cuantitativas. Nuestro nombre honra a Bernhard Riemann, uno de los
                matemáticos más influyentes de la historia.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-400">3</div>
                  <div className="text-white/60 text-sm mt-1">Materias especializadas</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-400">IB/AP</div>
                  <div className="text-white/60 text-sm mt-1">Currículos cubiertos</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-400">1:1</div>
                  <div className="text-white/60 text-sm mt-1">Atención personalizada</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-400">Quito</div>
                  <div className="text-white/60 text-sm mt-1">& Online global</div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
