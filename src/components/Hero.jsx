export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        {/* Math grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Floating math symbols */}
        <div className="absolute top-20 left-[10%] text-white/5 text-8xl font-serif select-none animate-pulse">∑</div>
        <div className="absolute top-40 right-[15%] text-white/5 text-7xl font-serif select-none animate-pulse" style={{ animationDelay: '1s' }}>∫</div>
        <div className="absolute bottom-32 left-[20%] text-white/5 text-6xl font-serif select-none animate-pulse" style={{ animationDelay: '2s' }}>π</div>
        <div className="absolute bottom-48 right-[25%] text-white/5 text-8xl font-serif select-none animate-pulse" style={{ animationDelay: '0.5s' }}>Δ</div>
        <div className="absolute top-[60%] left-[60%] text-white/5 text-7xl font-serif select-none animate-pulse" style={{ animationDelay: '1.5s' }}>∞</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Inscripciones abiertas 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Domina las{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-300">
              Matemáticas, Física
            </span>{' '}
            y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-300">
              Estadística
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Acompañamiento académico especializado para estudiantes de bachillerato en
            programas exigentes. Clases personalizadas que transforman tu rendimiento
            en materias cuantitativas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-3xl font-bold text-accent-400">IB / AP</div>
              <div className="text-white/60 text-sm mt-1">Programas internacionales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">100%</div>
              <div className="text-white/60 text-sm mt-1">Clases personalizadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">Virtual</div>
              <div className="text-white/60 text-sm mt-1">& Presencial en Quito</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/593984815516?text=%C2%A1Hola!%20Me%20interesa%20agendar%20una%20clase%20en%20Riemann%20Academy.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-accent-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Agendar Clase por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
            >
              Ver Servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
