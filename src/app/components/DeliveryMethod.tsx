import { Reveal } from "../lib/scroll";

const steps = [
  { n: "01", title: "Business Understanding",  desc: "Deep-dive into operational context, pain points, strategic goals, and KPIs. A business diagnosis, not a requirements meeting. Output: Problem Statement Document." },
  { n: "02", title: "Requirement Gathering",   desc: "Technical discovery mapping all data sources, stakeholder needs, integration requirements, security constraints, and compliance obligations. Output: Technical Requirements Specification." },
  { n: "03", title: "Concept & Confirmation",  desc: "Presentation of proposed solution architecture, technology choices, and visualisation mockups. Client reviews and confirms direction. Output: Confirmed Solution Design." },
  { n: "04", title: "Quotation & Scope",       desc: "Formal commercial proposal with transparent scope, deliverables, timeline, and pricing. Fixed-scope or retainer. Milestone-based payments. Output: Commercial Agreement." },
  { n: "05", title: "Development & Testing",   desc: "Rapid iterative build using agile sprints (1–2 week cycles). 100% QA coverage, data integrity validation, stakeholder reviews, and weekly demos. Output: Production-Ready Deliverable." },
  { n: "06", title: "Support & Optimisation",  desc: "Post-launch maintenance, monitoring, and continuous improvement. Bug fixes, performance tuning, user training. SLA: 24h critical, 48h standard. Output: Ongoing Service Agreement." },
];

export function DeliveryMethod({ accentColor = "#64B5F6" }: { accentColor?: string }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="text-center mb-14">
            <span className="section-eyebrow" style={{ color: accentColor, borderColor: `${accentColor}33`, background: `${accentColor}10` }}>
              How We Deliver
            </span>
            <h2 className="section-h2 mt-3" style={{ color: "#1a2e5a", fontWeight: 700 }}>
              The ANTUTIVE Delivery Method
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-lg mx-auto">
              A 6-step method that replaces generic pricing pages with a trust-building delivery flow.
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
