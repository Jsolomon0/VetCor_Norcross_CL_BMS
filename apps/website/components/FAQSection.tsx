import { SITE } from "../lib/siteConfig.ts";

const FAQS = [
  {
    q: "Do you offer 24/7 emergency restoration?",
    a: `Yes. Our emergency line (${SITE.phone.emergency}) is staffed around the clock, 365 days a year. Water damage, mold, fire, and biohazard situations don't follow business hours — and neither do we.`
  },
  {
    q: "How quickly can you respond to a water damage emergency?",
    a: "We aim to respond to emergency calls as rapidly as possible — 24 hours a day, 7 days a week. Call our emergency line and we'll dispatch a crew. Quick response is critical to limiting secondary damage like mold growth."
  },
  {
    q: "Do you handle insurance documentation?",
    a: "Yes. We document all damage thoroughly with photos, moisture readings, itemized scopes, and written reports designed to support your insurance claim. We can coordinate directly with your adjuster throughout the process."
  },
  {
    q: "What should I do immediately after a water damage event?",
    a: `Call our emergency line (${SITE.phone.emergencyDisplay}) right away. While waiting, shut off the water source if safe to do so, avoid walking through standing water, and do not use electrical devices in the affected area. Do not use a household vacuum on standing water.`
  },
  {
    q: "Do you provide mold remediation?",
    a: "Yes. We provide IICRC-certified mold detection, containment, safe removal, and prevention services for residential, commercial, and industrial properties. Mold should be addressed by certified professionals to protect occupant health."
  },
  {
    q: "Do you provide fire and smoke damage cleanup?",
    a: "Yes. We provide emergency stabilization, smoke and soot cleanup, odor elimination, and full structural fire damage restoration. Acting quickly after a fire is critical — smoke and soot continue to damage surfaces the longer they remain."
  },
  {
    q: "Do you provide emergency board-up or roof tarping?",
    a: "Yes. We offer immediate board-up and emergency roof tarping to protect your property from further damage after fire, storm, or structural failure. Securing the structure quickly prevents additional water intrusion and keeps the property safe."
  },
  {
    q: "Do you serve commercial and industrial properties?",
    a: "Yes. We restore residential homes, commercial buildings, and industrial facilities. We have the equipment capacity and crew experience to manage large-scale jobs for property managers, businesses, and facility operators."
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${SITE.coverageShort} and surrounding communities. Call our line to confirm coverage for your specific location.`
  },
  {
    q: "Are you IICRC certified?",
    a: "Yes. VetCor of Norcross holds IICRC (Institute of Inspection Cleaning and Restoration Certification) — the gold standard in the restoration industry. Our team is trained to industry-leading standards on water, mold, and fire restoration."
  },
  {
    q: "What types of properties do you restore?",
    a: "We serve residential homes, commercial businesses, and industrial facilities throughout Norcross, Gwinnett County, and Metro Atlanta. No job is too large or complex."
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
