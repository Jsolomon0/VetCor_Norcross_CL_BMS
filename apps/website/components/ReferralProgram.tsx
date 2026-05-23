import { SITE } from "../lib/siteConfig.ts";

export function ReferralProgram() {
  return (
    <section className="vc-section vc-referral vc-section--dark" aria-labelledby="referral-heading">
      <div className="vc-container">
        <div className="vc-referral__inner">
          <div>
            <span className="vc-section-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>
              Referral Program
            </span>
            <div className="vc-referral__reward" aria-label={`Earn up to ${SITE.referral.reward}`}>
              {SITE.referral.reward}
            </div>
            <p className="vc-referral__label">earned per completed restoration referral</p>
            <h2 className="vc-section-title" id="referral-heading" style={{ marginTop: "16px" }}>
              Know Someone Who Needs Restoration?
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.65", color: "rgba(255,255,255,0.65)", maxWidth: "480px", margin: 0 }}>
              Refer a property owner to VetCor of Norcross and earn up to {SITE.referral.reward} when
              their job is completed. Residential, commercial, and industrial referrals qualify.
              Terms apply.
            </p>
          </div>
          <div className="vc-referral__actions">
            <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency">
              ☎ Call to Refer Now
            </a>
            <a
              href={SITE.referral.url}
              className="vc-btn vc-btn--outline-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View referral program details at ${SITE.referral.urlDisplay} (opens in new tab)`}
            >
              Program Details ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
