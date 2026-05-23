import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { DEMO_REELS } from "@/lib/demo-data";
import { db, isFirebaseConfigured } from "@/lib/firebase/client";
import type { FeaturedReel } from "@/types";

function mapReel(id: string, data: Record<string, unknown>): FeaturedReel {
  return {
    id,
    title: String(data.title ?? ""),
    instagramUrl: String(data.instagramUrl ?? ""),
    eventId: data.eventId ? String(data.eventId) : undefined,
    order: typeof data.order === "number" ? data.order : 0,
    active: data.active !== false,
  };
}

export async function fetchFeaturedReels(): Promise<FeaturedReel[]> {
  if (!isFirebaseConfigured() || !db) {
    return DEMO_REELS.filter((r) => r.active).sort((a, b) => a.order - b.order);
  }

  const reelsRef = collection(db, "featuredReels");
  const q = query(reelsRef, where("active", "==", true), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => mapReel(d.id, d.data()));
}
