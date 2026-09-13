import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xtream Codes Explained",
  description:
    "What the Xtream login format means, how IPTV services use it, and how to work with it in a compatible player.",
  alternates: { canonical: `${site.url}/xtream/xtream-codes` },
  openGraph: {
    title: "Xtream Codes Explained",
    description:
      "What the Xtream login format means, how IPTV services use it, and how to work with it in a compatible player.",
    url: `${site.url}/xtream/xtream-codes`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xtream Codes Explained",
    description:
      "What the Xtream login format means, how IPTV services use it, and how to work with it in a compatible player.",
  },
};

export default function XtreamCodesPage() {
  return (
    <TopicLanding
      eyebrow="Xtream"
      title="Xtream Codes"
      description="What the Xtream login format means, how services use it, and how to work with it in a compatible player."
      href="/xtream/xtream-codes"
      emptyHint="Xtream Codes guides are on the way. Check back soon."
    />
  );
}
