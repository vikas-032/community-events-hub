"use client";

import { useMemo, useState } from "react";

import { EventCard } from "@/components/events/EventCard";
import type { CommunityEvent, EventTag } from "@/types";

const FILTERS: { value: EventTag | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "tech", label: "Tech" },
  { value: "culture", label: "Culture" },
  { value: "startup", label: "Startup" },
  { value: "fest", label: "Fest" },
];

export function EventList({ events }: { events: CommunityEvent[] }) {
  const [filter, setFilter] = useState<EventTag | "all">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((e) => e.tags.includes(filter));
  }, [events, filter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f.value
                ? "bg-gradient-to-r from-amber-200 to-amber-600 text-black"
                : "border border-white/10 bg-white/5 text-stone-400 hover:border-amber-500/30 hover:text-stone-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-stone-500">No events match this filter.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
