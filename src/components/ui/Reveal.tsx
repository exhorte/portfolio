"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const directions = {
  up: { x: 0, y: 28 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: keyof typeof directions;
  delay?: number;
  className?: string;
}) {
  const offset = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
