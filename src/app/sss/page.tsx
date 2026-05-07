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
      {faqItems.map((item) => (
        <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-medium">{item.q}</summary>
          <p className="mt-2 text-slate-700">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
