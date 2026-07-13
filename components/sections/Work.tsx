import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FriendsDecor } from "@/components/layout/FriendsDecor";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { sectionIntros } from "@/content/profile";
import { projects, workIntro } from "@/content/projects";

export function Work() {
  return (
    <SectionWrapper
      id="work"
      subtitle={sectionIntros.work}
      title="Selected Work"
      intro={workIntro}
      className="relative overflow-hidden"
    >
      <FriendsDecor />
      <div className="relative grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <EpisodeCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
