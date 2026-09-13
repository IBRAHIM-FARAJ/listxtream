import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV on Fire TV & Fire Stick",
  description:
    "Install a player, enter your login, and get IPTV running on your Amazon Fire TV or Fire TV Stick.",
  alternates: { canonical: `${site.url}/devices/fire-tv` },
  openGraph: {
    title: "IPTV on Fire TV & Fire Stick",
    description:
      "Install a player, enter your login, and get IPTV running on your Amazon Fire TV or Fire TV Stick.",
    url: `${site.url}/devices/fire-tv`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV on Fire TV & Fire Stick",
    description:
      "Install a player, enter your login, and get IPTV running on your Amazon Fire TV or Fire TV Stick.",
  },
};

export default function FireTvPage() {
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Fire TV"
      description="Install a player, enter your login, and get IPTV running on your Amazon Fire TV or Fire TV Stick."
      href="/devices/fire-tv"
      emptyHint="Fire TV guides are on the way."
    />
  );
}
