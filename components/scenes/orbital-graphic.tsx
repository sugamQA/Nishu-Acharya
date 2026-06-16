"use client";

import { motion } from "framer-motion";
import { Heart, Stethoscope, Microscope, Activity, Brain, ShieldPlus, Dna, Pill } from "lucide-react";

const icons = [
  { Icon: Heart, color: "text-cyan" },
  { Icon: Stethoscope, color: "text-teal" },
  { Icon: Microscope, color: "text-electric" },
  { Icon: Activity, color: "text-neon" },
  { Icon: Brain, color: "text-cyan" },
  { Icon: ShieldPlus, color: "text-teal" },
  { Icon: Dna, color: "text-electric" },
  { Icon: Pill, color: "text-cyan" }
];

export function OrbitalGraphic() {
  return (
    <div className="relative h-[420px] w-[420px] mx-auto">
      {/* Central core */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan/20 blur-2xl" />
          <div className="relative grid h-28 w-28 place-items-center rounded-full glass-card luxury-border">
            <div className="text-center">
              <Heart className="mx-auto h-7 w-7 text-cyan animate-heart" />
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cyan/80">Health</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbital rings */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute h-72 w-72 rounded-full border border-cyan/20"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute h-96 w-96 rounded-full border border-teal/15"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg)" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute h-[28rem] w-[28rem] rounded-full border border-electric/10"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg)" }}
        />
      </div>

      {/* Orbiting icons */}
      {icons.map((item, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const radius = 140 + (i % 3) * 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [x, x * 1.1, x],
              y: [y, y * 1.1, y]
            }}
            transition={{
              opacity: { delay: i * 0.1 },
              scale: { delay: i * 0.1 },
              x: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-cyan/20 blur-md" />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl glass-card border border-cyan/30 shadow-cyanglow">
                <item.Icon className={`h-5 w-5 ${item.color}`} />
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Pulse rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -inset-16 rounded-full border border-cyan/20 animate-ping" />
        <div className="absolute -inset-24 rounded-full border border-teal/15 animate-ping" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
}
