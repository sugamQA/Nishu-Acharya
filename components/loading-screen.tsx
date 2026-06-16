"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Heart, Stethoscope } from "lucide-react";

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = window.setInterval(() => {
      setProgress((p) => (p < 100 ? p + 5 : 100));
    }, 60);
    const timeout = window.setTimeout(() => setShow(false), 1900);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-30 bg-neural-grid bg-grid-lg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 -m-6 rounded-full bg-cyan/20 blur-2xl animate-pulse" />
            <div className="relative grid h-24 w-24 place-items-center rounded-full luxury-border bg-ink-soft shadow-cyanglow">
              <div className="absolute inset-2 rounded-full border border-cyan/40 border-t-transparent animate-spin" />
              <div
                className="absolute inset-4 rounded-full border border-teal/40 border-b-transparent animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "12s" }}
              />
              <Stethoscope className="h-8 w-8 text-cyan" />
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyan/80">
            Public Health Intelligence
          </p>
          <p className="mt-3 font-display text-2xl gradient-text">
            Nishu Acharya
          </p>
          <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan via-electric to-teal shadow-cyanglow transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
            Initializing · {progress}%
          </p>
          <div className="mt-10 flex items-center gap-6 text-cyan/60">
            <Activity className="h-4 w-4 animate-pulse" />
            <Heart className="h-4 w-4 animate-heart" />
            <Activity className="h-4 w-4 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-ink"
        >
          <div className="absolute inset-0 opacity-30 bg-neural-grid bg-grid-lg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 -m-6 rounded-full bg-cyan/20 blur-2xl animate-pulse" />
              <div className="relative grid h-24 w-24 place-items-center rounded-full luxury-border bg-ink-soft shadow-cyanglow">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-cyan/40 border-t-transparent"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-teal/40 border-b-transparent"
                />
                <Stethoscope className="h-8 w-8 text-cyan" />
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.4em] text-cyan/80"
            >
              Public Health Intelligence
            </motion.p>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 font-display text-2xl gradient-text"
            >
              Nishu Acharya
            </motion.p>

            <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-cyan via-electric to-teal shadow-cyanglow"
              />
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Initializing · {progress}%
            </p>

            <div className="mt-10 flex items-center gap-6 text-cyan/60">
              <Activity className="h-4 w-4 animate-pulse" />
              <Heart className="h-4 w-4 animate-heart" />
              <Activity className="h-4 w-4 animate-pulse" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
