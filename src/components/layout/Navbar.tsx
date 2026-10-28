"use client";

import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { nav } from "@/lib/data";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(nav.links.map((l) => l.href.replace("#", "")));

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-background">
            {nav.brand}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  activeId === link.href.replace("#", "") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          {nav.cvUrl && (
            <a
              href={nav.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
            >
              <Download size={14} /> Download CV
            </a>
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Menu"
              />
            }
          >
            <Menu size={16} />
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 max-w-xs">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm text-background">
                  {nav.brand}
                </span>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
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
                  <Download size={14} /> Download CV
                </a>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
