import Image from "next/image";

import { HERITAGE_GALLERY } from "@/lib/heritage-images";

export function HeritageGallery() {
  const [featured, ...rest] = HERITAGE_GALLERY;

  return (
    <section className="border-y border-white/5 bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-500/80">
            Visual heritage
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            The soul of Jaipur, in every scroll
          </h2>
          <p className="mt-4 text-stone-400">
            Terracotta facades, marble courtyards, and amber sunsets — the same palette that frames
            your community calendar.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-12 md:grid-rows-2 md:h-[420px]">
          <figure className="group relative overflow-hidden rounded-2xl md:col-span-7 md:row-span-2 min-h-[240px] md:min-h-0">
            <div className="ken-burns-layer-slow absolute -inset-[8%]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 font-display text-xl text-white">
              {featured.caption}
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:row-span-2 md:grid-cols-2 md:grid-rows-2">
            {rest.slice(0, 4).map((img) => (
              <figure
                key={img.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:min-h-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />
                <figcaption className="absolute bottom-2 left-2 text-xs font-medium text-white/90">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
