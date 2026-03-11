import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#precios', label: 'Precios' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-700/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/images/LOGO-OFICIAL-RA.jpg"
              alt="Riemann Academy"
              className="h-10 w-auto rounded"
            />
            <span className="text-white font-bold text-lg tracking-tight">Riemann Academy</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-accent-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors"
            >
              Agendar Clase
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-700 border-t border-white/10 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-white/70 hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block bg-accent-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-accent-600 transition-colors"
            >
              Agendar Clase
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
