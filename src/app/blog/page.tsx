import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Blog", "İngiltere vize süreçleri için kapsamlı bilgi bankası ve SEO içerikleri.", "/blog");

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/blog", label: "Blog" }]} />
      <h1 className="text-3xl font-semibold">Blog & Rehber Merkezi</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-amber-700">{post.category}</p>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium underline">
              Devamını Oku
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
