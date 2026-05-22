import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: "VetCor of Norcross | 24/7 Emergency Restoration",
  description: "Veteran-owned 24/7 emergency restoration in Norcross, GA. Water, fire, mold, bio cleanup & more. Call 1-844-VETCOR1. IICRC Certified. Tell 'Em You Want the Vets!"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
