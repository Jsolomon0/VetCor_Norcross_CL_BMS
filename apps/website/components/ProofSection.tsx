const TRUST_BADGES = [
  { icon: "📋", title: "IICRC Certified", sub: "Institute of Inspection Cleaning and Restoration Certification" },
  { icon: "⚑", title: "Veteran-Owned", sub: "Founded and operated by U.S. military veterans" },
  { icon: "🏠", title: "All Property Types", sub: "Residential, commercial, and industrial restoration" },
  { icon: "⏱️", title: "24/7 Availability", sub: "Emergency response around the clock, 365 days a year" }
];

const REVIEW_PLACEHOLDERS = [
  {
    stars: "★★★★★",
    text: 'Customer review placeholder — real testimonials will appear here. Search "VetCor of Norcross" on Google to read and leave reviews from property owners we\'ve served.',
    author: "Norcross, GA Resident",
    note: "Placeholder — add real customer review"
  },
  {
    stars: "★★★★★",
    text: "Customer review placeholder — real testimonials will appear here. We are committed to earning five-star results on every restoration job.",
    author: "Gwinnett County Property Owner",
    note: "Placeholder — add real customer review"
  },
  {
    stars: "★★★★★",
    text: 'Customer review placeholder — real testimonials will appear here. Commercial and residential customers across Metro Atlanta share their experience on Google.',
    author: "Metro Atlanta Commercial Client",
    note: "Placeholder — add real customer review"
  }
];

export function ProofSection() {
  return (
    <section className="vc-section vc-proof vc-section--alt" aria-labelledby="proof-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">Verified Credentials &amp; Customer Proof</span>
        <h2 className="vc-section-title" id="proof-heading">
          Certified, Trusted, Veteran-Owned
        </h2>

        <div className="vc-proof__testimonials" role="list" aria-label="Customer testimonials">
          {REVIEW_PLACEHOLDERS.map((review, i) => (
            <article key={i} className="vc-proof__testimonial-card" role="listitem">
              <div className="vc-proof__stars" aria-label="5 stars">{review.stars}</div>
              <p className="vc-proof__testimonial-text">&ldquo;{review.text}&rdquo;</p>
              <p className="vc-proof__testimonial-author">— {review.author}</p>
              <p className="vc-proof__testimonial-note">{review.note}</p>
            </article>
          ))}
        </div>

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
              on Google. Search &ldquo;VetCor of Norcross&rdquo; to read real reviews from property owners
              we&apos;ve helped through water damage, mold, fire, and more.
            </p>
            <p>
              Our promise: we don&apos;t consider the mission complete until your property is fully
              restored and you&apos;re satisfied with the result.
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
