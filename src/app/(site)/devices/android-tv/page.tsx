import { TopicLanding } from "@/components/layout/topic-landing";

export default function AndroidTvPage() {
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Android TV"
      description="Setup and sideloading guidance for running IPTV on Android TV and Google TV devices."
      href="/devices/android-tv"
      emptyHint="Android TV guides are on the way."
    />
  );
}
