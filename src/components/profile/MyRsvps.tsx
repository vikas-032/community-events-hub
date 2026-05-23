"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";
import { formatEventDate } from "@/lib/format";
import { fetchEventById } from "@/lib/firestore/events";
import { fetchUserRsvps } from "@/lib/firestore/rsvps";
import type { CommunityEvent, RsvpStatus } from "@/types";

type RsvpRow = {
  event: CommunityEvent;
  status: RsvpStatus;
};

export function MyRsvps() {
  const { user, firebaseReady, signInWithGoogle } = useAuth();
  const [rows, setRows] = useState<RsvpRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !firebaseReady) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function load() {
      const rsvps = await fetchUserRsvps(user!.uid);
      const pairs = await Promise.all(
        rsvps.map(async (r) => {
          const event = await fetchEventById(r.eventId);
          return event ? ({ event, status: r.status } satisfies RsvpRow) : null;
        }),
      );
      if (!cancelled) {
        setRows(pairs.filter((row): row is RsvpRow => row !== null));
        setLoading(false);
      }
    }

    load().catch(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [user, firebaseReady]);

  if (!firebaseReady) {
    return (
      <p className="text-stone-500">
        Configure Firebase to save and view RSVPs on your profile.
      </p>
    );
  }

  if (!user) {
    return (
      <button type="button" onClick={() => signInWithGoogle()} className="btn-primary">
        Sign in to see your RSVPs
      </button>
    );
  }

  if (loading) return <p className="text-stone-500">Loading your RSVPs…</p>;

  if (rows.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-stone-500">You have not RSVP&apos;d to any events yet.</p>
        <Link href="/events" className="text-accent hover:underline">
          Browse events →
        </Link>
      </div>
    );
  }

  return (
    <ul className="card-surface divide-y divide-white/5 overflow-hidden">
      {rows.map(({ event, status }) => (
        <li
          key={event.id}
          className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Link
              href={`/events/${event.slug}`}
              className="font-semibold text-white hover:text-amber-300"
            >
              {event.title}
            </Link>
            <p className="text-sm text-stone-500">{formatEventDate(event.startAt)}</p>
          </div>
          <span className="w-fit rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium capitalize text-amber-300">
            {status}
          </span>
        </li>
      ))}
    </ul>
  );
}
