import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, pageMetadata, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return pageMetadata(post.title, post.excerpt, `/blog/${post.slug}`);
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="space-y-6">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Ana Sayfa" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${post.slug}`, label: post.title },
        ]}
      />
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="text-slate-700">{post.excerpt}</p>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
        <p>
          Bu rehberde başvuru amacı, finansal dosya kurgusu, VFS upload düzeni ve randevu zamanlaması ekseninde uygulanabilir
          bir başvuru planı sunulmaktadır. Dosyanızın birbiriyle tutarlı olması, başvuru güvenini artıran ana faktördür.
        </p>
        <p className="mt-3">
          Resmi süreçler için GOV.UK yönergeleri esas alınmalıdır. Bu içerik danışmanlık amaçlıdır ve vize sonucu garantisi
          içermez.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
        <Link href="/vfs-rehberi" className="rounded-full border border-slate-300 px-3 py-1">VFS Rehberi</Link>
        <Link href="/iletisim" className="rounded-full border border-slate-300 px-3 py-1">Danışmanlık Al</Link>
      </div>
    </article>
  );
}
