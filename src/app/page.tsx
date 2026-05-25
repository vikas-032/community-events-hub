import Link from "next/link";

import { BlogCard } from "@/components/blog/BlogCard";
import { EventCard } from "@/components/events/EventCard";
import { JaipurFoodSection } from "@/components/food/JaipurFoodSection";
import { getAllBlogs } from "@/lib/heritage-blogs";
import { HeritageGallery } from "@/components/heritage/HeritageGallery";
import { HeritageHero } from "@/components/heritage/HeritageHero";
import { ReelGrid } from "@/components/reels/ReelGrid";
import { fetchPublishedEvents } from "@/lib/firestore/events";
import { fetchFeaturedReels } from "@/lib/firestore/reels";

export default async function HomePage() {
  const [events, reels] = await Promise.all([
    fetchPublishedEvents(),
    fetchFeaturedReels(),
  ]);
  const featured = events.slice(0, 3);
  const blogPreview = getAllBlogs().slice(0, 3);

  return (
    <div>
      <HeritageHero />
      <HeritageGallery />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500/80">Heritage</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-white">Jaipur stories</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
            All posts →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPreview.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>

      <JaipurFoodSection />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500/80">Upcoming</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-white">Events in the city</h2>
          </div>
          <Link href="/events" className="text-sm font-medium text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <ReelGrid reels={reels} />
      </section>
    </div>
  );
}
