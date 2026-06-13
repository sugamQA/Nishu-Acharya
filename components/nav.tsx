"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const links = ["About", "Experience", "Work", "Impact", "Contact"];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-4 py-3 shadow-luxury">
        <a href="#home" className="font-display text-lg">NA</a>
        <div className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-blush">
              {link}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
