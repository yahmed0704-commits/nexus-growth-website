import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Current Projects', href: '/projects' },
      { label: 'Upcoming Projects', href: '/upcoming-projects' },
      { label: 'Available Rentals', href: '/rentals' },
    ],
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Investors', href: '/investor' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
    document.body.classList.remove('nav-open');
  }, [location.pathname]);

  const toggleMobile = () => {
    setOpen((v) => {
      const next = !v;
      document.body.classList.toggle('nav-open', next);
      return next;
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-dark/95 backdrop-blur-md shadow-xl shadow-black/20' : 'bg-navy-dark/80 backdrop-blur-sm'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(201,145,42,0.15)' : '1px solid rgba(201,145,42,0.08)' }}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/nexus-logo.jpeg" alt="Nexus Growth Inc." className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-gold text-xs font-semibold tracking-widest hidden sm:block">NEXUSGROWTHINC.COM</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-navy-mid border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-navy-light transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-gold text-sm py-2 px-5">
            Contact Us
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={toggleMobile}
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-white/5 px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-navy-light text-gold'
                    : 'text-white/70 hover:text-white hover:bg-navy-mid'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {link.children.slice(1).map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-3 py-2 rounded-lg text-xs text-white/50 hover:text-gold transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-gold text-sm text-center mt-4">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
