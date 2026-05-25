import type { Review } from "@/types/review";

/** Shown when Firebase is not configured */
export const DEMO_REVIEWS: Review[] = [
  {
    id: "demo-1",
    userId: "demo",
    userName: "Priya S.",
    rating: 5,
    text: "Best place to find Jaipur tech meetups and heritage walks in one site. RSVP flow is simple once Firebase is connected.",
    createdAt: "2026-05-10T10:00:00+05:30",
  },
  {
    id: "demo-2",
    userId: "demo",
    userName: "Rahul M.",
    rating: 4,
    text: "Food guide with local tips is spot on. Would love more events in Malviya Nagar.",
    createdAt: "2026-05-12T14:30:00+05:30",
  },
  {
    id: "demo-3",
    userId: "demo",
    userName: "Ananya K.",
    rating: 5,
    text: "Heritage blog posts helped me plan Amer Fort and Hawa Mahal in one day. Pink City vibes!",
    createdAt: "2026-05-15T09:15:00+05:30",
  },
];
