import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("VFS Global Randevu", "VFS Global randevu organizasyonu ve başvuru öncesi hazırlık.", "/vfs-global-randevu");

export default function VfsGlobalAppointmentPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/vfs-global-randevu", label: "VFS Global Randevu" }]} />
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <SectionTitle title="VFS Global Randevu" subtitle="Merkez seçimi, tarih planlaması ve başvuru dosyası ile uyumlu randevu stratejisi." />
          <ul className="space-y-2 text-slate-700">
            {[
              "İstanbul, Ankara, Antalya, İzmir ve diğer şehirlerde merkez planlaması",
              "Parmak izi ve fotoğraf randevusu öncesi evrak dizilimi ve kontrol",
              "Randevu sonrası takip ve pasaport teslim süreci yönetimi",
              "Yoğun dönem randevu bulmak için kontenjan takip stratejisi",
              "Online başvuru (UKVI) ile VFS randevu uyumu sağlama",
              "Randevu değişikliği ve iptal sürecinde rehberlik",
            ].map((point) => (
              <li key={point} className="rounded-lg border border-slate-200 bg-white p-3">
                {point}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            VFS Global üçüncü taraf hizmet sağlayıcıdır. Vize kararları UKVI tarafından verilir.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/vfs-rehberi" className="rounded-full border border-slate-300 px-3 py-1">VFS Rehberi</Link>
            <Link href="/uk-vize-merkezleri" className="rounded-full border border-slate-300 px-3 py-1">Vize Merkezleri</Link>
            <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Randevu Öncesi Hazırlık Neden Önemlidir?</h2>
        <p className="text-slate-700">
          VFS randevu günü belgelerinizin eksiksiz ve düzenli olması, işlemin sorunsuz tamamlanmasını doğrudan etkiler.
          Eksik ya da hatalı belgelerle gelen başvurular iade edilebilmekte ve süreç yeniden planlanmak zorunda kalınmaktadır.
          Randevu öncesi belge kontrolü bu riski ortadan kaldırmaktadır.
        </p>
        <p className="text-slate-700">
          Danışmanlık hizmetimiz randevu organizasyonundan belge kontrolüne, merkez seçiminden pasaport takibine kadar tüm
          süreçlerde size destek olmaktadır. Randevu almadan önce başvurunuzu birlikte değerlendirmek için iletişim formunu
          doldurabilirsiniz.
        </p>
      </section>
    </div>
  );
}
