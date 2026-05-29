import { SITE } from "../lib/siteConfig.ts";

export function ServiceArea() {
  return (
    <section id="service-areas" className="vc-section vc-service-area" aria-labelledby="area-heading">
      <div className="vc-container">
        <div className="vc-service-area__layout">
          <div>
            <span className="vc-section-eyebrow">Coverage Area</span>
            <h2 className="vc-section-title" id="area-heading">
              Serving Norcross, Gwinnett County &amp; Metro Atlanta
            </h2>
            <p className="vc-section-desc">
              We respond to emergencies across the greater Norcross area and surrounding communities.
              When you need restoration fast, we're close and ready.
            </p>
            <ul className="vc-area-chips" role="list" aria-label="Service areas">
              {SITE.serviceAreas.map((area) => (
                <li key={area} className="vc-area-chip" role="listitem">{area}</li>
              ))}
            </ul>
          </div>
          <aside className="vc-service-area__cta" aria-label="Contact for service in your area">
            <h3>Not Sure If We Cover Your Area?</h3>
            <p>
              Call our emergency line and we'll confirm coverage immediately. We serve a wide
              geographic area and may be able to dispatch to your location.
            </p>
            <address style={{ fontStyle: "normal" }}>
              <strong style={{ color: "white", fontSize: "0.9rem" }}>{SITE.address.full}</strong>
            </address>
            <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency">
              ☎ Call {SITE.phone.emergency}
            </a>
            <a href="/request" className="vc-btn vc-btn--outline-white">
              Request Service Online
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
