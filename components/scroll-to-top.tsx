"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-xl border border-cyan/30 bg-ink text-cyan shadow-lg backdrop-blur transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-ink ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
