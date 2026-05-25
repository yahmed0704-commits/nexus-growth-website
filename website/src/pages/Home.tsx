import { Link } from 'react-router-dom';

const stats = [
  { num: '12+', label: 'Properties Transformed' },
  { num: '$5M+', label: 'Portfolio Value' },
  { num: '3', label: 'Active Projects' },
  { num: '100%', label: 'Quality Commitment' },
];

const services = [
  { icon: '🏠', title: 'Fix & Flip', desc: 'Strategic property acquisitions, full renovations, and profitable resale across New Jersey markets.' },
  { icon: '🏢', title: 'Rental Management', desc: 'End-to-end rental management for residential and multi-family properties.' },
  { icon: '🔨', title: 'Renovation & Construction', desc: 'Expert renovation coordination delivering quality craftsmanship on time and on budget.' },
  { icon: '📈', title: 'Real Estate Investment', desc: 'Creating high-yield investment opportunities for partners and stakeholders.' },
  { icon: '🏗️', title: 'Property Development', desc: 'Strategic development from land to livable — adding lasting value to communities.' },
  { icon: '🤝', title: 'Investor Partnerships', desc: 'Joint ventures and partnership structures built for mutual long-term growth.' },
];

const projects = [
  { name: 'Maple St.', location: 'Maplewood, NJ', status: 'Active Renovation', type: 'Fix & Flip', color: 'bg-gold/10 text-gold' },
  { name: 'Willow Dr.', location: 'South Orange, NJ', status: 'Active', type: 'Rental Property', color: 'bg-gold/10 text-gold' },
  { name: 'Riverside Ct.', location: 'Bloomfield, NJ', status: 'Rented', type: 'Multi-Family', color: 'bg-green-500/10 text-green-400' },
];

const why = [
  { icon: '⭐', title: 'Quality First', desc: 'Every project is executed with meticulous attention to detail and craftsmanship.' },
  { icon: '🛡️', title: 'Trusted & Reliable', desc: 'Years of experience and a proven track record across New Jersey real estate.' },
  { icon: '💡', title: 'Smart Investment', desc: 'Data-driven decisions that maximize ROI for all stakeholders and partners.' },
  { icon: '🌱', title: 'Community Focused', desc: 'We build neighborhoods, not just properties — committed to local growth.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,145,42,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.8) 0%, transparent 70%)' }} />
        </div>

        <div className="container-site relative w-full pt-24 pb-16 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-6" style={{ background: 'rgba(201,145,42,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-widest">NEW JERSEY'S PREMIER REAL ESTATE FIRM</span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
                We Believe In
              </h1>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-gradient leading-tight mb-6">
                Quality.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                Nexus Growth Inc. is a premier real estate investment and development company — transforming properties, building communities, and delivering results across New Jersey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-gold text-sm">View Our Projects →</Link>
                <Link to="/rentals" className="btn-outline text-sm">Available Rentals</Link>
              </div>
            </div>

            {/* Hero card */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-2xl" style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', height: 420 }}>
                <div className="h-full flex items-center justify-center flex-col gap-4">
                  <img src="/nexus-logo.jpeg" alt="Nexus Growth Inc." className="h-32 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                  <div className="text-center mt-2">
                    <div className="text-gold font-semibold text-sm">Active Renovation</div>
                    <div className="text-white/50 text-xs mt-1">Maple St. · Maplewood, NJ</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4 shadow-xl" style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)', boxShadow: '0 20px 40px rgba(201,145,42,0.3)' }}>
                <div className="text-navy-dark font-black text-2xl">12+</div>
                <div className="text-navy-dark font-semibold text-xs">Properties Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-mid border-y border-gold/10">
        <div className="container-site py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-gold font-black text-3xl md:text-4xl">{num}</div>
                <div className="text-white/50 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-label">WHAT WE DO</div>
            <h2 className="section-title">Our Services</h2>
            <p className="text-white/50 max-w-xl mx-auto">From strategic acquisitions to full-service property management — we deliver end-to-end real estate excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark group cursor-pointer">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-navy-light">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-label">PORTFOLIO</div>
              <h2 className="section-title mb-0">Current Projects</h2>
            </div>
            <Link to="/projects" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(({ name, location, status, type, color }) => (
              <div key={name} className="rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 transition-all group" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="h-44 flex items-center justify-center" style={{ background: 'rgba(201,145,42,0.08)' }}>
                  <span className="text-5xl">🏠</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-base">{name}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{status}</span>
                  </div>
                  <div className="text-white/50 text-xs mb-1">{location}</div>
                  <div className="text-gold text-xs font-semibold mt-2">{type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">WHY NGI</div>
              <h2 className="section-title">Built on Trust,<br />Driven by Quality</h2>
              <p className="text-white/50 leading-relaxed mb-8">We bring decades of combined expertise to every project. Our commitment to quality and integrity is not just a promise — it's our track record.</p>
              <Link to="/about" className="btn-gold text-sm">Learn Our Story →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {why.map(({ icon, title, desc }) => (
                <div key={title} className="card-dark">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">{title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-light border-t border-gold/10">
        <div className="container-site text-center">
          <div className="max-w-2xl mx-auto">
            <div className="section-label">GET STARTED</div>
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4">Ready to Partner With Us?</h2>
            <p className="text-white/50 text-lg mb-8">Whether you're an investor, property owner, or future tenant — Nexus Growth Inc. is ready to build with you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">Contact Us Today</Link>
              <Link to="/investor" className="btn-outline">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
