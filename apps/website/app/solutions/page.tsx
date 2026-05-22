import { ModuleGrid, PageHeader, SectionGrid, SimpleList, StatsCard } from "../../../../packages/ui/src/react/index.tsx";
import { WebsitePageShell } from "../../lib/page-shell.tsx";
import { vetcorServices } from "../../lib/shell-data.ts";

export default function WebsiteSolutionsPage() {
  return (
    <WebsitePageShell>
      <PageHeader
        eyebrow="Services"
        title="Full-Spectrum Restoration, Done Right."
        description="From water and fire damage to mold, biohazard cleanup, and Covid-19 decontamination — VetCor of Norcross handles every type of restoration emergency for residential, commercial, and industrial clients across the greater Atlanta area."
        actions={[
          { label: "Request Service", href: "/request" },
          { label: "Return Home", href: "/" }
        ]}
        badges={["Residential", "Commercial", "Industrial", "IICRC Certified", "24/7 Emergency"]}
      />
      <SectionGrid>
        <ModuleGrid
          title="All Restoration Services"
          description="Every service is performed by IICRC-certified technicians trained to complete the mission."
          modules={vetcorServices}
        />
        <StatsCard
          title="Who We Serve"
          description="VetCor of Norcross responds to emergencies across all property types in the Norcross, GA area and beyond."
          stats={[
            { label: "Residential", value: "Homes & Apts" },
            { label: "Commercial", value: "Offices & Retail" },
            { label: "Industrial", value: "Warehouses & Plants" }
          ]}
          span="4"
        />
        <SimpleList
          title="Why Choose VetCor of Norcross?"
          description="Our certifications, values, and 24/7 commitment set us apart from the competition."
          items={[
            {
              title: "IICRC Certified Technicians",
              body: "Every job is handled by certified professionals trained to the highest restoration industry standard."
            },
            {
              title: "24/7 Emergency Response",
              body: "Call 1-844-VETCOR1 at any hour. We are always ready to respond when disaster strikes."
            },
            {
              title: "Veteran-Owned & Operated",
              body: "Military discipline, integrity, and accountability on every job. We complete the mission — always."
            },
            {
              title: "Referral Program — Earn $500",
              body: "Refer a friend or neighbor and earn up to $500 per completed job. Terms apply."
            }
          ]}
          span="8"
        />
        <StatsCard
          title="Get in Touch"
          description="1394 Indian Trail Lilburn Rd, Suite 100, Norcross, GA 30093. Office: Mon–Fri, 9am–5pm."
          stats={[
            { label: "Emergency", value: "1-844-VETCOR1" },
            { label: "Office", value: "(770) 455-2343" },
            { label: "Email", value: "Vetcornorcross@gmail.com" }
          ]}
          span="4"
        />
      </SectionGrid>
    </WebsitePageShell>
  );
}
