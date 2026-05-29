const WHY_CARDS = [
  {
    icon: "🎖️",
    title: "Military Discipline & Accountability",
    body: "Founded and operated by veterans who bring the same integrity, discipline, and mission-first mindset to every restoration job — from first call to final walk-through."
  },
  {
    icon: "📋",
    title: "IICRC Certified Technicians",
    body: "Our team holds Institute of Inspection Cleaning and Restoration Certification — the industry gold standard. Every job follows proven, documented restoration protocols."
  },
  {
    icon: "⏱️",
    title: "24/7 Rapid Emergency Response",
    body: "Disasters don't wait for business hours. We're available around the clock to respond, dispatch a crew, and begin mitigation — because time directly affects damage severity."
  },
  {
    icon: "📄",
    title: "Documentation-First Process",
    body: "We photograph, measure, and document every stage of damage and restoration. Thorough records support your insurance claim and protect your property records."
  },
  {
    icon: "🤝",
    title: "Respect for Property & Privacy",
    body: "We treat every home, business, and facility with care and professionalism. Tenants, owners, and facility managers can count on clear communication and clean jobsites."
  },
  {
    icon: "🏢",
    title: "All Property Types & Scales",
    body: "Residential homes, commercial buildings, and industrial facilities — we have the equipment, certifications, and crew capacity for jobs of any size."
  }
];

export function WhyVetCor() {
  return (
    <section className="vc-section vc-why vc-section--alt" aria-labelledby="why-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">Why Choose VetCor</span>
        <h2 className="vc-section-title" id="why-heading">
          Restoration Built on Military Standards
        </h2>
        <p className="vc-section-desc">
          We&apos;re not just another restoration company. We&apos;re veterans who bring the same discipline,
          accountability, and mission-first commitment to every restoration job that we brought to serving
          our country.
        </p>
        <div className="vc-why__grid">
          {WHY_CARDS.map((card) => (
            <div key={card.title} className="vc-why-card">
              <div className="vc-why-card__icon" aria-hidden="true">{card.icon}</div>
              <h3 className="vc-why-card__title">{card.title}</h3>
              <p className="vc-why-card__body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
