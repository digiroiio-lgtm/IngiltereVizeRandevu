import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function LocalCenterPage({ city, slug }: { city: string; slug: string }) {
  const isIstanbul = city === "İstanbul";
  const hours = isIstanbul ? "08:00 – 18:00" : "09:00 – 17:00";

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: slug, label: city }]} />
      <h1 className="text-3xl font-semibold">İngiltere Vize Randevu {city}</h1>
      <p className="text-slate-700">
        {city} VFS Global merkezi üzerinden İngiltere vizesi biyometri randevunuzu alabilirsiniz. Randevu günü gerekli
        belgelerinizi eksiksiz ve düzenli biçimde hazırlamak, sürecin sorunsuz tamamlanması için kritik öneme sahiptir.
        Danışmanlık hizmetimiz {city} başvurucularına özel randevu organizasyonu, belge kontrolü ve süreç takibi desteği
        sunmaktadır.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Merkez Bilgileri</h2>
          <p className="mt-2 text-slate-700">Çalışma Saatleri: {hours}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Randevu saatinden en az 20 dakika önce merkezde olun.</li>
            <li>Evraklarınızı kategori bazlı klasörleyin.</li>
            <li>Toplu taşıma ve park planını önceden doğrulayın.</li>
            <li>Pasaportunuzu ve tüm destekleyici belgelerinizi yanınızda bulundurun.</li>
            <li>Biyometri işlemi için temiz yüz ve parmak izi gerekmektedir.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Ulaşım, Otopark ve Konaklama</h2>
          <p className="mt-2 text-slate-700">
            {city} VFS merkezine yakın metro, otobüs ve minibüs güzergahları, otopark imkânları ve otel seçenekleri için
            randevu öncesi planlama yapılmasını öneririz. Erken saatlerde merkeze ulaşmak kuyruk riskini azaltmaktadır.
          </p>
          <p className="mt-2 text-slate-700">
            Detaylı konum bilgisi ve ulaşım seçenekleri danışmanlık oturumunda paylaşılmaktadır. Randevu günü oluşabilecek
            teknik ya da belge sorunları için acil iletişim hattımız aktiftir.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Randevu Günü Kontrol Listesi</h2>
        <p className="mt-2 text-slate-700">
          Randevu gününüze hazır olmanız için aşağıdaki kontrol listesini kullanabilirsiniz. Eksik herhangi bir belge
          randevunuzun yeniden planlanmasına yol açabilir ve sürecinizi geciktirebilir.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Geçerli pasaport ve varsa eski pasaportlar</li>
          <li>Düzenlenmiş başvuru formu ve ödeme makbuzu</li>
          <li>Biyometrik fotoğraflar (VFS standartlarına uygun)</li>
          <li>Banka dökümü ve finansal belgeler</li>
          <li>Seyahat planı, konaklama ve rezervasyon belgeleri</li>
          <li>Varsa işveren belgesi veya davet mektubu</li>
        </ul>
      </div>
      <details className="rounded-xl border border-slate-200 bg-white p-4">
        <summary className="cursor-pointer font-medium">Sık Sorulan Merkez Soruları</summary>
        <p className="mt-2 text-slate-700">
          Randevu değişikliği, belge teslim formatı ve biyometri günü prosedürleri şehir özelinde farklılık gösterebilir.
          Randevu iptal etmek ya da ertelemek için VFS sisteminden işlem yapmanız gerekmektedir. Randevu günü getirmeniz
          gereken belgeler konusunda danışmanlık desteği alabilirsiniz.
        </p>
      </details>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/uk-vize-merkezleri" className="rounded-full border border-slate-300 px-3 py-1">Tüm Merkezler</Link>
        <Link href="/vfs-global-randevu" className="rounded-full border border-slate-300 px-3 py-1">VFS Randevu</Link>
        <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
        <Link href="/iletisim" className="rounded-full border border-slate-300 px-3 py-1">Danışmanlık Al</Link>
      </div>
    </div>
  );
}
