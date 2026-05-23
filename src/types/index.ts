export type EventTag = "tech" | "culture" | "startup" | "networking" | "fest";

export type EventStatus = "draft" | "published";

export type RsvpStatus = "going" | "interested" | "cancelled";

export type CommunityEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  startAt: string;
  endAt?: string;
  venue: {
    name: string;
    area: string;
    mapsUrl?: string;
  };
  tags: EventTag[];
  coverImageUrl?: string;
  organizerId?: string;
  capacity?: number;
  rsvpCount: number;
  status: EventStatus;
};

export type Rsvp = {
  id: string;
  eventId: string;
  userId: string;
  status: RsvpStatus;
  createdAt: string;
};

export type FeaturedReel = {
  id: string;
  title: string;
  instagramUrl: string;
  eventId?: string;
  order: number;
  active: boolean;
};
