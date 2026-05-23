import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RsvpButton } from "@/components/events/RsvpButton";
import { formatEventDate } from "@/lib/format";
import { fetchEventBySlug } from "@/lib/firestore/events";
import { getEventCoverImage } from "@/lib/heritage-images";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);

  if (!event) notFound();

  const cover = getEventCoverImage(event.id);

  return (
    <article>
      <div className="relative h-64 overflow-hidden border-b border-white/5 pt-16 sm:h-80">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/30" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/events" className="text-sm text-accent hover:underline">
          ← All events
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
          {event.title}
        </h1>
        <p className="mt-2 text-stone-400">{formatEventDate(event.startAt)}</p>

        <div className="card-surface mt-8 space-y-2 p-6">
          <h2 className="font-semibold text-white">Venue</h2>
          <p className="text-stone-400">
            {event.venue.name} · {event.venue.area}
          </p>
          {event.venue.mapsUrl && (
            <a
              href={event.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent hover:underline"
            >
              Open in Maps →
            </a>
          )}
        </div>

        <p className="mt-8 whitespace-pre-wrap leading-relaxed text-stone-300">
          {event.description}
        </p>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-sm text-stone-500">{event.rsvpCount} people going</p>
          <RsvpButton eventId={event.id} />
        </div>
      </div>
    </article>
  );
}
