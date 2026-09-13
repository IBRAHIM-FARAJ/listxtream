import type { Metadata } from "next";
import { TopicLanding } from "@/components/layout/topic-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV on Android TV & Google TV",
  description:
    "Get IPTV running on Android TV and Google TV — player choice, APK sideloading, and step-by-step setup.",
  alternates: { canonical: `${site.url}/devices/android-tv` },
  openGraph: {
    title: "IPTV on Android TV & Google TV",
    description:
      "Get IPTV running on Android TV and Google TV — player choice, APK sideloading, and step-by-step setup.",
    url: `${site.url}/devices/android-tv`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV on Android TV & Google TV",
    description:
      "Get IPTV running on Android TV and Google TV — player choice, APK sideloading, and step-by-step setup.",
  },
};

export default function AndroidTvPage() {
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Android TV"
      description="Get IPTV running on Android TV and Google TV."
      href="/devices/android-tv"
      emptyHint="Android TV guides are on the way."
    />
  );
}
