"use client";

import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { nav } from "@/lib/data";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sectionIds = nav.links.map((l) => l.id);

export function Navbar({ locale, copy }: { locale: Locale; copy: Dictionary["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  // Anchors point at the home page of the current language so they also work from a project page.
  const home = localePath(locale, "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <a href={`${home}#hero`} className="flex items-center gap-2 text-lg font-semibold tracking-tight lg:justify-self-start">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-background">
            {nav.brand}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`${home}#${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  activeId === link.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {copy.links[link.id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 lg:justify-self-end">
          <LanguageSwitcher locale={locale} label={copy.language} />

          {nav.cvUrl && (
            <a
              href={nav.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-opacity hover:opacity-80 lg:inline-flex"
            >
              <Download size={14} /> {copy.downloadCv}
            </a>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full lg:hidden"
                  aria-label={copy.menu}
                />
              }
            >
              <Menu size={16} />
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 max-w-xs" closeLabel={copy.close}>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-background">
                    {nav.brand}
                  </span>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {nav.links.map((link) => (
                  <li key={link.id}>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <a
                          href={`${home}#${link.id}`}
                          className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                        />
                      }
                    >
                      {copy.links[link.id]}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              {nav.cvUrl && (
                <div className="mt-auto p-4">
                  <a
                    href={nav.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                  >
                    <Download size={14} /> {copy.downloadCv}
                  </a>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
