import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV Setup Tutorials",
  description:
    "Step-by-step guides for connecting an IPTV player to your service using Xtream credentials or an M3U playlist link.",
  alternates: { canonical: `${site.url}/guides/setup` },
  openGraph: {
    title: "IPTV Setup Tutorials",
    description:
      "Step-by-step guides for connecting an IPTV player to your service using Xtream credentials or an M3U playlist link.",
    url: `${site.url}/guides/setup`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV Setup Tutorials",
    description:
      "Step-by-step guides for connecting an IPTV player to your service using Xtream credentials or an M3U playlist link.",
  },
};

export default function SetupPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="Setup"
      description="Step-by-step setup guides for connecting a player to a service."
      href="/guides/setup"
      emptyHint="Setup guides are on the way."
    />
  );
}
