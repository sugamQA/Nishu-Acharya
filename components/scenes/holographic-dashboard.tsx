"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Users, TrendingUp } from "lucide-react";

export function HolographicDashboard() {
  return (
    <div className="relative h-full w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl p-5 holographic"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan/10 border border-cyan/30">
              <Activity className="h-3.5 w-3.5 text-cyan" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan/70">Live Health Index</p>
              <p className="text-xs text-white/60">Nepal · 2026</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Animated line chart */}
        <div className="relative h-24 mb-4 overflow-hidden rounded-xl bg-ink-soft/40 border border-white/5">
          <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              d="M 0 70 L 30 55 L 60 60 L 90 40 L 120 45 L 150 30 L 180 35 L 210 20 L 240 25 L 270 12 L 300 18"
              stroke="url(#chart-line)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              d="M 0 70 L 30 55 L 60 60 L 90 40 L 120 45 L 150 30 L 180 35 L 210 20 L 240 25 L 270 12 L 300 18 L 300 100 L 0 100 Z"
              fill="url(#chart-fill)"
            />
            {[30, 60, 90, 120, 150, 180, 210, 240, 270].map((x, i) => (
              <motion.circle
                key={x}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                cx={x}
                cy={[55, 60, 40, 45, 30, 35, 20, 25, 12][i]}
                r="2.5"
                fill="#22d3ee"
                className="drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]"
              />
            ))}
          </svg>
          {/* Scan line */}
          <div className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-cyan to-transparent animate-scan" />
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Coverage", value: "92.4%", icon: Users, color: "text-cyan" },
            { label: "Wellness", value: "87.1", icon: Heart, color: "text-teal" },
            { label: "Impact", value: "+24%", icon: TrendingUp, color: "text-electric" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="rounded-lg bg-ink-soft/50 border border-white/5 p-2"
            >
              <div className="flex items-center gap-1.5">
                <stat.icon className={`h-3 w-3 ${stat.color}`} />
                <span className="text-[9px] uppercase tracking-wider text-white/50">{stat.label}</span>
              </div>
              <p className={`mt-1 text-sm font-bold ${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
