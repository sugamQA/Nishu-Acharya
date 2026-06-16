"use client";

import { motion } from "framer-motion";

export function DNAStrand() {
  const rungs = 12;
  return (
    <div className="relative h-full w-full flex items-center justify-center" style={{ perspective: "1200px" }}>
      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <svg width="200" height="420" viewBox="0 0 200 420" className="drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          <defs>
            <linearGradient id="strand-a" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="strand-b" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="rung-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="node-glow">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Helix strands */}
          <path
            d="M 50 20 Q 150 60, 50 100 T 50 180 T 50 260 T 50 340 T 50 400"
            stroke="url(#strand-a)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 150 20 Q 50 60, 150 100 T 150 180 T 150 260 T 150 340 T 150 400"
            stroke="url(#strand-b)"
            strokeWidth="3"
            fill="none"
          />

          {/* Rungs */}
          {Array.from({ length: rungs }).map((_, i) => {
            const y = 30 + i * 32;
            const offset = Math.sin((i / rungs) * Math.PI * 4) * 35;
            return (
              <g key={i}>
                <line
                  x1={50 + offset}
                  y1={y}
                  x2={150 - offset}
                  y2={y}
                  stroke="url(#rung-grad)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx={50 + offset} cy={y} r="5" fill="url(#node-glow)" />
                <circle cx={150 - offset} cy={y} r="5" fill="url(#node-glow)" />
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
