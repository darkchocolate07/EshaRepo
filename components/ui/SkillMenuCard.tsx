"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillMenuCardProps = {
  title: string;
  items: string[];
  icon?: string;
  delay?: number;
};

export function SkillMenuCard({ title, items, icon = "☕", delay = 0 }: SkillMenuCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="menu-card flex h-full flex-col overflow-hidden"
    >
      <div className="menu-card-header flex items-center gap-2 px-5 py-3.5">
        <span className="text-lg" aria-hidden="true">{icon}</span>
        <h3 className="font-display text-lg text-white md:text-xl">{title}</h3>
      </div>
      <ul className="flex flex-1 flex-col gap-2 px-5 py-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-snug text-espresso/85"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-couch-orange"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type CertCardProps = {
  completed: { name: string }[];
  inProgress: { name: string }[];
};

export function CertificationsCard({ completed, inProgress }: CertCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="menu-card overflow-hidden"
    >
      <div className="menu-card-header flex items-center gap-2 px-5 py-3.5">
        <span className="text-lg" aria-hidden="true">📜</span>
        <h3 className="font-display text-lg text-white md:text-xl">Certifications</h3>
      </div>

      <div className="grid gap-6 px-5 py-5 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold tracking-widest text-perk-purple uppercase">
            Completed
          </p>
          <ul className="space-y-2.5">
            {completed.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start gap-2.5 text-sm text-espresso/85"
              >
                <span className="mt-0.5 text-couch-orange" aria-hidden="true">✓</span>
                {cert.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-widest text-couch-orange uppercase">
            In Progress
          </p>
          <ul className="space-y-2.5">
            {inProgress.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start gap-2.5 rounded-lg border border-dashed border-couch-orange/35 bg-couch-orange/5 px-3 py-2 text-sm text-espresso/80"
              >
                <span className="mt-0.5 text-couch-orange" aria-hidden="true">◷</span>
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
