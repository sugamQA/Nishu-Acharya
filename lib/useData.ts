"use client";
/**
 * Client-side data hook.
 *
 * Returns the current data shape. If NEXT_PUBLIC_API_BASE is set,
 * fetches from the cPanel API on mount AND when the page becomes visible,
 * patches the live module-level objects so existing imports also see the
 * fresh data, and triggers a re-render.
 *
 * Falls back to the static lib/profile.ts data if no API is configured
 * or if the request fails.
 */

import { useEffect, useState } from "react";
import * as Lucide from "lucide-react";
import * as P from "./profile";
import { fetchAll, HAS_REMOTE_API, ApiAll } from "./api";

const ICON_CACHE: Record<string, any> = {};
function getIcon(name: string): any {
  if (!name) return Lucide.Circle;
  if (ICON_CACHE[name]) return ICON_CACHE[name];
  const found = (Lucide as any)[name];
  ICON_CACHE[name] = found || Lucide.Circle;
  return ICON_CACHE[name];
}

export function useData() {
  // Bumping this counter forces a re-render after data is patched
  const [, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  useEffect(() => {
    if (!HAS_REMOTE_API) return;

    const loadData = async () => {
      try {
        const api = await fetchAll(true); // force fresh fetch
        applyApiToModule(api);
        refresh();
      } catch (e) {
        console.error("[useData] failed to fetch, using fallback", e);
      }
    };

    // Load immediately
    loadData();

    // Refresh when the tab becomes visible again (in case admin updated while away)
    const onVisibility = () => {
      if (document.visibilityState === 'visible') loadData();
    };
    document.addEventListener('visibilitychange', onVisibility);

    // Refresh every 60s as a safety net
    const interval = setInterval(loadData, 60_000);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      clearInterval(interval);
    };
  }, []);
}

function applyApiToModule(api: ApiAll) {
  const p = api.profile || {};
  Object.assign(P.profile, {
    name: p.name || P.profile.name,
    headline: p.headline ?? P.profile.headline,
    intro: p.intro ?? P.profile.intro,
    location: p.location ?? P.profile.location,
    email: p.email ?? P.profile.email,
    linkedin: p.linkedin ?? P.profile.linkedin,
    facebook: p.facebook ?? P.profile.facebook,
    instagram: p.instagram ?? P.profile.instagram,
    github: p.github ?? P.profile.github,
    twitter: p.twitter ?? P.profile.twitter,
    calendar: p.calendar ?? P.profile.calendar,
    typingWords: (p.typing_words && p.typing_words.length ? p.typing_words : P.profile.typingWords),
  });

  const setArr = <T,>(arr: T[], items: T[]) => { arr.length = 0; arr.push(...items); };

  setArr(P.socials, (api.socials || []).map((s: any) => ({ label: s.label, href: s.href, icon: getIcon(s.icon) })));
  setArr(P.stats, (api.stats || []).map((s: any) => ({ value: s.value, label: s.label, icon: getIcon(s.icon) })));
  setArr(P.bioCards, (api.bio_cards || []).map((b: any) => ({ title: b.title, body: b.body, icon: b.icon, num: b.num, cta: b.cta })));
  setArr(P.timeline, (api.timeline || []).map((t: any) => ({ year: t.year, title: t.title, body: t.body })));
  setArr(P.expertise, (api.expertise || []).map((e: any) => ({ title: e.title, description: e.description, icon: getIcon(e.icon), color: e.color || "cyan", image: e.image })));
  setArr(P.skills, (api.skills || []).map((s: any) => ({ name: s.name, value: Number(s.value) })));
  setArr(P.projects, (api.projects || []).map((x: any) => ({
    title: x.title, category: x.category, summary: x.summary, impact: x.impact || [], icon: getIcon(x.icon), image: x.image, color: x.color || "cyan",
  })));
  setArr(P.programs, (api.programs || []).map((x: any) => ({
    year: x.year, title: x.title, category: x.category, description: x.description, bullets: x.bullets || [],
  })));
  setArr(P.caseStudies, (api.case_studies || []).map((c: any) => ({
    title: c.title, challenge: c.challenge, approach: c.approach, outcome: c.outcome, icon: getIcon(c.icon),
  })));
  setArr(P.initiatives, (api.initiatives || []).map((x: any) => ({
    title: x.title, summary: x.summary, detail: x.detail, metric: x.metric, year: x.year, icon: getIcon(x.icon), image: x.image,
  })));
  setArr(P.publications, (api.publications || []).map((x: any) => ({
    title: x.title, venue: x.venue, year: x.year, type: x.type,
  })));
  setArr(P.collaborations, (api.collaborations || []).map((c: any) => ({ name: c.name, logo: c.logo })));
  setArr(P.education, (api.education || []).map((e: any) => ({
    school: e.school, degree: e.degree, duration: e.duration, logo: e.logo, url: e.url,
  })));
  setArr(P.experiences, (api.experience || []).map((e: any) => ({
    company: e.company, position: e.position, duration: e.duration, location: e.location,
    type: e.type, logo: e.logo, companyUrl: e.company_url, courses: e.courses || [],
    responsibilities: e.responsibilities || [], achievements: e.achievements || [],
  })));
  setArr(P.certifications, (api.certifications || []).map((c: any) => ({
    title: c.title, issuer: c.issuer, year: c.year, credential: c.credential, link: c.link,
  })));
  setArr(P.trainings, (api.trainings || []).map((t: any) => ({ title: t.title, provider: t.provider, year: t.year, type: t.type })));
  setArr(P.testimonials, (api.testimonials || []).map((t: any) => ({ quote: t.quote, name: t.name, role: t.role, rating: Number(t.rating || 5) })));
  setArr(P.blogPosts, (api.blog_posts || []).map((b: any) => ({
    title: b.title, excerpt: b.excerpt, date: b.published_at, readTime: b.read_time, category: b.category,
  })));

  P.contactItems.length = 0;
  if (P.profile.email) P.contactItems.push({ label: "Email", value: P.profile.email, icon: Lucide.Mail, href: `mailto:${P.profile.email}` });
  if (P.profile.linkedin) P.contactItems.push({ label: "LinkedIn", value: "linkedin.com/in/nishuacharya", icon: Lucide.Linkedin, href: P.profile.linkedin });
  if (P.profile.location) P.contactItems.push({ label: "Location", value: P.profile.location, icon: Lucide.MapPin, href: "#" });
  if (P.profile.calendar) P.contactItems.push({ label: "Calendar", value: "Book a meeting", icon: Lucide.CalendarDays, href: P.profile.calendar });
}
