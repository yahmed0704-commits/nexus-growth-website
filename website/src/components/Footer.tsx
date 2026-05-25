import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Current Projects', href: '/projects' },
  { label: 'Upcoming Projects', href: '/upcoming-projects' },
  { label: 'Available Rentals', href: '/rentals' },
  { label: 'Before & After Gallery', href: '/gallery' },
  { label: 'Investor & Partnerships', href: '/investor' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/nexus-logo.jpeg"
              alt="Nexus Growth Inc."
              className="h-12 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Nexus Growth Inc. is a premier real estate investment and development company transforming properties and building communities across New Jersey.
            </p>
            <p className="text-gold text-xs font-semibold tracking-widest">WE BELIEVE IN QUALITY.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link to={p.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📍</span>
                <span>New Jersey, USA<br /><span className="text-white/30 text-xs">[Full address — placeholder]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📧</span>
                <span>[info@nexusgrowthinc.com — placeholder]</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📞</span>
                <span>[Phone number — placeholder]</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-gold text-sm py-2 px-5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Nexus Growth Inc. All rights reserved.</p>
          <p className="text-white/20 text-xs">nexusgrowthinc.com · New Jersey Real Estate Investment & Development</p>
        </div>
      </div>
    </footer>
  );
}
