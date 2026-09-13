import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV EPG Setup Guides",
  description:
    "Understanding and setting up electronic program guides for IPTV — how to add an EPG source, fix channel matching, and troubleshoot guide issues.",
  alternates: { canonical: `${site.url}/guides/epg` },
  openGraph: {
    title: "IPTV EPG Setup Guides",
    description:
      "Understanding and setting up electronic program guides for IPTV — how to add an EPG source, fix channel matching, and troubleshoot guide issues.",
    url: `${site.url}/guides/epg`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV EPG Setup Guides",
    description:
      "Understanding and setting up electronic program guides for IPTV — how to add an EPG source, fix channel matching, and troubleshoot guide issues.",
  },
};

export default function EpgPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="EPG"
      description="Understanding and setting up electronic program guides."
      href="/guides/epg"
      emptyHint="EPG guides are on the way."
    />
  );
}
