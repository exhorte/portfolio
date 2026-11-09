import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { detectLocaleScript } from "@/lib/i18n/detect";
import { jsonLd } from "@/lib/seo";
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

/**
 * The whole HTML document of a language. English and French each have their own root layout
 * (`app/(en)` and `app/(fr)/fr`) so that `<html lang>` is correct without any runtime logic;
 * both render this shell.
 */
export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);

  // Blocking inline script on purpose: it must redirect before anything is painted (English pages only).
  // The `next/script` strategies run after hydration starts, and a plain <head> is supported in a root layout.
  const detectHead =
    locale === defaultLocale ? (
      // eslint-disable-next-line @next/next/no-head-element
      <head>
        <script dangerouslySetInnerHTML={{ __html: detectLocaleScript }} />
      </head>
    ) : null;

  return (
    <html lang={locale} className={cn("h-full antialiased", inter.variable, jetbrainsMono.variable)}>
      {detectHead}
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }} />
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Navbar locale={locale} copy={dict.nav} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <BackToTop label={dict.nav.backToTop} title={dict.nav.backToTopTitle} />
        </MotionConfig>
      </body>
    </html>
  );
}
