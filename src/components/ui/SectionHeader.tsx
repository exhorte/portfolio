"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  tag,
  title,
  gradient,
  subtitle,
  align = "left",
  tone = "light",
}: {
  tag: string;
  title: string;
  gradient: string;
  subtitle?: string;
  align?: "left" | "center";
  /** "dark" uses the ink colours so the header stays readable on the dark sections. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${
          dark ? "text-ink-muted" : "text-muted-foreground"
        }`}>
        <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
        {tag}
      </span>
      <h2
        className={`mt-4 text-4xl font-bold tracking-tight sm:text-5xl ${dark ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title} {gradient}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
