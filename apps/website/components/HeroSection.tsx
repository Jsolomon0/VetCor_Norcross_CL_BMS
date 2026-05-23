import { SITE } from "../lib/siteConfig.ts";

export function HeroSection() {
  return (
    <section className="vc-hero" aria-label="Emergency restoration — hero">
      <div className="vc-container">
        <div className="vc-hero__inner">
          <span className="vc-hero__eyebrow">
            Veteran-Owned · IICRC Certified · {SITE.primaryArea}
          </span>
          <h1 className="vc-hero__title">
            When Disaster Strikes,<br />
            <em>Call the Vets.</em>
          </h1>
          <p className="vc-hero__desc">
            VetCor of Norcross provides 24/7 emergency water damage restoration, mold remediation,
            fire and smoke cleanup, biohazard remediation, and more — across Norcross, Gwinnett County,
            and Metro Atlanta. We complete the mission, every time.
          </p>
          <div className="vc-hero__actions">
            <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency vc-btn--lg" aria-label={`Call emergency line: ${SITE.phone.emergencyDisplay}`}>
              ☎ Call {SITE.phone.emergency}
            </a>
            <a href="/request" className="vc-btn vc-btn--outline-white vc-btn--lg">
              Request Service Online
            </a>
          </div>
          <p className="vc-hero__sub">
            Emergency line available 24/7 · Office hours: {SITE.hours.office}
          </p>
        </div>
      </div>
    </section>
  );
}
