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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-navy-500 flex items-center justify-center">
              <span className="text-accent-400 font-bold text-lg font-serif">R</span>
            </div>
            <span className="text-navy-500 font-bold text-lg tracking-tight">
              Riemann<span className="text-accent-500">Academy</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-navy-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-navy-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-navy-600 transition-colors"
            >
              Agendar Clase
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-navy-500"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-navy-500 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block bg-navy-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-navy-600 transition-colors"
            >
              Agendar Clase
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
