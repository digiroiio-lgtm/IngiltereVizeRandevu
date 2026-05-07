import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Hakkımızda",
  "İngiltere vize süreçlerinde premium danışmanlık ve dokümantasyon yönetimi.",
  "/hakkimizda",
);

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ href: "/", label: "Ana Sayfa" }, { href: "/hakkimizda", label: "Hakkımızda" }]} />
      <section className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-[200px,1fr]">
        <Image src="/oguz-yumuk.svg" alt="Oğuz Yumuk" width={180} height={180} className="rounded-xl" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Oğuz Yumuk</h1>
          <p className="text-slate-700">
            Uluslararası operasyonlar, ihracat yönetimi ve UK başvuru süreçleri konusunda süreç odaklı danışmanlık sunar.
            Evrak mimarisi, finansal dosya planlaması ve VFS workflow optimizasyonu alanlarında uzmanlaşmıştır.
          </p>
          <p className="text-slate-700">
            Bu platform, Türk vatandaşları için güven temelli bir UK visa application intelligence altyapısı sunar.
          </p>
          <Link href="/yazar/oguz-yumuk" className="inline-block rounded-md bg-slate-900 px-4 py-2 text-white">
            Yazar Profili
          </Link>
        </div>
      </section>
    </div>
  );
}
