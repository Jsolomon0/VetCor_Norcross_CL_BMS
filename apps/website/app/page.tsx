import { ModuleGrid, PageHeader, SectionGrid, SimpleList, StatsCard } from "../../../packages/ui/src/react/index.tsx";
import { WebsitePageShell } from "../lib/page-shell.tsx";
import { vetcorServices, vetcorValues } from "../lib/shell-data.ts";

export default function WebsiteHomePage() {
  return (
    <WebsitePageShell>
      <PageHeader
        eyebrow="Veteran-Owned · IICRC Certified · Norcross, GA"
        title="When Disaster Strikes, Call the Vets."
        description="VetCor of Norcross provides 24/7 emergency restoration for water, fire, mold, biohazard, and more. We serve residential, commercial, and industrial properties throughout the greater Atlanta area. We complete the mission — always."
        actions={[
          { label: "Request Emergency Service", href: "/request" },
          { label: "View All Services", href: "/solutions" }
        ]}
        badges={["24/7 Emergency Response", "Call 1-844-VETCOR1", "IICRC Certified", "Veteran-Owned"]}
      />
      <SectionGrid>
        <ModuleGrid
          title="Restoration Services"
          description="Full-spectrum damage mitigation, remediation, and restoration for all property types."
          modules={vetcorServices}
        />
        <StatsCard
          title="Referral Program — Earn Up to $500"
          description="Know someone who needs restoration? Refer them to VetCor of Norcross and earn up to $500 per completed job. Terms apply — visit www.vetcornorcross.com for details."
          stats={[
            { label: "Reward per completed job", value: "$500" },
            { label: "Properties served", value: "Res · Com · Industrial" },
            { label: "Emergency response", value: "24/7" }
          ]}
          span="4"
        />
        <SimpleList
          title="Our Core Values"
          description="The mission doesn't end until the job is done right — 100% satisfaction, every time."
          items={vetcorValues}
          span="8"
        />
        <StatsCard
          title="Contact VetCor of Norcross"
          description="1394 Indian Trail Lilburn Rd, Suite 100, Norcross, GA 30093. Office hours: Mon–Fri, 9am–5pm. Emergency line available 24/7."
          stats={[
            { label: "Office", value: "(770) 455-2343" },
            { label: "Emergency", value: "1-844-VETCOR1" },
            { label: "Email", value: "Vetcornorcross@gmail.com" }
          ]}
          span="4"
        />
        <SimpleList
          title="Certifications & Recognitions"
          description="Trusted, certified, and built on a foundation of military discipline and integrity."
          items={[
            {
              title: "IICRC Certified",
              body: "Institute of Inspection Cleaning and Restoration Certification — the industry gold standard for restoration professionals."
            },
            {
              title: "Veteran-Owned Business",
              body: "Founded and operated by veterans who bring military discipline, accountability, and pride to every job."
            },
            {
              title: "Residential, Commercial & Industrial",
              body: "We respond to emergencies across all property types in the greater Norcross, GA area and beyond."
            }
          ]}
          span="6"
        />
        <StatsCard
          title="Tell 'Em You Want the Vets!"
          description="Our tagline is our promise. When you call VetCor of Norcross, you get a team trained to complete the mission — no matter what. We serve with integrity, professionalism, and pride in everything we do."
          stats={[
            { label: "Customer satisfaction goal", value: "100%" },
            { label: "Emergency coverage", value: "24/7/365" },
            { label: "Mission commitment", value: "Always" }
          ]}
          span="6"
        />
      </SectionGrid>
    </WebsitePageShell>
  );
}
