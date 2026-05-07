import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Hakkımızda",
  "İngiltere vize süreçlerinde deneyimli danışmanlık ekibimizle tanışın. Evrak yönetimi, VFS optimizasyonu ve başvuru stratejisi konusunda güvenilir çözümler.",
  "/hakkimizda",
);

const expertise = [
  {
    icon: "📋",
    title: "Evrak Mimarisi",
    desc: "Her başvuru tipi için özelleştirilmiş dosya yapısı ve belge sıralaması; eksik veya hatalı evrak riskini minimuma indirir.",
  },
  {
    icon: "💰",
    title: "Finansal Dosya Planlaması",
    desc: "Banka hesap özetleri, gelir belgeleri ve mali tutarlılık analizini doğru kurgulayarak güçlü bir finansal profil oluştururuz.",
  },
  {
    icon: "🗓️",
    title: "VFS Workflow Optimizasyonu",
    desc: "Randevu zamanlaması, biyometri süreci ve online yükleme adımlarında hata payını sıfıra yaklaştıran akış yönetimi.",
  },
  {
    icon: "✈️",
    title: "Başvuru Stratejisi",
    desc: "Seyahat geçmişi, seyahat amacı ve profil analizine dayalı bireysel başvuru stratejileri; ret riskini önemli ölçüde azaltır.",
  },
  {
    icon: "🔄",
    title: "Ret Sonrası Revizyon",
    desc: "Red gerekçesinin derinlemesine analizi ve yeniden başvuruda daha güçlü bir dosya kurgusu ile ikinci şans yönetimi.",
  },
  {
    icon: "🏢",
    title: "Şirket & İhracat Başvuruları",
    desc: "Uluslararası ticaret ve ihracat geçmişine sahip şirket sahipleri için özelleştirilmiş business visa dosya desteği.",
  },
];

const stats = [
  { value: "1.200+", label: "Başarıyla Tamamlanan Başvuru" },
  { value: "%94", label: "İlk Başvuruda Onay Oranı" },
  { value: "8", label: "Farklı Şehirde Hizmet" },
  { value: "7/24", label: "WhatsApp Destek" },
];

const values = [
  {
    title: "Şeffaflık",
    desc: "Sürecin her adımını müvekkille paylaşır, gizli ücret veya belirsiz bilgi vermeyiz.",
  },
  {
    title: "Uzmanlık",
    desc: "UKVI mevzuatını yakından takip eden, yüzlerce farklı profili yönetmiş deneyimli kadro.",
  },
  {
    title: "Hız",
    desc: "İlk görüşmeden dosya teslim süresine kadar optimize edilmiş iş akışı; zamanınız kıymetlidir.",
  },
  {
    title: "Gizlilik",
    desc: "Kişisel ve finansal bilgileriniz hiçbir üçüncü tarafla paylaşılmaz, KVKK uyumlu süreç yönetimi uygulanır.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/hakkimizda", label: "Hakkımızda" }]} />

      {/* Hero */}
      <section className="rounded-xl border border-slate-200 bg-white px-8 py-10 space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Hakkımızda</h1>
        <p className="text-lg text-slate-700 max-w-3xl">
          İngiltere Vize Randevu, Türk vatandaşlarına yönelik İngiltere vize başvuru danışmanlığı alanında faaliyet
          gösteren uzmanlaşmış bir danışmanlık platformudur. Uluslararası operasyon yönetimi, ihracat süreçleri
          ve UK başvuru akışlarında yıllarca edinilen saha deneyimini sistematik bir hizmet altyapısına dönüştürdük.
        </p>
        <p className="text-slate-600 max-w-3xl">
          Amacımız tek bir şey: başvurunuzun ilk seferinde, doğru biçimde hazırlanmasını sağlamak. Evrak hataları,
          finansal yetersizlik algısı veya strateji eksikliği nedeniyle gereksiz ret yaşayan başvuranların yanında
          olmak için bu platformu kurduk.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center space-y-1">
            <p className="text-3xl font-bold text-slate-900">{s.value}</p>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Expertise */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Uzmanlık Alanlarımız</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
              <p className="text-2xl">{item.icon}</p>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="rounded-xl border border-slate-200 bg-white p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Çalışma İlkelerimiz</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="space-y-1">
              <h3 className="font-semibold text-slate-900">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team note */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 px-8 py-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Ekibimiz</h2>
        <p className="text-slate-700 max-w-3xl">
          Platformumuz; uluslararası ticaret, ihracat yönetimi ve UK vize operasyonları konusunda deneyim sahibi
          danışmanlardan oluşan küçük ama uzman bir ekip tarafından yönetilmektedir. Her dosyayı bizzat inceliyoruz,
          şablona dayalı değil profile özgü bir danışmanlık sunuyoruz.
        </p>
        <p className="text-slate-600 max-w-3xl">
          İçerik ve süreç mimarimiz; yüzlerce farklı profilin yönetilmesinden elde edilen gerçek dünya deneyimiyle
          şekillenmiştir. UKVI mevzuatı değiştikçe hizmet anlayışımızı ve içeriklerimizi güncellemeye devam ediyoruz.
        </p>

      </section>

      {/* CTA */}
      <section className="rounded-xl bg-slate-900 text-white px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-lg font-semibold">Başvurunuzu birlikte planlayalım.</p>
          <p className="text-slate-300 text-sm">Ücretsiz ön değerlendirme için WhatsApp veya telefon ile ulaşın.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium hover:bg-green-400 transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="/iletisim"
            className="rounded-md border border-white px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors"
          >
            İletişim Formu
          </Link>
        </div>
      </section>
    </div>
  );
}
