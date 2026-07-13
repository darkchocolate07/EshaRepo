"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/content/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav
        className="border-b-4 border-door-yellow bg-cafe-cream/95 backdrop-blur-md"
        aria-label="Main navigation"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(250,240,228,0.97) 0%, rgba(250,240,228,0.9) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="group" aria-label="Esha Nakka - Home">
            <div className="central-perk-sign">
              <span className="sign-title block">Central Perk</span>
              <span className="sign-subtitle block">Esha&apos;s Portfolio</span>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <Image
              src="/images/theme/coffee-cup.jpg"
              alt=""
              width={36}
              height={36}
              className="rounded-full object-cover opacity-80"
              aria-hidden="true"
            />
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-espresso transition-colors hover:bg-perk-purple/15 hover:text-perk-purple"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-perk-purple bg-perk-purple/10 text-perk-purple md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t-2 border-door-yellow/50 bg-cafe-cream px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-espresso transition-colors hover:bg-perk-purple/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
