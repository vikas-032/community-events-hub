"use client";

import { useCallback, useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";
import { fetchUserRsvp, setUserRsvp } from "@/lib/firestore/rsvps";
import type { RsvpStatus } from "@/types";

export function RsvpButton({ eventId }: { eventId: string }) {
  const { user, firebaseReady, signInWithGoogle } = useAuth();
  const [status, setStatus] = useState<RsvpStatus | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user || !firebaseReady) {
      setStatus(null);
      return;
    }

    fetchUserRsvp(eventId, user.uid).then((rsvp) => {
      setStatus(rsvp?.status ?? null);
    });
  }, [eventId, user, firebaseReady]);

  const updateRsvp = useCallback(
    async (next: RsvpStatus) => {
      if (!user) return;
      setBusy(true);
      try {
        await setUserRsvp(eventId, user.uid, next);
        setStatus(next === "cancelled" ? null : next);
      } finally {
        setBusy(false);
      }
    },
    [eventId, user],
  );

  if (!firebaseReady) {
    return (
      <p className="rounded-xl border border-amber-500/20 bg-amber-950/30 px-4 py-3 text-sm text-amber-100/90">
        Add Firebase env vars to enable RSVPs. Browse events in demo mode meanwhile.
      </p>
    );
  }

  if (!user) {
    return (
      <button
        type="button"
        disabled={busy}
        onClick={() => signInWithGoogle()}
        className="btn-primary disabled:opacity-60"
      >
        Sign in to RSVP
      </button>
    );
  }

  if (status === "going") {
    return (
      <div className="flex flex-wrap gap-3">
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
          You&apos;re going
        </span>
        <button
          type="button"
          disabled={busy}
          onClick={() => updateRsvp("cancelled")}
          className="btn-secondary disabled:opacity-60"
        >
          Cancel RSVP
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        disabled={busy}
        onClick={() => updateRsvp("going")}
        className="btn-primary disabled:opacity-60"
      >
        RSVP — Going
      </button>
      <button
        type="button"
        disabled={busy}
        onClick={() => updateRsvp("interested")}
        className="btn-secondary disabled:opacity-60"
      >
        Interested
      </button>
    </div>
  );
}
