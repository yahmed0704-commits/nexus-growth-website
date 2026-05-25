import { Link } from 'react-router-dom';

const values = [
  { icon: '⭐', title: 'Quality', desc: 'We never cut corners. Every project is completed to the highest standard, from foundation to finish.' },
  { icon: '🛡️', title: 'Integrity', desc: 'Transparent communication and honest partnerships are the cornerstone of everything we do.' },
  { icon: '💡', title: 'Innovation', desc: 'We leverage modern tools, data, and strategies to stay ahead in the evolving real estate market.' },
  { icon: '🌱', title: 'Community', desc: 'We invest in neighborhoods — turning neglected properties into assets that uplift entire communities.' },
  { icon: '⚡', title: 'Excellence', desc: 'From acquisition to sale, we hold ourselves to the highest standard at every stage.' },
  { icon: '🤝', title: 'Partnership', desc: 'We grow by growing with our partners — investors, tenants, contractors, and neighbors.' },
];

const milestones = [
  { year: 'Founded', detail: 'Nexus Growth Inc. established with a mission to transform New Jersey real estate.' },
  { year: 'Early Growth', detail: 'First successful fix & flip projects completed across Essex and Union counties.' },
  { year: 'Expansion', detail: 'Expanded into rental property management and multi-family investments.' },
  { year: 'Today', detail: '12+ properties transformed, $5M+ portfolio, and growing investor partnerships.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR STORY</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About Nexus Growth Inc.</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A New Jersey real estate company built on the belief that quality work transforms not just properties — but communities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">WHO WE ARE</div>
              <h2 className="section-title">Transforming Properties,<br />Building Legacies</h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-4">
                Nexus Growth Inc. is a full-service real estate investment and development company based in New Jersey. We specialize in fix-and-flip renovations, rental property management, and strategic real estate partnerships.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                Founded with a simple but powerful belief — that quality work creates lasting value — we've grown from our first renovation project into a recognized force in the New Jersey real estate market.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Today, we manage a diverse portfolio spanning active renovations, rental units, and investment partnerships — with a team dedicated to delivering results for every stakeholder.
              </p>
              <Link to="/contact" className="btn-gold text-sm">Get In Touch →</Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-gold/20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', height: 400 }}>
                <div className="h-full flex flex-col items-center justify-center gap-4 p-8">
                  <img src="/nexus-logo.jpeg" alt="NGI" className="h-28 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
                  <p className="text-gold text-sm font-semibold tracking-widest text-center">WE BELIEVE IN QUALITY.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold rounded-xl px-5 py-4">
                <div className="text-navy-dark font-black text-2xl">NJ</div>
                <div className="text-navy-dark font-semibold text-xs">Based & Operating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-mid">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-label">OUR PRINCIPLES</div>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-label">OUR JOURNEY</div>
            <h2 className="section-title">Company Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map(({ year, detail }, i) => (
              <div key={year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-dark text-xs font-bold">{i + 1}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-gold/20 mt-2" />}
                </div>
                <div className="pb-8 last:pb-0">
                  <div className="text-gold font-semibold text-sm mb-1">{year}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-light border-t border-b border-gold/10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['12+', 'Properties Transformed'], ['$5M+', 'Portfolio Value'], ['100%', 'Quality Rate'], ['NJ', 'Based & Serving']].map(([n, l]) => (
              <div key={l}>
                <div className="text-gold font-black text-4xl">{n}</div>
                <div className="text-white/50 text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark text-center">
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Ready to Work Together?</h2>
          <p className="text-white/50 mb-8">Let's discuss how Nexus Growth Inc. can help with your real estate goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Contact Us</Link>
            <Link to="/investor" className="btn-outline">Investment Opportunities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
