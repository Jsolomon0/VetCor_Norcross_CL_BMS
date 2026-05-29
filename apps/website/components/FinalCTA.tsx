import { SITE } from "../lib/siteConfig.ts";

export function FinalCTA() {
  return (
    <section className="vc-final-cta" aria-labelledby="final-cta-heading">
      <div className="vc-container">
        <h2 className="vc-final-cta__title" id="final-cta-heading">
          When Disaster Strikes, Call the Vets.
        </h2>
        <p className="vc-final-cta__desc">
          Call {SITE.phone.emergency} for 24/7 emergency restoration in Norcross,
          Gwinnett County, and Metro Atlanta. We&apos;re available around the clock — our IICRC-certified
          team responds fast to stop damage and begin restoration.
        </p>
        <div className="vc-final-cta__actions">
          <a
            href={SITE.phone.emergencyTel}
            className="vc-btn vc-btn--outline-white vc-btn--lg"
            aria-label={`Call emergency line: ${SITE.phone.emergencyDisplay}`}
          >
            ☎ Call {SITE.phone.emergency} Now
          </a>
          <a href="/request" className="vc-btn vc-btn--primary vc-btn--lg">
            Request Emergency Service
          </a>
        </div>
        <p className="vc-final-cta__hours">
          Emergency line: {SITE.hours.emergency} · Office: {SITE.hours.office} · {SITE.phone.office}
        </p>
      </div>
    </section>
  );
}
