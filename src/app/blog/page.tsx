import { BlogCard } from "@/components/blog/BlogCard";
import { PageBanner } from "@/components/layout/PageBanner";
import { getAllBlogs } from "@/lib/heritage-blogs";
import { HERITAGE_HERO } from "@/lib/heritage-images";

export const metadata = {
  title: "Heritage Blog",
  description:
    "Short guides to Amer Fort, Hawa Mahal, Jal Mahal, Nahargarh, Jaigarh, Albert Hall, and Patrika Gate in Jaipur.",
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div>
      <PageBanner
        title="Heritage blog"
        subtitle="Small stories on Jaipur’s forts, palaces, and landmarks — for visitors and locals planning a perfect day."
        image={HERITAGE_HERO}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-stone-400">
          Pink City history in bite-sized reads. Pair these spots with events and food guides on
          the rest of the site.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
