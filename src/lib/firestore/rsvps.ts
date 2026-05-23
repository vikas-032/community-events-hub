import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { db, isFirebaseConfigured } from "@/lib/firebase/client";
import type { Rsvp, RsvpStatus } from "@/types";

function rsvpDocId(eventId: string, userId: string): string {
  return `${eventId}_${userId}`;
}

function mapRsvp(id: string, data: Record<string, unknown>): Rsvp {
  return {
    id,
    eventId: String(data.eventId ?? ""),
    userId: String(data.userId ?? ""),
    status: (data.status as RsvpStatus) ?? "going",
    createdAt: String(data.createdAt ?? new Date().toISOString()),
  };
}

export async function fetchUserRsvp(
  eventId: string,
  userId: string,
): Promise<Rsvp | null> {
  if (!isFirebaseConfigured() || !db) return null;

  const docSnap = await getDoc(doc(db, "rsvps", rsvpDocId(eventId, userId)));
  if (!docSnap.exists()) return null;
  return mapRsvp(docSnap.id, docSnap.data());
}

export async function fetchUserRsvps(userId: string): Promise<Rsvp[]> {
  if (!isFirebaseConfigured() || !db) return [];

  const q = query(collection(db, "rsvps"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map((d) => mapRsvp(d.id, d.data()))
    .filter((r) => r.status !== "cancelled");
}

export async function setUserRsvp(
  eventId: string,
  userId: string,
  status: RsvpStatus,
): Promise<void> {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured");
  }

  const id = rsvpDocId(eventId, userId);

  if (status === "cancelled") {
    await deleteDoc(doc(db, "rsvps", id));
    return;
  }

  await setDoc(doc(db, "rsvps", id), {
    eventId,
    userId,
    status,
    createdAt: new Date().toISOString(),
  });
}
