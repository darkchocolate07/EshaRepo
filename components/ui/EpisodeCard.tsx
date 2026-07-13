"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/content/types";

type EpisodeCardProps = {
  project: Project;
};

export function EpisodeCard({ project }: EpisodeCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className="episode-card group flex flex-col p-6 md:p-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-couch-orange/20 px-3 py-1 text-xs font-bold tracking-wider text-couch-orange">
          {project.episode}
        </span>
      </div>

      <h3 className="font-display mb-2 text-xl font-extrabold text-white md:text-2xl">
        {project.sitcomTitle}
      </h3>

      <p className="mb-1 text-sm font-medium text-couch-orange">
        {project.title}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-chalk-white/80">
        {project.summary}
      </p>

      <div className="mb-4 space-y-2 text-sm text-chalk-white/70">
        <p>
          <span className="font-semibold text-chalk-white/90">Challenge: </span>
          {project.challenge}
        </p>
        <p>
          <span className="font-semibold text-chalk-white/90">Outcome: </span>
          {project.outcome}
        </p>
      </div>

      {project.disclaimer && (
        <p className="mb-4 rounded-lg bg-white/5 px-3 py-2 text-xs text-chalk-white/50 italic">
          {project.disclaimer}
        </p>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-chalk-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-couch-orange transition-colors group-hover:text-white"
      >
        Read Case Study
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.article>
  );
}
