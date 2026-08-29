import type { GlossaryTerm } from "./content-types";

export const glossary: GlossaryTerm[] = [
  {
    term: "EPG",
    slug: "epg",
    letter: "E",
    definition:
      "Electronic Program Guide — the on-screen schedule that shows programme names and times for channels.",
    detail:
      "EPG data is usually delivered as an XMLTV file. Players download it and match it to your channels, turning a bare list into a browsable TV guide.",
    related: ["M3U", "Xtream API"],
  },
  {
    term: "IPTV",
    slug: "iptv",
    letter: "I",
    definition:
      "Internet Protocol Television — television delivered over an internet connection rather than a broadcast signal.",
    detail:
      "IPTV streams are sent over the network in small packets and reassembled by a player app. It allows on-demand channel lists and interactive features.",
    related: ["M3U", "EPG", "Xtream API"],
  },
  {
    term: "M3U",
    slug: "m3u",
    letter: "M",
    definition:
      "A plain-text playlist format used to list media streams, widely used for sharing IPTV channel lists.",
    detail:
      "Extended M3U (M3U8) adds metadata such as channel groups and logos. Players read the file and organise the channels into categories.",
    related: ["Xtream API", "IPTV"],
  },
  {
    term: "Xtream API",
    slug: "xtream-api",
    letter: "X",
    definition:
      "A structured interface used by many IPTV players to fetch channel lists, categories, and guide data from a service.",
    detail:
      "Players connect using a server URL, username, and password. The API returns organised data, which is why it is often preferred over a flat M3U file.",
    related: ["M3U", "IPTV"],
  },
  {
    term: "Xtream Codes",
    slug: "xtream-codes",
    letter: "X",
    definition:
      "The informal name for the server software and API format originally associated with Xtream Codes, widely adopted by IPTV services.",
    detail:
      "Today the term is used loosely to mean any provider that works with the Xtream-style login (server, username, password) in supported players.",
    related: ["Xtream API", "IPTV"],
  },
  {
    term: "M3U8",
    slug: "m3u8",
    letter: "M",
    definition:
      "An M3U playlist file stored in UTF-8 encoding, commonly used for IPTV channel lists and HLS streaming.",
    detail:
      "In everyday IPTV usage M3U and M3U8 refer to the same kind of playlist, and the names are used interchangeably.",
    related: ["M3U"],
  },
  {
    term: "XMLTV",
    slug: "xmltv",
    letter: "X",
    definition:
      "An XML-based format for describing TV programmes and schedules, commonly used to deliver EPG data.",
    detail:
      "Players import XMLTV files and match channel IDs to your playlist so programme names appear in the guide.",
    related: ["EPG"],
  },
];

export function getGlossary(): GlossaryTerm[] {
  return glossary;
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.slug === slug);
}
