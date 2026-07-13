"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { FriendsDots } from "@/components/ui/FriendsTitle";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
  title: string;
  intro?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  subtitle,
  title,
  intro,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {subtitle && (
            <p className="font-display mb-2 text-xl font-bold text-couch-orange md:text-2xl">
              {subtitle}
            </p>
          )}
          <div className="section-title-bar">
            <h2
              id={`${id}-heading`}
              className="font-heading text-3xl font-bold text-espresso md:text-4xl"
            >
              {title}
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <FriendsDots />
          </div>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-espresso/75">
              {intro}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
