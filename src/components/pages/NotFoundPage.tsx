import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const { notFound } = getDictionary(locale);

  return (
    <section className="bg-background py-40">
      <Container className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{notFound.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{notFound.text}</p>
        <Link
          href={localePath(locale, "/")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-80"
        >
          <ArrowLeft size={14} aria-hidden="true" /> {notFound.back}
        </Link>
      </Container>
    </section>
  );
}
