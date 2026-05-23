import { EmergencyHeader } from "../components/EmergencyHeader.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { TrustBar } from "../components/TrustBar.tsx";
import { ServiceGrid } from "../components/ServiceGrid.tsx";
import { WhyVetCor } from "../components/WhyVetCor.tsx";
import { EmergencyProcess } from "../components/EmergencyProcess.tsx";
import { InsuranceSupport } from "../components/InsuranceSupport.tsx";
import { ProofSection } from "../components/ProofSection.tsx";
import { ServiceArea } from "../components/ServiceArea.tsx";
import { ReferralProgram } from "../components/ReferralProgram.tsx";
import { FAQSection } from "../components/FAQSection.tsx";
import { FinalCTA } from "../components/FinalCTA.tsx";
import { SiteFooter } from "../components/SiteFooter.tsx";
import { MobileStickyCTA } from "../components/MobileStickyCTA.tsx";

export default function WebsiteHomePage() {
  return (
    <>
      <EmergencyHeader />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <ServiceGrid />
        <WhyVetCor />
        <EmergencyProcess />
        <InsuranceSupport />
        <ProofSection />
        <ServiceArea />
        <ReferralProgram />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  );
}
