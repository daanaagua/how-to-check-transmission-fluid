const DEFAULT_SITE_URL = "https://www.checktransmissionfluid.help";

function normalizeSiteUrl(rawSiteUrl = DEFAULT_SITE_URL) {
  try {
    const url = new URL(rawSiteUrl);

    if (url.hostname === "checktransmissionfluid.help") {
      url.hostname = "www.checktransmissionfluid.help";
    }

    url.pathname = "";
    url.search = "";
    url.hash = "";

    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const sitemapUrl = `${siteUrl}/sitemap/sitemap.xml`;
