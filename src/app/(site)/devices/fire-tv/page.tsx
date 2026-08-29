import { TopicLanding } from "@/components/layout/topic-landing";

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
