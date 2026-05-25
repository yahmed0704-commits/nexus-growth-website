import { useState } from 'react';

type FAQItem = { q: string; a: string };

const faqs: { category: string; items: FAQItem[] }[] = [
  {
    category: 'General',
    items: [
      { q: 'What does Nexus Growth Inc. do?', a: "Nexus Growth Inc. is a New Jersey-based real estate investment and development company. We specialize in fix-and-flip renovations, rental property management, and investor partnerships. Our mission is to transform undervalued properties into quality homes and investments." },
      { q: 'Where does NGI operate?', a: "We primarily operate across Essex, Union, Bergen, and Morris counties in New Jersey. Our local expertise allows us to identify high-potential properties and deliver results efficiently." },
      { q: 'How long has NGI been in business?', a: "[Company founding details — placeholder. Please add your actual founding year and background.]" },
    ],
  },
  {
    category: 'Rentals',
    items: [
      { q: 'How do I apply for a rental?', a: "Start by submitting an inquiry through our Contact page or calling us directly. We'll schedule a viewing, walk you through the application, and conduct a background and credit check. The full process typically takes 3–5 business days." },
      { q: 'What are your rental application requirements?', a: "Standard requirements include: proof of income (2x monthly rent), photo ID, rental history or references, and authorization for background/credit check. Requirements may vary by property." },
      { q: 'How is maintenance handled?', a: "All maintenance requests go directly to our team. We typically respond within 24 hours for non-emergency issues and immediately for emergencies. Our goal is fast, professional resolution every time." },
      { q: 'What utilities are included in rent?', a: "[Utility details vary by unit — placeholder. Please specify per-property details.]" },
    ],
  },
  {
    category: 'Investors',
    items: [
      { q: 'How can I invest with Nexus Growth Inc.?', a: "Reach out via our Investor Partnerships page or contact us directly. We'll schedule an introductory call to understand your investment goals, risk tolerance, and timeline — then match you with the right opportunity." },
      { q: 'What types of investment structures do you offer?', a: "We offer joint venture partnerships, preferred equity structures, and project sponsorships. Each is tailored to the investor's goals and the specific deal." },
      { q: 'Do I need to be an accredited investor?', a: "[Accreditation requirements — placeholder. Consult your legal advisor and specify based on your offering structure.]" },
      { q: 'What is the minimum investment amount?', a: "[Minimum investment — placeholder. Please specify based on your current offerings and legal structure.]" },
      { q: 'How often do I receive updates on my investment?', a: "We provide regular updates at milestones and monthly or quarterly financial reporting depending on the investment structure. Transparency is a core value at NGI." },
    ],
  },
  {
    category: 'Projects & Construction',
    items: [
      { q: 'How long does a typical renovation take?', a: "Project timelines vary based on scope. A standard fix-and-flip renovation typically takes 3–6 months from acquisition to listing. We provide detailed timelines at the start of every project." },
      { q: 'Do you work with outside contractors?', a: "Yes. We maintain relationships with trusted, licensed contractors across NJ. All work is coordinated, supervised, and quality-checked by our project management team." },
      { q: 'Can I hire NGI to renovate my property?', a: "This depends on current capacity and project fit. Contact us to discuss your renovation needs and we'll let you know if and how we can help." },
    ],
  },
];

function FAQItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/5 rounded-xl overflow-hidden transition-all hover:border-gold/20"
      style={{ background: open ? 'rgba(27,43,75,0.4)' : 'rgba(17,30,44,0.5)' }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-white font-medium text-sm pr-4">{q}</span>
        <span className={`text-gold transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">ANSWERS</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Common questions about our services, rental process, and investment opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-dark">
        <div className="container-site max-w-3xl mx-auto">
          {faqs.map(({ category, items }) => (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="section-label mb-0">{category}</div>
                <div className="flex-1 h-px bg-gold/10" />
              </div>
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <FAQItem key={item.q} {...item} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center rounded-2xl border border-gold/15 p-8" style={{ background: 'rgba(201,145,42,0.05)' }}>
            <h3 className="text-white font-bold text-xl mb-3">Still Have Questions?</h3>
            <p className="text-white/50 text-sm mb-6">We're happy to help. Reach out and we'll get back to you within 24 hours.</p>
            <a href="/contact" className="btn-gold text-sm">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
