import { useState } from 'react';
import { Link } from 'react-router-dom';

const topics = [
  'General Inquiry',
  'Available Rentals',
  'Investment Partnership',
  'Property Acquisition',
  'Renovation Services',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're a prospective tenant, investor, or partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="section-label">REACH OUT</div>
              <h2 className="text-white text-2xl font-bold mb-6">We're Here to Help</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Have a question about our properties, services, or investment opportunities? Fill out the form or reach out directly — we respond within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'Office', val: 'New Jersey, USA', sub: '[Full address — placeholder]' },
                  { icon: '📧', label: 'Email', val: '[info@nexusgrowthinc.com]', sub: 'Placeholder — update with real email' },
                  { icon: '📞', label: 'Phone', val: '[Phone number — placeholder]', sub: 'Mon–Fri, 9am–5pm ET' },
                  { icon: '💬', label: 'Response Time', val: 'Within 24 hours', sub: 'Typically faster for urgent matters' },
                ].map(({ icon, label, val, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-lg">{icon}</div>
                    <div>
                      <div className="text-gold text-xs font-semibold mb-0.5">{label}</div>
                      <div className="text-white text-sm font-medium">{val}</div>
                      <div className="text-white/30 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-white/30 text-xs mb-4">QUICK LINKS</div>
                <div className="flex flex-col gap-2">
                  <Link to="/rentals" className="text-sm text-white/60 hover:text-gold transition-colors">→ Available Rentals</Link>
                  <Link to="/investor" className="text-sm text-white/60 hover:text-gold transition-colors">→ Investor Partnerships</Link>
                  <Link to="/projects" className="text-sm text-white/60 hover:text-gold transition-colors">→ Current Projects</Link>
                  <Link to="/faq" className="text-sm text-white/60 hover:text-gold transition-colors">→ FAQs</Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="card-dark text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark space-y-5">
                  <h3 className="text-white font-bold text-lg mb-2">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-semibold mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-semibold mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-semibold mb-1.5">Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(000) 000-0000"
                        className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-semibold mb-1.5">Topic *</label>
                      <select
                        required
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors"
                      >
                        <option value="">Select a topic…</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-semibold mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="text-white/30 text-xs">
                    * Required fields. Your information is kept private and never shared.
                  </div>

                  <button type="submit" className="btn-gold w-full text-center">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
