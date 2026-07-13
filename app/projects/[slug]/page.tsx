import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Esha Nakka`,
    description: project.summary,
    openGraph: {
      title: project.sitcomTitle,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: "Context", content: project.context },
    { title: "Challenge", content: project.challenge },
    { title: "Objective", content: project.objective },
    { title: "Approach", content: project.approach, isList: true },
    { title: "My Role", content: project.myRole },
    { title: "Analysis", content: project.analysis, isList: true },
    { title: "Outcome", content: project.outcome },
    { title: "Key Takeaways", content: project.keyTakeaways, isList: true },
  ];

  return (
    <article className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-perk-purple transition-colors hover:text-couch-orange"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Selected Work
        </Link>

        <header className="episode-card mb-12 p-8 md:p-12">
          <span className="mb-4 inline-block rounded-full bg-couch-orange/20 px-3 py-1 text-xs font-bold tracking-wider text-couch-orange">
            {project.episode}
          </span>
          <h1 className="font-display mb-3 text-3xl font-extrabold text-white md:text-4xl">
            {project.sitcomTitle}
          </h1>
          <p className="text-lg font-medium text-couch-orange">{project.title}</p>
          <p className="mt-4 text-base leading-relaxed text-chalk-white/80">
            {project.summary}
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading mb-4 text-2xl font-bold text-espresso">
                {section.title}
              </h2>
              {section.isList && Array.isArray(section.content) ? (
                <ul className="space-y-2">
                  {(section.content as string[]).map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-espresso/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-couch-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base leading-relaxed text-espresso/80">
                  {section.content as string}
                </p>
              )}
            </section>
          ))}

          {project.metrics && (
            <section>
              <h2 className="font-heading mb-4 text-2xl font-bold text-espresso">
                Target Outcomes
              </h2>
              <ul className="space-y-2">
                {project.metrics.map((metric) => (
                  <li
                    key={metric}
                    className="flex gap-3 text-base text-espresso/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-perk-purple" />
                    {metric}
                  </li>
                ))}
              </ul>
              {project.disclaimer && (
                <p className="mt-4 rounded-lg border border-warm-wood/20 bg-chalk-white px-4 py-3 text-sm text-espresso/60 italic">
                  {project.disclaimer}
                </p>
              )}
            </section>
          )}

          <section>
            <h2 className="font-heading mb-4 text-2xl font-bold text-espresso">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-perk-purple/20 bg-perk-purple/5 px-4 py-1.5 text-sm font-medium text-perk-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-warm-wood/20 pt-8">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-couch-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-couch-orange/90"
          >
            Get in Touch
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center justify-center rounded-full border-2 border-perk-purple px-6 py-3 text-sm font-semibold text-perk-purple transition-colors hover:bg-perk-purple/10"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
