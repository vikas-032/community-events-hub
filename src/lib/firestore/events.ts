import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { DEMO_EVENTS } from "@/lib/demo-data";
import { db, isFirebaseConfigured } from "@/lib/firebase/client";
import type { CommunityEvent, EventTag } from "@/types";

function mapEvent(id: string, data: Record<string, unknown>): CommunityEvent {
  return {
    id,
    title: String(data.title ?? ""),
    slug: String(data.slug ?? id),
    description: String(data.description ?? ""),
    startAt: String(data.startAt ?? ""),
    endAt: data.endAt ? String(data.endAt) : undefined,
    venue: (data.venue as CommunityEvent["venue"]) ?? { name: "", area: "" },
    tags: (data.tags as EventTag[]) ?? [],
    coverImageUrl: data.coverImageUrl ? String(data.coverImageUrl) : undefined,
    organizerId: data.organizerId ? String(data.organizerId) : undefined,
    capacity: typeof data.capacity === "number" ? data.capacity : undefined,
    rsvpCount: typeof data.rsvpCount === "number" ? data.rsvpCount : 0,
    status: (data.status as CommunityEvent["status"]) ?? "published",
  };
}

export async function fetchPublishedEvents(tag?: EventTag): Promise<CommunityEvent[]> {
  if (!isFirebaseConfigured() || !db) {
    const events = DEMO_EVENTS.filter((e) => e.status === "published");
    return tag ? events.filter((e) => e.tags.includes(tag)) : events;
  }

  const eventsRef = collection(db, "events");
  const q = query(
    eventsRef,
    where("status", "==", "published"),
    orderBy("startAt", "asc"),
  );
  const snapshot = await getDocs(q);
  let events = snapshot.docs.map((d) => mapEvent(d.id, d.data()));

  if (tag) events = events.filter((e) => e.tags.includes(tag));
  return events;
}

export async function fetchEventBySlug(slug: string): Promise<CommunityEvent | null> {
  if (!isFirebaseConfigured() || !db) {
    return DEMO_EVENTS.find((e) => e.slug === slug) ?? null;
  }

  const eventsRef = collection(db, "events");
  const q = query(eventsRef, where("slug", "==", slug), where("status", "==", "published"));
  const snapshot = await getDocs(q);
  const docSnap = snapshot.docs[0];
  if (!docSnap) return null;
  return mapEvent(docSnap.id, docSnap.data());
}

export async function fetchEventById(id: string): Promise<CommunityEvent | null> {
  if (!isFirebaseConfigured() || !db) {
    return DEMO_EVENTS.find((e) => e.id === id) ?? null;
  }

  const docSnap = await getDoc(doc(db, "events", id));
  if (!docSnap.exists()) return null;
  return mapEvent(docSnap.id, docSnap.data());
}
