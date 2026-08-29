import { TopicLanding } from "@/components/layout/topic-landing";

export default function SmartTvPage() {
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Smart TV"
      description="Getting IPTV working with the built-in apps and browsers on your smart TV."
      href="/devices/smart-tv"
      emptyHint="Smart TV guides are on the way."
    />
  );
}
