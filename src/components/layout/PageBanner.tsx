import Image from "next/image";

import type { HeritageImage } from "@/lib/heritage-images";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image: HeritageImage;
};

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/5 pt-16">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-[#0a0a0a]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-stone-400">{subtitle}</p>}
      </div>
    </div>
  );
}
