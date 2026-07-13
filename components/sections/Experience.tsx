import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FriendsDecor } from "@/components/layout/FriendsDecor";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { sectionIntros } from "@/content/profile";
import { experiences, experienceIntro } from "@/content/experience";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      subtitle={sectionIntros.experience}
      title="Work Experience"
      intro={experienceIntro}
      className="relative overflow-hidden bg-chalk-white/50"
    >
      <FriendsDecor />

      <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} experience={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
