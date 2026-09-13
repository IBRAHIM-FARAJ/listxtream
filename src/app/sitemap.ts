import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";
import { getGlossary } from "@/lib/glossary";

/** Fixed date representing the site launch — avoids every page claiming to change on every deploy */
const SITE_LAUNCH = new Date("2026-08-01");

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include static routes that have real content (not empty topic landing pages).
  // Empty pages: /xtream/xtream-codes, /xtream/xtream-players, /xtream/xtream-troubleshooting,
  //              /guides/beginners, /devices/smart-tv, /devices/apple-tv
  const staticRoutes = [
    { route: "", priority: 1.0, date: SITE_LAUNCH },
    { route: "/xtream", priority: 0.8, date: SITE_LAUNCH },
    { route: "/xtream/xtream-api", priority: 0.7, date: SITE_LAUNCH },
    { route: "/guides", priority: 0.8, date: SITE_LAUNCH },
    { route: "/guides/setup", priority: 0.7, date: SITE_LAUNCH },
    { route: "/guides/m3u", priority: 0.7, date: SITE_LAUNCH },
    { route: "/guides/epg", priority: 0.7, date: SITE_LAUNCH },
    { route: "/devices", priority: 0.8, date: SITE_LAUNCH },
    { route: "/devices/fire-tv", priority: 0.7, date: SITE_LAUNCH },
    { route: "/devices/android-tv", priority: 0.7, date: SITE_LAUNCH },
    { route: "/apps", priority: 0.7, date: SITE_LAUNCH },
    { route: "/apps/iptv-players", priority: 0.7, date: SITE_LAUNCH },
    { route: "/troubleshooting", priority: 0.8, date: SITE_LAUNCH },
    { route: "/glossary", priority: 0.7, date: SITE_LAUNCH },
    { route: "/blog", priority: 0.7, date: SITE_LAUNCH },
    { route: "/about", priority: 0.5, date: SITE_LAUNCH },
    { route: "/contact", priority: 0.4, date: SITE_LAUNCH },
    { route: "/privacy", priority: 0.3, date: SITE_LAUNCH },
    { route: "/terms", priority: 0.3, date: SITE_LAUNCH },
    { route: "/disclaimer", priority: 0.3, date: SITE_LAUNCH },
  ].map(({ route, priority, date }) => ({
    url: `${site.url}${route}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${site.url}/article/${a.slug}`,
    lastModified: new Date(a.updatedIso),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const glossaryRoutes = getGlossary().map((t) => ({
    url: `${site.url}/glossary/${t.slug}`,
    lastModified: SITE_LAUNCH,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes, ...glossaryRoutes];
}
