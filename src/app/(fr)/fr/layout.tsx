import { SiteDocument } from "@/components/layout/SiteDocument";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("fr");

// Root layout of the French site (served under `/fr`).
export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="fr">{children}</SiteDocument>;
}
