import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";
import { getGlossary } from "@/lib/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/xtream",
    "/xtream/xtream-codes",
    "/xtream/xtream-api",
    "/xtream/xtream-players",
    "/xtream/xtream-troubleshooting",
    "/guides",
    "/guides/beginners",
    "/guides/setup",
    "/guides/m3u",
    "/guides/epg",
    "/devices",
    "/devices/fire-tv",
    "/devices/android-tv",
    "/devices/smart-tv",
    "/devices/apple-tv",
    "/apps",
    "/apps/iptv-players",
    "/troubleshooting",
    "/glossary",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${site.url}/article/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const glossaryRoutes = getGlossary().map((t) => ({
    url: `${site.url}/glossary/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes, ...glossaryRoutes];
}
