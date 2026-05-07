import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";

type ServicePageProps = {
  title: string;
  description: string;
  points: string[];
  slug: string;
};

export function ServicePage({ title, description, points, slug }: ServicePageProps) {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: slug, label: title }]} />
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <SectionTitle title={title} subtitle={description} />
          <ul className="space-y-2 text-slate-700">
            {points.map((point) => (
              <li key={point} className="rounded-lg border border-slate-200 bg-white p-3">
                {point}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            Danışmanlık ücretleri UK Government ücretlerinden ayrıdır. Vize kararları yalnızca UKVI tarafından verilir.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">
              Ücretler
            </Link>
            <Link href="/vfs-rehberi" className="rounded-full border border-slate-300 px-3 py-1">
              VFS Rehberi
            </Link>
            <Link href="/sss" className="rounded-full border border-slate-300 px-3 py-1">
              SSS
            </Link>
            <Link href="/blog" className="rounded-full border border-slate-300 px-3 py-1">
              Blog
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
