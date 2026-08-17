import type { MetadataRoute } from "next";

import { DEMO_EVENTS } from "@/lib/demo-data";
import { fetchPublishedEvents } from "@/lib/firestore/events";
import { getAllBlogs } from "@/lib/heritage-blogs";
import { SITE_URL } from "@/lib/site";

/** Regenerate sitemap in the background (new blog posts + Firestore events). */
export const revalidate = 3600;

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/events", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/food", changeFrequency: "weekly", priority: 0.8 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "weekly", priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogs().map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  let events = DEMO_EVENTS.filter((e) => e.status === "published");
  try {
    events = await fetchPublishedEvents();
  } catch (error) {
    // Never return 500 from /sitemap.xml — Google Search Console marks that as "Couldn't fetch"
    console.error("[sitemap] event fetch failed, using demo fallback:", error);
  }

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: event.startAt ? new Date(event.startAt) : now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes, ...eventRoutes];
}
