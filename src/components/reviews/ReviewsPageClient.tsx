"use client";

import { useRouter } from "next/navigation";

import { ReviewForm } from "@/components/reviews/ReviewForm";

export function ReviewsPageClient() {
  const router = useRouter();

  return <ReviewForm onSubmitted={() => router.refresh()} />;
}
