"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface Experience {
  position: string;
  company: string;
  duration: string;
  location?: string;
  responsibilities?: string[];
  achievements?: string[];
  companyUrl?: string;
  logo?: string;
  type?: string;
}

interface ExperiencePopupProps {
  open: boolean;
  onClose: () => void;
  experiences: Experience[];
}

export function ExperiencePopup({ open, onClose, experiences }: ExperiencePopupProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan/30 bg-white shadow-2xl shadow-cyan/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-slate-200 bg-gradient-to-r from-cyan/10 via-electric/10 to-teal/10 px-6 py-5 backdrop-blur-md sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Full Experience
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    About Experience
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    A complete record of public health practice, research, and program leadership.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-cyan/40 hover:text-cyan"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="max-h-[calc(85vh-120px)] overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-5">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.position + exp.company}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-cyan/40 hover:shadow-lg sm:p-6"
                  >
                    {/* Top accent strip */}
                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan via-electric to-teal opacity-60 transition-opacity group-hover:opacity-100" />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                      {/* Icon badge */}
                      <div className="flex shrink-0 items-start">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/15 to-electric/15 border border-cyan/30 shadow-cyanglow font-bold text-cyan">
                          {exp.logo}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            {exp.position}
                          </h3>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan/30 bg-cyan/5 text-cyan transition hover:border-cyan/50 hover:bg-cyan/10"
                              aria-label="Open link"
                            >
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-cyan">
                          {exp.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">
                            <Calendar className="h-3 w-3 text-cyan" />
                            {exp.duration}
                          </span>
                          {exp.location ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">
                              <MapPin className="h-3 w-3 text-cyan" />
                              {exp.location}
                            </span>
                          ) : null}
                          {exp.type ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/5 px-2.5 py-1 font-medium text-cyan">
                              {exp.type}
                            </span>
                          ) : null}
                        </div>

                        {exp.responsibilities && exp.responsibilities.length > 0 ? (
                          <div className="mt-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Responsibilities</h4>
                            <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-600">
                              {exp.responsibilities.map((b, j) => (
                                <li key={j} className="flex gap-2.5">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {exp.achievements && exp.achievements.length > 0 ? (
                          <div className="mt-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Key Achievements</h4>
                            <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-600">
                              {exp.achievements.map((a, j) => (
                                <li key={j} className="flex gap-2.5">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-cyan/30 bg-gradient-to-r from-cyan/5 via-electric/5 to-teal/5 p-5 sm:flex-row">
                <p className="text-sm font-medium text-slate-700">
                  Want to discuss a project or collaboration?
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-electric px-5 py-2.5 text-sm font-semibold text-white shadow-cyanglow transition hover:scale-105 hover:shadow-glow-strong"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
