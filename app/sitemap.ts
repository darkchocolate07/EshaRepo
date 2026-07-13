import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esha-nakka.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
