"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShow(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink text-white"
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full luxury-border font-display text-2xl">
              NA
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Executive Portfolio</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
