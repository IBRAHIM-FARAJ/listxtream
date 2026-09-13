import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

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
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Smart TV"
      description="Built-in apps and browser-based IPTV for smart TVs."
      href="/devices/smart-tv"
      emptyHint="Smart TV guides are on the way."
    />
  );
}
