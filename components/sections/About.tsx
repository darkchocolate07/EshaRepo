"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FriendsDecor } from "@/components/layout/FriendsDecor";
import { sectionIntros, profile } from "@/content/profile";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="about"
      subtitle={sectionIntros.about}
      title="About Me"
    >
      <FriendsDecor variant="cafe" />

      <div className="relative z-10 grid items-start gap-10 md:grid-cols-5">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-xs md:col-span-2 md:max-w-sm"
        >
          <div className="door-frame w-full">
            <div className="door-frame-inner relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Esha Nakka smiling at a café table with pancakes and coffee"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <div className="rounded-2xl border-2 border-perk-purple/20 bg-chalk-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <div className="space-y-4 text-base leading-relaxed text-espresso/85 md:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border-2 border-couch-orange/30 bg-couch-orange/10 px-4 py-2 text-sm font-medium text-espresso"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 opacity-70" aria-hidden="true">
            <Image
              src="/images/theme/coffee-cup.jpg"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover shadow-md"
            />
            <p className="font-display text-lg text-perk-purple">
              Could I <em>be</em> any more into data strategy?
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
