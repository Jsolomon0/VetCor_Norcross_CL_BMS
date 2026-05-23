import { SITE } from "../lib/siteConfig.ts";

export function FinalCTA() {
  return (
    <section className="vc-final-cta" aria-labelledby="final-cta-heading">
      <div className="vc-container">
        <h2 className="vc-final-cta__title" id="final-cta-heading">
          Ready to Get Your Property Restored?
        </h2>
        <p className="vc-final-cta__desc">
          Our IICRC-certified team is standing by 24/7. Don't let damage spread —
          call now or submit a request online and we'll respond promptly.
        </p>
        <div className="vc-final-cta__actions">
          <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--primary vc-btn--lg" aria-label={`Call emergency line: ${SITE.phone.emergencyDisplay}`}>
            ☎ Call {SITE.phone.emergency}
          </a>
          <a href="/request" className="vc-btn vc-btn--outline-white vc-btn--lg">
            Request Service Online
          </a>
        </div>
        <p className="vc-final-cta__hours">
          Emergency line: {SITE.hours.emergency} · Office: {SITE.hours.office} at {SITE.phone.office}
        </p>
      </div>
    </section>
  );
}
