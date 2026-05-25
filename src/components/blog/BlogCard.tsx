import Image from "next/image";
import Link from "next/link";

import type { HeritageBlog } from "@/types/blog";

export function BlogCard({ blog }: { blog: HeritageBlog }) {
  return (
    <article className="group card-surface flex flex-col overflow-hidden transition hover:border-amber-500/25">
      <Link href={`/blog/${blog.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={blog.image.src}
          alt={blog.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs text-amber-200 backdrop-blur-sm">
          {blog.readTime}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-amber-500/80">{blog.area}</p>
        <h2 className="font-display mt-2 text-xl font-semibold text-white">
          <Link href={`/blog/${blog.slug}`} className="hover:text-amber-300">
            {blog.title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-stone-500">{blog.subtitle}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-400">
          {blog.excerpt}
        </p>
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-4 text-sm font-medium text-accent hover:underline"
        >
          Read story →
        </Link>
      </div>
    </article>
  );
}
