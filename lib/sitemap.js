import { blogPosts } from "@/lib/blog";
import { longTailGuides } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

export function buildSitemapEntries() {
  const base = [
    {
      url: `${siteUrl}/`,
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

export function buildSitemapXml(entries) {
  const items = entries
    .map((entry) => {
      const lines = ["  <url>", `    <loc>${entry.url}</loc>`];

      if (entry.lastModified) {
        lines.push(`    <lastmod>${entry.lastModified}</lastmod>`);
      }

      if (entry.changeFrequency) {
        lines.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
      }

      if (typeof entry.priority === "number") {
        lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
      }

      lines.push("  </url>");

      return lines.join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    items,
    "</urlset>",
  ].join("\n");
}
