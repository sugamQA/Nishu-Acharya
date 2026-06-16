"use client";

import { useEffect, useState } from "react";

export function MouseLight() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
  }, []);

  if (!enabled) return null;
  return <div className="mouse-light" aria-hidden />;
}
