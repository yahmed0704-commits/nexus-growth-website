const categories = ['All', 'Kitchen', 'Bathroom', 'Exterior', 'Living Areas', 'Full Renovation'];

const placeholders = [
  { cat: 'Kitchen', label: 'Kitchen Renovation', sub: 'Before & After' },
  { cat: 'Bathroom', label: 'Bathroom Remodel', sub: 'Before & After' },
  { cat: 'Exterior', label: 'Exterior Refresh', sub: 'Before & After' },
  { cat: 'Living Areas', label: 'Living Room Update', sub: 'After' },
  { cat: 'Kitchen', label: 'Modern Kitchen', sub: 'After' },
  { cat: 'Full Renovation', label: 'Full Property Transformation', sub: 'Before & After' },
  { cat: 'Exterior', label: 'Curb Appeal Makeover', sub: 'Before & After' },
  { cat: 'Bathroom', label: 'Master Bath Renovation', sub: 'After' },
  { cat: 'Full Renovation', label: 'Maple St. — Full Reno', sub: 'In Progress' },
];

export default function Gallery() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR WORK</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Before & After Gallery</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See the transformations — from distressed properties to beautiful, quality homes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="bg-gold/5 border border-gold/15 rounded-xl p-4 mb-10 text-center text-xs text-gold">
            ⚠️ Photo gallery is ready for your real before/after photos — please provide images to complete this section.
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  cat === 'All'
                    ? 'bg-gold text-navy-dark'
                    : 'border border-white/10 text-white/50 hover:border-gold/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map(({ cat, label, sub }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all group cursor-pointer">
                {/* Image placeholder */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ height: 220, background: `linear-gradient(135deg, rgba(27,43,75,${0.4 + (i % 3) * 0.2}), rgba(36,61,96,${0.6 + (i % 2) * 0.2}))` }}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">
                      {cat === 'Kitchen' ? '🍳' : cat === 'Bathroom' ? '🚿' : cat === 'Exterior' ? '🏠' : cat === 'Living Areas' ? '🛋️' : '✨'}
                    </div>
                    <div className="text-white/30 text-xs">[ Photo placeholder ]</div>
                  </div>
                  <div className="absolute top-3 left-3 bg-navy-dark/80 text-gold text-xs font-semibold px-2.5 py-1 rounded-full">{cat}</div>
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all" />
                </div>
                <div className="p-4" style={{ background: 'rgba(27,43,75,0.3)' }}>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to submit photos */}
          <div className="mt-16 text-center rounded-2xl border border-gold/15 p-10" style={{ background: 'rgba(201,145,42,0.05)' }}>
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-white font-bold text-xl mb-3">Your Transformation Photos Go Here</h3>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
              Send us your before/after photos and we'll showcase your renovation stories in this gallery. Each project tells a powerful story of transformation.
            </p>
            <a href="/contact" className="btn-gold text-sm">Submit Your Photos</a>
          </div>
        </div>
      </section>
    </div>
  );
}
