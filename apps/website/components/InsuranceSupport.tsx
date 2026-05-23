import { SITE } from "../lib/siteConfig.ts";

const INSURANCE_POINTS = [
  "Complete damage documentation with photos, measurements, and written reports",
  "Coordination with your insurance adjuster throughout the claims process",
  "Itemized scope of work to support accurate claim valuation",
  "Direct billing support — we help minimize out-of-pocket surprises",
  "Experience working with major insurance carriers in the Atlanta area",
  "Moisture readings and industrial equipment logs for claim substantiation"
];

export function InsuranceSupport() {
  return (
    <section className="vc-section vc-insurance" aria-labelledby="insurance-heading">
      <div className="vc-container">
        <div className="vc-insurance__layout">
          <div className="vc-insurance__content">
            <span className="vc-section-eyebrow">Insurance Claims</span>
            <h2 className="vc-section-title" id="insurance-heading">
              We Work With Your Insurance
            </h2>
            <p className="vc-section-desc">
              Navigating an insurance claim on top of a property emergency is overwhelming. Our team
              handles the documentation and coordination so you can focus on your family or business.
            </p>
            <ul className="vc-insurance__points" aria-label="Insurance support services">
              {INSURANCE_POINTS.map((point) => (
                <li key={point} className="vc-insurance__point">{point}</li>
              ))}
            </ul>
          </div>
          <aside className="vc-insurance__cta-box" aria-label="Start your insurance claim">
            <h3>Start Your Claim Process Today</h3>
            <p>
              Call our emergency line and we'll dispatch a crew to document damage immediately.
              Fast documentation means faster claim resolution.
            </p>
            <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency">
              ☎ Call {SITE.phone.emergency}
            </a>
            <a href="/request" className="vc-btn vc-btn--outline-white">
              Submit a Request Online
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
