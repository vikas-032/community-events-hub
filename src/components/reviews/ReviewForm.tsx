"use client";

import { useState } from "react";

import { useAuth } from "@/context/AuthProvider";
import { submitReview } from "@/lib/firestore/reviews";

import { StarRating } from "./StarRating";

export function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { user, firebaseReady, signInWithGoogle } = useAuth();
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!firebaseReady) {
    return (
      <p className="rounded-xl border border-amber-500/20 bg-amber-950/30 px-4 py-3 text-sm text-amber-100/90">
        Connect Firebase in <code className="text-amber-200">.env.local</code> so everyone can
        post and read live reviews on Google-indexed pages.
      </p>
    );
  }

  if (!user) {
    return (
      <button type="button" onClick={() => signInWithGoogle()} className="btn-primary">
        Sign in with Google to leave a review
      </button>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim().length < 10) {
      setError("Please write at least 10 characters.");
      return;
    }

    setBusy(true);
    setError(null);
    try {
      await submitReview({
        userId: user!.uid,
        userName: user!.displayName ?? user!.email ?? "Jaipur visitor",
        userPhoto: user!.photoURL ?? undefined,
        rating,
        text,
      });
      setText("");
      setRating(5);
      setSuccess(true);
      onSubmitted?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit review.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6">
      <h3 className="font-display text-lg text-white">Share your experience</h3>
      <div>
        <p className="text-sm text-stone-400">Your rating</p>
        <div className="mt-2">
          <StarRating value={rating} onChange={setRating} />
        </div>
      </div>
      <div>
        <label htmlFor="review-text" className="text-sm text-stone-400">
          Your review (visible to everyone)
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          maxLength={500}
          placeholder="What did you like about Jaipur Events Hub — events, food guide, heritage blog?"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:border-amber-500/40 focus:outline-none"
        />
        <p className="mt-1 text-xs text-stone-600">{text.length}/500</p>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      {success && (
        <p className="text-sm text-amber-300">Thank you! Your review is live for others to read.</p>
      )}
      <button type="submit" disabled={busy} className="btn-primary disabled:opacity-60">
        {busy ? "Publishing…" : "Publish review"}
      </button>
    </form>
  );
}
