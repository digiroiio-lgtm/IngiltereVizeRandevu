import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { faqItems, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("SSS", "İngiltere vizesi ve VFS randevu süreçleri hakkında sık sorulan sorular.", "/sss");

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="space-y-6">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/sss", label: "SSS" }]} />
      <h1 className="text-3xl font-semibold">Sık Sorulan Sorular</h1>
      <p className="text-slate-700">
        İngiltere vizesi başvurusu, VFS randevu süreci ve belge hazırlığına ilişkin en çok merak edilen soruların
        yanıtlarını bu sayfada bulabilirsiniz. Sorunuzun yanıtını bulamadıysanız iletişim sayfamız üzerinden bize
        ulaşabilirsiniz.
      </p>
      {faqItems.map((item) => (
        <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-medium">{item.q}</summary>
          <p className="mt-2 text-slate-700">{item.a}</p>
        </details>
      ))}
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
        <p>
          Yukarıdaki sorulara ek olarak başvurunuza özel bir değerlendirme almak isterseniz danışmanlık hizmetimizden
          yararlanabilirsiniz. Her başvuru kendi koşulları içinde değerlendirildiğinden, genel yanıtların ötesinde
          bireysel bir strateji oluşturmak büyük fark yaratmaktadır.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/iletisim" className="rounded-full border border-slate-300 px-3 py-1">Danışmanlık Al</Link>
        <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
        <Link href="/vfs-rehberi" className="rounded-full border border-slate-300 px-3 py-1">VFS Rehberi</Link>
        <Link href="/blog" className="rounded-full border border-slate-300 px-3 py-1">Blog</Link>
      </div>
    </div>
  );
}
