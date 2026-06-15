"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Experience", "Certifications", "Impact", "Contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Main navigation bar */}
      <nav role="navigation" aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full px-4 py-3 shadow-lg transition-colors duration-300">
        {/* Logo */}
        <a href="#home" className="font-display text-lg text-white">NA</a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white hover:text-blush transition"
            >
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-blush focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown – full‑width, slide‑down animation */}
      {open && (
        <div className="fixed inset-x-0 top-16 md:hidden z-40 bg-white/20 dark:bg-black/20 backdrop-blur-lg border-t border-white/20 dark:border-white/10 rounded-b-lg overflow-y-auto max-h-[calc(100vh-4rem)] animate-fade-in-down">
          <div className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-3 text-sm text-white hover:bg-white/30 dark:hover:bg-black/30 transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            {/* Theme toggle at the bottom of the mobile panel */}
            <div className="px-4 py-2 border-t border-white/10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
