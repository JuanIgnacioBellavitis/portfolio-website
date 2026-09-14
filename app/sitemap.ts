import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/work";

const BASE = "https://juanbellavitis-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((cs) => ({
      url: `${BASE}/work/${cs.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
