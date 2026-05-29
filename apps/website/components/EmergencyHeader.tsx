"use client";

import { useState } from "react";
import { SITE } from "../lib/siteConfig.ts";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Referral Program", href: "/#referral" },
  { label: "Contact", href: "/request" }
];

export function EmergencyHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="vc-header" role="banner">
      <div className="vc-container">
        <div className="vc-header__inner">
          <a href="/" className="vc-header__brand" aria-label={`${SITE.name} — home`}>
            <span className="vc-header__name">{SITE.name}</span>
            <span className="vc-header__tagline">{SITE.tagline}</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="vc-header__nav">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="vc-header__actions">
            <a
              href={SITE.phone.emergencyTel}
              className="vc-header__tel-block"
              aria-label={`24/7 Emergency Line: ${SITE.phone.emergencyDisplay}`}
            >
              <span className="vc-header__tel-label">24/7 Emergency Line</span>
              <span className="vc-header__tel-number">{SITE.phone.emergency}</span>
            </a>
            <a href="/request" className="vc-btn vc-btn--emergency vc-btn--sm">
              Request Service
            </a>
          </div>

          <button
            className="vc-header__toggle"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav-drawer"
        className={`vc-header__drawer${open ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="vc-header__drawer-divider" />
        <div className="vc-header__drawer-cta">
          <a href={SITE.phone.emergencyTel} className="vc-btn vc-btn--emergency" onClick={() => setOpen(false)}>
            ☎ Call 24/7 Emergency: {SITE.phone.emergency}
          </a>
          <a href="/request" className="vc-btn vc-btn--outline-white" onClick={() => setOpen(false)}>
            Request Service Online
          </a>
        </div>
      </nav>
    </header>
  );
}
