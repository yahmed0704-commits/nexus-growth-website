import { Link } from 'react-router-dom';

const units = [
  {
    address: '156 Willow Dr.',
    city: 'Montclair, NJ',
    status: 'Active',
    statusColor: 'bg-green-500/20 text-green-400',
    rent: '$2,650 / mo',
    beds: '3',
    baths: '1.5',
    type: 'Single Family',
    available: 'Currently Leased',
    features: ['In-unit laundry', 'Private parking', 'Updated kitchen', 'Backyard'],
  },
  {
    address: '310 Riverside Ct., Unit 1',
    city: 'Bloomfield, NJ',
    status: 'Ending Soon',
    statusColor: 'bg-yellow-500/20 text-yellow-400',
    rent: '$1,850 / mo',
    beds: '2',
    baths: '1',
    type: 'Multi-Family Unit',
    available: 'Available Soon',
    features: ['On-site parking', 'Updated bathroom', 'Natural light', 'Quiet neighborhood'],
  },
  {
    address: '310 Riverside Ct., Unit 2',
    city: 'Bloomfield, NJ',
    status: 'Vacant',
    statusColor: 'bg-gold/20 text-gold',
    rent: '[Price — placeholder]',
    beds: '2',
    baths: '1',
    type: 'Multi-Family Unit',
    available: 'Available Now',
    features: ['On-site parking', 'Renovated unit', 'New appliances', 'Quiet neighborhood'],
  },
];

export default function Rentals() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">FIND YOUR HOME</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Available Rentals</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Quality rental properties managed directly by Nexus Growth Inc. — no middlemen, just great homes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {units.map(({ address, city, status, statusColor, rent, beds, baths, type, available, features }) => (
              <div key={address} className="rounded-2xl border border-white/10 hover:border-gold/30 transition-all overflow-hidden" style={{ background: 'rgba(27,43,75,0.3)' }}>
                {/* Photo placeholder */}
                <div className="h-48 flex items-center justify-center relative" style={{ background: 'rgba(201,145,42,0.07)' }}>
                  <span className="text-6xl">🏡</span>
                  <div className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>{status}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-1">{address}</h3>
                  <div className="text-white/50 text-xs mb-3">📍 {city}</div>
                  <div className="text-gold font-black text-xl mb-1">{rent}</div>
                  <div className="text-white/30 text-xs mb-4">{available}</div>

                  <div className="flex gap-4 text-xs text-white/60 mb-4">
                    <span>🛏 {beds} bed</span>
                    <span>🚿 {baths} bath</span>
                    <span>🏠 {type}</span>
                  </div>

                  <ul className="space-y-1 mb-5">
                    {features.map((f) => (
                      <li key={f} className="text-xs text-white/40 flex items-center gap-2">
                        <span className="text-gold">✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-all ${
                      status === 'Vacant' || status === 'Ending Soon'
                        ? 'bg-gold text-navy-dark hover:bg-gold-light'
                        : 'bg-white/5 text-white/40 border border-white/10 cursor-default'
                    }`}
                  >
                    {status === 'Active' ? 'Currently Occupied' : 'Inquire About This Unit'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tenant info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-dark">
              <h3 className="text-white font-bold mb-4">Why Rent With NGI?</h3>
              <ul className="space-y-3">
                {[
                  'Professionally managed properties',
                  'Responsive maintenance team',
                  'Fair and transparent lease terms',
                  'Direct communication — no third-party management',
                  'Well-maintained, quality homes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-gold flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark">
              <h3 className="text-white font-bold mb-4">Application Process</h3>
              {['Inquire via contact form or phone', 'Schedule a viewing', 'Submit rental application', 'Background & credit check', 'Lease signing & move-in'].map((step, i) => (
                <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                  <span className="text-sm text-white/60">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-light text-center">
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Interested in a Unit?</h2>
          <p className="text-white/50 mb-8">Reach out and we'll get back to you within 24 hours.</p>
          <Link to="/contact" className="btn-gold">Contact Us About Rentals</Link>
        </div>
      </section>
    </div>
  );
}
