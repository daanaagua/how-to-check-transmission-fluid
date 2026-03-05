import { longTailGuides, siteUrl } from "@/lib/guides";

export default function sitemap() {
  const base = [
    {
      url: siteUrl,
      lastModified: "2026-03-05",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const detailPages = longTailGuides.map((guide) => ({
    url: `${siteUrl}${guide.path}`,
    lastModified: guide.lastUpdated,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...base, ...detailPages];
}
