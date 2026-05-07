import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import {
  consultancyFees,
  coreLinks,
  faqItems,
  govFees,
  pageMetadata,
  processSteps,
} from "@/lib/site";

export const metadata = pageMetadata(
  "İngiltere Vize Randevu Alma ve Başvuru Danışmanlığı (2026)",
  "İngiltere vize başvurunuzu profesyonel şekilde yönetin: evrak organizasyonu, VFS yükleme desteği, finansal dosya hazırlığı.",
  "/",
);

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-medium text-amber-700">UK Visa Process Management Platform</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            İngiltere Vize Randevu Alma ve Başvuru Danışmanlığı (2026)
          </h1>
          <p className="text-slate-600">
            İngiltere vize başvurunuzu profesyonel şekilde yönetin. Evrak organizasyonu, VFS yükleme desteği, finansal dosya
            hazırlığı ve başvuru stratejisi danışmanlığı.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/iletisim" className="rounded-md bg-slate-900 px-4 py-2 text-white">
              Başvurumu İncelet
            </Link>
            <a href="https://wa.me/905555555555" className="rounded-md border border-slate-300 px-4 py-2">
              WhatsApp Destek
            </a>
            <Link href="/iletisim" className="rounded-md border border-slate-300 px-4 py-2">
              Evrak Kontrolü Başlat
            </Link>
          </div>
          <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <span>UK Visitor Visa Support</span>
            <span>VFS Guidance</span>
            <span>Premium Documentation Assistance</span>
            <span>Turkish Citizens Focused</span>
          </div>
        </div>

        <form className="space-y-3 rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">Ücretsiz Ön İnceleme Formu</h2>
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeAdSoyad">
            Ad Soyad
          </label>
          <input id="homeAdSoyad" className="w-full rounded-md border border-slate-300 p-2" placeholder="Ad Soyad" />
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeTelefon">
            Telefon
          </label>
          <input id="homeTelefon" className="w-full rounded-md border border-slate-300 p-2" placeholder="Telefon" />
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeEposta">
            E-posta
          </label>
          <input id="homeEposta" className="w-full rounded-md border border-slate-300 p-2" placeholder="E-posta" />
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeVizeTuru">
            Vize Türü
          </label>
          <input id="homeVizeTuru" className="w-full rounded-md border border-slate-300 p-2" placeholder="Vize Türü" />
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeSeyahatTarihi">
            Seyahat Tarihi
          </label>
          <input id="homeSeyahatTarihi" className="w-full rounded-md border border-slate-300 p-2" placeholder="Seyahat Tarihi" />
          <label className="block text-sm font-medium text-slate-700" htmlFor="homeRedDurumu">
            Daha Önce Red Aldınız mı?
          </label>
          <select id="homeRedDurumu" className="w-full rounded-md border border-slate-300 p-2" defaultValue="">
            <option value="" disabled>
              Daha Önce Red Aldınız mı?
            </option>
            <option>Evet</option>
            <option>Hayır</option>
          </select>
          <button type="submit" className="w-full rounded-md bg-slate-900 py-2 font-medium text-white">
            Ön İnceleme Gönder
          </button>
          <p className="text-xs text-slate-500">
            Resmi UK Government sitesi değildir. Vize kararını yalnızca UKVI verir. Danışmanlık ücreti devlet ücretinden ayrıdır.
          </p>
        </form>
      </section>

      <section className="space-y-5">
        <SectionTitle title="8 Adımda Premium Süreç Zaman Çizelgesi" />
        <ol className="grid gap-3 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li key={step} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-amber-700">Adım {index + 1}</p>
              <p className="mt-1 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-5">
        <SectionTitle
          title="VFS Global Sistemi Nasıl Çalışır?"
          subtitle="Randevu, biyometri ve upload sürecinde evrakların doğru kategori ve format ile yönetilmesi kritik önemdedir."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">VFS Workflow</h3>
            <p className="mt-2 text-sm text-slate-600">Form sonrası randevu slot yönetimi, merkez seçimi ve dosya planlama yapılır.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">Biometric Appointment</h3>
            <p className="mt-2 text-sm text-slate-600">Biyometri gününde pasaport, başvuru dökümleri ve destekleyici evrak eşleştirmesi yapılır.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">Upload Intelligence</h3>
            <p className="mt-2 text-sm text-slate-600">PDF boyutu, isimlendirme ve kategori doğruluğu ret riskini düşürür.</p>
          </article>
        </div>
        <p className="text-sm text-slate-600">
          Otorite referansları: <a className="underline" href="https://www.gov.uk/standard-visitor">GOV.UK Standard Visitor</a> ve{" "}
          <a className="underline" href="https://visa.vfsglobal.com">VFS Global</a>
        </p>
      </section>

      <section className="space-y-4">
        <SectionTitle title="UK Visa Fees 2026" />
        <div className="grid gap-4 md:grid-cols-2">
          <table className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 text-left">UKVI Kategori</th>
                <th className="p-3 text-left">Resmi Ücret</th>
              </tr>
            </thead>
            <tbody>
              {govFees.map((item) => (
                <tr key={item.category} className="border-t border-slate-100">
                  <td className="p-3">{item.category}</td>
                  <td className="p-3 font-medium">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 text-left">Danışmanlık Paketi</th>
                <th className="p-3 text-left">GBP</th>
                <th className="p-3 text-left">TL</th>
              </tr>
            </thead>
            <tbody>
              {consultancyFees.map((item) => (
                <tr key={item.package} className="border-t border-slate-100">
                  <td className="p-3">{item.package}</td>
                  <td className="p-3">{item.gbp}</td>
                  <td className="p-3 font-medium">{item.tl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          Official UK Government fees are separate from consultancy fees.
        </p>
      </section>

      <section className="space-y-4">
        <SectionTitle title="Güven Öğeleri" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold">Blurred VFS Upload Örnekleri</p>
            <div className="mt-3 h-20 rounded-lg bg-slate-200 blur-[1px]" />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold">Randevu Workflow Görseli</p>
            <div className="mt-3 h-20 rounded-lg bg-slate-200" />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold">1000+ Danışmanlık Konumlandırması</p>
            <p className="mt-2 text-sm text-slate-600">Yüksek memnuniyet odaklı, süreç tabanlı dosya yönetimi.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle title="Sık Sorulan Sorular" />
        <div className="space-y-2">
          {faqItems.slice(0, 4).map((item) => (
            <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-3">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Dahili Bağlantılar</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {coreLinks.map((href) => (
            <Link key={href} href={href} className="rounded-full border border-slate-300 px-3 py-1 hover:bg-slate-100">
              {href.replace("/", "") || "anasayfa"}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
