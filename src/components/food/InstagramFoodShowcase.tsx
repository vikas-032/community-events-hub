import {
  FOOD_INSTAGRAM_ATTRIBUTION,
  getFeaturedInstagramFoodPosts,
} from "@/lib/jaipur-food-instagram";

import { InstagramEmbed } from "./InstagramEmbed";

export function InstagramFoodShowcase() {
  const featured = getFeaturedInstagramFoodPosts();

  return (
    <div className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
        From Jaipur food Instagram
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{FOOD_INSTAGRAM_ATTRIBUTION}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <InstagramEmbed key={post.id} post={post} size="default" />
        ))}
      </div>
    </div>
  );
}
