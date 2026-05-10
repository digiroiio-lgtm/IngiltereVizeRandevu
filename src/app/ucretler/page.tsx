import { Breadcrumbs } from "@/components/breadcrumbs";
import { consultancyFees, govFees, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Ücretleri 2026", "UKVI resmi ücretleri ve danışmanlık ücret tabloları.", "/ucretler");

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/ucretler", label: "Ücretler" }]} />
      <h1 className="text-3xl font-semibold">İngiltere Vize Ücretleri 2026</h1>
      <p className="text-slate-700">
        İngiltere vizesi toplam maliyeti iki ana kalemden oluşmaktadır: Birleşik Krallık Hükümeti tarafından belirlenen
        resmi vize harcı ve VFS Global tarafından alınan hizmet bedeli. Danışmanlık ücreti bu iki kalemden bağımsızdır.
        Doğru bütçe planlaması için her kalemin ayrı ayrı değerlendirilmesi gerekmektedir.
      </p>
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
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Ücretler Hakkında Önemli Bilgiler</h2>
        <p>
          Vize harçları Birleşik Krallık Hükümeti tarafından belirlenmekte ve döviz kuruna bağlı olarak Türk lirası karşılığı
          değişmektedir. Yukarıdaki tabloda gösterilen USD bazlı ücretler UKVI&apos;nin resmi listesine dayanmaktadır.
        </p>
        <p>
          VFS Global hizmet bedeli, biyometri randevusu, evrak teslimi ve ek seçeneklere göre farklılık göstermektedir.
          Öncelikli işlem (Priority Visa) ve süper öncelikli işlem (Super Priority Visa) seçenekleri ek ücrete tabidir.
          Bu seçenekler işlem süresini kısaltmakta; onay garantisi sunmamaktadır.
        </p>
        <p>
          Vize ücreti başvurunun ret ya da onay almasından bağımsız olarak iade edilmemektedir. Bu nedenle başvurunuzu
          eksiksiz ve doğru hazırlamanız büyük önem taşımaktadır. Danışmanlık hizmetimizle dosyanızı ödeme öncesinde
          değerlendirebilirsiniz.
        </p>
      </div>
    </div>
  );
}
