import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xtream-Compatible Players",
  description:
    "Choosing and configuring the IPTV players that work best with Xtream connections and credentials.",
  alternates: { canonical: `${site.url}/xtream/xtream-players` },
  openGraph: {
    title: "Xtream-Compatible Players",
    description:
      "Choosing and configuring the IPTV players that work best with Xtream connections and credentials.",
    url: `${site.url}/xtream/xtream-players`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xtream-Compatible Players",
    description:
      "Choosing and configuring the IPTV players that work best with Xtream connections and credentials.",
  },
};

export default function XtreamPlayersPage() {
  return (
    <TopicLanding
      eyebrow="Xtream"
      title="Xtream Players"
      description="Choosing and configuring the players that work with Xtream connections."
      href="/xtream/xtream-players"
      emptyHint="Xtream Players guides are on the way."
    />
  );
}
