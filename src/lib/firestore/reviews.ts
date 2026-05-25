import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { DEMO_REVIEWS } from "@/lib/demo-reviews";
import { db, isFirebaseConfigured } from "@/lib/firebase/client";
import type { Review } from "@/types/review";

function mapReview(id: string, data: Record<string, unknown>): Review {
  const created = data.createdAt;
  let createdAt = new Date().toISOString();
  if (created && typeof created === "object" && "toDate" in created) {
    createdAt = (created as { toDate: () => Date }).toDate().toISOString();
  } else if (typeof created === "string") {
    createdAt = created;
  }

  return {
    id,
    userId: String(data.userId ?? ""),
    userName: String(data.userName ?? "Guest"),
    userPhoto: data.userPhoto ? String(data.userPhoto) : undefined,
    rating: typeof data.rating === "number" ? data.rating : 5,
    text: String(data.text ?? ""),
    createdAt,
  };
}

export async function fetchPublicReviews(max = 50): Promise<Review[]> {
  if (!isFirebaseConfigured() || !db) {
    return DEMO_REVIEWS;
  }

  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(max));
  const snapshot = await getDocs(q);
  const reviews = snapshot.docs.map((d) => mapReview(d.id, d.data()));

  return reviews.length > 0 ? reviews : DEMO_REVIEWS;
}

export async function submitReview(input: {
  userId: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  text: string;
}): Promise<void> {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured. Add env vars to enable reviews.");
  }

  await addDoc(collection(db, "reviews"), {
    userId: input.userId,
    userName: input.userName,
    userPhoto: input.userPhoto ?? null,
    rating: input.rating,
    text: input.text.trim(),
    createdAt: serverTimestamp(),
  });
}

export function averageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
