"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-7 w-7 rounded-full border border-champagne/70 mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
}
