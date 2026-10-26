import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://exhorte.dev";
const title = "Exhorte Mboumba — Software Engineer | AI Engineer";
const description =
  "Portfolio of Exhorte Mboumba, a software engineer and AI engineer building full-stack applications, backend systems, AI-powered tools and automated workflows.";
const shareImage = {
  url: "/assets/photo_exhorte.jpg",
  width: 400,
  height: 400,
  alt: "Exhorte Mboumba",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Exhorte Mboumba",
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Software Architecture",
    "RAG",
    "AI Agents",
    "Spring Boot",
    "Next.js",
    "Portfolio",
    "Dakar",
    "Senegal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Exhorte Mboumba",
    images: [shareImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [shareImage.url],
  },
  other: { "theme-color": "#dddddd" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Exhorte Mboumba",
      url: siteUrl,
      jobTitle: "Software Engineer",
      address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Institut Supérieur d'Informatique (ISI), Dakar" },
      sameAs: [
        "https://github.com/exhorte",
        "https://www.linkedin.com/in/exhorte-baboka-boumba",
        "https://x.com/exhorte1741",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Exhorte Mboumba — Portfolio",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, jetbrainsMono.variable)}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
