import type { PropsWithChildren } from "react";
import { EmergencyHeader } from "../components/EmergencyHeader.tsx";
import { SiteFooter } from "../components/SiteFooter.tsx";
import { MobileStickyCTA } from "../components/MobileStickyCTA.tsx";

export function WebsitePageShell({ children }: PropsWithChildren) {
  return (
    <>
      <EmergencyHeader />
      <main id="main-content">
        {children}
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  );
}
