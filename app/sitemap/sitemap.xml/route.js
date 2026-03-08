import { buildSitemapEntries, buildSitemapXml } from "@/lib/sitemap";

export const revalidate = 86400;

export async function GET() {
  const xml = buildSitemapXml(buildSitemapEntries());

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
