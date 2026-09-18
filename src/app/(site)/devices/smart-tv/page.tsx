import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";
import { getArticle } from "@/lib/articles";
import type { Article } from "@/lib/content-types";

export const metadata: Metadata = {
  title: "IPTV on Smart TVs",
  description:
    "Built-in apps and browser-based IPTV options for Samsung, LG, and other smart TVs.",
  alternates: { canonical: `${site.url}/devices/smart-tv` },
  openGraph: {
    title: "IPTV on Smart TVs",
    description:
      "Built-in apps and browser-based IPTV options for Samsung, LG, and other smart TVs.",
    url: `${site.url}/devices/smart-tv`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV on Smart TVs",
    description:
      "Built-in apps and browser-based IPTV options for Samsung, LG, and other smart TVs.",
  },
};

export default function SmartTvPage() {
  const slugs = ["samsung-smart-tv-iptv-setup", "lg-smart-tv-iptv-setup"];
  const articles = slugs.map(getArticle).filter(Boolean) as Article[];

  return (
    <TopicLanding
      eyebrow="Devices"
      title="Smart TV"
      description="Built-in apps and browser-based IPTV for smart TVs."
      href="/devices/smart-tv"
      articles={articles}
    />
  );
}
