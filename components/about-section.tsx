"use client";

import { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";
import { bioCards, education, timeline } from "@/lib/profile";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = createTimeline({ defaults: { duration: 800 } });

    tl.add(
      Array.from(section.querySelectorAll(".about-title-line")),
      {
        translateY: [40, 0],
        opacity: [0, 1],
        delay: stagger(120),
        easing: "easeOutExpo",
      }
    ).add(
      Array.from(section.querySelectorAll(".about-intro-line")),
      {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        delay: stagger(80),
        easing: "easeOutExpo",
      },
      "-=400"
    ).add(
      Array.from(section.querySelectorAll(".about-card")),
      {
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 700,
        delay: stagger(100),
        easing: "easeOutExpo",
      },
      "-=300"
    );
  }, []);

  const icons = ["✦", "▲", "●", "◆"];

  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div ref={sectionRef}>
          <div className="text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blush">
                About
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="about-title-line font-display mt-4 text-4xl leading-tight text-balance sm:text-5xl opacity-0">
                A public health professional{" "}
                <span className="bg-gradient-to-r from-blush via-blush to-sky bg-clip-text text-transparent">
                  advancing evidence-based
                </span>{" "}
                community well-being.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-intro-line mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 opacity-0">
                Nishu Acharya&rsquo;s work spans research, program design, implementation, health systems
                support, monitoring and evaluation, and health equity advocacy across Nepal.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-blush/30 to-transparent" />
            <div
              ref={pipelineRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {bioCards.map((card, index) => (
                <div
                  key={card.title}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="about-card group relative min-w-[280px] flex-1 snap-start rounded-2xl border border-white/40 bg-white/30 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:border-blush/40 dark:border-white/15 dark:bg-white/[0.06] opacity-0"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blush/60 to-sky/60 rounded-t-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-bl from-blush/[0.05] to-transparent transition-all duration-500 group-hover:scale-[2] group-hover:from-blush/[0.12]" />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blush/20 to-sky/20 text-base text-blush shadow-sm">
                        {icons[index]}
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blush/30 text-xs font-bold text-blush">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-5 font-display text-3xl">Education</h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 0.06}>
                <a href={item.url} className="flex h-full gap-4 rounded-3xl glass p-6 shadow-luxury transition hover:-translate-y-1">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-sm font-bold text-ink shadow-sm dark:bg-white/10 dark:text-white">
                    {item.logo}
                  </span>
                  <span>
                    <span className="block text-xl font-semibold">{item.school}</span>
                    <span className="mt-2 block text-slate-600 dark:text-slate-300">{item.degree}</span>
                    <span className="mt-3 inline-flex rounded-full bg-blush/10 px-3 py-1 text-sm font-semibold text-blush">
                      {item.duration}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative h-full rounded-3xl border border-slate-200/70 p-6 dark:border-white/10">
                <span className="mb-5 inline-flex rounded-full bg-blush/10 px-3 py-1 text-sm font-semibold text-blush">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
