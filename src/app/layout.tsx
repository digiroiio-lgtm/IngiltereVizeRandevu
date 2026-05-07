import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { navigation, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "İngiltere Vize Randevu Alma ve Başvuru Danışmanlığı (2026)",
    template: "%s | İngiltere Vize Randevu",
  },
  description:
    "İngiltere vize başvuru danışmanlığı, VFS randevu rehberliği, evrak kontrolü ve süreç yönetimi.",
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.whatsapp],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "tr-TR",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UK Visa Application Intelligence Platform",
  provider: { "@type": "Organization", name: siteConfig.name },
  areaServed: "TR",
  serviceType: "UK Visa Consultancy",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  address: { "@type": "PostalAddress", addressCountry: "TR" },
  telephone: siteConfig.phone,
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "Service", name: "İngiltere Vize Danışmanlığı" },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  author: { "@type": "Person", name: "Doğrulanmış Danışan" },
  reviewBody: "Süreç, evrak ve VFS adımlarında net ve profesyonel destek aldım.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={reviewSchema} />
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight text-slate-950">
              ingilterevizerandevu.com
            </Link>
            <nav className="flex flex-wrap gap-3 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-slate-700 hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

        <footer className="mt-12 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl space-y-4 px-4 py-8 text-sm text-slate-700">
            <p>
              Bu web sitesi resmi bir UK Government web sitesi değildir. Vize kararları yalnızca UKVI tarafından verilir.
              Vize onayı garantisi verilmez. VFS Global üçüncü taraf hizmet sağlayıcıdır. Danışmanlık ücretleri UK Government
              ücretlerinden ayrıdır.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={siteConfig.whatsapp} className="font-medium text-slate-900">
                WhatsApp Destek
              </a>
              <Link href="/ucretler" className="font-medium text-slate-900">
                Ücretler
              </Link>
              <Link href="/sss" className="font-medium text-slate-900">
                Sık Sorulan Sorular
              </Link>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-300 bg-white/95 p-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl gap-2">
            <Link href="/iletisim" className="flex-1 rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white">
              Hemen Başvur
            </Link>
            <a href={siteConfig.whatsapp} className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-center text-sm font-medium">
              WhatsApp Destek
            </a>
            <Link href="/iletisim" className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-center text-sm font-medium">
              Ücretsiz Ön İnceleme
            </Link>
          </div>
        </div>

        <a
          href={siteConfig.whatsapp}
          className="fixed bottom-20 right-4 z-50 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg md:bottom-6"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
