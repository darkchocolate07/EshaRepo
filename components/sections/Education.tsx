"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { sectionIntros } from "@/content/profile";
import { education } from "@/content/education";

export function EducationSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="education"
      subtitle={sectionIntros.education}
      title="Education"
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {education.map((edu, index) => (
          <motion.article
            key={edu.institution}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border-2 border-perk-purple/20 bg-chalk-white p-6 shadow-sm md:p-8"
          >
            <h3 className="font-heading text-lg font-bold text-espresso">
              {edu.degree}
            </h3>
            <p className="mt-1 font-medium text-perk-purple">
              {edu.institution}
            </p>
            {edu.location && (
              <p className="text-sm text-espresso/60">{edu.location}</p>
            )}
            <time className="mt-2 block text-sm font-semibold text-couch-orange">
              {edu.startDate} – {edu.endDate}
            </time>
            <ul className="mt-4 space-y-1">
              {edu.details.map((detail) => (
                <li key={detail} className="text-sm text-espresso/80">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
