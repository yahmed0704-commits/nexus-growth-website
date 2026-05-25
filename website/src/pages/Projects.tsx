import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Maple St.',
    location: 'Maplewood, NJ',
    status: 'Active Renovation',
    type: 'Fix & Flip',
    statusColor: 'bg-gold/20 text-gold',
    details: 'Full interior renovation underway. Kitchen, bathrooms, flooring, and exterior work in progress.',
    budget: '[Budget — placeholder]',
    timeline: '[Timeline — placeholder]',
  },
  {
    name: 'Willow Dr.',
    location: 'South Orange, NJ',
    status: 'Active',
    type: 'Rental Property',
    statusColor: 'bg-gold/20 text-gold',
    details: 'Active rental property. Tenant occupied. Ongoing maintenance and management.',
    budget: '[Budget — placeholder]',
    timeline: 'Ongoing',
  },
  {
    name: 'Riverside Ct.',
    location: 'Bloomfield, NJ',
    status: 'Rented',
    type: 'Multi-Family',
    statusColor: 'bg-green-500/10 text-green-400',
    details: 'Multi-unit property fully tenanted. Managed by Nexus Growth Inc. rental team.',
    budget: '[Budget — placeholder]',
    timeline: 'Ongoing',
  },
];

const completed = [
  { name: '[Property Name]', location: '[Location, NJ]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
  { name: '[Property Name]', location: '[Location, NJ]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
  { name: '[Property Name]', location: '[Location, NJ]', type: 'Rental Setup', year: '[Year]', result: '[Active rental — placeholder]' },
  { name: '[Property Name]', location: '[Location, NJ]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
];

export default function Projects() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR PORTFOLIO</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Current Projects</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Active renovations and managed properties across New Jersey.
          </p>
        </div>
      </section>

      {/* Active */}
      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="section-label mb-2">ACTIVE PROJECTS</div>
          <h2 className="section-title mb-10">In Progress</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projects.map(({ name, location, status, type, statusColor, details, budget, timeline }) => (
              <div key={name} className="rounded-2xl border border-white/10 hover:border-gold/30 overflow-hidden transition-all group" style={{ background: 'rgba(27,43,75,0.3)' }}>
                <div className="h-48 flex items-center justify-center" style={{ background: 'rgba(201,145,42,0.07)' }}>
                  <span className="text-6xl">🏗️</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">{name}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>{status}</span>
                  </div>
                  <div className="text-white/50 text-xs mb-1">📍 {location}</div>
                  <div className="text-gold text-xs font-semibold mb-4">{type}</div>
                  <p className="text-white/40 text-xs leading-relaxed mb-4">{details}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-navy-dark rounded-lg p-2">
                      <div className="text-white/30 mb-0.5">Budget</div>
                      <div className="text-white/60">{budget}</div>
                    </div>
                    <div className="bg-navy-dark rounded-lg p-2">
                      <div className="text-white/30 mb-0.5">Timeline</div>
                      <div className="text-white/60">{timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Completed */}
          <div className="section-label mb-2">COMPLETED PROJECTS</div>
          <h2 className="section-title mb-6">Past Portfolio</h2>
          <div className="bg-gold/5 border border-gold/10 rounded-xl p-4 mb-6 text-xs text-gold">
            ⚠️ Property names and details are placeholders — update with your actual completed projects.
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5" style={{ background: 'rgba(27,43,75,0.5)' }}>
                  <th className="text-left px-4 py-3 text-white/50 font-semibold text-xs">Property</th>
                  <th className="text-left px-4 py-3 text-white/50 font-semibold text-xs">Location</th>
                  <th className="text-left px-4 py-3 text-white/50 font-semibold text-xs">Type</th>
                  <th className="text-left px-4 py-3 text-white/50 font-semibold text-xs">Year</th>
                  <th className="text-left px-4 py-3 text-white/50 font-semibold text-xs">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {completed.map((p, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-navy-light/20 transition-colors">
                    <td className="px-4 py-3 text-white/80 font-medium">{p.name}</td>
                    <td className="px-4 py-3 text-white/50">{p.location}</td>
                    <td className="px-4 py-3 text-gold text-xs">{p.type}</td>
                    <td className="px-4 py-3 text-white/50">{p.year}</td>
                    <td className="px-4 py-3 text-green-400 text-xs">{p.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-light text-center">
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Interested in a Partnership?</h2>
          <p className="text-white/50 mb-8">Join our investor network and gain access to high-quality deal flow across New Jersey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/investor" className="btn-gold">Investor Partnerships</Link>
            <Link to="/upcoming-projects" className="btn-outline">Upcoming Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
