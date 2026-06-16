"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 280, damping: 30 });
  const springY = useSpring(y, { stiffness: 280, damping: 30 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
      const mx = (event.clientX / window.innerWidth) * 100;
      const my = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mx", `${mx}%`);
      document.documentElement.style.setProperty("--my", `${my}%`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] h-6 w-6 rounded-full border border-cyan/80 mix-blend-screen"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[79] h-2 w-2 rounded-full bg-cyan shadow-cyanglow"
        style={{ x: springX, y: springY, translateX: 8, translateY: 8 }}
      />
    </>
  );
}
