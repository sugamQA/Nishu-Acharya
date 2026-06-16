"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  FileText,
  GraduationCap,
  Send,
  Stethoscope,
  Target
} from "lucide-react";
import { AnimatedCursor } from "@/components/animated-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { Nav } from "@/components/nav";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Counter } from "@/components/ui/counter";
import { MouseLight } from "@/components/ui/mouse-light";
import { TypingCycle } from "@/components/typing-cycle";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { ExperiencePopup } from "@/components/experience-popup";
import {
  bioCards,
  caseStudies,
  certifications,
  collaborations,
  contactItems,
  education,
  expertise,
  experiences,
  initiatives,
  profile,
  programs,
  projects,
  publications,
  skills,
  socials,
  stats,
  timeline,
  trainings
} from "@/lib/profile";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-slate-900">
      <LoadingScreen />
      <AnimatedCursor />
      <MouseLight />
      <Nav />
      <ScrollToTop />

      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProgramsSection />
      <CaseStudiesSection />
      <InitiativesSection />
      <ResearchSection />
      <TestimonialsSection />
      <CollaborationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Video background — full width */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/og.svg"
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay + subtle grid for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/55" />
      <div className="absolute inset-0 bg-neural-grid bg-grid-lg opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-teal/15 blur-[120px]" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-24 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16 lg:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Public Health Intelligence
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Designing the future of</span>
            <span className="mt-2 block">
              <TypingCycle
                words={[
                  "community health.",
                  "public health.",
                  "health equity.",
                  "global well-being.",
                  "preventive care."
                ]}
              />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            I&apos;m <span className="text-white font-semibold">{profile.name}</span> — a
            public health professional and healthcare consultant advancing
            evidence-based programs, research, and equitable well-being across Nepal.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan via-pink to-electric px-7 py-3.5 text-sm font-semibold text-white shadow-cyanglow transition hover:shadow-glow-strong"
            >
              <span className="relative z-10">Book a Consultation</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-pink via-cyan to-teal transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan/40 hover:bg-cyan/10"
            >
              Explore Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan/10"
              >
                <Icon className="h-4 w-4 text-slate-700 transition group-hover:text-cyan" />
              </a>
            ))}
            <div className="ml-2 flex items-center gap-2 text-xs text-slate-500">
              <CircleDot className="h-3 w-3 text-emerald-400 animate-pulse" />
              Available for consulting · 2026
            </div>
          </div>
        </Reveal>

        {/* Hero stats */}
        <Reveal delay={0.42}>
          <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`depth-card holo-bg-${i + 1} p-4 backdrop-blur`}
              >
                <stat.icon className="h-4 w-4 text-cyan" />
                <p className="mt-3 text-2xl font-bold text-white">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-cyan transition"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  const [expOpen, setExpOpen] = useState(false);
  return (
    <Section
      id="about"
      bg="bg-section-about"
      eyebrow="About"
      title={
        <>
          A public health leader advancing{" "}
          <span className="gradient-text">evidence-based</span> community well-being.
        </>
      }
      intro="My work spans research, program design, implementation, health systems support, monitoring & evaluation, and health equity advocacy — grounded in field experience across Nepal."
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Portrait + bio card */}
        <Reveal>
          <div className="relative h-full">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan/20 to-teal/10 blur-2xl" />
            <div
              className="relative rounded-3xl p-6 sm:p-8 md:p-10 holographic h-full overflow-hidden border border-cyan/30"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(186,230,253,0.55) 0%, rgba(125,211,252,0.30) 45%, rgba(34,211,238,0.10) 80%), url(/images/medical-mask.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "normal",
                filter: "saturate(1.2) contrast(1.1) hue-rotate(-5deg)"
              }}
            >
              <div className="flex flex-col items-center text-center gap-5 sm:flex-row sm:items-start sm:text-left sm:gap-6">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 rounded-full bg-cyan/30 blur-lg sm:-inset-3" />
                  <img
                    src="/profile-photo.jpeg"
                    alt={profile.name}
                    className="relative h-24 w-24 rounded-full object-cover border-[3px] border-cyan/40 shadow-cyanglow sm:h-28 sm:w-28 md:h-32 md:w-32"
                  />
                  <span className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan to-electric border-[3px] border-white shadow-md sm:h-8 sm:w-8 md:h-9 md:w-9">
                    <BadgeCheck className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{profile.name}</h3>
                  <p className="mt-1.5 text-sm font-medium text-cyan-700">
                    Public Health Professional · Healthcare Consultant
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Research", "Program Design", "Health Equity", "M&E"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[15px] leading-7 text-slate-700">{profile.intro}</p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
                {[
                  { label: "Years", value: "6+" },
                  { label: "Provinces", value: "7" },
                  { label: "Programs", value: "25+" }
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/60 p-3 text-center transition hover:border-cyan/40 hover:bg-cyan/5"
                  >
                    <p className="text-3xl font-bold gradient-text">
                      <Counter value={s.value} />
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setExpOpen(true)}
                  onMouseEnter={() => setExpOpen(true)}
                  className="group relative inline-flex w-56 h-14 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan to-electric px-7 text-base font-semibold tracking-wide text-white shadow-cyanglow transition hover:shadow-glow-strong"
                >
                  <span className="relative z-10">
                    <Briefcase className="inline-block h-5 w-5" />
                  </span>
                  <span className="relative z-10">About Experience</span>
                  <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bio cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bioCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="depth-card bg-card-about group h-full p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-electric/20 border border-cyan/30 text-cyan">
                    <span className="text-base">{card.icon}</span>
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-300">{card.num}</span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">{card.body}</p>
                {card.cta ? (
                  <a
                    href="#contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-electric px-4 py-2.5 text-sm font-bold text-ink shadow-lg shadow-cyan/30 transition hover:scale-105 hover:shadow-xl hover:shadow-cyan/50"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan/40 via-white/5 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education + Timeline */}
      <div
        className="mt-16 grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-2 lg:p-10"
        style={{
          backgroundImage: "url(/images/graduation.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Reveal>
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-slate-900">
              <GraduationCap className="h-5 w-5 text-cyan" />
              Education
            </h3>
            <div className="mt-6 space-y-4">
              {education.map((item, i) => (
                <Reveal key={item.degree} delay={i * 0.06}>
                  <a
                    href={item.url}
                    className="group flex gap-4 rounded-2xl border border-cyan/30 bg-white/40 p-5 shadow-sm backdrop-blur-md transition"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-electric/20 border border-cyan/30 text-sm font-bold text-cyan">
                      {item.logo}
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-slate-900">{item.school}</span>
                      <span className="mt-1 block text-sm text-slate-800">{item.degree}</span>
                      <span className="mt-3 inline-flex rounded-full bg-cyan/20 border border-cyan/40 px-3 py-1 text-xs font-semibold text-cyan">
                        {item.duration}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-cyan" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-cyan/30 bg-white/40 p-6 backdrop-blur-md sm:p-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-slate-900">
              <Target className="h-5 w-5 text-cyan" />
              Journey Timeline
            </h3>
            <div className="relative mt-6 space-y-4 border-l border-cyan/30 pl-6">
              {timeline.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center rounded-full bg-cyan shadow-cyanglow">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    </span>
                    <span className="inline-flex rounded-full bg-cyan/20 border border-cyan/40 px-3 py-1 text-xs font-semibold text-cyan">
                      {item.year}
                    </span>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-800">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <ExperiencePopup
        open={expOpen}
        onClose={() => setExpOpen(false)}
        experiences={experiences}
      />
    </Section>
  );
}

/* ---------- EXPERTISE ---------- */
function ExpertiseSection() {
  const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
    cyan: { text: "text-cyan", bg: "from-cyan/20", border: "border-cyan/30", glow: "shadow-cyanglow" },
    teal: { text: "text-teal", bg: "from-teal/20", border: "border-teal/30", glow: "shadow-tealglow" },
    electric: { text: "text-electric", bg: "from-electric/20", border: "border-electric/30", glow: "" },
    neon: { text: "text-pink", bg: "from-pink/20", border: "border-pink/30", glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]" }
  };

  return (
    <Section
      id="expertise"
      bg="bg-section-expertise"
      eyebrow="Expertise"
      title={
        <>
          Deep capabilities across{" "}
          <span className="gradient-text">public health domains.</span>
        </>
      }
      intro="Core competencies developed through field experience, research, monitoring & evaluation, teaching, and community engagement across Nepal."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item, i) => {
          const c = colorMap[item.color];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image header */}
                <div
                  className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${c.bg} to-transparent`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/95 shadow-lg border ${c.border}`}
                  >
                    <item.icon className={`h-5 w-5 ${c.text}`} />
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Domain
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan transition group-hover:gap-3">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Skills bars */}
      <Reveal>
        <CompetencyChart />
      </Reveal>
    </Section>
  );
}

/* ---------- COMPETENCY CHART ---------- */
function CompetencyChart() {
  const [hovered, setHovered] = useState<string | null>(null);
  const colors = ["#3b82f6","#06b6d4","#14b8a6","#6366f1","#8b5cf6","#ec4899","#f43f5e","#f97316","#eab308","#22c55e"];
  const total = skills.reduce((sum, s) => sum + s.value, 0);

  let startAngle = -90;
  const slices = skills.map((s, i) => {
    const angle = (s.value / total) * 360;
    const endAngle = startAngle + angle;
    const sr = (startAngle * Math.PI) / 180;
    const er = (endAngle * Math.PI) / 180;
    const cx = 200, cy = 200, r = 160;
    const x1 = cx + r * Math.cos(sr);
    const y1 = cy + r * Math.sin(sr);
    const x2 = cx + r * Math.cos(er);
    const y2 = cy + r * Math.sin(er);
    const large = angle > 180 ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    const slice = { path, color: colors[i % colors.length], name: s.name, value: s.value, pct: Math.round((s.value / total) * 100) };
    startAngle = endAngle;
    return slice;
  });

  return (
    <div className="mt-14 glass-card rounded-3xl p-8 holographic">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Core Competencies</h3>
          <p className="mt-1 text-sm text-slate-500">Proficiency built across research, practice, and teaching.</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-cyan">Self-assessed proficiency</span>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Line chart */}
        <div>
          <svg viewBox="0 0 600 380" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {[0,25,50,75,100].map((v) => {
              const y = 280 - v * 2.6;
              return (
                <g key={v}>
                  <line x1="60" y1={y} x2="580" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                  <text x="55" y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400" fontSize="10">{v}%</text>
                </g>
              );
            })}
            <polyline
              points={skills.map((s, i) => {
                const x = 60 + i * (520 / (skills.length - 1));
                const y = 280 - s.value * 2.6;
                return `${x},${y}`;
              }).join(" ")}
              fill="none" stroke="url(#lineGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            />
            {skills.map((s, i) => {
              const x = 60 + i * (520 / (skills.length - 1));
              const y = 280 - s.value * 2.6;
              const isActive = hovered === s.name;
              return (
                <g key={s.name}>
                  <circle cx={x} cy={y} r={isActive ? 7 : 4.5} fill={isActive ? "#3b82f6" : "#1e293b"} stroke="#fff" strokeWidth="2" />
                  <text x={x} y={y - 12} textAnchor="middle" className="text-[10px] fill-slate-700 font-semibold" fontSize="10">{s.value}%</text>
                </g>
              );
            })}
            {skills.map((s, i) => {
              const x = 60 + i * (520 / (skills.length - 1));
              return (
                <text key={s.name} x={x} y="335" textAnchor="end" transform={`rotate(-25, ${x}, 335)`} className="text-[9px] fill-slate-500" fontSize="9">{s.name}</text>
              );
            })}
            <line x1="60" y1="280" x2="580" y2="280" stroke="#cbd5e1" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Pie chart */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-[320px] h-auto">
            {slices.map((slice) => (
              <g key={slice.name}>
                <path
                  d={slice.path}
                  fill={slice.color}
                  opacity={hovered && hovered !== slice.name ? 0.4 : 0.85}
                  stroke="#fff"
                  strokeWidth="2"
                  className="transition-opacity duration-200 cursor-pointer"
                  onMouseEnter={() => setHovered(slice.name)}
                  onMouseLeave={() => setHovered(null)}
                />
              </g>
            ))}
          </svg>
          <div className="mt-4 w-full max-w-sm">
            {slices.map((slice) => {
              const isActive = hovered === slice.name;
              return (
                <div
                  key={slice.name}
                  className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 cursor-pointer ${
                    isActive ? "bg-blue-50 ring-1 ring-blue-200" : ""
                  }`}
                  onMouseEnter={() => setHovered(slice.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-sm shrink-0" style={{ backgroundColor: slice.color }} />
                    <span className={`text-slate-700 ${isActive ? "font-semibold text-blue-700" : ""}`}>{slice.name}</span>
                  </div>
                  <span className={`text-xs ${isActive ? "font-bold text-blue-600" : "text-slate-400"}`}>{slice.pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
function ProjectsSection() {
  return (
    <Section
      id="projects"
      bg="bg-section-projects"
      eyebrow="Projects & Research"
      title={
        <>
          Evidence-based public health{" "}
          <span className="gradient-text">projects & research.</span>
        </>
      }
      intro="Selected projects spanning neglected tropical disease coordination, hospital public health, health economics, and youth-led emergency preparedness."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          return (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25">
                {/* Border glow on hover */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-2 border-blue-400/0 opacity-0 transition-all duration-500 group-hover:border-blue-400/60 group-hover:opacity-100" />

                {/* Image section */}
                <div className="relative h-48 shrink-0 overflow-hidden bg-slate-100">
                  {/* Blue overlay on image only */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-blue-600/80 via-blue-500/30 to-blue-400/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                  />
                  {/* Category badge */}
                  <div className="absolute right-3 top-3 z-30">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400">
                      {project.category}
                    </span>
                  </div>
                  {/* Overlapping icon badge */}
                  <div className="absolute -bottom-6 left-4 z-30">
                    <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-white shadow-lg border border-blue-200 transition-all duration-500 group-hover:bg-blue-600 group-hover:border-blue-400">
                      <project.icon className="h-5 w-5 text-blue-600 transition-all duration-500 group-hover:text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-30 flex flex-1 flex-col px-5 pb-5 pt-9 bg-white transition-all duration-500 group-hover:bg-blue-50">
                  <h3 className="text-lg font-bold leading-tight text-slate-900 transition-all duration-500 group-hover:text-blue-800">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2 group-hover:line-clamp-none transition-all duration-500 group-hover:text-slate-700">{project.summary}</p>
                  {/* Impact tags */}
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 transition-all duration-500 group-hover:border-blue-200">
                    {project.impact.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200/60 bg-blue-50/80 px-2.5 py-1 text-[11px] font-semibold text-blue-700 transition-all duration-500 group-hover:bg-blue-100 group-hover:border-blue-300"
                      >
                        <CheckCircle2 className="h-3 w-3 text-blue-500 transition-all duration-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Certifications as premium icon cards */}
      <Reveal>
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="eyebrow">
              <Award className="h-3.5 w-3.5 text-cyan" />
              Certifications
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => {
              const certColors = [
                { border: "border-cyan/30", bg: "from-cyan/15 to-electric/10", iconBg: "bg-cyan/10", accent: "text-cyan", shadow: "shadow-cyanglow/20" },
                { border: "border-electric/30", bg: "from-electric/15 to-cyan/10", iconBg: "bg-electric/10", accent: "text-electric", shadow: "shadow-blue-500/20" },
                { border: "border-teal/30", bg: "from-teal/15 to-cyan/10", iconBg: "bg-teal/10", accent: "text-teal", shadow: "shadow-tealglow/20" },
              ];
              const cc = certColors[i % certColors.length];
              return (
                <Reveal key={cert.title} delay={i * 0.04}>
                  <a
                    href={cert.link}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border ${cc.border} bg-white/80 p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${cc.shadow}`}
                  >
                    <div className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${cc.bg} border ${cc.border}`}>
                      <Award className={`h-5 w-5 ${cc.accent}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold leading-snug text-slate-900">{cert.title}</h4>
                      <p className="mt-0.5 text-xs font-medium text-slate-500">{cert.issuer}</p>
                    </div>
                    <span className={`shrink-0 rounded-md border ${cc.border} ${cc.iconBg} px-2 py-1 text-[10px] font-bold ${cc.accent}`}>{cert.year}</span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- PROGRAMS ---------- */
const programImages = [
  "/gallery/field-visits.jpg",
  "/gallery/public-health.jpg",
  "/gallery/community.jpg",
  "/gallery/workshops.jpg"
];

function ProgramsSection() {
  return (
    <Section
      id="programs"
      bg="bg-section-programs"
      eyebrow="Programs & Campaigns"
      title={
        <>
          Healthcare programs &{" "}
          <span className="gradient-text">awareness campaigns.</span>
        </>
      }
      intro="Field-driven programs and campaigns designed to translate public health priorities into measurable community impact."
    >
      <div className="space-y-8">
        {programs.map((program, i) => (
          <Reveal key={program.title} delay={i * 0.08}>
            <div className="group grid gap-6 md:grid-cols-2 md:items-center">
              {/* Left: Image */}
              <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent z-10" />
                <img
                  src={programImages[i]}
                  alt={program.title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 md:h-72"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan/20" />
              </div>
              {/* Right: Content */}
              <div className={`space-y-3 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                    {program.year}
                  </span>
                  <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="text-sm leading-7 text-slate-500 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {program.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex items-center gap-1.5 rounded-2xl border border-cyan/20 bg-cyan/5 px-3.5 py-2 text-xs font-semibold text-cyan transition-all duration-300 opacity-80 group-hover:opacity-100"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Training */}
      <Reveal>
        <div className="mt-16">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900">
            <GraduationCap className="h-5 w-5 text-cyan" />
            Specialized Training
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainings.map((training, index) => (
              <Reveal key={training.title} delay={index * 0.04}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-card-programs shadow-sm p-5 transition">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/20 border border-teal/30 text-teal">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold leading-snug text-slate-900">{training.title}</h4>
                      <p className="mt-1 text-xs text-slate-500">{training.provider}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 border border-teal/30 px-2.5 py-0.5 text-[11px] font-semibold text-teal">
                      {training.year}
                    </span>
                    <span className="text-[11px] text-slate-400">{training.type}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- CASE STUDIES ---------- */
function CaseStudiesSection() {
  return (
    <Section
      id="case-studies"
      bg="bg-section-cases"
      eyebrow="Case Studies"
      title={
        <>
          Success stories in{" "}
          <span className="gradient-text">public health impact.</span>
        </>
      }
      intro="A closer look at the methodology, interventions, and outcomes behind selected programs."
    >
      <div className="space-y-10">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={i * 0.08}>
            <article className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-md transition-all duration-500 hover:shadow-2xl">
              {/* Header strip */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-gradient-to-r from-cyan/5 via-electric/5 to-teal/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-cyan/20 blur-md" />
                    <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/15 to-electric/10">
                      <study.icon className="h-5 w-5 text-cyan" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan">
                      Case Study · 0{i + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {study.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Success
                </span>
              </div>

              {/* Pipeline */}
              <div className="grid gap-0 md:grid-cols-3">
                <PipelineStep
                  index={1}
                  label="Challenge"
                  body={study.challenge}
                  color="cyan"
                  isLast={false}
                />
                <PipelineStep
                  index={2}
                  label="Approach"
                  body={study.approach}
                  color="electric"
                  isLast={false}
                />
                <PipelineStep
                  index={3}
                  label="Outcome"
                  body={study.outcome}
                  color="teal"
                  isLast
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PipelineStep({
  index,
  label,
  body,
  color,
  isLast
}: {
  index: number;
  label: string;
  body: string;
  color: "cyan" | "electric" | "teal";
  isLast: boolean;
}) {
  const colorMap = {
    cyan: { dot: "bg-cyan", text: "text-cyan", border: "border-cyan/30" },
    electric: {
      dot: "bg-electric",
      text: "text-electric",
      border: "border-electric/30"
    },
    teal: { dot: "bg-teal", text: "text-teal", border: "border-teal/30" }
  };
  const c = colorMap[color];

  return (
    <div
      className={`relative p-6 ${
        !isLast
          ? "border-b border-slate-200 md:border-b-0 md:border-r"
          : ""
      }`}
    >
      {/* Connector arrow (md+) */}
      {!isLast && (
        <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-slate-300 to-transparent md:block" />
      )}

      <div className="flex items-center gap-2">
        <span
          className={`grid h-6 w-6 place-items-center rounded-full ${c.dot} text-[10px] font-bold text-white shadow-sm`}
        >
          {index}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${c.text}`}
        >
          {label}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}

/* ---------- INITIATIVES ---------- */
function InitiativesSection() {
  return (
    <section
      id="initiatives"
      className="relative overflow-hidden bg-section-initiatives"
    >
      {/* Full-width digital health background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.55) 0%, rgba(224,242,254,0.35) 50%, rgba(186,230,253,0.20) 100%), url(/images/digital-health-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "normal"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl section-pad">
        <Reveal>
          <div className="mb-8 max-w-3xl sm:mb-12">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              Public Awareness
            </span>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-5xl text-slate-900">
              Public awareness{" "}
              <span className="gradient-text">initiatives & impact.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Initiatives that translate evidence into accessible health knowledge and lasting community outcomes. Hover any card to reveal the full story.
            </p>
          </div>
        </Reveal>
      {/* Single row of 4 compact cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {initiatives.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-2xl">
              {/* Image header */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/95 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-cyan-700">
                  <item.icon className="h-3 w-3" />
                  Initiative
                </div>
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50/95 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
                  {item.year}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-medium leading-5 text-cyan-700">
                  {item.summary}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/5 px-2 py-0.5 text-[10px] font-bold text-cyan">
                    {item.metric}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-cyan transition group-hover:gap-2">
                    Details
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Hover pop-up overlay */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-3 rounded-2xl bg-gradient-to-br from-ink/95 via-ink/92 to-electric/40 p-5 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan/40 bg-cyan/10 backdrop-blur">
                  <item.icon className="h-5 w-5 text-cyan" />
                </div>
                <div className="text-white">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan">
                    Full Story
                  </p>
                  <h4 className="mt-1.5 text-lg font-semibold leading-tight">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[11px] leading-5 text-white/85">
                    {item.detail}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan/40 bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-cyan">
                      {item.metric}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}

/* ---------- RESEARCH / PUBLICATIONS ---------- */
function ResearchSection() {
  return (
    <Section
      id="research"
      bg="bg-section-research"
      eyebrow="Research & Publications"
      title={
        <>
          Peer-reviewed research &{" "}
          <span className="gradient-text">thought leadership.</span>
        </>
      }
      intro="Publications, working papers, and reports advancing evidence in public health, NTDs, health systems, and youth engagement."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.05}>
            <article className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-card-research shadow-sm p-5 transition">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-electric/20 border border-cyan/30">
                <FileText className="h-5 w-5 text-cyan" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-cyan">
                    {pub.type}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">{pub.year}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900">{pub.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{pub.venue}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-cyan" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function TestimonialsSection() {
  const circularTestimonials = [
    {
      quote:
        "Nishu brings a rare balance of public health insight, community connection, and implementation discipline. A trusted partner for evidence-based programs across South Asia.",
      name: "Dr. Anjali Sharma",
      designation: "Director of Programs, Global Health NGO",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1368&auto=format&fit=crop"
    },
    {
      quote:
        "A thoughtful leader who understands how to build trust across teams, communities, and partner networks. Their work consistently elevates public health outcomes in Nepal.",
      name: "Rajesh Karki",
      designation: "Community Health Coordinator, Nepal",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop"
    },
    {
      quote:
        "An evidence-driven public health professional with the rare ability to translate data into community action. A pleasure to collaborate with on field research in Kathmandu Valley.",
      name: "Dr. Maya Pradhan",
      designation: "Senior Research Fellow, Public Health",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1368&auto=format&fit=crop"
    },
    {
      quote:
        "Professional, composed, and deeply committed to creating value that lasts beyond a single project. Their strategic thinking shaped our health system priorities in eastern Nepal.",
      name: "Suresh Adhikari",
      designation: "Hospital Administrator, Chatara Hospital",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1368&auto=format&fit=crop"
    }
  ];

  return (
    <Section
      id="testimonials"
      bg="bg-section-testimonials"
      eyebrow="Testimonials"
      title={
        <>
          Voices of{" "}
          <span className="gradient-text">collaboration.</span>
        </>
      }
      intro="Reflections from partners, mentors, and colleagues across the public health ecosystem."
    >
      <Reveal>
        <CircularTestimonials
          testimonials={circularTestimonials}
          autoplay={true}
          colors={{
            name: "#0f172a",
            designation: "#0891b2",
            testimony: "#475569",
            arrowBackground: "#0891b2",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#0e7490"
          }}
          fontSizes={{
            name: "1.75rem",
            designation: "0.95rem",
            quote: "1.125rem"
          }}
        />
      </Reveal>
    </Section>
  );
}

/* ---------- COLLABORATIONS ---------- */
function CollaborationsSection() {
  return (
    <section id="collaborations" className="relative overflow-hidden bg-section-collaborations">
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-16 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              Partners & Collaborations
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-balance sm:text-5xl text-white">
              Trusted by{" "}
              <span className="gradient-text">global health leaders.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Working alongside respected institutions, governments, and NGOs to advance public health outcomes.
            </p>
          </div>
        </Reveal>

        {/* Single marquee — big logos, no boxes, no labels */}
        <div className="relative overflow-hidden py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />
          <div className="flex w-max animate-ticker">
            {[...collaborations, ...collaborations].map((collab, i) => (
              <div
                key={`r1-${collab.name}-${i}`}
                className="flex shrink-0 items-center justify-center px-12"
              >
                <img
                  src={collab.logo}
                  alt={collab.name}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-28 object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactSection() {
  return (
    <Section
      id="contact"
      bg="bg-section-contact"
      eyebrow="Contact & Consultation"
      title={
        <>
          Start a high-signal{" "}
          <span className="gradient-text">conversation.</span>
        </>
      }
      intro="Available for consulting, advisory work, research collaborations, speaking engagements, and program partnerships in public health and healthcare."
    >
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-4">
            {contactItems.map(({ label, value, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-card-contact shadow-sm p-5 transition"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-electric/20 border border-cyan/30 text-cyan transition group-hover:shadow-cyanglow">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:text-cyan" />
              </a>
            ))}

            <div className="mt-6 rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 to-electric/5 p-6">
              <div className="flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-300">Booking open</span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-slate-900">Schedule a consultation</h4>
              <p className="mt-2 text-sm text-slate-500">
                30-minute discovery call to discuss your public health program, research, or advisory need.
              </p>
              <a
                href={profile.calendar}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-electric px-5 py-2.5 text-sm font-semibold text-white shadow-cyanglow transition hover:shadow-glow-strong"
              >
                <CalendarDays className="h-4 w-4" />
                Book a meeting
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="rounded-3xl border border-slate-200/80 bg-card-contact shadow-sm p-7 holographic">
            <h3 className="text-xl font-semibold text-slate-900">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500">Tell me about your project or program — I&apos;ll respond within 48 hours.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-cyan">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan/50 focus:shadow-cyanglow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-cyan">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={120}
                  inputMode="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan/50 focus:shadow-cyanglow"
                  placeholder="you@org.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="org" className="text-[10px] uppercase tracking-[0.2em] text-cyan">Organization</label>
              <input
                id="org"
                name="organization"
                autoComplete="organization"
                maxLength={150}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan/50 focus:shadow-cyanglow"
                placeholder="NGO, hospital, university..."
              />
            </div>
            <div className="mt-4">
              <label htmlFor="interest" className="text-[10px] uppercase tracking-[0.2em] text-cyan">Interest</label>
              <select
                id="interest"
                name="interest"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan/50"
              >
                <option>Program design consulting</option>
                <option>Research collaboration</option>
                <option>Speaking engagement</option>
                <option>M&E and capacity building</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-cyan">Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                className="mt-1 min-h-32 w-full rounded-xl border border-white/10 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan/50 focus:shadow-cyanglow"
                placeholder="Briefly describe your project or question..."
              />
            </div>
            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-electric px-6 py-3 text-sm font-semibold text-white shadow-cyanglow transition hover:shadow-glow-strong"
            >
              Send Message
              <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a1a3a] via-[#0e2354] to-[#0a1a3a] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-electric/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      {/* Animated grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top: Big brand + tagline */}
        <div className="flex flex-col items-start gap-6 border-b border-cyan/20 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-cyan/40 blur-md" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-electric border border-cyan/50 shadow-lg">
                  <Stethoscope className="h-5 w-5 text-white" />
                </span>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">{profile.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
                  Public Health · Healthcare
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Designing evidence-based health programs, advancing research, and strengthening community
              well-being through data-driven public health leadership.
            </p>
          </div>

          {/* Newsletter form */}
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                id="newsletter"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={120}
                className="w-full rounded-full border border-cyan/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-md transition focus:border-cyan focus:bg-white/15"
                placeholder="Subscribe to insights"
              />
            </div>
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-electric px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-cyan/30 transition hover:scale-105 hover:shadow-xl hover:shadow-cyan/50"
            >
              Join
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Middle: Link columns */}
        <div className="grid gap-10 py-10 md:grid-cols-4">
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              <span className="h-px w-6 bg-cyan" />
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Expertise", href: "#expertise" },
                { label: "Projects", href: "#projects" },
                { label: "Programs", href: "#programs" },
                { label: "Research", href: "#research" },
                { label: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-cyan"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan/40 transition group-hover:w-4 group-hover:bg-cyan" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              <span className="h-px w-6 bg-cyan" />
              Specializations
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Public Health Strategy</li>
              <li>Epidemiology & Research</li>
              <li>Program Design</li>
              <li>Monitoring & Evaluation</li>
              <li>Health Equity</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              <span className="h-px w-6 bg-cyan" />
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative grid h-11 w-11 place-items-center rounded-xl border border-cyan/30 bg-white/5 text-cyan transition hover:border-cyan hover:bg-cyan hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/50">
              {profile.location}
              <br />
              {profile.email}
            </p>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              <span className="h-px w-6 bg-cyan" />
              Get in touch
            </h4>
            <a
              href="#contact"
              className="group block rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 to-electric/5 p-4 transition hover:border-cyan/60"
            >
              <p className="text-sm font-semibold text-white">Let&apos;s collaborate</p>
              <p className="mt-1 text-xs text-white/60">
                Open for consulting, research partnerships, and program advisory.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-cyan">
                Book a meeting
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom: Big signature + copyright */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-cyan/20 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © 2026 {profile.name}. All rights reserved. Built with care for public health.
          </p>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.2em] gradient-text sm:text-3xl">
            Healthy Communities
          </p>
        </div>
      </div>
    </footer>
  );
}
