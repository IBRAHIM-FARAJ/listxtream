import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beginner's Guide to IPTV",
  description:
    "Plain-language introductions to IPTV, Xtream, M3U and EPG for anyone starting out with streaming.",
  alternates: { canonical: `${site.url}/guides/beginners` },
  openGraph: {
    title: "Beginner's Guide to IPTV",
    description:
      "Plain-language introductions to IPTV, Xtream, M3U and EPG for anyone starting out with streaming.",
    url: `${site.url}/guides/beginners`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Beginner's Guide to IPTV",
    description:
      "Plain-language introductions to IPTV, Xtream, M3U and EPG for anyone starting out with streaming.",
  },
};

export default function BeginnersPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="Beginners"
      description="Plain-language introductions to IPTV, Xtream, M3U and EPG for anyone starting out."
      href="/guides/beginners"
      emptyHint="Beginner guides are on the way."
    />
  );
}
