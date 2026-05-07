import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Yazar: Oğuz Yumuk",
  "UK vize danışmanlığı, uluslararası operasyon ve dokümantasyon yönetimi deneyimi.",
  "/yazar/oguz-yumuk",
);

export default function AuthorPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/yazar/oguz-yumuk", label: "Yazar" }]} />
      <article className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-[220px,1fr]">
        <Image src="/oguz-yumuk.svg" alt="Oğuz Yumuk" width={220} height={220} className="rounded-xl" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Oğuz Yumuk</h1>
          <p>
            Uluslararası operasyon yönetimi, ihracat süreçleri ve UK business travel akışlarında saha deneyimine sahip danışmandır.
          </p>
          <p>
            UK başvuru süreçlerinde evrak organizasyonu, finansal dosya tasarımı, VFS sistem akışı ve başvuru stratejisi
            geliştirme konularında içerik üretir.
          </p>
          <p className="text-sm text-slate-600">Tüm makaleler bu uzmanlık alanları çerçevesinde hazırlanır ve düzenli güncellenir.</p>
        </div>
      </article>
    </div>
  );
}
