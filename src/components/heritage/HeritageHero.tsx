import Image from "next/image";
import Link from "next/link";

import { HERITAGE_HERO, isUsingLocalHeritagePhotos } from "@/lib/heritage-images";
import { isFirebaseConfigured } from "@/lib/firebase/client";

export function HeritageHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="ken-burns-layer absolute -inset-[12%]">
          <Image
            src={HERITAGE_HERO.src}
            alt={HERITAGE_HERO.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <p className="font-display text-sm font-medium uppercase tracking-[0.35em] text-amber-400/90">
          Jaipur · Heritage · Tech
        </p>
        <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          Where Pink City culture meets builder energy
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
          Dev meetups, heritage walks, startup chai, and festival nights — curated on a canvas
          inspired by Hawa Mahal, Amer Fort, and the lanes of the Old City.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/events" className="btn-primary">
            Explore events
          </Link>
          <Link href="/about" className="btn-secondary">
            Our story
          </Link>
        </div>
        {!isFirebaseConfigured() && (
          <p className="mt-8 max-w-lg rounded-xl border border-amber-500/20 bg-black/50 px-4 py-3 text-sm text-amber-100/90 backdrop-blur-sm">
            <span className="font-medium text-amber-400">Demo mode</span> — sample events loaded.
            Add Firebase keys in <code className="text-amber-200">.env.local</code> to enable RSVPs.
          </p>
        )}
        <p className="mt-12 text-xs text-stone-500">
          {HERITAGE_HERO.caption}
          {isUsingLocalHeritagePhotos() && (
            <span className="ml-2 text-amber-600/70">· Your photos</span>
          )}
        </p>
      </div>
    </section>
  );
}
