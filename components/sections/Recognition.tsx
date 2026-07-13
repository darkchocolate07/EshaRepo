"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { sectionIntros } from "@/content/profile";
import { recognition } from "@/content/recognition";

export function RecognitionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="recognition"
      subtitle={sectionIntros.recognition}
      title="Awards & Community"
      className="bg-chalk-white/50"
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {recognition.map((item, index) => (
          <motion.article
            key={item.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-warm-wood/20 bg-chalk-white p-6 md:p-8"
          >
            <h3 className="font-heading text-lg font-bold text-espresso">
              {item.title}
            </h3>
            {item.organisation && (
              <p className="mt-1 text-sm font-medium text-perk-purple">
                {item.organisation}
                {item.year && ` · ${item.year}`}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-espresso/80">
              {item.description}
            </p>
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-couch-orange/10 px-3 py-1 text-xs font-medium text-couch-orange"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
