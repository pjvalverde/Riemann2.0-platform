export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src="/images/LOGO-OFICIAL-RA.jpg"
              alt="Riemann Academy"
              className="h-10 w-auto rounded"
            />
          </a>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#inicio" className="text-white/40 hover:text-white/80 text-sm transition-colors">Inicio</a>
            <a href="#nosotros" className="text-white/40 hover:text-white/80 text-sm transition-colors">Nosotros</a>
            <a href="#servicios" className="text-white/40 hover:text-white/80 text-sm transition-colors">Servicios</a>
            <a href="#precios" className="text-white/40 hover:text-white/80 text-sm transition-colors">Precios</a>
            <a href="#contacto" className="text-white/40 hover:text-white/80 text-sm transition-colors">Contacto</a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Riemann Academy
          </p>
        </div>
      </div>
    </footer>
  )
}
