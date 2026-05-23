import type { CommunityEvent, FeaturedReel } from "@/types";

/** Sample data when Firebase env vars are not set yet */
export const DEMO_EVENTS: CommunityEvent[] = [
  {
    id: "demo-1",
    title: "Jaipur Dev Meetup — Next.js & Firebase",
    slug: "jaipur-dev-meetup-nextjs-firebase",
    description:
      "Monthly builder meetup for developers in Jaipur. Lightning talks, networking chai, and hands-on Firebase + Next.js tips.",
    startAt: "2026-06-14T10:00:00+05:30",
    endAt: "2026-06-14T13:00:00+05:30",
    venue: {
      name: "Coworking Lounge",
      area: "Malviya Nagar",
      mapsUrl: "https://maps.google.com/?q=Malviya+Nagar+Jaipur",
    },
    tags: ["tech", "networking"],
    rsvpCount: 42,
    status: "published",
  },
  {
    id: "demo-2",
    title: "Heritage Walk & Photo Walk",
    slug: "heritage-walk-photo-walk",
    description:
      "Explore the Pink City's lanes with local guides. Bring your camera — golden hour shots around Hawa Mahal area.",
    startAt: "2026-06-21T06:30:00+05:30",
    venue: {
      name: "Hawa Mahal Circle",
      area: "Old City",
      mapsUrl: "https://maps.google.com/?q=Hawa+Mahal+Jaipur",
    },
    tags: ["culture", "fest"],
    rsvpCount: 28,
    status: "published",
  },
  {
    id: "demo-3",
    title: "Startup Chai — Founders Circle",
    slug: "startup-chai-founders-circle",
    description:
      "Informal founders meetup: pitch practice, hiring tips, and Jaipur ecosystem updates over chai.",
    startAt: "2026-06-28T17:00:00+05:30",
    venue: {
      name: "C-Scheme Café",
      area: "C-Scheme",
    },
    tags: ["startup", "networking"],
    rsvpCount: 19,
    status: "published",
  },
  {
    id: "demo-4",
    title: "Tech × Culture Fest Preview",
    slug: "tech-culture-fest-preview",
    description:
      "Preview night for a blended tech and cultural festival — demos, folk fusion, and community booths.",
    startAt: "2026-07-05T16:00:00+05:30",
    venue: {
      name: "Open Air Amphitheatre",
      area: "Mansarovar",
    },
    tags: ["tech", "culture", "fest"],
    rsvpCount: 65,
    status: "published",
  },
];

export const DEMO_REELS: FeaturedReel[] = [
  {
    id: "reel-1",
    title: "Last meetup highlights",
    instagramUrl: "https://www.instagram.com/reel/example1/",
    order: 1,
    active: true,
  },
  {
    id: "reel-2",
    title: "Heritage walk moments",
    instagramUrl: "https://www.instagram.com/reel/example2/",
    order: 2,
    active: true,
  },
];
