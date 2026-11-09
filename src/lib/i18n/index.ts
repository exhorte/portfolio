import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

export type { Dictionary, ProjectText } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

/** Server-side only: client components receive the strings they need as props. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
