import type { NavLink, Profile } from "./types";

export const profile: Profile = {
  name: "Esha Nakka",
  title: "Technology Strategy, AI Governance & Business Intelligence",
  location: "Singapore",
  email: "eshanakka@gmail.com",
  phone: "+65 8511 4835",
  linkedin: "http://linkedin.com/in/esha-nakka",
  linkedinLabel: "LinkedIn",
  notionProfile: "https://talentgeist.notion.site/esha-nakka",
  summary:
    "Esha combines technology consulting, business intelligence, AI governance, and strategic problem-solving to turn complex business and data challenges into practical, responsible, and decision-ready solutions.",
  heroEyebrow:
    "Technology Strategy · AI Governance · Business Intelligence",
  heroHeadline:
    "Turning complex business and data challenges into practical technology strategies.",
  heroSubtitle:
    "I am Esha Nakka, a technology and business intelligence professional focused on AI advisory, digital transformation, data governance, and decision-ready analytics. I combine structured problem-solving with hands-on analysis to help organisations evaluate opportunities, manage risk, and move from ideas to implementation.",
  heroEpisodeTitle: "The One Where Strategy Meets Data",
  proofPoints: [
    { value: "10+", label: "client engagements supported" },
    { value: "5+", label: "parallel workstreams governed" },
    { value: "Top 5", label: "community innovation proposal" },
  ],
  about: [
    "I am a Singapore-based technology and business intelligence professional currently pursuing a Master of Science in Information System at Nanyang Technological University. My experience spans analytics and reporting, technology consulting, digital transformation, GenAI evaluation, data governance, and responsible AI.",
    "Across professional and academic work, I have translated fragmented information and complex business challenges into structured recommendations, governance frameworks, strategic roadmaps, and decision-ready insights. I am particularly interested in how organisations can adopt emerging technologies responsibly while maintaining trust, reliability, and measurable business value.",
  ],
  aboutShort:
    "Technology and business intelligence professional specialising in AI advisory, digital transformation, analytics, governance, and strategic problem-solving.",
  highlights: [
    "Based in Singapore",
    "MSc in Information System, Nanyang Technological University",
    "Experience across analytics, reporting, consulting, and AI governance",
    "Strong grounding in strategy, data, cloud tools, compliance, and stakeholder communication",
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const sectionIntros = {
  about: "I'll Be There For Your Data Problems",
  experience: "Previously On...",
  work: "Season Highlights",
  skills: "The Menu",
  education: "The Education Arc",
  recognition: "Community Cameos",
  contact: "Grab a Coffee?",
};
