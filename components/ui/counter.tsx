"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // Extract numeric part
  const match = value.match(/^([0-9.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const rest = match ? match[2] : value;
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => {
    if (Number.isInteger(target)) return `${Math.round(v)}${rest}${suffix}`;
    return `${v.toFixed(1)}${rest}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, target, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, motionVal, target]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
