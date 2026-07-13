import type { Project } from "./types";

export const workIntro =
  "Selected projects exploring enterprise GenAI, technology adoption, simulation assurance, compliance, and growth strategy.";

export const projects: Project[] = [
  {
    slug: "genai-vendor-benchmarking",
    episode: "S01E01",
    sitcomTitle: "The One With GenAI Vendor Selection",
    title: "Generative AI Benchmarking & Vendor Advisory",
    summary:
      "An empirical evaluation of Claude, ChatGPT, and Perplexity against human analyst baselines for enterprise IT vendor assessment.",
    context:
      "Enterprise teams increasingly rely on large language models to accelerate vendor research, but model-generated recommendations may vary in consistency, compliance coverage, analytical quality, and reliability.",
    challenge:
      "Enterprise teams increasingly use LLMs to accelerate vendor research, but model-generated recommendations may vary in consistency, compliance coverage, analytical quality, and reliability.",
    objective:
      "Determine whether GenAI tools can reliably support enterprise IT vendor selection when evaluated against human analyst baselines and compliance requirements.",
    approach: [
      "Designed and executed an empirical benchmarking framework.",
      "Compared Claude, ChatGPT, and Perplexity with human analyst baselines.",
      "Evaluated 6 IT helpdesk vendors.",
      "Assessed vendors against SOC 2, ISO 27001, PDPA, and GDPR.",
      "Evaluated model performance across consistency, analytical quality, compliance coverage, and recommendation reliability.",
    ],
    myRole:
      "Designed the benchmarking framework, conducted vendor and model evaluations, and synthesised findings into governance-oriented recommendations.",
    analysis: [
      "Consistency of model-generated vendor assessments",
      "Analytical quality relative to human analyst baselines",
      "Compliance coverage across SOC 2, ISO 27001, PDPA, and GDPR",
      "Recommendation reliability for enterprise vendor selection",
    ],
    outcome:
      "Identified important limitations in using LLM-generated outputs for enterprise vendor selection and demonstrated the need for human validation, transparent evaluation criteria, and governance controls.",
    keyTakeaways: [
      "GenAI can accelerate vendor research but requires structured validation.",
      "Compliance coverage and analytical consistency vary significantly across models.",
      "Human oversight and governance controls are essential for enterprise vendor selection.",
    ],
    tags: [
      "GenAI",
      "Vendor Evaluation",
      "Responsible AI",
      "Compliance",
      "Benchmarking",
      "Enterprise Technology",
    ],
  },
  {
    slug: "genai-governance-adoption",
    episode: "S01E02",
    sitcomTitle: "The One With the AI Avatars",
    title: "Enterprise GenAI Governance and Adoption Strategy",
    summary:
      "A study of enterprise adoption barriers and governance implications associated with AI-generated avatars.",
    context:
      "Organisations adopting AI-generated avatars must balance potential productivity and communication benefits against concerns involving trust, perceived usefulness, ethics, organisational readiness, and employee acceptance.",
    challenge:
      "Organisations adopting AI-generated avatars must balance potential productivity and communication benefits against concerns involving trust, perceived usefulness, ethics, organisational readiness, and employee acceptance.",
    objective:
      "Develop a structured view of the organisational, behavioural, ethical, and operating-model factors that influence successful enterprise adoption of AI-generated avatars.",
    approach: [
      "Conducted an independent study of Synthesia deployments across Accenture, JPMorgan Chase, and Salesforce.",
      "Applied Technology Acceptance Model and Uncanny Valley theory.",
      "Analysed user trust, perceived usefulness, organisational readiness, ethical risk, and operating-model implications.",
    ],
    myRole:
      "Led the independent research study, applied adoption and behavioural frameworks, and synthesised governance and operating-model implications.",
    analysis: [
      "User trust and perceived usefulness of AI-generated avatars",
      "Organisational readiness for avatar deployment",
      "Ethical risk and employee acceptance factors",
      "Operating-model implications across enterprise contexts",
    ],
    outcome:
      "Developed a structured view of the organisational, behavioural, ethical, and operating-model factors that influence successful enterprise adoption of AI-generated avatars.",
    keyTakeaways: [
      "Trust and perceived usefulness are critical adoption drivers.",
      "Ethical and organisational readiness factors must be addressed before deployment.",
      "Governance frameworks should account for behavioural and operating-model implications.",
    ],
    tags: [
      "AI Governance",
      "Technology Adoption",
      "Responsible AI",
      "Change Management",
      "Enterprise Strategy",
    ],
  },
  {
    slug: "digital-twin-assurance",
    episode: "S01E03",
    sitcomTitle: "The One With the Digital Twin",
    title: "Digital Twin Simulation Assurance and Reliability Framework",
    summary:
      "A risk-based governance framework for assessing the credibility and operational reliability of digital-twin simulations.",
    context:
      "Digital twins used in manufacturing and critical infrastructure require credible evidence that their models, data, assumptions, and outputs are reliable enough to support operational decisions.",
    challenge:
      "Digital twins used in manufacturing and critical infrastructure require credible evidence that their models, data, assumptions, and outputs are reliable enough to support operational decisions.",
    objective:
      "Design a governance model for assessing digital-twin credibility across manufacturing and critical-infrastructure contexts.",
    approach: [
      "Led a 4-member team.",
      "Designed the Simulation Assurance and Reliability Framework.",
      "Developed a risk-based assurance methodology.",
      "Connected model validation, simulation evidence, governance checkpoints, data quality, and operational reliability.",
      "Structured assurance across the full digital-twin lifecycle.",
    ],
    myRole:
      "Led the team, designed the assurance framework, and developed the risk-based methodology connecting validation, governance, and operational reliability.",
    analysis: [
      "Model validation and simulation evidence requirements",
      "Governance checkpoints across the digital-twin lifecycle",
      "Data quality standards for simulation inputs and outputs",
      "Operational reliability criteria for decision support",
    ],
    outcome:
      "Produced a governance model for assessing digital-twin credibility across manufacturing and critical-infrastructure contexts.",
    keyTakeaways: [
      "Digital-twin credibility requires lifecycle-wide assurance.",
      "Risk-based governance connects validation, data quality, and operational reliability.",
      "Structured frameworks enable trusted simulation-based decisions.",
    ],
    tags: [
      "Digital Twins",
      "Simulation Assurance",
      "Risk Governance",
      "Data Quality",
      "Critical Infrastructure",
    ],
  },
  {
    slug: "shopee-growth-strategy",
    episode: "S01E04",
    sitcomTitle: "The One With the Pickup Points",
    title: "Shopee Pickup Point Growth Strategy",
    summary:
      "A five-year growth and go-to-market strategy designed to improve pickup-point adoption in Singapore.",
    context:
      "Pickup-point adoption is affected by infrastructure coverage, customer value perception, trust, onboarding friction, pricing, and awareness.",
    challenge:
      "Pickup-point adoption is affected by infrastructure coverage, customer value perception, trust, onboarding friction, pricing, and awareness.",
    objective:
      "Develop a five-year growth and go-to-market strategy to improve pickup-point adoption in Singapore.",
    approach: [
      "Developed a 5-year, US$10 million growth strategy for Shopee Singapore.",
      "Segmented customers by coverage barriers, value barriers, and trust barriers.",
      "Designed interventions across infrastructure, pricing, onboarding, and marketing.",
      "Built a phased go-to-market roadmap.",
      "Developed a KPI model for adoption and operational impact.",
    ],
    myRole:
      "Developed the growth strategy, customer segmentation, go-to-market roadmap, and KPI model for adoption and operational impact.",
    analysis: [
      "Customer segmentation by coverage, value, and trust barriers",
      "Infrastructure, pricing, onboarding, and marketing interventions",
      "Phased go-to-market roadmap over five years",
      "KPI model for adoption and operational impact",
    ],
    outcome:
      "Produced a comprehensive five-year growth strategy with a phased go-to-market roadmap and KPI model for pickup-point adoption in Singapore.",
    metrics: [
      "Increase pickup adoption from 9–14% to approximately 19%",
      "Reduce failed deliveries by 30%",
      "Reduce logistics cost per shifted parcel by 15–22%",
    ],
    disclaimer:
      "These figures are project targets and projections, not claimed realised business results. This strategy was developed as an academic project and does not imply that Shopee adopted the proposed approach.",
    keyTakeaways: [
      "Growth strategy requires segmentation across coverage, value, and trust barriers.",
      "Phased go-to-market roadmaps enable structured intervention design.",
      "KPI models help connect strategy to measurable adoption and operational outcomes.",
    ],
    tags: [
      "Growth Strategy",
      "Go-to-Market",
      "Customer Segmentation",
      "Logistics",
      "KPI Modelling",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
