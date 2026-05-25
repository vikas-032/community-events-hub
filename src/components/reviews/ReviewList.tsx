import { formatReviewDate } from "@/lib/format";
import type { Review } from "@/types/review";

import { StarRating } from "./StarRating";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return <p className="text-stone-500">No reviews yet. Be the first to share your experience.</p>;
  }

  return (
    <ul className="space-y-4">
      {reviews.map((review) => (
        <li key={review.id} className="card-surface p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-medium text-white">{review.userName}</p>
              <p className="text-xs text-stone-500">{formatReviewDate(review.createdAt)}</p>
            </div>
            <StarRating value={review.rating} readonly size="sm" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-stone-300">{review.text}</p>
        </li>
      ))}
    </ul>
  );
}
