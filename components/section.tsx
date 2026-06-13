import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  intro
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blush dark:text-blush">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">{title}</h2>
            {intro ? <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{intro}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
