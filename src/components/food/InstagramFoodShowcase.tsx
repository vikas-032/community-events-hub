"use client";

import { useRef, type MutableRefObject } from "react";

import {
  FOOD_INSTAGRAM_ATTRIBUTION,
  getFeaturedInstagramFoodPosts,
  type InstagramFoodPost,
} from "@/lib/jaipur-food-instagram";

import { InstagramEmbed } from "./InstagramEmbed";

type InstagramFoodShowcaseProps = {
  /** Shared set so place cards skip reels already shown here */
  usedShortcodesRef?: MutableRefObject<Set<string>>;
};

export function InstagramFoodShowcase({ usedShortcodesRef }: InstagramFoodShowcaseProps) {
  const internalRef = useRef<Set<string>>(new Set());
  const used = usedShortcodesRef ?? internalRef;
  const featured = getFeaturedInstagramFoodPosts();

  featured.forEach((post) => used.current.add(post.shortcode));

  return (
    <div className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
        From Jaipur food Instagram
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{FOOD_INSTAGRAM_ATTRIBUTION}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <InstagramEmbed key={post.shortcode} post={post} size="default" />
        ))}
      </div>
    </div>
  );
}
