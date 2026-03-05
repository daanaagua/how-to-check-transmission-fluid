import { longTailGuides, siteUrl } from "@/lib/guides";
import { blogPosts } from "@/lib/blog";

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

  const staticPages = ["/about", "/contact", "/privacy-policy", "/terms", "/blog"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: "2026-03-05",
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}${post.path}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...base, ...staticPages, ...detailPages, ...blogPages];
}
