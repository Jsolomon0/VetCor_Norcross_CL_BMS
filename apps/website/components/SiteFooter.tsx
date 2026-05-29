import { SERVICES, SITE } from "../lib/siteConfig.ts";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Referral Program", href: "/#referral" },
  { label: "Request Service", href: "/request" },
  { label: "Careers", href: "/careers" }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="vc-footer" role="contentinfo" aria-label="Site footer">
      <div className="vc-container">
        <div className="vc-footer__grid">
          <div className="vc-footer__col">
            <p className="vc-footer__brand-name">{SITE.name}</p>
            <p className="vc-footer__brand-tagline">{SITE.tagline}</p>
            <p className="vc-footer__brand-desc">
              Veteran-owned and IICRC-certified emergency restoration serving Norcross,
              Gwinnett County, and Metro Atlanta — 24 hours a day, 7 days a week.
            </p>
            <div className="vc-footer__certifications">
              {SITE.certifications.map((cert) => (
                <span key={cert} className="vc-footer__cert-badge">{cert}</span>
              ))}
            </div>
          </div>

          <div className="vc-footer__col">
            <p className="vc-footer__col-title">Services</p>
            <ul>
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href={service.href}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="vc-footer__col">
            <p className="vc-footer__col-title">Navigation</p>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="vc-footer__col">
            <p className="vc-footer__col-title">Contact</p>
            <div className="vc-footer__contact-item">
              <span className="vc-footer__contact-label">Emergency Line</span>
              <a href={SITE.phone.emergencyTel} className="vc-footer__contact-value">
                {SITE.phone.emergencyDisplay}
              </a>
            </div>
            <div className="vc-footer__contact-item">
              <span className="vc-footer__contact-label">Office</span>
              <a href={SITE.phone.officeTel} className="vc-footer__contact-value">
                {SITE.phone.office}
              </a>
            </div>
            <div className="vc-footer__contact-item">
              <span className="vc-footer__contact-label">Email</span>
              <a href={`mailto:${SITE.email}`} className="vc-footer__contact-value">
                {SITE.email}
              </a>
            </div>
            <div className="vc-footer__contact-item">
              <span className="vc-footer__contact-label">Address</span>
              <address style={{ fontStyle: "normal" }}>
                <span className="vc-footer__contact-value">{SITE.address.street}</span>
                <br />
                <span className="vc-footer__contact-value">{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
              </address>
            </div>
            <div className="vc-footer__contact-item">
              <span className="vc-footer__contact-label">Office Hours</span>
              <span className="vc-footer__contact-value">{SITE.hours.office}</span>
            </div>
          </div>
        </div>

        <div className="vc-footer__bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Veteran-Owned · IICRC Certified · Serving {SITE.coverageShort}</span>
        </div>
      </div>
    </footer>
  );
}
