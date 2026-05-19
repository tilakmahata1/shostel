import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'




const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/facilities', label: 'Facilities' },
  // { href: '/prices', label: 'Prices' },
  // { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
  <Link href="/" className="flex items-center gap-2 group">
  
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-green group-hover:scale-105 transition-transform">
    <img
      src="/room/logo2.png"
      alt="Success Boys Hostel Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="leading-tight">
    <span
      className={`font-display font-bold text-lg leading-none block transition-colors ${
        scrolled ? "text-green-800" : "text-white drop-shadow"
      }`}
    >
      Success Boys
    </span>

    <span
      className={`text-xs font-body font-medium tracking-widest uppercase transition-colors ${
        scrolled ? "text-green-600" : "text-green-200"
      }`}
    >
      Hostel
    </span>
  </div>

</Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-body ${
                  isActive(link.href)
                    ? 'bg-green-600 text-white shadow-green'
                    : scrolled
                    ? 'text-green-800 hover:bg-green-50 hover:text-green-700'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm">
              Book Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-green-800 hover:bg-green-50' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            <div className="p-6 border-b border-green-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-green rounded-xl flex items-center justify-center">
                   <img
      src="/room/logo2.png"
      alt="Success Boys Hostel Logo"
      className="w-full h-full object-cover"
    />
                </div>
                <div>
                  <span className="font-display font-bold text-green-800 block text-base leading-none">Success Boys</span>
                  <span className="text-green-600 text-xs font-body tracking-widest uppercase">Hostel</span>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl text-green-700 hover:bg-green-50"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 p-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl font-semibold font-body transition-all ${
                    isActive(link.href)
                      ? 'bg-green-600 text-white'
                      : 'text-green-800 hover:bg-green-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-green-100">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
