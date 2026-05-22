import type { PropsWithChildren } from "react";
import { MarketingShell } from "../../../packages/ui/src/react/index.tsx";
import { getWebsiteShellModel } from "./shell-data.ts";

export function WebsitePageShell({ children }: PropsWithChildren) {
  const model = getWebsiteShellModel();

  return <MarketingShell brand="VetCor of Norcross" eyebrow="24/7 Emergency Restoration · IICRC Certified" tagline="Tell 'Em You Want the Vets!" navigation={model.navigation}>{children}</MarketingShell>;
}
