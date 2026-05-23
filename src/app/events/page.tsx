import { EventList } from "@/components/events/EventList";
import { PageBanner } from "@/components/layout/PageBanner";
import { fetchPublishedEvents } from "@/lib/firestore/events";
import { HERITAGE_GALLERY } from "@/lib/heritage-images";

export const metadata = {
  title: "Events",
};

export default async function EventsPage() {
  const events = await fetchPublishedEvents();

  return (
    <div>
      <PageBanner
        title="All events"
        subtitle="Tech meetups, cultural fests, and startup gatherings across the Pink City."
        image={HERITAGE_GALLERY[1]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <EventList events={events} />
      </div>
    </div>
  );
}
