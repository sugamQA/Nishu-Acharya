"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Programs", href: "#programs" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" }
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = ["home", ...links.slice(1).map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setActive("home");
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        role="navigation"
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 border border-cyan/40 shadow-lg shadow-cyan/20 backdrop-blur-md"
            : "bg-white/80 border border-slate-200 shadow-md backdrop-blur-sm"
        }`}
      >
        <Link href="/" onClick={goHome} className="flex items-center gap-2.5 group">
          <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan/20 to-electric/20 border border-cyan/40">
            <Activity className="h-5 w-5 text-cyan" />
            <span className="absolute inset-0 rounded-full border border-cyan/40 animate-ping opacity-30" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-slate-900">Nishu Acharya</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan">
              Public Health
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = active === (link.href === "/" ? "home" : link.href.slice(1));
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={link.href === "/" ? goHome : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan"
                    : "text-slate-700 hover:text-cyan"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan/10 border border-cyan/40 shadow-cyanglow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan to-electric px-5 py-2.5 text-sm font-semibold text-white shadow-cyanglow transition hover:shadow-glow-strong hover:scale-105"
          >
            Book Consult
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-cyan/40 text-cyan bg-white/80"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto mt-2 max-w-6xl bg-white/90 border border-cyan/40 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md"
          >
            <div className="flex flex-col p-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.href === "/" ? goHome : () => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:text-cyan hover:bg-cyan/5 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="m-2 rounded-full bg-gradient-to-r from-cyan to-electric py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Consult
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
