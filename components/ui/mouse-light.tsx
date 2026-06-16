"use client";

import { useEffect, useState } from "react";

export function MouseLight() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
  }, []);

  if (!mounted || !enabled) return null;
  return <div className="mouse-light" aria-hidden />;
}
