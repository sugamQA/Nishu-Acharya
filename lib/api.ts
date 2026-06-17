/**
 * API client for the cPanel-hosted PHP backend.
 *
 * Set NEXT_PUBLIC_API_BASE in your .env (e.g. https://nishuacharya.com.np/api)
 * When unset, the frontend falls back to the local lib/profile.ts static data,
 * so local dev still works.
 */

const RAW = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
export const API_BASE = RAW;
export const HAS_REMOTE_API = RAW.length > 0;

export type ApiAll = {
  profile: any;
  socials: any[];
  stats: any[];
  bio_cards: any[];
  timeline: any[];
  expertise: any[];
  skills: any[];
  projects: any[];
  programs: any[];
  case_studies: any[];
  initiatives: any[];
  publications: any[];
  collaborations: any[];
  education: any[];
  experience: any[];
  certifications: any[];
  trainings: any[];
  testimonials: any[];
  blog_posts: any[];
};

let memCache: { data: ApiAll; at: number } | null = null;
const TTL = 10_000; // 10s

export async function fetchAll(force = false): Promise<ApiAll> {
  if (!HAS_REMOTE_API) {
    const p = await import("./profile");
    return toApiShape(p);
  }
  if (!force && memCache && Date.now() - memCache.at < TTL) return memCache.data;
  const r = await fetch(`${API_BASE}/index.php?resource=all&t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`API ${r.status}`);
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || "API error");
  memCache = { data: j.data, at: Date.now() };
  return j.data;
}

export async function submitContact(payload: {
  name: string;
  email: string;
  organization?: string;
  interest?: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!HAS_REMOTE_API) {
    // Dev fallback: just log
    console.log("[contact] would submit:", payload);
    return { ok: true };
  }
  const r = await fetch(`${API_BASE}/contact.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const j = await r.json().catch(() => ({ ok: false, error: "Network error" }));
  return j;
}

// Adapter: convert the existing lib/profile.ts export into the ApiAll shape.
import * as P from "./profile";
function toApiShape(p: typeof P): ApiAll {
  return {
    profile: {
      name: p.profile.name,
      headline: p.profile.headline,
      intro: p.profile.intro,
      location: p.profile.location,
      email: p.profile.email,
      phone: null,
      avatar_url: null,
      resume_url: null,
      linkedin: p.profile.linkedin,
      facebook: p.profile.facebook,
      instagram: p.profile.instagram,
      github: p.profile.github,
      twitter: p.profile.twitter,
      calendar: p.profile.calendar,
      website: null,
      typing_words: p.profile.typingWords,
    },
    socials: p.socials.map((s) => ({ label: s.label, href: s.href, icon: s.icon.name, sort_order: 0, is_active: 1 })),
    stats: p.stats.map((s, i) => ({ value: s.value, label: s.label, icon: s.icon.name, sort_order: i })),
    bio_cards: p.bioCards.map((b, i) => ({ title: b.title, body: b.body, icon: b.icon, num: b.num, cta: b.cta || null, sort_order: i })),
    timeline: p.timeline.map((t, i) => ({ year: t.year, title: t.title, body: t.body, sort_order: i })),
    expertise: p.expertise.map((e, i) => ({ title: e.title, description: e.description, icon: e.icon.name, color: e.color, image: e.image, sort_order: i })),
    skills: p.skills.map((s, i) => ({ name: s.name, value: s.value, sort_order: i })),
    projects: p.projects.map((x, i) => ({
      title: x.title, category: x.category, summary: x.summary,
      impact: x.impact, icon: x.icon.name, image: x.image, color: x.color, sort_order: i,
    })),
    programs: p.programs.map((x, i) => ({
      year: x.year, title: x.title, category: x.category, description: x.description,
      bullets: x.bullets, image: null, sort_order: i,
    })),
    case_studies: p.caseStudies.map((c, i) => ({
      title: c.title, challenge: c.challenge, approach: c.approach, outcome: c.outcome,
      icon: c.icon.name, sort_order: i,
    })),
    initiatives: p.initiatives.map((x, i) => ({
      title: x.title, summary: x.summary, detail: x.detail, metric: x.metric, year: x.year,
      icon: x.icon.name, image: x.image, sort_order: i,
    })),
    publications: p.publications.map((x, i) => ({
      title: x.title, venue: x.venue, year: x.year, type: x.type, link: null, sort_order: i,
    })),
    collaborations: p.collaborations.map((c, i) => ({ name: c.name, logo: c.logo, link: null, sort_order: i })),
    education: p.education.map((e, i) => ({
      school: e.school, degree: e.degree, duration: e.duration, logo: e.logo, url: e.url, sort_order: i,
    })),
    experience: p.experiences.map((e, i) => ({
      company: e.company, position: e.position, duration: e.duration, location: e.location,
      type: e.type, logo: e.logo, company_url: e.companyUrl || null,
      courses: e.courses || [], responsibilities: e.responsibilities, achievements: e.achievements,
      sort_order: i,
    })),
    certifications: p.certifications.map((c, i) => ({
      title: c.title, issuer: c.issuer, year: c.year, credential: c.credential, link: c.link, sort_order: i,
    })),
    trainings: p.trainings.map((t, i) => ({
      title: t.title, provider: t.provider, year: t.year, type: t.type, sort_order: i,
    })),
    testimonials: p.testimonials.map((t, i) => ({
      quote: t.quote, name: t.name, role: t.role, avatar_url: null, rating: t.rating, sort_order: i,
    })),
    blog_posts: p.blogPosts.map((b, i) => ({
      id: i, title: b.title, excerpt: b.excerpt, category: b.category, cover_image: null,
      published_at: b.date, read_time: b.readTime,
    })),
  };
}
