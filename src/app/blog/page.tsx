import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Blog",
  "İngiltere vize süreçleri için EEAT kapsamlı rehber merkezi. Başvuru, evrak, randevu ve süreç yönetimi.",
  "/blog"
);

function formatDate(dateStr: string): string {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  const [year, month, day] = dateStr.split("-");
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/blog", label: "Blog" }]} />
      <h1 className="text-3xl font-semibold">Blog & Rehber Merkezi</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  post.category === "Money Page"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {post.category}
              </span>
            </div>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="mt-3">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-2"
              >
                Devamını Oku →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
