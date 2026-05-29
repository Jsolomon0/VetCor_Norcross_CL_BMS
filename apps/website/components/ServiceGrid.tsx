import { SERVICES } from "../lib/siteConfig.ts";

export function ServiceGrid() {
  return (
    <section id="services" className="vc-section vc-services" aria-labelledby="services-heading">
      <div className="vc-container">
        <span className="vc-section-eyebrow">What We Do</span>
        <h2 className="vc-section-title" id="services-heading">
          Full-Spectrum Restoration Services
        </h2>
        <p className="vc-section-desc">
          From emergency water extraction to complete structural restoration — we handle every stage of
          damage recovery for residential, commercial, and industrial properties.
        </p>
        <div className="vc-services__grid" role="list">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className={`vc-service-card${service.urgent ? " vc-service-card--urgent" : ""}`}
              role="listitem"
              aria-label={service.name}
            >
              <div className="vc-service-card__icon" aria-hidden="true">{service.icon}</div>
              <h3 className="vc-service-card__name">{service.name}</h3>
              <p className="vc-service-card__desc">{service.description}</p>
              <span className="vc-service-card__cta" aria-hidden="true">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
