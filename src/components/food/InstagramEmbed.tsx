"use client";

import {
  getInstagramEmbedUrl,
  type InstagramFoodPost,
} from "@/lib/jaipur-food-instagram";

type InstagramEmbedProps = {
  post: InstagramFoodPost;
  /** compact = area cards, default = place cards, hero = showcase */
  size?: "compact" | "default" | "hero";
  className?: string;
};

const HEIGHT = {
  compact: 380,
  default: 480,
  hero: 520,
} as const;

export function InstagramEmbed({ post, size = "default", className = "" }: InstagramEmbedProps) {
  const height = HEIGHT[size];

  return (
    <div className={`flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black ${className}`}>
      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-white">{post.title}</p>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400/90 hover:text-amber-300"
          >
            @{post.influencerHandle}
          </a>
        </div>
        <span className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          IG
        </span>
      </div>
      <div className="relative w-full bg-stone-950" style={{ height }}>
        <iframe
          src={getInstagramEmbedUrl(post)}
          title={`${post.title} by @${post.influencerHandle}`}
          className="absolute inset-0 h-full w-full border-0"
          scrolling="no"
          allow="encrypted-media"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {post.dish && (
        <p className="border-t border-white/5 px-3 py-2 text-xs text-stone-500">
          {post.dish} · via local Instagram community
        </p>
      )}
    </div>
  );
}
