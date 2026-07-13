export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinLabel: string;
  notionProfile: string;
  summary: string;
  about: string[];
  aboutShort: string;
  highlights: string[];
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroEpisodeTitle: string;
  proofPoints: { value: string; label: string }[];
};

export type Experience = {
  episode: string;
  sitcomTitle: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[];
  skills: string[];
};

export type Project = {
  slug: string;
  episode: string;
  sitcomTitle: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics?: string[];
  tags: string[];
  disclaimer?: string;
  context: string;
  objective: string;
  myRole: string;
  analysis: string[];
  keyTakeaways: string[];
};

export type Education = {
  institution: string;
  degree: string;
  location?: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export type Certification = {
  name: string;
  status: "completed" | "in-progress";
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Recognition = {
  title: string;
  organisation?: string;
  year?: string;
  description: string;
  tags?: string[];
};

export type NavLink = {
  label: string;
  href: string;
};
