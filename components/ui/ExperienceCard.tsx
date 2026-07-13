"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Experience } from "@/content/types";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

const VISIBLE_SKILLS = 4;

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const hiddenSkills = experience.skills.length - VISIBLE_SKILLS;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="experience-card group overflow-hidden"
    >
      <div className="experience-card-header px-6 py-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-couch-orange/25 px-3 py-1 text-xs font-bold tracking-widest text-couch-orange">
            {experience.episode}
          </span>
          <time className="text-sm font-medium text-chalk-white/70">
            {experience.startDate} – {experience.endDate}
          </time>
        </div>
        <p className="font-display mt-3 text-lg font-extrabold text-white md:text-xl">
          {experience.sitcomTitle}
        </p>
      </div>

      <div className="bg-chalk-white px-6 py-6 md:px-8 md:py-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-espresso">
              {experience.company}
            </h3>
            <p className="text-base font-semibold text-perk-purple">
              {experience.role}
            </p>
            {experience.location && (
              <p className="text-sm text-espresso/55">{experience.location}</p>
            )}
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-espresso/80">
          {experience.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {experience.achievements.slice(0, 2).map((achievement) => (
            <li
              key={achievement}
              className="flex gap-3 text-sm leading-relaxed text-espresso/75"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-couch-orange" aria-hidden="true" />
              {achievement}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-2.5 border-t border-warm-wood/15 pt-4">
                {experience.achievements.slice(2).map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-relaxed text-espresso/75"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-couch-orange" aria-hidden="true" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-warm-wood/15 pt-4">
                <p className="mb-2 text-xs font-bold tracking-wider text-perk-purple uppercase">
                  Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-perk-purple/15 bg-perk-purple/5 px-3 py-1 text-xs font-medium text-perk-purple"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.slice(0, VISIBLE_SKILLS).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-perk-purple/15 bg-perk-purple/5 px-3 py-1 text-xs font-medium text-perk-purple"
              >
                {skill}
              </span>
            ))}
            {hiddenSkills > 0 && (
              <span className="rounded-full bg-couch-orange/10 px-3 py-1 text-xs font-medium text-couch-orange">
                +{hiddenSkills} more
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-perk-purple transition-colors hover:text-couch-orange"
        >
          {expanded ? "Show less" : "The full story"}
          <svg
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}
