import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { EducationSection } from "@/components/sections/Education";
import { RecognitionSection } from "@/components/sections/Recognition";
import { Contact } from "@/components/sections/Contact";
import { CouchDivider } from "@/components/layout/DoorFrame";

export default function Home() {
  return (
    <>
      <Hero />
      <CouchDivider />
      <About />
      <CouchDivider />
      <Experience />
      <CouchDivider />
      <Work />
      <CouchDivider />
      <Skills />
      <CouchDivider />
      <EducationSection />
      <CouchDivider />
      <RecognitionSection />
      <CouchDivider />
      <Contact />
    </>
  );
}
