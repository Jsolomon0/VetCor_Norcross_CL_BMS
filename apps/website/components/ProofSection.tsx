const TRUST_BADGES = [
  { icon: "📋", title: "IICRC Certified", sub: "Institute of Inspection Cleaning and Restoration Certification" },
  { icon: "⚑", title: "Veteran-Owned", sub: "Founded and operated by U.S. military veterans" },
  { icon: "🏠", title: "All Property Types", sub: "Residential, commercial, and industrial restoration" },
  { icon: "⏱️", title: "24/7 Availability", sub: "Emergency response around the clock, 365 days a year" }
];

export function ProofSection() {
  return (
    <section className="vc-section vc-proof vc-section--alt" aria-labelledby="proof-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">Verified Credentials</span>
        <h2 className="vc-section-title" id="proof-heading">
          Certified, Trusted, Veteran-Owned
        </h2>
        <div className="vc-proof__layout">
          <div className="vc-proof__badges" role="list" aria-label="Credentials and certifications">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.title} className="vc-proof__badge-card" role="listitem">
                <div className="vc-proof__badge-icon" aria-hidden="true">{badge.icon}</div>
                <p className="vc-proof__badge-title">{badge.title}</p>
                <p className="vc-proof__badge-sub">{badge.sub}</p>
              </div>
            ))}
          </div>
          <aside className="vc-proof__review-prompt" aria-label="Google reviews">
            <h3>See What Our Neighbors Are Saying</h3>
            <p>
              Our clients across Norcross, Gwinnett County, and Metro Atlanta share their experiences
              on Google. Search "VetCor of Norcross" to read real reviews from property owners we've
              helped through water damage, mold, fire, and more.
            </p>
            <p>
              Our promise is simple: we don't consider the mission complete until you're 100% satisfied
              with the restoration of your property.
            </p>
            <a
              href="https://www.google.com/maps/search/VetCor+of+Norcross"
              className="vc-btn vc-btn--outline-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View VetCor of Norcross reviews on Google (opens in new tab)"
            >
              View Google Reviews ↗
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
