import Image from "next/image";
import Link from "next/link";

import { HERITAGE_GALLERY } from "@/lib/heritage-images";

export function Footer() {
  const accent = HERITAGE_GALLERY[2];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-20">
        <Image src={accent.src} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-stone-400">
          <span className="font-display text-stone-200">Jaipur Events Hub</span>
          <span className="mx-2 text-stone-700">·</span>
          Pink City tech & culture
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/events" className="text-accent transition">
            Events
          </Link>
          <Link href="/blog" className="text-accent transition">
            Blog
          </Link>
          <Link href="/food" className="text-accent transition">
            Food
          </Link>
          <Link href="/about" className="text-accent transition">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
