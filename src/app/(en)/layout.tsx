import { SiteDocument } from "@/components/layout/SiteDocument";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("en");

// Root layout of the English site (served at the root: `/`, `/projects/<slug>`).
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
