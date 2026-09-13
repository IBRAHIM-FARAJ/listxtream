import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xtream API Guides",
  description:
    "Detailed guides on the structured API modern IPTV players use to load channels, categories and EPG data.",
  alternates: { canonical: `${site.url}/xtream/xtream-api` },
  openGraph: {
    title: "Xtream API Guides",
    description:
      "Detailed guides on the structured API modern IPTV players use to load channels, categories and EPG data.",
    url: `${site.url}/xtream/xtream-api`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xtream API Guides",
    description:
      "Detailed guides on the structured API modern IPTV players use to load channels, categories and EPG data.",
  },
};

export default function XtreamApiPage() {
  return (
    <TopicLanding
      eyebrow="Xtream"
      title="Xtream API"
      description="Detailed guides on the structured API modern IPTV players use to load channels, categories and EPG data."
      href="/xtream/xtream-api"
      emptyHint="Xtream API articles are on the way."
    />
  );
}
