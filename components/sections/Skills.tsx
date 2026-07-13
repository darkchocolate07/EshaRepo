"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SkillMenuCard, CertificationsCard } from "@/components/ui/SkillMenuCard";
import { sectionIntros } from "@/content/profile";
import {
  skillGroups,
  certifications,
  languages,
  skillsIntro,
} from "@/content/skills";

const groupIcons = ["💼", "📊", "🛡️"];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="skills"
      subtitle={sectionIntros.skills}
      title="Skills & Certifications"
      intro={skillsIntro}
      className="relative overflow-hidden bg-chalk-white/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/theme/coffee-shop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Image
            src="/images/theme/coffee-cup.jpg"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-perk-purple object-cover shadow-md"
            aria-hidden="true"
          />
          <p className="font-display text-xl text-perk-purple md:text-2xl">
            Today&apos;s Specials
          </p>
          <Image
            src="/images/theme/coffee-cup.jpg"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-perk-purple object-cover shadow-md"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillMenuCard
              key={group.title}
              title={group.title}
              items={group.skills}
              icon={groupIcons[index]}
              delay={index * 0.08}
            />
          ))}
        </div>

        <div className="mt-5">
          <CertificationsCard
            completed={certifications.filter((c) => c.status === "completed")}
            inProgress={certifications.filter((c) => c.status === "in-progress")}
          />
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="menu-card mt-5 overflow-hidden"
        >
          <div className="menu-card-header flex items-center gap-2 px-5 py-3.5">
            <span className="text-lg" aria-hidden="true">🌍</span>
            <h3 className="font-display text-lg text-white md:text-xl">Languages</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 px-5 py-5 md:justify-start md:gap-8">
            {languages.map((lang) => (
              <div key={lang.language} className="text-center md:text-left">
                <p className="font-heading text-base font-bold text-espresso">
                  {lang.language}
                </p>
                <p className="text-sm text-espresso/60">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
