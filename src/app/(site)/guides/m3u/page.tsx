import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "M3U & M3U8 Playlist Guides",
  description:
    "Everything about M3U and M3U8 playlist files — what they contain, how to use them, and when to choose them over the Xtream API.",
  alternates: { canonical: `${site.url}/guides/m3u` },
  openGraph: {
    title: "M3U & M3U8 Playlist Guides",
    description:
      "Everything about M3U and M3U8 playlist files — what they contain, how to use them, and when to choose them over the Xtream API.",
    url: `${site.url}/guides/m3u`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "M3U & M3U8 Playlist Guides",
    description:
      "Everything about M3U and M3U8 playlist files — what they contain, how to use them, and when to choose them over the Xtream API.",
  },
};

export default function M3uPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="M3U"
      description="Everything about M3U and M3U8 playlist files."
      href="/guides/m3u"
      emptyHint="M3U guides are on the way."
    />
  );
}
