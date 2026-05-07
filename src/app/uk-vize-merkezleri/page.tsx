import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { centers, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("UK Vize Merkezleri", "İstanbul, Ankara, Antalya, İzmir ve diğer VFS merkezleri rehberi.", "/uk-vize-merkezleri");

export default function VisaCentersPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/uk-vize-merkezleri", label: "Vize Merkezleri" }]} />
      <h1 className="text-3xl font-semibold">UK Vize Merkezleri</h1>
      <p className="text-slate-700">İstanbul, Ankara, Antalya, İzmir, Adana ve ek merkezler için çalışma saatleri ve operasyon notları.</p>
      <div className="grid gap-3 md:grid-cols-3">
        {centers.map((center) => (
          <div key={center.city} className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="font-semibold">{center.city}</h2>
            <p className="text-sm text-slate-600">Saat: {center.hours}</p>
            <p className="mt-2 text-sm text-slate-600">Ulaşım, park ve randevu günü check-list desteği.</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href="/ingiltere-vize-randevu-istanbul" className="rounded-full border border-slate-300 px-3 py-1 text-sm">İstanbul</Link>
        <Link href="/ingiltere-vize-randevu-ankara" className="rounded-full border border-slate-300 px-3 py-1 text-sm">Ankara</Link>
        <Link href="/ingiltere-vize-randevu-izmir" className="rounded-full border border-slate-300 px-3 py-1 text-sm">İzmir</Link>
        <Link href="/ingiltere-vize-randevu-antalya" className="rounded-full border border-slate-300 px-3 py-1 text-sm">Antalya</Link>
      </div>
    </div>
  );
}
