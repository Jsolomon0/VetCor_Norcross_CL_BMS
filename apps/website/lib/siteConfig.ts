// Central source of truth for all business-critical data.
// Never duplicate phone numbers, addresses, or service lists elsewhere.

export const SITE = {
  name: "VetCor of Norcross",
  tagline: "Tell 'Em You Want the Vets!",
  phone: {
    emergency: "1-844-VETCOR1",
    emergencyTel: "tel:18448382671",
    emergencyDisplay: "1-844-VETCOR1 (838-2671)",
    office: "(770) 455-2343",
    officeTel: "tel:7704552343"
  },
  // TODO: Replace with a branded domain email — recommended: dispatch@vetcornorcross.com
  email: "Vetcornorcross@gmail.com",
  address: {
    street: "1394 Indian Trail Lilburn Rd, Suite 100",
    city: "Norcross",
    state: "GA",
    zip: "30093",
    full: "1394 Indian Trail Lilburn Rd, Suite 100, Norcross, GA 30093"
  },
  hours: {
    office: "Mon–Fri, 9:00 am – 5:00 pm",
    emergency: "24/7"
  },
  primaryArea: "Norcross, GA",
  coverageShort: "Norcross · Gwinnett County · Metro Atlanta",
  serviceAreas: [
    "Norcross",
    "Lilburn",
    "Peachtree Corners",
    "Duluth",
    "Tucker",
    "Lawrenceville",
    "Johns Creek",
    "Suwanee",
    "Chamblee",
    "Doraville",
    "Gwinnett County",
    "Metro Atlanta"
  ],
  certifications: ["IICRC Certified", "Veteran-Owned Business"],
  propertyTypes: ["Residential", "Commercial", "Industrial"],
  referral: {
    reward: "$500",
    url: "https://www.vetcornorcross.com",
    urlDisplay: "www.vetcornorcross.com"
  },
  seo: {
    title: "Water Damage Restoration & Mold Remediation in Norcross, GA | VetCor of Norcross",
    description:
      "VetCor of Norcross provides 24/7 emergency water damage restoration, mold remediation, fire/smoke cleanup, roof tarping, board-up, biohazard cleanup, and commercial restoration across Norcross, Gwinnett County, and Metro Atlanta. Veteran-owned. IICRC certified.",
    siteUrl: "https://www.vetcornorcross.com"
  }
} as const;

export const SERVICES = [
  {
    id: "water-damage",
    name: "Water Damage Restoration",
    description:
      "Rapid water extraction, structural drying, and complete restoration after flooding, burst pipes, or water intrusion events.",
    href: "/water-damage-restoration-norcross-ga",
    urgent: true,
    icon: "💧"
  },
  {
    id: "mold",
    name: "Mold Remediation",
    description:
      "IICRC-certified mold detection, safe containment, removal, and prevention for residential, commercial, and industrial properties.",
    href: "/mold-remediation-norcross-ga",
    urgent: true,
    icon: "🛡️"
  },
  {
    id: "fire",
    name: "Fire & Smoke Damage Restoration",
    description:
      "Emergency stabilization, smoke and soot cleanup, odor elimination, and full structural fire damage restoration.",
    href: "/fire-smoke-damage-restoration-norcross-ga",
    urgent: true,
    icon: "🔥"
  },
  {
    id: "biohazard",
    name: "Biohazard & Trauma Cleanup",
    description:
      "Discreet, professional biohazard, trauma, and crime scene remediation with full regulatory compliance and care.",
    href: "/biohazard-trauma-cleanup-norcross-ga",
    urgent: true,
    icon: "⚕️"
  },
  {
    id: "board-up",
    name: "Emergency Board-Up",
    description:
      "Immediate property securing and board-up to prevent further damage after fire, storm, or structural failure.",
    href: "/emergency-board-up-roof-tarping-norcross-ga",
    urgent: true,
    icon: "🔨"
  },
  {
    id: "roof-tarp",
    name: "Emergency Roof Tarping",
    description:
      "Temporary roof protection to stop water intrusion and stabilize your structure after storm or fire damage.",
    href: "/emergency-board-up-roof-tarping-norcross-ga",
    urgent: true,
    icon: "🏠"
  },
  {
    id: "storm",
    name: "Storm & Tree Debris Cleanup",
    description:
      "Fast removal of fallen trees, storm debris, and hazardous materials from residential and commercial properties.",
    href: "/storm-damage-cleanup-norcross-ga",
    urgent: false,
    icon: "🌪️"
  },
  {
    id: "disinfection",
    name: "Disinfection & Deep Cleaning",
    description:
      "Electrostatic fogging and hospital-grade disinfection for homes, offices, and commercial or industrial facilities.",
    href: "/disinfection-norcross-ga",
    urgent: false,
    icon: "✨"
  },
  {
    id: "carpet",
    name: "Carpet Cleaning",
    description:
      "Professional deep carpet cleaning and extraction for residential, commercial, and post-restoration environments.",
    href: "/carpet-cleaning-norcross-ga",
    urgent: false,
    icon: "🧹"
  },
  {
    id: "commercial",
    name: "Commercial Restoration",
    description:
      "Full-scale mitigation and restoration for offices, warehouses, industrial facilities, and property managers.",
    href: "/commercial-restoration-norcross-ga",
    urgent: false,
    icon: "🏢"
  }
] as const;

export type Service = (typeof SERVICES)[number];
