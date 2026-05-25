import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/BlogCard";
import { getAllBlogs, getBlogBySlug, getBlogSlugs } from "@/lib/heritage-blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Post not found" };
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const others = getAllBlogs().filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <article>
      <div className="relative h-72 overflow-hidden border-b border-white/5 pt-16 sm:h-96">
        <Image
          src={blog.image.src}
          alt={blog.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/20" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/blog" className="text-sm text-accent hover:underline">
          ← All stories
        </Link>

        <p className="mt-6 text-xs uppercase tracking-wider text-amber-500/80">{blog.area}</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
          {blog.title}
        </h1>
        <p className="mt-2 text-lg text-stone-400">{blog.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-500">
          <span>{blog.readTime} read</span>
          <span>·</span>
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        {blog.highlights.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {blog.highlights.map((item) => (
              <li key={item} className="tag-pill">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="prose prose-invert mt-10 max-w-none space-y-5">
          {blog.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-stone-300">
              {paragraph}
            </p>
          ))}
        </div>

        {blog.localTip && (
          <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
            <p className="text-sm font-medium text-amber-300">Local tip</p>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/90">{blog.localTip}</p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
          <Link href="/events" className="btn-primary">
            Find events nearby
          </Link>
          <Link href="/food" className="btn-secondary">
            Jaipur food guide
          </Link>
        </div>
      </div>

      {others.length > 0 && (
        <section className="border-t border-white/5 bg-[#0f0f0f] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-white">More heritage stories</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
