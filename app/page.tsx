import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  Send,
  Sparkles
} from "lucide-react";
import { AboutSection } from "@/components/about-section";
import { AnimatedCursor } from "@/components/animated-cursor";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero-shadcnui";
import { LoadingScreen } from "@/components/loading-screen";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SkillsFeatureSection } from "@/components/ui/skills-feature-section";
import { TypingText } from "@/components/typing-text";
import {
  blogPosts,
  certifications,
  contactItems,
  experiences,
  featuredWork,
  impact,
  profile,
  skills,
  socials,
  testimonials,
  trainings
} from "@/lib/profile";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-executive-mesh">
      <LoadingScreen />
      <AnimatedCursor />
      <Nav />
      <section id="home" className="mt-[4rem]"><Hero /></section>
      <AboutSection />
      <Experience />
      <Skills />
      <Certifications />
      <Training />
      <CommunityImpact />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <GlowyWavesHero>
      <video className="fixed inset-0 w-full h-full object-cover opacity-70 -z-10" autoPlay muted loop>
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4" type="video/mp4" />
      </video>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 dark:border-border/60 dark:bg-background/70 dark:text-foreground/80">
            <Sparkles className="h-4 w-4 text-blush" aria-hidden="true" />
            Public Health Portfolio
          </div>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blush via-blush to-sky bg-clip-text text-transparent">
              {profile.name.split(" ")[0]}
            </span>{" "}
            <span className="bg-gradient-to-r from-sky via-blush to-rose bg-clip-text text-transparent">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-foreground/70 md:text-2xl">
            {profile.headline}
          </p>
          <p className="mb-6 max-w-2xl text-base text-foreground/60">
            {profile.intro}
          </p>
          <div className="mb-6 text-2xl font-semibold text-foreground/80 sm:text-3xl">
            <TypingText words={profile.typingWords} />
          </div>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-blush px-8 py-3 text-sm font-semibold text-white shadow-roseglow transition hover:-translate-y-0.5 uppercase tracking-[0.2em]">
              View Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-8 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70 uppercase tracking-[0.2em]">
              Connect <ExternalLink className="h-4 w-4" />
            </a>
            <a href="/Nishu-Acharya-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-8 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70 uppercase tracking-[0.2em]">
              Download Resume <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-border/40 bg-background/60 backdrop-blur transition hover:-translate-y-1 hover:text-blush">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-[430px]">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blush/20 via-sky/20 to-signal/20 blur-2xl" />
          <div className="relative rounded-[1.75rem] luxury-border p-8 shadow-luxury">
            <div className="mx-auto grid h-40 w-40 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-blush/20 via-white/80 to-sky/25 p-2 shadow-luxury dark:via-white/10 sm:h-48 sm:w-48">
              <img
                src="/profile-photo.jpeg"
                alt="Nishu Acharya"
                className="h-full w-full rounded-full object-cover object-center ring-4 ring-white/80 dark:ring-white/15"
              />
            </div>
            <div className="mt-8 rounded-2xl glass p-5 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">Public Health Focus</p>
              <p className="mt-2 font-semibold">Research, program design, implementation, and health equity.</p>
            </div>
          </div>
        </div>
      </div>
    </GlowyWavesHero>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-2 flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blush/20 to-sky/20 text-blush">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blush">Experience</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative">
            <div className="absolute -left-2 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blush via-sky to-transparent opacity-40" />
            <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl pl-6">
              Public health experience{" "}
              <span className="bg-gradient-to-r from-blush via-blush to-sky bg-clip-text text-transparent">
                across teaching, hospitals, NTD programs,
              </span>{" "}
              M&amp;E, and youth engagement.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 pl-6 border-l-2 border-blush/30">
            A LinkedIn-informed timeline showing roles, organizations, durations, locations, courses, responsibilities, and evidence of applied health leadership.
          </p>
        </Reveal>
      <div className="relative mt-12">
        <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-blush/40 via-sky/30 to-transparent hidden md:block" />
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${index}`} delay={index * 0.08}>
              <div className="relative md:pl-16">
                <div className="absolute left-[13px] top-8 z-10 hidden h-5 w-5 rounded-full border-2 border-blush bg-white shadow-lg shadow-blush/20 md:block dark:bg-ink" />
                <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blush/10 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <div className="absolute right-0 top-0 h-24 w-48 rounded-bl-[4rem] bg-gradient-to-bl from-blush/[0.04] to-transparent" />
                  <div className="relative">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blush/20 to-sky/20 text-sm font-bold text-blush shadow-sm">
                          {item.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold">{item.position}</h3>
                          <p className="mt-1 text-slate-600 dark:text-slate-300">
                            {item.companyUrl ? (
                              <a href={item.companyUrl} className="font-medium text-blush hover:text-rose">
                                {item.company}
                              </a>
                            ) : (
                              <span className="font-medium text-blush">{item.company}</span>
                            )}
                            <span className="mx-2">·</span>
                            {item.type}
                          </p>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3.5 w-3.5 inline" />
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-blush/10 to-sky/10 px-4 py-2 text-xs font-semibold text-blush ring-1 ring-blush/20">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.duration}
                      </span>
                    </div>
                    {"courses" in item && item.courses ? (
                      <div className="mt-6 rounded-2xl bg-gradient-to-r from-blush/[0.03] to-sky/[0.03] p-5 ring-1 ring-blush/10">
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blush">Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course) => (
                            <span key={course} className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl bg-white/40 p-5 ring-1 ring-slate-200/60 dark:bg-white/[0.02] dark:ring-white/5">
                        <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blush">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                          {item.responsibilities.map((line) => (
                            <li key={line} className="flex gap-2 text-sm leading-6">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush/40" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-white/40 p-5 ring-1 ring-slate-200/60 dark:bg-white/[0.02] dark:ring-white/5">
                        <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blush">
                          Achievements
                        </h4>
                        <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                          {item.achievements.map((line) => (
                            <li key={line} className="flex gap-2 text-sm leading-6">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky/40" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <SkillsFeatureSection
      skills={skills}
      eyebrow="Skills"
      title="Public health capabilities with research and implementation depth."
      intro="Core competencies developed through field experience, research, M&E, teaching, and community engagement across Nepal."
    />
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Professional certifications & training in public health and global health leadership." intro="Verified credentials from leading institutions and hands-on training across research, M&E, health systems, epidemiology, project management, and social inclusion.">
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blush/10 text-blush">
            <BadgeCheck className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-semibold">Certifications</h3>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.04}>
            <a
              href={cert.link}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush/10 dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[2rem] bg-gradient-to-bl from-blush/[0.04] to-transparent" />
              <div className="relative flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blush/20 to-sky/20 text-blush">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </div>
              </div>
              <div className="relative mt-auto flex items-center justify-between pt-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-blush/10 px-2.5 py-0.5 text-[11px] font-semibold text-blush">
                  {cert.year}
                </span>
                <span className="text-[11px] text-slate-400 transition group-hover:text-blush">{cert.credential}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Training() {
  return (
    <Section id="training" eyebrow="Training" title="Hands-on training in public health research, data, and program delivery." intro="Practical skill-building across health emergency response, qualitative research, data analysis, child health, and communication for development.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainings.map((training, index) => (
          <Reveal key={training.title} delay={index * 0.04}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky/10 dark:border-white/10 dark:bg-white/5">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[2rem] bg-gradient-to-bl from-sky/[0.04] to-transparent" />
              <div className="relative flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky/20 to-blush/20 text-sky">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{training.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{training.provider}</p>
                </div>
              </div>
              <div className="relative mt-auto flex items-center justify-between pt-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky">
                  {training.year}
                </span>
                <span className="text-[11px] text-slate-400">{training.type}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


function CommunityImpact() {
  return (
    <Section id="impact" eyebrow="Community Impact" title="Health education, youth empowerment, and access to well-being.">
      <div className="grid gap-6 lg:grid-cols-3">
        {impact.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="overflow-hidden rounded-3xl glass shadow-luxury">
              <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const orbitalData = [
    { id: 1, title: "Recognition", date: "2024", content: "Awarded for outstanding contributions to public health research and community programming.", category: "Honors", icon: "Award", relatedIds: [2, 5], status: "completed" as const, energy: 100 },
    { id: 2, title: "Leadership", date: "2023-2025", content: "Led multi-stakeholder health programs across NTD coordination, M&E, and institutional capacity building.", category: "Leadership", icon: "Network", relatedIds: [1, 3, 4], status: "completed" as const, energy: 95 },
    { id: 3, title: "Speaking Events", date: "2023-2025", content: "Invited speaker at public health conferences, university guest lectures, and community health forums.", category: "Engagement", icon: "Megaphone", relatedIds: [2, 4], status: "in-progress" as const, energy: 75 },
    { id: 4, title: "Certifications", date: "2022-2024", content: "Professional credentials from Johns Hopkins, WHO, UN Women, and leading global health institutions.", category: "Credentials", icon: "GraduationCap", relatedIds: [2, 3, 5], status: "completed" as const, energy: 90 },
    { id: 5, title: "Media", date: "2023-2025", content: "Featured in public health publications, research reports, and community health awareness campaigns.", category: "Outreach", icon: "Sparkles", relatedIds: [1, 4, 6], status: "completed" as const, energy: 80 },
    { id: 6, title: "Awards", date: "2024", content: "Recognized for excellence in health program implementation and evidence-based community impact.", category: "Honors", icon: "Award", relatedIds: [1, 5], status: "pending" as const, energy: 60 },
  ];

  return (
    <Section id="achievements" eyebrow="Achievements" title="Credibility across public health, research, teaching, and community action.">
      <RadialOrbitalTimeline timelineData={orbitalData} />
    </Section>
  );
}

function Gallery() {
  const items = [
    { name: "Public Health Events", image: "/gallery/public-health.jpg" },
    { name: "Program Workshops", image: "/gallery/workshops.jpg" },
    { name: "Community Events", image: "/gallery/community.jpg" },
    { name: "Teaching Sessions", image: "/gallery/teaching.jpg" },
    { name: "Field Visits", image: "/gallery/field-visits.jpg" },
    { name: "Research Forums", image: "/gallery/research.jpg" },
  ];
  return (
    <Section id="gallery" eyebrow="Photo Gallery" title="Luxury masonry moments for a public-facing profile.">
      <div className="masonry">
        {items.map(({ name, image }, index) => (
          <Reveal key={name} delay={index * 0.04}>
            <div className="overflow-hidden rounded-3xl glass shadow-luxury">
              <div
                className="bg-cover bg-center"
                style={{
                  height: `${index % 2 === 0 ? 280 : 360}px`,
                  backgroundImage: `url(${image})`
                }}
              />
              <div className="p-5">
                <h3 className="font-semibold">{name}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const testimonialImages = [
    "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=600&auto=format&fit=crop",
  ];
  const circularData = testimonials.map((t, i) => ({
    quote: t.quote,
    name: t.name,
    designation: t.role,
    src: testimonialImages[i % testimonialImages.length],
  }));
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Professional recommendations with executive restraint.">
      <div className="flex justify-center">
        <CircularTestimonials
          testimonials={circularData}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#6b7280",
            testimony: "#4b5563",
            arrowBackground: "#d9467b",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#be185d",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Thought leadership across public health, evidence, equity, and community programs.">
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Reveal key={post} delay={index * 0.05}>
            <article className="group flex items-center justify-between gap-5 rounded-3xl border border-slate-200/70 p-6 transition hover:bg-white/50 dark:border-white/10 dark:hover:bg-white/5">
              <h3 className="text-xl font-semibold">{post}</h3>
              <ArrowRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Start a high-signal conversation.">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-4">
            {contactItems.map(({ label, value, icon: Icon, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 rounded-3xl glass p-5 shadow-luxury transition hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="font-semibold">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="rounded-3xl glass p-6 shadow-luxury">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-blush dark:border-white/10 dark:bg-white/5" placeholder="Name" aria-label="Name" />
              <input className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-blush dark:border-white/10 dark:bg-white/5" placeholder="Email" type="email" aria-label="Email" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-blush dark:border-white/10 dark:bg-white/5" placeholder="Subject" aria-label="Subject" />
            <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-blush dark:border-white/10 dark:bg-white/5" placeholder="Message" aria-label="Message" />
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-full bg-blush px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 shadow-roseglow">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-slate-200/70 p-6 dark:border-white/10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Copyright © 2026. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
          {["About", "Experience", "Work", "Impact", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blush">
              {item}
            </a>
          ))}
        </div>
        <form className="flex max-w-sm gap-2">
          <input className="min-w-0 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm outline-none dark:border-white/10 dark:bg-white/5" placeholder="Newsletter email" aria-label="Newsletter email" />
          <button type="button" className="rounded-full bg-blush px-4 py-2 text-sm font-semibold text-white">
            Join
          </button>
        </form>
      </div>
    </footer>
  );
}
