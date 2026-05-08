import { Breadcrumbs } from "@/components/breadcrumbs";
import { consultancyFees, govFees, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Ücretleri 2026", "UKVI resmi ücretleri ve danışmanlık ücret tabloları.", "/ucretler");

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/ucretler", label: "Ücretler" }]} />
      <h1 className="text-3xl font-semibold">İngiltere Vize Ücretleri 2026</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <table className="rounded-xl border border-slate-200 bg-white text-sm">
          <thead className="bg-slate-100"><tr><th className="p-3 text-left">Kategori</th><th className="p-3 text-left">Ücret</th></tr></thead>
          <tbody>{govFees.map((item) => <tr key={item.category} className="border-t border-slate-100"><td className="p-3">{item.category}</td><td className="p-3">{item.fee}</td></tr>)}</tbody>
        </table>
        <table className="rounded-xl border border-slate-200 bg-white text-sm">
          <thead className="bg-slate-100"><tr><th className="p-3 text-left">Paket</th><th className="p-3 text-left">GBP</th><th className="p-3 text-left">TL</th></tr></thead>
          <tbody>{consultancyFees.map((item) => <tr key={item.package} className="border-t border-slate-100"><td className="p-3">{item.package}</td><td className="p-3">{item.gbp}</td><td className="p-3">{item.tl}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm">Resmi devlet harçları danışmanlık ücretlerinden ayrıdır.</p>
    </div>
  );
}
