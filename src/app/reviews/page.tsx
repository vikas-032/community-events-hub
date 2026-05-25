import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewsPageClient } from "@/components/reviews/ReviewsPageClient";
import { StarRating } from "@/components/reviews/StarRating";
import { PageBanner } from "@/components/layout/PageBanner";
import { averageRating, fetchPublicReviews } from "@/lib/firestore/reviews";
import { HERITAGE_HERO } from "@/lib/heritage-images";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Community Reviews",
  description:
    "Read and write reviews for Jaipur Events Hub — share your experience with events, food guides, and heritage content in Jaipur.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

export default async function ReviewsPage() {
  const reviews = await fetchPublicReviews();
  const avg = averageRating(reviews);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_NAME} Reviews`,
    url: `${SITE_URL}/reviews`,
    ...(reviews.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avg,
            reviewCount: reviews.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    review: reviews.slice(0, 10).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.userName },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.createdAt,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Community reviews"
        subtitle="Everyone can read reviews. Sign in with Google to share yours — helps Jaipur visitors on Google too."
        image={HERITAGE_HERO}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
          <div>
            <p className="text-3xl font-bold text-amber-300">{avg > 0 ? avg : "—"}</p>
            <p className="text-sm text-stone-500">{reviews.length} reviews</p>
          </div>
          {avg > 0 && <StarRating value={Math.round(avg)} readonly />}
        </div>

        <div className="mt-10">
          <ReviewsPageClient />
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-white">What people are saying</h2>
          <div className="mt-6">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
