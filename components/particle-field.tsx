"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function ParticleField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const particles = ref.current.querySelectorAll("[data-particle]");
    const ctx = gsap.context(() => {
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 28 : -24,
          y: index % 3 === 0 ? -34 : 30,
          opacity: 0.75,
          duration: 4 + (index % 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          data-particle
          key={index}
          className="absolute h-1 w-1 rounded-full bg-signal/50 shadow-glow"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`
          }}
        />
      ))}
    </div>
  );
}
