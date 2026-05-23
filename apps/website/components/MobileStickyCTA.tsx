import { SITE } from "../lib/siteConfig.ts";

export function MobileStickyCTA() {
  return (
    <div className="vc-mobile-cta" role="region" aria-label="Quick contact — mobile">
      <a href={SITE.phone.emergencyTel} className="vc-mobile-cta__call" aria-label={`Call emergency line: ${SITE.phone.emergencyDisplay}`}>
        ☎ Call Now
      </a>
      <a href="/request" className="vc-mobile-cta__request">
        Request Service
      </a>
    </div>
  );
}
