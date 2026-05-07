import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata("İletişim", "İngiltere vize başvuru ön inceleme ve danışmanlık iletişim sayfası.", "/iletisim");

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/iletisim", label: "İletişim" }]} />
      <h1 className="text-3xl font-semibold">İletişim ve Ön İnceleme</h1>
      <p className="text-slate-700">Telefon: {siteConfig.phone} • E-posta: {siteConfig.email}</p>
      <ContactForm />
      <p className="text-sm text-slate-600">VFS Global üçüncü taraf hizmet sağlayıcıdır. Vize kararları UKVI tarafından verilir.</p>
    </div>
  );
}
