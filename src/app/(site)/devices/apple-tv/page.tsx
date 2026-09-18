import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";
import { getArticle } from "@/lib/articles";
import type { Article } from "@/lib/content-types";

export const metadata: Metadata = {
  title: "IPTV on Apple TV",
  description:
    "The best IPTV player apps for Apple TV and how to configure them for Xtream credentials or an M3U playlist.",
  alternates: { canonical: `${site.url}/devices/apple-tv` },
  openGraph: {
    title: "IPTV on Apple TV",
    description:
      "The best IPTV player apps for Apple TV and how to configure them for Xtream credentials or an M3U playlist.",
    url: `${site.url}/devices/apple-tv`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV on Apple TV",
    description:
      "The best IPTV player apps for Apple TV and how to configure them for Xtream credentials or an M3U playlist.",
  },
};

export default function AppleTvPage() {
  const slugs = ["apple-tv-iptv-setup", "iptv-smarters-pro-setup-guide"];
  const articles = slugs.map(getArticle).filter(Boolean) as Article[];

  return (
    <TopicLanding
      eyebrow="Devices"
      title="Apple TV"
      description="Players and configuration for Apple TV."
      href="/devices/apple-tv"
      articles={articles}
    />
  );
}
