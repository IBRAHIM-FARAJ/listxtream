import type { Article } from "./content-types";

export const articles: Article[] = [
  {
    slug: "what-is-xtream-codes-api",
    title: "What Is Xtream Codes API?",
    excerpt:
      "A beginner-friendly explanation of how the Xtream API works, what the credentials mean, and where the technology fits into modern IPTV players.",
    category: "Xtream API",
    categoryHref: "/xtream/xtream-api",
    author: "ListXtream Editorial",
    published: "Aug 2026",
    updated: "Aug 2026",
    readingTime: "8 min read",
    featured: true,
    popular: true,
    badge: "Guide",
    topics: ["Xtream", "API"],
    related: ["m3u-vs-xtream-api", "how-to-login-iptv-player", "what-is-an-m3u-playlist"],
    blocks: [
      {
        type: "paragraph",
        text: "If you have ever set up an IPTV player and typed in a server URL, a username, and a password, you have already touched Xtream Codes even if the name never appeared on screen. Behind that simple login screen is a small, structured API that most modern IPTV apps use to pull in their channel lists and categories.",
      },
      {
        type: "takeaway",
        title: "Key Takeaway",
        text: "The Xtream API is a structured way for supported IPTV players to retrieve service information — channel lists, categories, EPG data — using a server, username, and password.",
      },
      {
        type: "heading",
        text: "What the credentials really mean",
        id: "what-the-credentials-really-mean",
        level: 2,
      },
      {
        type: "paragraph",
        text: "When you enter a server URL, username, and password into a player, the app is not just checking whether those values look correct. It is asking the server for a list of things it is allowed to show you. The three pieces together identify both who you are and which server to ask.",
      },
      {
        type: "list",
        items: [
          "Server URL — the address of the service, usually ending in a port number such as 8080 or 2095.",
          "Username — your account identifier on that service.",
          "Password — the secret that authenticates that username.",
        ],
      },
      {
        type: "heading",
        text: "How the login flow works",
        id: "how-the-login-flow-works",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Most players follow the same broad sequence. After you save your credentials, the app pings a small status or authentication endpoint on the server. If the response comes back successfully, the player then asks for the categories and subscription information. Only after that does it start loading the actual channel list.",
      },
      {
        type: "info",
        title: "Not a standard",
        text: "The Xtream Codes API is a de facto convention rather than a published standard. Different providers implement slightly different versions, which is why one player may fetch a service smoothly while another reports an error.",
      },
      {
        type: "heading",
        text: "Why players prefer it over M3U",
        id: "why-players-prefer-it-over-m3u",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A plain M3U playlist is just a flat list of channel names and stream links. The Xtream API returns richer, structured data — categories, EPG, and per-channel metadata — which makes the app faster to browse and easier to keep organized.",
      },
      {
        type: "comparison",
        caption: "Xtream Codes API vs M3U",
        headers: ["Aspect", "Xtream API", "M3U"],
        rows: [
          ["Channel groups", "Built in", "Depends on file formatting"],
          ["EPG / guide data", "Usually included", "Separate guide source"],
          ["Setup", "Server + username + password", "Single playlist link"],
          ["Updates", "Server-side, automatic", "File must be refreshed"],
        ],
      },
      {
        type: "heading",
        text: "Where it fits in your setup",
        id: "where-it-fits-in-your-setup",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For most viewers the API is invisible. It sits between the IPTV player application on your device and the service you subscribe to. You rarely need to understand the details — your job is normally just entering three pieces of information in the right fields.",
      },
      {
        type: "paragraph",
        text: "From there, the app handles the rest. If you ever run into a login error or a blank channel list, understanding that this handshake exists helps you troubleshoot in the right place.",
      },
    ],
  },
  {
    slug: "what-is-an-m3u-playlist",
    title: "What Is an M3U Playlist?",
    excerpt:
      "M3U files are simple text playlists used by IPTV players to load channel lists. Here is what they contain and how to use one.",
    category: "Guides",
    categoryHref: "/guides/m3u",
    author: "ListXtream Editorial",
    published: "Jul 2026",
    updated: "Aug 2026",
    readingTime: "6 min read",
    popular: true,
    badge: "Guide",
    related: ["m3u-vs-xtream-api", "how-to-login-iptv-player"],
    blocks: [
      {
        type: "paragraph",
        text: "An M3U file is a plain-text playlist format that has been around far longer than IPTV. Originally used by media players to list audio tracks, the same format is widely used today to share IPTV channel lists between a provider and a player app.",
      },
      {
        type: "heading",
        text: "What an M3U file looks like",
        id: "what-an-m3u-file-looks-like",
        level: 2,
      },
      {
        type: "paragraph",
        text: "An M3U file is just lines of text. Each entry is either a comment that starts with a hash mark or the actual stream location. A basic example looks like this:",
      },
      {
        type: "code",
        lang: "m3u",
        text: "#EXTM3U\n#EXTINF:-1 group-title=\"News\",Example News\nhttp://example.com/live/stream.m3u8",
      },
      {
        type: "heading",
        text: "Extended M3U and metadata",
        id: "extended-m3u-and-metadata",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The version most IPTV players care about is Extended M3U, often called M3U8. It adds metadata lines using the EXTINF tag, which can carry the channel group name, a logo path, and other attributes. Players read those extra fields to organize your channels into folders and categories.",
      },
      {
        type: "info",
        text: "An M3U8 file is the same playlist idea in UTF-8 encoding. In most IPTV-per-popular use, the terms M3U and M3U8 are used interchangeably.",
      },
      {
        type: "heading",
        text: "How to add an M3U link to a player",
        id: "how-to-add-an-m3u-link-to-a-player",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Open your IPTV player settings.",
          "Choose the option to add a playlist or M3U URL.",
          "Paste the playlist link (or upload the file).",
          "Let the player load and refresh the channel list.",
        ],
      },
      {
        type: "heading",
        text: "M3U versus the Xtream API",
        id: "m3u-versus-the-xtream-api",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The main difference is structure. An M3U link is a static list of streams. The Xtream API provides a live connection that returns categories and EPG data. Both work, but they feel different to use — M3U is simpler, while the API is richer.",
      },
    ],
  },
  {
    slug: "m3u-vs-xtream-api",
    title: "M3U vs Xtream API: Which One Should You Use?",
    excerpt:
      "A practical comparison of the two most common ways IPTV players load channel lists, and when each approach makes sense.",
    category: "Xtream API",
    categoryHref: "/xtream/xtream-api",
    author: "ListXtream Editorial",
    published: "Jun 2026",
    updated: "Jul 2026",
    readingTime: "7 min read",
    badge: "Comparison",
    related: ["what-is-xtream-codes-api", "what-is-an-m3u-playlist"],
    blocks: [
      {
        type: "paragraph",
        text: "When you set up an IPTV player, you are usually choosing between two connection types: a playlist link (normally M3U) or Xtream API login details. Both deliver the same channels, but they do it in different ways. Understanding the difference helps you pick the right setup and troubleshoot faster.",
      },
      {
        type: "takeaway",
        title: "Key Takeaway",
        text: "Choose Xtream API when your provider supports it — it returns categories and guide data automatically. Use M3U for maximum compatibility with older or simpler players.",
      },
      {
        type: "heading",
        text: "The two approaches at a glance",
        id: "the-two-approaches-at-a-glance",
        level: 2,
      },
      {
        type: "comparison",
        caption: "Connection types compared",
        headers: ["Factor", "Xtream API", "M3U"],
        rows: [
          ["Credentials", "Server + user + pass", "Playlist URL"],
          ["Categories", "Automatic", "From file metadata"],
          ["EPG", "Usually included", "Separate source"],
          ["Compatibility", "Modern players", "Nearly all players"],
        ],
      },
      {
        type: "heading",
        text: "When M3U is the better choice",
        id: "when-m3u-is-the-better-choice",
        level: 2,
      },
      {
        type: "paragraph",
        text: "M3U wins on compatibility. If you are using an older player, a smart TV app with limited options, or a custom setup, a plain playlist link is the most likely thing to just work. There is also less to get wrong — one URL instead of three separate values.",
      },
      {
        type: "heading",
        text: "When Xtream API is the better choice",
        id: "when-xtream-api-is-the-better-choice",
        level: 2,
      },
      {
        type: "paragraph",
        text: "If your player supports it, Xtream API is usually the nicer experience. Categories are pulled in automatically, guide data tends to work out of the box, and refreshing the list is handled by the server. On a modern TV box or phone, this is the setup most people would choose.",
      },
      {
        type: "paragraph",
        text: "Your provider's instructions are the final authority — some services push one method over the other.",
      },
    ],
  },
  {
    slug: "how-to-login-iptv-player",
    title: "How to Log In to an IPTV Player",
    excerpt:
      "A step-by-step look at entering Xtream or M3U credentials into an IPTV player, plus what to do when login fails.",
    category: "Setup",
    categoryHref: "/guides/setup",
    author: "ListXtream Editorial",
    published: "May 2026",
    updated: "Aug 2026",
    readingTime: "5 min read",
    popular: true,
    badge: "Tutorial",
    related: ["what-is-xtream-codes-api", "iptv-login-error"],
    blocks: [
      {
        type: "paragraph",
        text: "Logging into an IPTV player is usually a two-minute job, but the exact fields and their names vary from app to app. This guide walks through the common flow so you can recognise what you are looking at no matter which player you use.",
      },
      {
        type: "heading",
        text: "Open the player and find login",
        id: "open-the-player-and-find-login",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Launch the player app on your device.",
          "Open settings or the profile menu.",
          "Look for an option labelled Add Playlist, Add User, Login, or similar.",
        ],
      },
      {
        type: "heading",
        text: "Choose your connection type",
        id: "choose-your-connection-type",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The app will ask which kind of connection you want. This is where you pick between Xtream API and M3U (playlist). If you are not sure, your provider's setup sheet normally states it clearly.",
      },
      {
        type: "heading",
        text: "Enter your details and save",
        id: "enter-your-details-and-save",
        level: 2,
      },
      {
        type: "warning",
        title: "Type carefully",
        text: "Copy credentials from the provider exactly as given. Trailing spaces, a changed letter, or an extra slash in the server URL are common causes of silent login failures.",
      },
      {
        type: "paragraph",
        text: "Once saved, the player will contact the server. A full channel list usually appears within a few seconds. If it does not, move on to our login troubleshooting guide.",
      },
    ],
  },
  {
    slug: "iptv-login-error",
    title: "How to Fix an IPTV Login Error",
    excerpt:
      "Most IPTV login failures come down to a handful of causes. Work through these checks to get back online quickly.",
    category: "Troubleshooting",
    categoryHref: "/troubleshooting",
    author: "ListXtream Editorial",
    published: "Apr 2026",
    updated: "Aug 2026",
    readingTime: "6 min read",
    badge: "Fix",
    related: ["how-to-login-iptv-player", "fix-iptv-buffering", "what-is-xtream-codes-api"],
    blocks: [
      {
        type: "paragraph",
        text: "A login error on an IPTV player is annoying, but it is almost always fixable. In most cases the problem is a small input mistake or a service-side hiccup rather than something broken on your device.",
      },
      {
        type: "takeaway",
        title: "Key Takeaway",
        text: "Check the server URL, username, and password first — most login errors are typing or copy-paste mistakes, not account problems.",
      },
      {
        type: "heading",
        text: "Work through the common causes",
        id: "work-through-the-common-causes",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Recheck the server URL — wrong port numbers are a frequent culprit.",
          "Confirm the username and password have no extra spaces.",
          "Verify the account is active and not past its expiry.",
          "Restart the app and try again.",
          "If it persists, contact the provider with the exact error.",
        ],
      },
      {
        type: "heading",
        text: "Blank categories after login",
        id: "blank-categories-after-login",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Sometimes login appears to succeed but the channel list stays empty. This usually points to a service-side issue or a temporary server delay rather than your input. Give it a short while and refresh the list.",
      },
      {
        type: "warning",
        title: "Avoid guessing",
        text: "Repeated failed attempts can sometimes trigger temporary blocks. Stop after a few tries, wait, and check with your provider before hammering the login button.",
      },
    ],
  },
  {
    slug: "fix-iptv-buffering",
    title: "How to Fix IPTV Buffering",
    excerpt:
      "Buffering usually has a clear cause. This guide helps you isolate network, player, and service issues in the most likely order.",
    category: "Troubleshooting",
    categoryHref: "/troubleshooting",
    author: "ListXtream Editorial",
    published: "Mar 2026",
    updated: "Aug 2026",
    readingTime: "9 min read",
    badge: "Fix",
    related: ["iptv-login-error", "how-to-login-iptv-player"],
    blocks: [
      {
        type: "paragraph",
        text: "Buffering is the most common complaint in IPTV, and the most misunderstood. Because the stream travels over your internet connection before it reaches your TV, the cause is often somewhere outside the player itself. That is good news — it means many fixes are quick.",
      },
      {
        type: "takeaway",
        title: "Key Takeaway",
        text: "Start with your network connection and player settings before blaming the service. A wired connection and a lower stream quality solve most buffering.",
      },
      {
        type: "heading",
        text: "Check your network first",
        id: "check-your-network-first",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Use a wired Ethernet connection where possible.",
          "Move the streaming device closer to the router.",
          "Close other heavy internet users (downloads, game updates).",
          "Restart your router and streaming device.",
        ],
      },
      {
        type: "heading",
        text: "Adjust player settings",
        id: "adjust-player-settings",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Many players let you pick a stream quality or enable a hardware decoder. Switching to a lower but stable quality can eliminate buffering, and enabling hardware decoding can offload the work from the CPU.",
      },
      {
        type: "heading",
        text: "When the service is the cause",
        id: "when-the-service-is-the-cause",
        level: 2,
      },
      {
        type: "paragraph",
        text: "If every channel on a specific service buffers at the same time, the problem is likely with the provider's servers, not your setup. Nothing you change locally will fully fix it.",
      },
      {
        type: "comparison",
        caption: "Quick buffering checklist",
        headers: ["Check", "What to do", "Result if done"],
        rows: [
          ["Connection type", "Move to wired", "Fewer drops"],
          ["Stream quality", "Lower it", "Less buffering"],
          ["Device load", "Close other apps", "Smoother playback"],
          ["Time of day", "Retest later", "Confirms peak-time issue"],
        ],
      },
    ],
  },
  {
    slug: "setup-epg-iptv",
    title: "How to Set Up EPG on Your IPTV Player",
    excerpt:
      "An electronic program guide turns a bare channel list into a browsable TV guide. Here is how to attach one in common players.",
    category: "EPG",
    categoryHref: "/guides/epg",
    author: "ListXtream Editorial",
    published: "Feb 2026",
    updated: "Jul 2026",
    readingTime: "7 min read",
    related: ["what-is-an-m3u-playlist", "m3u-vs-xtream-api"],
    blocks: [
      {
        type: "paragraph",
        text: "An Electronic Program Guide (EPG) is what turns a flat channel list into a proper TV guide with programme names and times. Many IPTV services include EPG data automatically through the Xtream API, but if it is missing you can often add it manually.",
      },
      {
        type: "heading",
        text: "Where EPG comes from",
        id: "where-epg-comes-from",
        level: 2,
      },
      {
        type: "paragraph",
        text: "EPG data is usually delivered as an XMLTV file hosted at a URL. When you add the link, the player downloads it and matches programme times to your channels. The channel IDs in the guide must line up with your playlist for the match to work.",
      },
      {
        type: "heading",
        text: "Adding an EPG source",
        id: "adding-an-epg-source",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Find the TV guide or EPG settings in your player.",
          "Choose the option to add an EPG source.",
          "Enter or paste the guide URL.",
          "Save and force a refresh of the guide.",
        ],
      },
      {
        type: "info",
        title: "Automatic via Xtream",
        text: "With a compatible Xtream API connection, the player may fetch guide data automatically, so no separate EPG setup step is needed.",
      },
      {
        type: "heading",
        text: "No programme data showing",
        id: "no-programme-data-showing",
        level: 2,
      },
      {
        type: "paragraph",
        text: "If the guide loads but stays empty, the usual cause is a channel ID mismatch between the playlist and the EPG source. Re-check the source's channel IDs and make sure the timezone setting in your player matches your region.",
      },
    ],
  },
  {
    slug: "setup-iptv-fire-tv",
    title: "How to Set Up IPTV on Fire TV",
    excerpt:
      "Install a player on your Fire TV, enter your login details, and have your channels ready to browse in a few minutes.",
    category: "Fire TV",
    categoryHref: "/devices/fire-tv",
    author: "ListXtream Editorial",
    published: "Jan 2026",
    updated: "Aug 2026",
    readingTime: "8 min read",
    badge: "Tutorial",
    related: ["how-to-login-iptv-player", "fix-iptv-buffering", "setup-iptv-android-tv"],
    blocks: [
      {
        type: "paragraph",
        text: "Fire TV devices are among the most popular boxes for IPTV because the app store hosts many capable players. Setting one up is straightforward once you know the steps and the small quirks of the Fire TV interface.",
      },
      {
        type: "heading",
        text: "Install an IPTV player",
        id: "install-an-iptv-player",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "From the Fire TV home screen, open the app store.",
          "Search for a supported IPTV player.",
          "Install the app and open it.",
          "You may need to allow installs from unknown sources for some players.",
        ],
      },
      {
        type: "heading",
        text: "Enter your login details",
        id: "enter-your-login-details",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Inside the player, choose your connection type and enter the credentials exactly as provided. On Fire TV, typing on the remote is slow, so consider using your phone to copy values where the app supports it.",
      },
      {
        type: "warning",
        title: "Unknown sources",
        text: "Only enable installs from unknown sources when you trust the app and the page you installed it from. Keep this setting off otherwise.",
      },
      {
        type: "heading",
        text: "Tune picture settings",
        id: "tune-picture-settings",
        level: 2,
      },
      {
        type: "paragraph",
        text: "If playback stutters, check the player's video settings for a hardware decoder and adjust the stream quality. Fire TV devices are capable, but the built-in player settings still matter for smooth playback.",
      },
    ],
  },
  {
    slug: "setup-iptv-android-tv",
    title: "How to Set Up IPTV on Android TV",
    excerpt:
      "The steps for getting a player running on Android TV or Google TV, including sideloading and privacy settings.",
    category: "Android TV",
    categoryHref: "/devices/android-tv",
    author: "ListXtream Editorial",
    published: "Dec 2025",
    updated: "Aug 2026",
    readingTime: "7 min read",
    badge: "Tutorial",
    related: ["setup-iptv-fire-tv", "how-to-login-iptv-player"],
    blocks: [
      {
        type: "paragraph",
        text: "Android TV and Google TV share the same underlying platform, so most instructions work for both. Because the platform is open, you have more choice of players than on locked-down devices.",
      },
      {
        type: "heading",
        text: "Choose and install a player",
        id: "choose-and-install-a-player",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Open the Google Play Store on your TV.",
          "Search for an IPTV player.",
          "Install and open the app.",
          "For players not in the store, you can sideload an APK.",
        ],
      },
      {
        type: "heading",
        text: "Sideloading an APK",
        id: "sideloading-an-apk",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Some players are only distributed as APK files. To sideload, you typically enable 'Install unknown apps', download the file, and open it. Only do this with software you trust.",
      },
      {
        type: "warning",
        title: "Security note",
        text: "Sideloading bypasses normal app review. Install APKs only from sources you trust, and remove sideloading permissions when you are done.",
      },
      {
        type: "heading",
        text: "Add your connection",
        id: "add-your-connection",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The login flow is the same as on any device: pick your provider type, enter the details exactly, and let the player load. After that your categories and channels should be ready to browse.",
      },
    ],
  },
  {
    slug: "best-iptv-players-2026",
    title: "The Best IPTV Players in 2026",
    excerpt:
      "A practical look at the players worth trying this year, what makes each one stand out, and how to choose.",
    category: "Apps",
    categoryHref: "/apps/iptv-players",
    author: "ListXtream Editorial",
    published: "Aug 2026",
    updated: "Aug 2026",
    readingTime: "10 min read",
    badge: "Roundup",
    related: ["setup-iptv-android-tv", "setup-iptv-fire-tv"],
    blocks: [
      {
        type: "paragraph",
        text: "There is no single best IPTV player — the right choice depends on your device, which features you care about, and how comfortable you are with setup. This roundup covers the players that are consistently reliable in 2026.",
      },
      {
        type: "heading",
        text: "What to look for",
        id: "what-to-look-for",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Support for both Xtream API and M3U.",
          "A clean, fast channel browser.",
          "Working EPG / TV guide support.",
          "Hardware decoding for smooth playback.",
          "Frequent updates and an active developer.",
        ],
      },
      {
        type: "heading",
        text: "Popular categories of player",
        id: "popular-categories-of-player",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Players generally fall into a few groups. Some are simple and free, some offer rich customisation, and some are built for a specific device or ecosystem. Matching the player type to your device usually gives the best experience.",
      },
      {
        type: "comparison",
        caption: "Player considerations by device",
        headers: ["Device", "What matters", "Watch out for"],
        rows: [
          ["Fire TV", "Performance, remote controls", "Store availability"],
          ["Android TV", "Player choice, sideloading", "Settings depth"],
          ["Smart TV", "Simplicity, one-tap", "Limited app stores"],
          ["Apple TV", "Polish, polish", "Fewer players"],
        ],
      },
      {
        type: "paragraph",
        text: "Try one player for a week before committing. The features on paper matter less than how it feels to browse and watch every day.",
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getPopularArticles(): Article[] {
  return articles.filter((a) => a.popular);
}

export function getLatestArticles(count = 6): Article[] {
  return [...articles].slice(0, count);
}

export function getArticlesByCategory(href: string): Article[] {
  return articles.filter((a) => a.categoryHref.startsWith(href));
}

export function getArticlesByTerm(term: string): Article[] {
  const lower = term.toLowerCase();
  return articles.filter(
    (a) =>
      (a.topics ?? []).some((t) => t.toLowerCase() === lower) ||
      a.title.toLowerCase().includes(lower)
  );
}
