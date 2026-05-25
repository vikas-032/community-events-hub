import type { InstagramFoodPost } from "@/lib/jaipur-food-instagram";

export function InstagramPostLink({ post }: { post: InstagramFoodPost }) {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-32 flex-col items-center justify-center gap-2 rounded-none border-b border-white/10 bg-gradient-to-br from-purple-950/40 to-pink-950/30 px-4 text-center transition hover:from-purple-900/50 hover:to-pink-900/40"
    >
      <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
        Watch on Instagram
      </span>
      <span className="text-sm text-stone-300">@{post.influencerHandle}</span>
      <span className="text-xs text-stone-500">Video shown above — open original post</span>
    </a>
  );
}
