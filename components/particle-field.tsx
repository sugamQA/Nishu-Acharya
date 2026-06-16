"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export function ParticleField() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsMobile(mq.matches);
    setPrefersReduced(reduce.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!ref.current || isMobile || prefersReduced) return;
    const particles = ref.current.querySelectorAll("[data-particle]");
    const ctx = gsap.context(() => {
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 28 : -24,
          y: index % 3 === 0 ? -34 : 30,
          opacity: 0.6,
          duration: 4 + (index % 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [isMobile, prefersReduced]);

  if (isMobile || prefersReduced) return null;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 24 }).map((_, index) => {
        const colors = [
          "bg-cyan/40 shadow-cyanglow",
          "bg-teal/40 shadow-tealglow",
          "bg-electric/40 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        ];
        const color = colors[index % colors.length];
        const size = index % 5 === 0 ? "h-1.5 w-1.5" : "h-1 w-1";
        return (
          <span
            data-particle
            key={index}
            className={`absolute rounded-full ${color} ${size}`}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`
            }}
          />
        );
      })}
    </div>
  );
}
