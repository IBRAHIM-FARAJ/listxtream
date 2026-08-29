export const site = {
  name: "ListXtream",
  nameUpper: "LISTXTREAM",
  url: "https://listxtream.com",
  tagline: "Understand IPTV. Master Xtream.",
  description:
    "Practical guides, explainers, device tutorials and troubleshooting resources for modern IPTV and Xtream streaming.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Xtream", href: "/xtream" },
  { label: "Guides", href: "/guides" },
  { label: "Devices", href: "/devices" },
  { label: "Apps", href: "/apps" },
  { label: "Troubleshooting", href: "/troubleshooting" },
  { label: "Glossary", href: "/glossary" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Topics",
    links: [
      { label: "Xtream Codes", href: "/xtream/xtream-codes" },
      { label: "Xtream API", href: "/xtream/xtream-api" },
      { label: "Xtream Players", href: "/xtream/xtream-players" },
      { label: "M3U", href: "/guides/m3u" },
      { label: "EPG", href: "/guides/epg" },
    ],
  },
  {
    heading: "Devices",
    links: [
      { label: "Fire TV", href: "/devices/fire-tv" },
      { label: "Android TV", href: "/devices/android-tv" },
      { label: "Smart TV", href: "/devices/smart-tv" },
      { label: "Apple TV", href: "/devices/apple-tv" },
      { label: "IPTV Players", href: "/apps/iptv-players" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];
