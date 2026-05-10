import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("VFS Rehberi", "VFS randevu, biyometri ve belge yükleme süreci rehberi.", "/vfs-rehberi");

export default function VfsGuidePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/vfs-rehberi", label: "VFS Rehberi" }]} />
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <SectionTitle title="VFS Rehberi" subtitle="VFS Global randevu akışı, biyometri günü ve evrak yükleme yönetimi." />
          <ul className="space-y-2 text-slate-700">
            {[
              "Randevu kontenjan seçimi ve merkez optimizasyonu",
              "Parmak izi ve fotoğraf randevusu gün belge kontrol simülasyonu",
              "Belge yükleme kategorileri ve PDF standardizasyonu",
              "Online başvuru formu ile VFS randevu uyumu",
              "Randevu değişikliği ve iptal prosedürleri",
              "Pasaport iade süreci ve sonuç takibi",
            ].map((point) => (
              <li key={point} className="rounded-lg border border-slate-200 bg-white p-3">
                {point}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            Danışmanlık ücretleri Birleşik Krallık Hükümeti ücretlerinden ayrıdır. Vize kararları yalnızca UKVI tarafından verilir.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
            <Link href="/vfs-global-randevu" className="rounded-full border border-slate-300 px-3 py-1">VFS Randevu</Link>
            <Link href="/sss" className="rounded-full border border-slate-300 px-3 py-1">SSS</Link>
            <Link href="/blog" className="rounded-full border border-slate-300 px-3 py-1">Blog</Link>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">VFS Global Sürecini Nasıl Yönetirsiniz?</h2>
        <p className="text-slate-700">
          VFS Global, UKVI adına Türkiye&apos;deki vize başvurularını kabul eden yetkili bir üçüncü taraf hizmet sağlayıcıdır.
          Biyometrik verilerin (parmak izi ve fotoğraf) alınması, belgelerin toplanması ve başvurunun UKVI&apos;ye iletilmesi
          gibi işlemleri yürütmektedir. Randevu gününde doğru belgeleri eksiksiz getirmek sürecin hızlı tamamlanmasını sağlar.
        </p>
        <p className="text-slate-700">
          Belge yükleme aşamasında PDF formatının tercih edilmesi, dosya boyutu sınırlarına uyulması ve her belgenin doğru
          kategoriye yerleştirilmesi gerekmektedir. Sistematik bir dosya isimlendirme düzeni, yükleme sürecini hem hızlandırır
          hem de olası hataları önler. Danışmanlık hizmetimiz bu sürecin her aşamasında rehberlik sunmaktadır.
        </p>
      </section>
    </div>
  );
}
