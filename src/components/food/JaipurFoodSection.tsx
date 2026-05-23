"use client";

import { useMemo, useState } from "react";

import { InstagramEmbed } from "@/components/food/InstagramEmbed";
import { InstagramFoodShowcase } from "@/components/food/InstagramFoodShowcase";
import {
  FOOD_LOCAL_ATTRIBUTION,
  JAIPUR_FOOD_AREAS,
  JAIPUR_FOOD_PLACES,
  getFoodPlacesByArea,
} from "@/lib/jaipur-food";
import {
  getInstagramPostForPlace,
  getInstagramPostsForArea,
} from "@/lib/jaipur-food-instagram";
import type { JaipurFoodArea } from "@/types/food";

const PRICE_LABELS = {
  budget: "₹ Budget",
  mid: "₹₹ Mid",
  splurge: "₹₹₹ Splurge",
} as const;

type FilterValue = JaipurFoodArea | "all";

export function JaipurFoodSection({ showViewAllLink = true }: { showViewAllLink?: boolean }) {
  const [filter, setFilter] = useState<FilterValue>("all");

  const places = useMemo(() => getFoodPlacesByArea(filter), [filter]);

  return (
    <section
      id="jaipur-food"
      className="border-y border-white/5 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-500/80">
            Local food guide
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Jaipur&apos;s best food &amp; places
          </h2>
          <p className="mt-4 leading-relaxed text-stone-400">{FOOD_LOCAL_ATTRIBUTION}</p>
        </div>

        <div
          className="mt-8 flex gap-3 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 sm:items-start"
          role="note"
        >
          <span className="text-2xl" aria-hidden>
            🪷
          </span>
          <div className="text-sm leading-relaxed text-amber-100/90">
            <strong className="font-medium text-amber-300">Curated by locals.</strong> Areas, dishes,
            and timing tips are shared by Jaipur residents. Food photos load from{" "}
            <strong className="text-amber-300">Instagram influencers</strong> — follow them for
            updates.
          </div>
        </div>

        <InstagramFoodShowcase />

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
            Explore by area
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JAIPUR_FOOD_AREAS.map((area) => {
              const areaPosts = getInstagramPostsForArea(area.id);
              const previewPost = areaPosts[0];

              return (
                <div
                  key={area.id}
                  className={`overflow-hidden rounded-xl border transition ${
                    filter === area.id
                      ? "border-amber-500/40 ring-1 ring-amber-500/30"
                      : "border-white/10 hover:border-amber-500/20"
                  }`}
                >
                  {previewPost ? (
                    <InstagramEmbed
                      post={previewPost}
                      size="compact"
                      className="rounded-none border-0"
                    />
                  ) : (
                    <div className="h-28 bg-stone-900" />
                  )}
                  <button
                    type="button"
                    onClick={() => setFilter(area.id)}
                    className="w-full border-t border-white/10 p-4 text-left"
                  >
                    <p className="font-medium text-white">{area.name}</p>
                    <p className="mt-1 text-xs text-amber-500/80">{area.vibe}</p>
                    <p className="mt-2 line-clamp-2 text-xs text-stone-500">{area.summary}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === "all"
                ? "bg-gradient-to-r from-amber-200 to-amber-600 text-black"
                : "border border-white/10 text-stone-400 hover:text-stone-200"
            }`}
          >
            All places
          </button>
          {JAIPUR_FOOD_AREAS.map((area) => (
            <button
              key={area.id}
              type="button"
              onClick={() => setFilter(area.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === area.id
                  ? "bg-gradient-to-r from-amber-200 to-amber-600 text-black"
                  : "border border-white/10 text-stone-400 hover:text-stone-200"
              }`}
            >
              {area.name.split(" (")[0]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {places.map((place) => {
            const igPost = getInstagramPostForPlace(place.id);

            return (
              <article key={place.id} className="card-surface flex flex-col overflow-hidden">
                {igPost ? (
                  <InstagramEmbed post={igPost} size="default" className="rounded-none border-0 border-b border-white/10" />
                ) : (
                  <div className="flex h-48 items-center justify-center bg-stone-900 text-sm text-stone-500">
                    Add an Instagram post in jaipur-food-instagram.ts
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-amber-500/90">
                        {place.areaLabel}
                      </p>
                      <h3 className="mt-1 font-display text-xl text-white">{place.name}</h3>
                    </div>
                    {place.priceRange && (
                      <span className="tag-pill shrink-0">{PRICE_LABELS[place.priceRange]}</span>
                    )}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {place.mustTry.map((dish) => (
                      <li
                        key={dish}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-stone-300"
                      >
                        {dish}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">
                    {place.description}
                  </p>

                  {place.localTip && (
                    <p className="mt-4 rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-sm text-stone-400">
                      <span className="font-medium text-amber-400/90">Local tip: </span>
                      {place.localTip}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-3 border-t border-white/5 pt-4 text-xs text-stone-500">
                    {place.bestTime && <span>Best time: {place.bestTime}</span>}
                    <span className="text-amber-600/60">· Shared by Jaipur locals</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {places.length === 0 && (
          <p className="mt-8 text-stone-500">No places listed for this area yet.</p>
        )}

        {showViewAllLink && (
          <p className="mt-10 text-center text-sm text-stone-500">
            {JAIPUR_FOOD_PLACES.length} spots across {JAIPUR_FOOD_AREAS.length} areas —{" "}
            <a href="/food" className="text-accent hover:underline">
              open full food guide →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
