export function ElegantDark() {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif", background: "#0d1825" }}>
      {/* Nav */}
      <nav style={{ background: "rgba(13,24,37,0.95)", borderBottom: "1px solid rgba(201,145,42,0.2)" }} className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/nexus-logo.jpeg" alt="Nexus Growth Inc." style={{ height: 42, width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain" }} />
          <div style={{ color: "#C9912A", fontSize: 9, letterSpacing: "0.15em", fontWeight: 500 }}>NEXUSGROWTHINC.COM</div>
        </div>
        <div className="flex items-center gap-8">
          {["About", "Projects", "Rentals", "Services", "Investors"].map(item => (
            <span key={item} style={{ color: "#9bb3cc", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9912A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9bb3cc")}>{item}</span>
          ))}
          <button style={{ background: "#C9912A", color: "#0d1825", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer" }}>
            Contact Us
          </button>
        </div>
      </nav>
      <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0d1825 0%, #1B2B4B 50%, #0d1825 100%)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div className="px-16 max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
          <div>
            <h1 style={{ color: "#ffffff", fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Building Tomorrow's <span style={{ color: "#C9912A" }}>Real Estate Legacy</span>
            </h1>
            <p style={{ color: "#7a97b5", fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              Nexus Growth Inc. specializes in transforming properties through quality renovation across New Jersey.
            </p>
            <div className="flex gap-4">
              <button style={{ background: "#C9912A", color: "#0d1825", padding: "14px 28px", borderRadius: 8, fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}>View Our Projects →</button>
              <button style={{ background: "transparent", color: "#ffffff", padding: "14px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>Available Rentals</button>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #1B2B4B, #243d60)", borderRadius: 16, height: 380, border: "1px solid rgba(201,145,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 12 }}>🏗️</div>
              <div style={{ color: "#C9912A", fontWeight: 600, fontSize: 14 }}>Active Renovation</div>
              <div style={{ color: "#7a97b5", fontSize: 12, marginTop: 4 }}>Maple St. — Maplewood, NJ</div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#0d1825", padding: "80px 64px" }}>
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div style={{ color: "#C9912A", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", marginBottom: 12 }}>WHAT THE DL�</div>
          <h2 style={{ color: "#ffffff", fontSize: 38, fontWeight: 800 }}>Our Services</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
          {[
            { icon: "🏠", title: "Fix & Flip", desc: "Strategic acquisitions, full renovations, profitable resale across New." },
            { icon: "🔑", title: "Rental Mgmt", desc: "End-to-end rental management for residential and multi-family properties." },
            { icon: "👷", title: "Construction", desc: "Expert renovation coordination with quality craftsmanship." },
            { icon: "📈", title: "Investment", desc: "Partnering with investors to create high-yield real estate opportunities." },
            { icon: "🏢", title: "Development", desc: "From concept to completion — professional property development." },
            { icon: "🤝", title: "Parinerships", desc: "Joint ventures and partnership opportunities for long-term growth." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "rgba(27,43,75,0.4)", border: "1px solid rgba(201,145,42,0.1)", borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <div style={{ color: "#ffffff", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{title}</div>
              <div style={{ color: "#7a97b5", fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ background: "#080f18", padding: "32px 64px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div style={{ color: "#ffffff", fontWeight: 700 }}>Nexus Growth Inc.</div>
          <div style={{ color: "#7a97b5", fontSize: 12 }}>© 2025 Nexus Growth Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
