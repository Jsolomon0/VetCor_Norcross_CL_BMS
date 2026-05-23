import { SITE } from "../lib/siteConfig.ts";

const STEPS = [
  {
    title: "Call Us — Day or Night",
    desc: "Reach our 24/7 emergency line. A live specialist will gather initial details and dispatch the right crew immediately."
  },
  {
    title: "Rapid On-Site Assessment",
    desc: "Our IICRC-certified technicians arrive and conduct a full damage assessment, document findings, and create a mitigation plan."
  },
  {
    title: "Immediate Mitigation Begins",
    desc: "We stop further damage right away — water extraction, containment, board-up, tarping, or whatever the situation requires."
  },
  {
    title: "Insurance Documentation",
    desc: "We photograph, measure, and document all damage to support your insurance claim and coordinate directly with your adjuster."
  },
  {
    title: "Full Restoration & Cleanup",
    desc: "Structural drying, remediation, repairs, and final cleanup — completed to the highest IICRC standards and your satisfaction."
  }
];

export function EmergencyProcess() {
  return (
    <section className="vc-section vc-process vc-section--navy" aria-labelledby="process-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">How We Respond</span>
        <h2 className="vc-section-title" id="process-heading">
          From First Call to Full Restoration
        </h2>
        <p className="vc-section-desc">
          Our structured response process ensures nothing is missed — from the moment you call to the day
          your property is fully restored.
        </p>
        <ol className="vc-process__steps" aria-label="Emergency response steps">
          {STEPS.map((step) => (
            <li key={step.title} className="vc-process__step">
              <h3 className="vc-process__step-title">{step.title}</h3>
              <p className="vc-process__step-desc">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div style={{ marginTop: "40px" }}>
          <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency vc-btn--lg">
            ☎ Start the Process — Call {SITE.phone.emergency}
          </a>
        </div>
      </div>
    </section>
  );
}
