import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best IPTV Players",
  description:
    "The best IPTV player apps this year — what makes each one stand out and how to choose the right app for your device.",
  alternates: { canonical: `${site.url}/apps/iptv-players` },
  openGraph: {
    title: "Best IPTV Players",
    description:
      "The best IPTV player apps this year — what makes each one stand out and how to choose the right app for your device.",
    url: `${site.url}/apps/iptv-players`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Best IPTV Players",
    description:
      "The best IPTV player apps this year — what makes each one stand out and how to choose the right app for your device.",
  },
};

export default function IptvPlayersPage() {
  return (
    <TopicLanding
      eyebrow="Apps"
      title="IPTV Players"
      description="The best players this year, what makes each one stand out, and how to choose the right app for your device."
      href="/apps/iptv-players"
      emptyHint="Player roundups are on the way."
    />
  );
}
