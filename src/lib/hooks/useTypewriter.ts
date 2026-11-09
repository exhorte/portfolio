"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD_MS = 1800;

export function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(next);
    }

    const step = setTimeout(
      () => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      },
      deleting ? DELETE_SPEED : TYPE_SPEED
    );

    return () => clearTimeout(step);
  }, [text, deleting, wordIndex, words]);

  return text;
}
