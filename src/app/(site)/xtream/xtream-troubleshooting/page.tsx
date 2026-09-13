import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xtream Troubleshooting",
  description:
    "Fix login errors, blank channel lists, and playback issues on Xtream-compatible IPTV players.",
  alternates: { canonical: `${site.url}/xtream/xtream-troubleshooting` },
  openGraph: {
    title: "Xtream Troubleshooting",
    description:
      "Fix login errors, blank channel lists, and playback issues on Xtream-compatible IPTV players.",
    url: `${site.url}/xtream/xtream-troubleshooting`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xtream Troubleshooting",
    description:
      "Fix login errors, blank channel lists, and playback issues on Xtream-compatible IPTV players.",
  },
};

export default function XtreamTroubleshootingPage() {
  return (
    <TopicLanding
      eyebrow="Xtream"
      title="Xtream Troubleshooting"
      description="Fix login errors, blank lists, and playback issues on a compatible player."
      href="/xtream/xtream-troubleshooting"
      emptyHint="Xtream troubleshooting guides are on the way."
    />
  );
}
