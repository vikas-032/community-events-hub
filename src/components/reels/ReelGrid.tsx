import Image from "next/image";

import { HERITAGE_GALLERY } from "@/lib/heritage-images";
import type { FeaturedReel } from "@/types";

export function ReelGrid({ reels }: { reels: FeaturedReel[] }) {
  if (reels.length === 0) return null;

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500/80">Highlights</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-white">Event reels</h2>
        <p className="mt-2 text-sm text-stone-500">
          Curated Instagram moments — swap URLs in Firestore with your real Reel links.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {reels.map((reel, i) => {
          const bg = HERITAGE_GALLERY[i % HERITAGE_GALLERY.length];
          return (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 min-h-[180px]"
            >
              <Image
                src={bg.src}
                alt=""
                fill
                className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <div className="relative flex h-full min-h-[180px] flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-amber-400/90">
                  Instagram Reel
                </span>
                <p className="mt-2 font-display text-xl text-white group-hover:text-amber-200">
                  {reel.title}
                </p>
                <p className="mt-2 text-sm text-stone-400">Watch on Instagram →</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
