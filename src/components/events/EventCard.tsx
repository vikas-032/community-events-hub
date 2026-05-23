import Image from "next/image";
import Link from "next/link";

import { formatEventDateShort } from "@/lib/format";
import { getEventCoverImage } from "@/lib/heritage-images";
import type { CommunityEvent } from "@/types";

export function EventCard({ event }: { event: CommunityEvent }) {
  const cover = getEventCoverImage(event.id);

  return (
    <article className="group card-surface flex flex-col overflow-hidden transition hover:border-amber-500/25 hover:shadow-[0_0_40px_-12px_rgba(212,165,116,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {event.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-pill backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/events/${event.slug}`} className="hover:text-amber-300">
            {event.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-stone-400">{event.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-4 text-sm text-stone-500">
          <span>{formatEventDateShort(event.startAt)}</span>
          <span>
            {event.venue.area} · {event.rsvpCount} going
          </span>
        </div>
      </div>
    </article>
  );
}
