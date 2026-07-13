"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DoorFrame } from "@/components/layout/DoorFrame";
import { FriendsDecor } from "@/components/layout/FriendsDecor";
import { ButtonLink } from "@/components/ui/Button";
import { ProofPoint } from "@/components/ui/ProofPoint";
import { FriendsTitle, FriendsDots } from "@/components/ui/FriendsTitle";
import { profile } from "@/content/profile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <FriendsDecor variant="hero" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <FriendsTitle as="p" size="md" className="friends-title-on-light">
            {profile.heroEpisodeTitle}
          </FriendsTitle>
          <div className="mt-3 flex justify-center">
            <FriendsDots />
          </div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm lg:max-w-md"
          >
            <DoorFrame
              src="/images/profile2.jpg"
              alt="Esha Nakka smiling in a light blue floral dress"
              priority
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="mb-3 text-sm font-bold tracking-widest text-perk-purple uppercase">
              {profile.heroEyebrow}
            </p>

            <h1
              id="hero-heading"
              className="font-heading text-3xl leading-tight font-bold text-espresso md:text-4xl lg:text-5xl"
            >
              {profile.heroHeadline}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-espresso/80">
              {profile.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="#work">View Selected Work</ButtonLink>
              <ButtonLink href="#contact" variant="outline">
                Contact Me
              </ButtonLink>
              <ButtonLink
                href="/documents/esha-nakka-cv.pdf"
                variant="secondary"
                download
              >
                Download CV
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {profile.proofPoints.map((point) => (
            <ProofPoint
              key={point.label}
              value={point.value}
              label={point.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
