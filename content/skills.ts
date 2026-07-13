import type { Certification, SkillGroup } from "./types";

export const skillsIntro =
  "A multidisciplinary toolkit spanning strategy, analytics, cloud platforms, governance, compliance, and delivery.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Consulting & Strategy",
    skills: [
      "AI strategy",
      "GenAI advisory",
      "Digital transformation",
      "Business analysis",
      "Vendor evaluation",
      "Strategic roadmapping",
      "Process optimisation",
      "Stakeholder management",
      "PMO",
      "Change management",
    ],
  },
  {
    title: "Data, Analytics, Cloud & Tools",
    skills: [
      "Python",
      "SQL",
      "R",
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "Jira",
      "Miro",
      "Figma",
      "Microsoft 365",
      "SharePoint",
    ],
  },
  {
    title: "Governance & Compliance",
    skills: [
      "Responsible AI",
      "AI ethics",
      "Data governance",
      "SOC 2 Type II",
      "ISO 27001",
      "PDPA",
      "GDPR",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "Microsoft 365 Fundamentals - MS-900", status: "completed" },
  { name: "AI4I Literacy in AI", status: "completed" },
  { name: "Google Digital Marketing", status: "completed" },
  { name: "Design Thinking", status: "completed" },
  { name: "Microsoft Azure AI Fundamentals - AI-900", status: "in-progress" },
  { name: "Microsoft Power BI Data Analyst", status: "in-progress" },
];

export const languages = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hindi", proficiency: "Fluent" },
  { language: "French", proficiency: "Elementary" },
];
