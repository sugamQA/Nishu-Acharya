import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  intro,
  className,
  bg
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  intro?: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className={`relative section-pad ${bg ?? ""} ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8 max-w-3xl sm:mb-12">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              {eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-5xl text-slate-900">
              {title}
            </h2>
            {intro ? (
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{intro}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
