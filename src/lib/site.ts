/** Public site URL for SEO, sitemap, and Open Graph */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://community-events-hub-orcin.vercel.app";

export const SITE_NAME = "Jaipur Events Hub";

export const SITE_DESCRIPTION =
  "Jaipur events, heritage guides, local food, and community reviews — tech meetups and Pink City culture in one place.";
