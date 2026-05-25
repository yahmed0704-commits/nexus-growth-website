export function CleanLight() {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9fc" }}>
      {/* Nav */}
      <nav style={{ background: "#ffffff", borderBottom: "1px solid #e8edf3", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "0 48px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="flex items-center gap-3">
          <img src="/nexus-logo.jpeg" alt="Nexus Growth Inc." style={{ height: 44, width: "auto", objectFit: "contain" }} />
          <div style={{ color: "#C9912A", fontSize: 9, letterSpacing: "0.12em", fontWeight: 600 }}>NEXUSGROWTHINC.COM</div>
        </div>
        <div className="flex items-center gap-8">
          {["About", "Projects", "Rentals", "Services", "Investors"].map(item => (
            <span key={item} style={{ color: "#4a5568", fontSize: 14, fontWeight: 500, cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1B2B4B")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a5568")}>{item}</span>
          ))}
          <button style={{ background: "#1B2B4B", color: "#ffffff", padding: "9px 22px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}>
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 64, background: "#ffffff", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-6xl mx-auto px-12 w-full grid grid-cols-2 gap-16 items-center" style={{ padding: "80px 48px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fdf3e7", border: "1px solid #f5d9a0", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9912A" }} />
              <span style={{ color: "#C9912A", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}>NEW JERSEY REAL ESTATE</span>
            </div>
            <h1 style={{ color: "#1B2B4B", fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>
              We Believe
            </h1>
            <h1 style={{ color: "#C9912A", fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
              in Quality.
            </h1>
            <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              Nexus Growth Inc. is a premier real estate investment and development company — transforming properties, building communities, and delivering results across New Jersey.
            </p>
            <div className="flex gap-4 mb-12">
              <button style={{ background: "#1B2B4B", color: "#ffffff", padding: "14px 28px", borderRadius: 8, fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}>
                View Our Projects →
              </button>
              <button style={{ background: "#ffffff", color: "#1B2B4B", padding: "14px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "2px solid #e2e8f0", cursor: "pointer" }}>
                Available Rentals
              </button>
            </div>
            <div className="flex gap-10">
              {[{ n: "12+", l: "Projects" }, { n: "$5M+", l: "Portfolio" }, { n: "3", l: "Active Now" }].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ color: "#1B2B4B", fontWeight: 800, fontSize: 26 }}>{n}</div>
                  <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg, #1B2B4B, #243d60)", borderRadius: 20, overflow: "hidden", height: 420, boxShadow: "0 32px 64px rgba(27,43,75,0.2)" }}>
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 56 }}>🏘️</div>
                <div style={{ color: "#C9912A", fontWeight: 700, fontSize: 15 }}>Maple St. — Maplewood</div>
                <div style={{ background: "rgba(201,145,42,0.2)", color: "#C9912A", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600 }}>ACTIVE RENOVATION</div>
              </div>
            </div>
            <div style={{ position: "absolute", top: 24, right: -24, background: "#C9912A", borderRadius: 12, padding: "14px 18px", boxShadow: "0 12px 32px rgba(201,145,42,0.4)" }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: 22 }}>100%</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 10, fontWeight: 600 }}>Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#f8f9fc", padding: "80px 48px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#C9912A", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 8 }}>WHAT WE OFFER</div>
              <h2 style={{ color: "#1B2B4B", fontSize: 38, fontWeight: 800 }}>Our Services</h2>
            </div>
            <span style={{ color: "#C9912A", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>View All →</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "Fix & Flip", desc: "Acquiring, renovating, and reselling properties for maximum value creation in NJ markets." },
              { icon: "🔑", title: "Rental Management", desc: "Full-service property management for all residential and multi-family rental portfolios." },
              { icon: "👷", title: "Renovation & Construction", desc: "Expert project coordination delivering quality craftsmanship on time and on budget." },
              { icon: "📈", title: "Real Estate Investment", desc: "Creating high-yield investment opportunities for partners and stakeholders." },
              { icon: "🏢", title: "Property Development", desc: "Strategic development from land to livable — adding lasting value to communities." },
              { icon: "🤝", title: "Investor Partnerships", desc: "Joint ventures and partnership structures built for mutual long-term growth." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: 14, padding: 28, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9912A"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(27,43,75,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8edf3"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 48, height: 48, background: "#fdf3e7", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{icon}</div>
                <div style={{ color: "#1B2B4B", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{title}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section style={{ background: "#1B2B4B", padding: "80px 48px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div style={{ color: "#C9912A", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 8 }}>PORTFOLIO</div>
            <h2 style={{ color: "#ffffff", fontSize: 38, fontWeight: 800, marginBottom: 12 }}>Current Projects</h2>
            <p style={{ color: "#9bb3cc", fontSize: 15 }}>Transforming properties across New Jersey</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "Maple St.", location: "Maplewood, NJ", status: "Active", type: "Fix & Flip", icon: "🏗️" },
              { name: "Willow Dr.", location: "South Orange, NJ", status: "Active", type: "Rental", icon: "🏡" },
              { name: "Riverside Ct.", location: "Bloomfield, NJ", status: "Rented", type: "Multi-Family", icon: "🏢" },
            ].map(({ name, location, status, type, icon }) => (
              <div key={name} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ background: "rgba(201,145,42,0.1)", height: 160, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>{icon}</div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: "#ffffff", fontWeight: 700, fontSize: 16 }}>{name}</div>
                    <div style={{ background: status === "Active" ? "rgba(201,145,42,0.2)" : "rgba(34,197,94,0.15)", color: status === "Active" ? "#C9912A" : "#4ade80", padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{status}</div>
                  </div>
                  <div style={{ color: "#9bb3cc", fontSize: 13 }}>{location}</div>
                  <div style={{ color: "#C9912A", fontSize: 11, fontWeight: 600, marginTop: 8 }}>{type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#ffffff", padding: "80px 48px", textAlign: "center" }}>
        <div className="max-w-xl mx-auto">
          <h2 style={{ color: "#1B2B4B", fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Let's Build Together</h2>
          <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Investors, partners, tenants — we'd love to hear from you. Contact us today and let's create something lasting.
          </p>
          <div className="flex justify-center gap-4">
            <button style={{ background: "#C9912A", color: "#ffffff", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer" }}>
              Contact Us Today
            </button>
            <button style={{ background: "#f8f9fc", color: "#1B2B4B", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, border: "2px solid #e2e8f0", cursor: "pointer" }}>
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1B2B4B", padding: "28px 48px" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div style={{ color: "#ffffff", fontWeight: 700 }}>Nexus Growth Inc.</div>
            <div style={{ color: "#9bb3cc", fontSize: 12, marginTop: 2 }}>nexusgrowthinc.com · We Believe in Quality</div>
          </div>
          <div style={{ color: "#9bb3cc", fontSize: 12 }}>© 2025 Nexus Growth Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
