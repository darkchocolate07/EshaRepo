import Image from "next/image";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-4 border-door-yellow bg-espresso text-chalk-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('/images/theme/brick-wall.jpg')", backgroundSize: "cover" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex justify-center">
          <div className="central-perk-sign">
            <span className="sign-title block text-center">Central Perk</span>
            <span className="sign-subtitle block text-center">Thanks for visiting</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-chalk-white/70">{profile.title}</p>
            <p className="mt-1 text-sm text-chalk-white/60">{profile.location}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="font-semibold text-couch-orange transition-colors hover:text-friends-yellow">
                  Email
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-couch-orange transition-colors hover:text-friends-yellow">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/documents/esha-nakka-cv.pdf" download className="font-semibold text-couch-orange transition-colors hover:text-friends-yellow">
                  Download CV
                </a>
              </li>
              <li>
                <a href="#home" className="font-semibold text-couch-orange transition-colors hover:text-friends-yellow">
                  Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Image src="/images/theme/coffee-cup.jpg" alt="" width={40} height={40} className="rounded-full object-cover" aria-hidden="true" />
          <p className="text-center text-sm text-chalk-white/50 italic">
            No one told you life was gonna be this way… but your data strategy can be.
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-chalk-white/40">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
