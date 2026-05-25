import { Link } from 'react-router-dom';

const models = [
  {
    icon: '🤝',
    title: 'Joint Venture Partnership',
    desc: 'Co-invest alongside Nexus Growth Inc. on specific projects. Share in profits proportional to contribution and involvement.',
    highlights: ['Project-specific equity', 'Shared decision-making', 'Defined exit timeline', 'Full transparency'],
  },
  {
    icon: '📈',
    title: 'Preferred Equity',
    desc: 'Earn preferred returns on your investment before profits are distributed. Lower risk profile with predictable returns.',
    highlights: ['Preferred return structure', 'Priority distribution', 'Fixed timeline', 'Quarterly reporting'],
  },
  {
    icon: '🏗️',
    title: 'Project Sponsorship',
    desc: 'Fund a specific renovation or acquisition project. NGI manages operations while you earn returns on completion.',
    highlights: ['Single-project focus', 'NGI manages all operations', 'Clear ROI targets', 'Exit at project completion'],
  },
];

const process = [
  { n: '01', title: 'Initial Conversation', desc: 'We learn about your investment goals, timeline, and risk tolerance.' },
  { n: '02', title: 'Deal Presentation', desc: 'We present current and upcoming opportunities that match your profile.' },
  { n: '03', title: 'Due Diligence', desc: 'Review financials, market analysis, and project plans together.' },
  { n: '04', title: 'Partnership Agreement', desc: 'Legal documentation outlining terms, returns, and responsibilities.' },
  { n: '05', title: 'Active Reporting', desc: 'Regular updates, financial statements, and transparent communication throughout.' },
  { n: '06', title: 'Exit & Returns', desc: 'Defined exit strategy with capital return and profit distribution.' },
];

export default function Investor() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">BUILD WEALTH WITH US</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Investor & Partnerships</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Access high-quality New Jersey real estate deal flow. Partner with an experienced team that delivers results.
          </p>
        </div>
      </section>

      {/* Why invest */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="section-label">WHY INVEST WITH NGI</div>
              <h2 className="section-title">A Partner You Can Trust</h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-4">
                Nexus Growth Inc. offers accredited and private investors access to carefully curated New Jersey real estate opportunities — with full transparency, professional management, and competitive returns.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We've built a track record of successful projects and satisfied partners. Our disciplined approach to acquisitions, renovations, and management ensures every investment is structured for long-term success.
              </p>
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 text-sm text-white/50 mb-6">
                ⚠️ Specific return figures and financial projections are placeholders — consult your legal/financial advisor before publishing.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['🏆', 'Experienced Team', '10+ years combined real estate expertise'],
                ['📊', 'Data-Driven', 'Every deal backed by thorough market analysis'],
                ['🔍', 'Full Transparency', 'Regular reporting and open communication'],
                ['⚡', 'Active Management', 'NGI handles everything — you earn passively'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} className="card-dark">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{title}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment models */}
          <div className="section-label mb-2">PARTNERSHIP STRUCTURES</div>
          <h2 className="section-title mb-10">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {models.map(({ icon, title, desc, highlights }) => (
              <div key={title} className="card-dark border border-gold/10 hover:border-gold/30">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-white/60">
                      <span className="text-gold">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="section-label mb-2">THE PROCESS</div>
          <h2 className="section-title mb-10">From Intro to Returns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {process.map(({ n, title, desc }) => (
              <div key={n} className="card-dark">
                <div className="text-gold font-black text-3xl mb-3">{n}</div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 p-10 text-center" style={{ background: 'rgba(201,145,42,0.05)' }}>
            <h2 className="text-white text-3xl font-black mb-4">Ready to Invest?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Start a conversation with our investor relations team. We'll find the right opportunity for your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">Schedule a Call</Link>
              <Link to="/projects" className="btn-outline">View Current Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
