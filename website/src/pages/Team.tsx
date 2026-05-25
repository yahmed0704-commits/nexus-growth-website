import { Link } from 'react-router-dom';

const team = [
  {
    name: '[Team Member Name — placeholder]',
    title: 'President & Founder',
    bio: 'Leads Nexus Growth Inc. with a vision for quality-first real estate development and investment across New Jersey. [Additional bio — placeholder]',
    initials: 'P',
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Vice President of Acquisitions',
    bio: 'Oversees all property acquisitions, market analysis, and deal sourcing. Brings deep expertise in NJ real estate markets. [Additional bio — placeholder]',
    initials: 'VP',
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Project Manager',
    bio: 'Manages all active renovation and construction projects. Ensures every project is delivered on time, on budget, and to the highest quality standard. [Additional bio — placeholder]',
    initials: 'PM',
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Rental Operations Manager',
    bio: 'Oversees all rental properties, tenant relations, maintenance coordination, and lease management. [Additional bio — placeholder]',
    initials: 'RM',
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Head of Investor Relations',
    bio: 'Builds and maintains partnerships with investors and financial partners. Manages reporting, deal structuring, and new investment opportunities. [Additional bio — placeholder]',
    initials: 'IR',
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Construction Coordinator',
    bio: 'Coordinates contractors, suppliers, and on-site logistics for all renovation and construction projects across the portfolio. [Additional bio — placeholder]',
    initials: 'CC',
  },
];

export default function Team() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">THE PEOPLE BEHIND NGI</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Team</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experienced real estate professionals committed to delivering quality on every project.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-10 text-center">
            <p className="text-gold text-sm">
              ⚠️ Team member names, photos, and bios are placeholders — please provide your team details to complete this section.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, title, bio, initials }) => (
              <div key={title} className="card-dark text-center group">
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-navy-dark font-black text-xl"
                  style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)' }}
                >
                  {initials}
                </div>
                <h3 className="text-white font-bold mb-1 text-sm">{name}</h3>
                <div className="text-gold text-xs font-semibold tracking-wide mb-3">{title}</div>
                <p className="text-white/40 text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-navy-mid">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">OUR CULTURE</div>
              <h2 className="section-title">A Team Built on Trust</h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-4">
                At Nexus Growth Inc., we believe that great real estate starts with great people. Our team brings together expertise in acquisitions, project management, rental operations, and investor relations.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We foster a culture of accountability, transparency, and continuous improvement — because our clients and partners deserve nothing less than our best.
              </p>
              <Link to="/contact" className="btn-gold text-sm">Work With Our Team →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['🎯', 'Results-driven culture'],
                ['🔍', 'Attention to detail'],
                ['📊', 'Data-informed decisions'],
                ['🌟', 'Client-first approach'],
              ].map(([icon, label]) => (
                <div key={label} className="card-dark text-center py-6">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-white/60 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-dark text-center">
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Join Our Network</h2>
          <p className="text-white/50 mb-8">Contractors, investors, or professionals — we're always open to new partnerships.</p>
          <Link to="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
