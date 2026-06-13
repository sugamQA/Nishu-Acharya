"use client";

import { useEffect, useMemo, useState } from "react";

export function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const word = words[index] ?? "";
  const text = useMemo(() => word.slice(0, count), [word, count]);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!deleting && count < word.length) {
          setCount(count + 1);
        } else if (!deleting && count === word.length) {
          setDeleting(true);
        } else if (deleting && count > 0) {
          setCount(count - 1);
        } else {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      },
      deleting ? 42 : count === word.length ? 1100 : 84
    );
    return () => window.clearTimeout(timeout);
  }, [count, deleting, index, word.length, words.length]);

  return (
    <span className="inline-flex min-w-[13ch] items-center text-signal">
      {text}
      <span className="ml-1 h-8 w-px animate-pulse bg-signal" aria-hidden />
    </span>
  );
}
