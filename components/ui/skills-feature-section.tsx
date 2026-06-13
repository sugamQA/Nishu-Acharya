"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SkillItem {
  label: string;
  value: number;
}

interface SkillsFeatureSectionProps {
  skills: readonly (readonly [string, number])[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}

export function SkillsFeatureSection({ skills, eyebrow, title, intro }: SkillsFeatureSectionProps) {
  const skillItems: SkillItem[] = skills.map(([label, value]) => ({ label, value }));

  return (
    <section className="relative w-full py-20 px-4 bg-background text-foreground">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="relative w-full max-w-sm mx-auto md:mx-0">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[420px] p-0 overflow-hidden">
              <div className="relative h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-1 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  {[...skillItems, ...skillItems].map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50 relative"
                    >
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-blush/20 to-sky/20 flex items-center justify-center overflow-hidden">
                            <div
                              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blush to-sky/60 transition-all"
                              style={{ height: `${skill.value}%` }}
                            />
                            <span className="relative text-xs font-bold text-white">{skill.value}%</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.label}</p>
                            <div className="mt-1 h-1.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blush to-sky"
                                style={{ width: `${skill.value}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 px-4 md:px-0">
          {eyebrow && (
            <Badge variant="secondary" className="px-3 py-1 text-sm uppercase tracking-wider">
              {eyebrow}
            </Badge>
          )}
          {title && (
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-900 dark:text-white leading-relaxed">
              {title}
            </h3>
          )}
          {intro && (
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {intro}
            </p>
          )}

          <div className="flex gap-3 flex-wrap">
            {skills.filter(([, v]) => v >= 90).map(([label]) => (
              <Badge key={label} className="px-3 py-1.5 text-xs bg-blush/10 text-blush hover:bg-blush/20">
                {label} ★
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
