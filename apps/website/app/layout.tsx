import type { PropsWithChildren } from "react";
import "./globals.css";
import { SITE } from "../lib/siteConfig.ts";

export const metadata = {
  title: SITE.seo.title,
  description: SITE.seo.description,
  metadataBase: new URL(SITE.seo.siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.seo.title,
    description: SITE.seo.description,
    url: SITE.seo.siteUrl,
    siteName: SITE.name,
    locale: "en_US",
    type: "website"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: SITE.name,
  description: SITE.seo.description,
  url: SITE.seo.siteUrl,
  telephone: SITE.phone.office,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.9413,
    longitude: -84.2135
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Restoration Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mold Remediation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire & Smoke Damage Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biohazard & Trauma Cleanup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Board-Up" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Tarping" } }
    ]
  },
  areaServed: SITE.serviceAreas.map((area) => ({
    "@type": "City",
    name: area
  })),
  slogan: SITE.tagline,
  knowsAbout: ["Water Damage Restoration", "Mold Remediation", "Fire Damage Restoration", "IICRC Certification"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to a water damage emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We aim to respond to emergency calls as rapidly as possible — 24 hours a day, 7 days a week. Call our emergency line and we'll dispatch a crew. Quick response is critical to limiting secondary damage like mold growth."
      }
    },
    {
      "@type": "Question",
      name: "Do you work directly with insurance companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We document all damage thoroughly with photos, moisture readings, and written reports designed to support your insurance claim. We can coordinate directly with your adjuster throughout the process."
      }
    },
    {
      "@type": "Question",
      name: "Are your technicians certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VetCor of Norcross holds IICRC (Institute of Inspection Cleaning and Restoration Certification) — the gold standard in the restoration industry."
      }
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We serve ${SITE.serviceAreas.join(", ")} and surrounding communities.`
      }
    }
  ]
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="vc-skip-link">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
