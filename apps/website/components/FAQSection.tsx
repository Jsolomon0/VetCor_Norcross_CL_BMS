import { SITE } from "../lib/siteConfig.ts";

const FAQS = [
  {
    q: "How quickly can you respond to a water damage emergency?",
    a: "We aim to respond to emergency calls as rapidly as possible — 24 hours a day, 7 days a week. Call our emergency line and we'll dispatch a crew. Quick response is critical to limiting secondary damage like mold growth."
  },
  {
    q: "Do you work directly with insurance companies?",
    a: "Yes. We document all damage thoroughly with photos, moisture readings, and written reports designed to support your insurance claim. We can coordinate directly with your adjuster throughout the process."
  },
  {
    q: "What types of properties do you restore?",
    a: "We serve residential homes, commercial businesses, and industrial facilities throughout Norcross, Gwinnett County, and Metro Atlanta. No job is too large or too complex."
  },
  {
    q: "Are your technicians certified?",
    a: "Yes. VetCor of Norcross holds IICRC (Institute of Inspection Cleaning and Restoration Certification) — the gold standard in the restoration industry. Our team is trained to industry-leading standards."
  },
  {
    q: "What should I do immediately after a water damage event?",
    a: `Call our emergency line (${SITE.phone.emergencyDisplay}) right away. While waiting, shut off the water source if safe to do so, avoid walking through standing water, and do not use electrical devices in the affected area. Do not use a household vacuum on standing water.`
  },
  {
    q: "Do you handle mold remediation?",
    a: "Yes. We provide IICRC-certified mold detection, containment, safe removal, and prevention services for residential, commercial, and industrial properties."
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${SITE.coverageShort} and surrounding communities. Call our line to confirm coverage for your specific location.`
  },
  {
    q: "Is there a cost to call for an emergency assessment?",
    a: "Call us anytime — we'll discuss your situation and help you understand your next steps. Assessment and documentation details are discussed during the initial call."
  }
];

export function FAQSection() {
  return (
    <section className="vc-section vc-faq vc-section--alt" aria-labelledby="faq-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">Common Questions</span>
        <h2 className="vc-section-title" id="faq-heading">
          Frequently Asked Questions
        </h2>
        <div className="vc-faq__list">
          {FAQS.map((faq) => (
            <details key={faq.q}>
              <summary aria-expanded="false">{faq.q}</summary>
              <div className="vc-faq__answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
