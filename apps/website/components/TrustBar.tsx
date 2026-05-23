import { Fragment } from "react";

const TRUST_ITEMS = [
  { icon: "★", label: "IICRC Certified" },
  { icon: "⚑", label: "Veteran-Owned Business" },
  { icon: "◷", label: "24/7 Emergency Response" },
  { icon: "✔", label: "Licensed & Insured" },
  { icon: "◈", label: "Residential · Commercial · Industrial" }
];

export function TrustBar() {
  return (
    <div className="vc-trust-bar" role="region" aria-label="Credentials and service highlights">
      <div className="vc-container">
        <ul className="vc-trust-bar__items" role="list">
          {TRUST_ITEMS.map((item, i) => (
            <Fragment key={item.label}>
              <li className="vc-trust-item">
                <span className="vc-trust-item__icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </li>
              {i < TRUST_ITEMS.length - 1 && (
                <li className="vc-trust-divider" role="separator" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
