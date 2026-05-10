import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata("İletişim", "İngiltere vize başvuru ön inceleme ve danışmanlık iletişim sayfası.", "/iletisim");

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/iletisim", label: "İletişim" }]} />
      <h1 className="text-3xl font-semibold">İletişim ve Ön İnceleme</h1>
      <p className="text-slate-700">
        İngiltere vize başvurusu için profesyonel danışmanlık hizmetimizden yararlanmak istiyorsanız aşağıdaki formu
        doldurabilir ya da doğrudan telefon veya e-posta yoluyla bize ulaşabilirsiniz.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold">İletişim Bilgileri</h2>
            <p className="mt-2 text-slate-700">Telefon: {siteConfig.phone}</p>
            <p className="text-slate-700">E-posta: {siteConfig.email}</p>
            <p className="mt-2 text-slate-700">
              WhatsApp üzerinden de ulaşabilirsiniz. Mesai saatleri içinde gelen talepler en kısa sürede yanıtlanmaktadır.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold">Ne Sunuyoruz?</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Dosya ön incelemesi ve başvuru kategorisi analizi</li>
              <li>Belge hazırlığı ve VFS yükleme desteği</li>
              <li>VFS randevu organizasyonu ve takibi</li>
              <li>Form doldurma rehberliği</li>
              <li>Ret sonrası yeniden başvuru stratejisi</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold">Nasıl Çalışıyoruz?</h2>
            <p className="mt-2 text-slate-700">
              Ön inceleme talebinizi aldıktan sonra durumunuzu değerlendiriyor ve başvurunuza özel bir yol haritası
              sunuyoruz. Süreç boyunca her aşamada yanınızda olup belge eksikliklerini tespit ederek dosyanızı güçlendiriyoruz.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              VFS Global üçüncü taraf hizmet sağlayıcıdır. Vize kararları UKVI tarafından verilir.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
