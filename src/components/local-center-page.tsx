import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function LocalCenterPage({ city, slug }: { city: string; slug: string }) {
  const isIstanbul = city === "İstanbul";
  const hours = isIstanbul ? "08:00 – 18:00" : "09:00 – 17:00";

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: slug, label: city }]} />
      <h1 className="text-3xl font-semibold">İngiltere Vize Randevu {city}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Merkez Bilgileri</h2>
          <p className="mt-2 text-slate-700">Çalışma Saatleri: {hours}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Randevu saatinden en az 20 dakika önce merkezde olun.</li>
            <li>Evraklarınızı kategori bazlı klasörleyin.</li>
            <li>Toplu taşıma ve park planını önceden doğrulayın.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Ulaşım, Otopark ve Konaklama</h2>
          <p className="mt-2 text-slate-700">Merkeze yakın metro/otobüs güzergahları, otopark ve otel seçenekleri için randevu öncesi planlama yapılır.</p>
          <p className="mt-2 text-slate-700">Harita bağlantıları danışmanlık oturumunda paylaşılır.</p>
        </div>
      </div>
      <details className="rounded-xl border border-slate-200 bg-white p-4">
        <summary className="cursor-pointer font-medium">Sık Sorulan Merkez Soruları</summary>
        <p className="mt-2 text-slate-700">Randevu değişikliği, belge teslim formatı ve biyometri günü prosedürleri şehir özelinde farklılık gösterebilir.</p>
      </details>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/uk-vize-merkezleri" className="rounded-full border border-slate-300 px-3 py-1">Tüm Merkezler</Link>
        <Link href="/vfs-global-randevu" className="rounded-full border border-slate-300 px-3 py-1">VFS Randevu</Link>
        <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
      </div>
    </div>
  );
}
