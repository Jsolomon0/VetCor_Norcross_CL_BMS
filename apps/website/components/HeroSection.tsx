import { SITE } from "../lib/siteConfig.ts";

const HERO_BADGES = [
  { icon: "★", label: "Veteran-Owned" },
  { icon: "✔", label: "IICRC Certified" },
  { icon: "◷", label: "24/7 Emergency Response" },
  { icon: "◈", label: "Residential · Commercial · Industrial" },
  { icon: "📄", label: "Insurance Documentation Support" },
  { icon: "📍", label: "Norcross · Gwinnett · Metro Atlanta" }
];

export function HeroSection() {
  return (
    <section className="vc-hero" aria-label="Emergency restoration — hero">
      <div className="vc-container">
        <div className="vc-hero__inner">
          <span className="vc-hero__eyebrow">
            Veteran-Owned &amp; IICRC Certified Emergency Restoration
          </span>
          <h1 className="vc-hero__title">
            24/7 Water Damage Restoration &amp; Emergency Cleanup<br />
            <em>in Norcross, GA</em>
          </h1>
          <p className="vc-hero__desc">
            Veteran-owned and IICRC certified. VetCor of Norcross responds to water damage, mold,
            fire and smoke damage, storm damage, roof tarping, board-up, and biohazard cleanup for
            residential, commercial, and industrial properties across Gwinnett County and Metro Atlanta.
          </p>
          <div className="vc-hero__actions">
            <a
              href={SITE.phone.emergencyTel}
              className="vc-btn vc-btn--emergency vc-btn--lg"
              aria-label={`Call 24/7 emergency line: ${SITE.phone.emergencyDisplay}`}
            >
              ☎ Call {SITE.phone.emergency}
            </a>
            <a href="/request" className="vc-btn vc-btn--outline-white vc-btn--lg">
              Request Emergency Service
            </a>
          </div>
          <ul className="vc-hero__trust-badges" role="list" aria-label="Trust credentials">
            {HERO_BADGES.map((badge) => (
              <li key={badge.label} className="vc-hero__trust-badge">
                <em className="vc-hero__trust-badge-icon" aria-hidden="true">{badge.icon}</em>
                {badge.label}
              </li>
            ))}
          </ul>
          <p className="vc-hero__sub">
            Emergency line available 24/7 · Office: {SITE.hours.office}
          </p>
        </div>
      </div>
    </section>
  );
}
