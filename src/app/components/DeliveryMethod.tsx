import { Reveal } from "../lib/scroll";

const steps = [
  { n: "01", title: "Business Understanding",  desc: "Deep-dive into your product requirements, business goals, target users, and success metrics. A product discovery session, not a generic requirements meeting. Output: Problem Statement Document." },
  { n: "02", title: "Requirement Gathering",   desc: "Technical discovery covering all features, integrations, data models, non-functional requirements, and compliance obligations. Output: Product Requirements Specification." },
  { n: "03", title: "Concept & Confirmation",  desc: "UX wireframes, technical architecture, and product approach presented for review. Client approves direction before engineering begins. Output: Confirmed Product Design." },
  { n: "04", title: "Quotation & Scope",       desc: "Fixed-scope commercial proposal with transparent deliverables, timeline, and pricing. Milestone-based payments. Output: Commercial Agreement." },
  { n: "05", title: "Development & Testing",   desc: "Agile sprint-based build (1–2 week cycles). 100% QA coverage, stakeholder demos every sprint, acceptance testing against requirements. Output: Production-Ready Product." },
  { n: "06", title: "Support & Handover",      desc: "Full IP transfer, production deployment, technical documentation, and post-launch support. Bug fixes, performance monitoring, client team training. SLA: 24h critical, 48h standard. Output: Delivered Product + Support Agreement." },
];

export function DeliveryMethod({ accentColor = "#1CB7B4" }: { accentColor?: string }) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
      <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="text-center mb-14">
            <span className="section-eyebrow-light" style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
              How We Deliver
            </span>
            <h2 className="section-h2 mt-3" style={{ color: "white", fontWeight: 700 }}>
              The ANTUTIVE Delivery Method
            </h2>
            <p className="text-sm text-white/45 mt-3 max-w-lg mx-auto">
              A 6-step process that turns your requirements into a production-ready product — with full transparency and no surprises.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <Reveal key={i} variant={i % 2 === 0 ? "scale" : "up"} delay={i * 75}>
              <div className="process-card h-full">
                <span className="process-num" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)` }}>
                  {s.n}
                </span>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
