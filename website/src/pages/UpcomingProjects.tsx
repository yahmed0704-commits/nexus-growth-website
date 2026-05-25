import { Link } from 'react-router-dom';

const upcoming = [
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Fix & Flip',
    status: 'Under Contract',
    est: '[Q3 2025 — placeholder]',
    desc: 'Planned full renovation including kitchen, bathrooms, and exterior updates. [Additional details — placeholder]',
  },
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Rental Conversion',
    status: 'In Analysis',
    est: '[Q4 2025 — placeholder]',
    desc: 'Conversion from single-family to multi-unit rental property. [Additional details — placeholder]',
  },
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Fix & Flip',
    status: 'Prospecting',
    est: '[2026 — placeholder]',
    desc: 'High-potential distressed property identified. Currently in feasibility analysis. [Details — placeholder]',
  },
];

const statusColors: Record<string, string> = {
  'Under Contract': 'bg-gold/20 text-gold',
  'In Analysis': 'bg-blue-500/20 text-blue-400',
  'Prospecting': 'bg-white/10 text-white/50',
};

export default function UpcomingProjects() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">COMING SOON</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Upcoming Projects</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A look at what's in our pipeline — properties we're actively acquiring and planning.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="bg-gold/5 border border-gold/15 rounded-xl p-4 mb-10 text-center text-xs text-gold">
            ⚠️ Project details below are placeholders — replace with your actual upcoming acquisitions when ready to publish.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {upcoming.map(({ name, location, type, status, est, desc }) => (
              <div key={name} className="card-dark border border-white/5 hover:border-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[status]}`}>{status}</span>
                  <span className="text-white/30 text-xs">{est}</span>
                </div>
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-white font-bold mb-1">{name}</h3>
                <div className="text-white/40 text-xs mb-2">📍 {location}</div>
                <div className="text-gold text-xs font-semibold mb-4">{type}</div>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Pipeline stats */}
          <div className="rounded-2xl border border-gold/10 p-8 text-center" style={{ background: 'rgba(27,43,75,0.3)' }}>
            <div className="section-label">PIPELINE OVERVIEW</div>
            <h3 className="text-white text-2xl font-bold mb-6">Our Acquisition Strategy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                ['📍', 'Market Focus', 'Essex, Union, Bergen, and Morris counties in NJ'],
                ['🎯', 'Target Properties', 'Distressed single-family and multi-family properties'],
                ['💰', 'Investment Range', '[Investment range — placeholder]'],
              ].map(([icon, title, detail]) => (
                <div key={title as string}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-gold font-semibold text-sm mb-1">{title}</div>
                  <div className="text-white/40 text-xs">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-light text-center">
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Get Early Access to Deals</h2>
          <p className="text-white/50 mb-8">
            Join our investor network and receive first-look opportunities on upcoming acquisitions before they go to the wider market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/investor" className="btn-gold">Investor Partnerships</Link>
            <Link to="/contact" className="btn-outline">Get Notified</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
