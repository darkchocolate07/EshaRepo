"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FriendsDecor } from "@/components/layout/FriendsDecor";
import { Button, ButtonLink } from "@/components/ui/Button";
import { sectionIntros, profile } from "@/content/profile";

const subjectOptions = [
  "Career opportunity",
  "Consulting collaboration",
  "Speaking or project enquiry",
  "General message",
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const subject = (data.get("subject") as string) || "General message";
    const organisation = (data.get("organisation") as string) || "";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      `Subject: ${subject}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <SectionWrapper
      id="contact"
      subtitle={sectionIntros.contact}
      title="Let's Connect"
      className="relative overflow-hidden"
    >
      <FriendsDecor variant="cafe" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl"
      >
        <p className="mb-8 text-center text-lg text-espresso/80">
          I am open to conversations about technology consulting, AI and GenAI
          advisory, business intelligence, digital transformation, data
          governance, and strategy-focused opportunities.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href={`mailto:${profile.email}`}>Email Esha</ButtonLink>
          <ButtonLink href={profile.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ButtonLink>
          <ButtonLink href="/documents/esha-nakka-cv.pdf" variant="secondary" download>
            Download CV
          </ButtonLink>
          <ButtonLink href={`tel:${profile.phone.replace(/\s/g, "")}`} variant="outline">
            {profile.phone}
          </ButtonLink>
        </div>

        <div className="rounded-2xl border-2 border-perk-purple/20 bg-chalk-white p-6 md:p-8">
          <h3 className="font-heading mb-6 text-xl font-bold text-espresso">
            Send a Message
          </h3>

          {submitted ? (
            <p className="text-center text-perk-purple" role="status">
              Your email client should open shortly. If it doesn&apos;t, please
              email me directly at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-semibold text-couch-orange underline"
              >
                {profile.email}
              </a>
              .
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-espresso">
                    Name <span className="text-brick-muted">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-lg border border-warm-wood/30 bg-cafe-cream px-4 py-3 text-espresso transition-colors focus:border-perk-purple focus:outline-none"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-brick-muted" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-espresso">
                    Email <span className="text-brick-muted">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-lg border border-warm-wood/30 bg-cafe-cream px-4 py-3 text-espresso transition-colors focus:border-perk-purple focus:outline-none"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-brick-muted" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="organisation" className="mb-1.5 block text-sm font-medium text-espresso">
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  className="w-full rounded-lg border border-warm-wood/30 bg-cafe-cream px-4 py-3 text-espresso transition-colors focus:border-perk-purple focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-espresso">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-warm-wood/30 bg-cafe-cream px-4 py-3 text-espresso transition-colors focus:border-perk-purple focus:outline-none"
                >
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-espresso">
                  Message <span className="text-brick-muted">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-y rounded-lg border border-warm-wood/30 bg-cafe-cream px-4 py-3 text-espresso transition-colors focus:border-perk-purple focus:outline-none"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-brick-muted" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <p className="text-xs text-espresso/50">
                This form opens your email client. No data is stored on this
                website.
              </p>

              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
