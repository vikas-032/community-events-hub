import Image from "next/image";

import { PageBanner } from "@/components/layout/PageBanner";
import { HERITAGE_GALLERY, HERITAGE_HERO } from "@/lib/heritage-images";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About this hub"
        subtitle="Heritage soul, tech pulse — one community calendar for Jaipur."
        image={HERITAGE_HERO}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-stone-400 leading-relaxed">
            <p>
              <span className="font-display text-xl text-amber-200">Jaipur The City of Royality</span>{" "}
              blends the Pink City&apos;s cultural rhythm with its growing tech community — meetups in
              Malviya Nagar, heritage walks in the Old City, and founder chai in C-Scheme.
            </p>
            <p>
              The Royal<strong className="text-stone-200">Feel Of Jaipur</strong> and{" "}
              <strong className="text-stone-200">Food</strong>: full fill your royal dreams of the heritage city,
              with the best of Jaipur&apos;s culture, food, and tech events all in one place.
            </p>
            <p>
              This is your personal brand platform: feature the events you care about, grow an
              audience, and become the go-to calendar for Jaipur tech + lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {HERITAGE_GALLERY.slice(0, 4).map((img) => (
              <figure
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="absolute bottom-2 left-2 text-xs text-white/80">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
