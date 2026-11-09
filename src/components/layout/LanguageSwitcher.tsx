"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "@base-ui/react/menu";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  localeCookie,
  localeCookieMaxAge,
  localeInfo,
  localePath,
  locales,
  parsePathname,
  type Locale,
} from "@/lib/i18n/config";

// Keeps the current section (#projects…) when the language changes: the hash is not part of usePathname().
function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const getHash = () => window.location.hash;
const getServerHash = () => "";

// An explicit choice overrides the browser-language detection on the next visits (see `detect.ts`).
function rememberLocale(code: Locale) {
  document.cookie = `${localeCookie}=${code}; Path=/; Max-Age=${localeCookieMaxAge}; SameSite=Lax`;
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const { path } = parsePathname(pathname);

  return (
    <Menu.Root>
      <Menu.Trigger
        aria-label={`${label} (${localeInfo[locale].name})`}
        className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-foreground/70 bg-transparent pl-3 pr-2.5 text-xs font-semibold tracking-wide text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-expanded:bg-muted"
      >
        <Globe size={15} aria-hidden="true" />
        <span>{localeInfo[locale].short}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-aria-expanded:rotate-180"
        />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8} className="z-[70] outline-none">
          <Menu.Popup className="min-w-[5.5rem] rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg outline-none">
            {locales.map((code) => {
              const current = code === locale;
              return (
                <Menu.LinkItem
                  key={code}
                  href={`${localePath(code, path)}${hash}`}
                  lang={code}
                  hrefLang={code}
                  aria-label={localeInfo[code].name}
                  aria-current={current ? "true" : undefined}
                  closeOnClick
                  onClick={() => rememberLocale(code)}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2 text-xs font-semibold tracking-wide text-foreground outline-none data-highlighted:bg-muted"
                >
                  {localeInfo[code].short}
                  {current && <Check size={14} aria-hidden="true" />}
                </Menu.LinkItem>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
