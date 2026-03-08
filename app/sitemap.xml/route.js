import { createSitemapResponse } from "@/lib/sitemap";

export async function GET() {
  return createSitemapResponse();
}
