import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  name: "İngiltere Vize Başvuru Danışmanlık Platformu",
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

/* Primary nav items shown in header (excluding Ana Sayfa — covered by logo) */
const headerNav = navigation.filter((n) => n.href !== "/");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-[#F8FAFC] text-[#0F172A]">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={reviewSchema} />

        {/* ── Header ────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 h-[78px] border-b border-[#E2E8F0] bg-white/85 backdrop-blur-xl">
          <div className="mx-auto flex h-full max-w-[1560px] items-center justify-between gap-6 px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.jpeg"
                alt="İngiltere Vize Randevu Logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {headerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link rounded-md px-3 py-1.5 text-sm text-[#334155] hover:text-[#0F172A]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-3 py-1.5 text-sm text-[#334155] hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-emerald-500" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href="/iletisim"
                className="btn-primary rounded-lg px-4 py-2 text-sm font-semibold"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1560px] flex-1 px-6 py-8">{children}</main>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <footer className="mt-20 border-t border-[#E2E8F0] bg-white">
          <div className="mx-auto max-w-[1560px] px-6 py-12">
            <div className="grid gap-10 md:grid-cols-4">
              {/* Brand */}
              <div className="space-y-3">
                <Link href="/" className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB] text-white text-xs font-bold">UK</span>
                  <span className="font-semibold text-sm text-[#0F172A]">İngiltere Vize Randevu</span>
                </Link>
                <p className="text-xs text-[#64748B] leading-relaxed max-w-[200px]">
                  Türk vatandaşları için profesyonel İngiltere vize danışmanlığı platformu.
                </p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700"
                >
                  WhatsApp Destek →
                </a>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Hizmetler</p>
                <ul className="space-y-2 text-sm text-[#334155]">
                  {[
                    { href: "/ucretler", label: "Danışmanlık Ücretleri" },
                    { href: "/vfs-rehberi", label: "VFS Rehberi" },
                    { href: "/uk-vize-merkezleri", label: "Vize Merkezleri" },
                    { href: "/vfs-global-randevu", label: "VFS Global Randevu" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-[#2563EB] transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Bilgi</p>
                <ul className="space-y-2 text-sm text-[#334155]">
                  {[
                    { href: "/hakkimizda", label: "Hakkımızda" },
                    { href: "/blog", label: "Blog" },
                    { href: "/sss", label: "Sık Sorulan Sorular" },
                    { href: "/iletisim", label: "İletişim" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-[#2563EB] transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">İletişim</p>
                <ul className="space-y-2 text-sm text-[#334155]">
                  <li>{siteConfig.phone}</li>
                  <li>{siteConfig.email}</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-[#E2E8F0] pt-6 text-xs text-[#94A3B8] leading-relaxed">
              Bu web sitesi resmi bir Birleşik Krallık Hükümeti web sitesi değildir. Vize kararları yalnızca UKVI tarafından verilir.
              Vize onayı garantisi verilmez. VFS Global üçüncü taraf hizmet sağlayıcıdır. Danışmanlık ücretleri Birleşik Krallık Hükümeti
              ücretlerinden ayrıdır.
            </div>
          </div>
        </footer>

        {/* Mobile sticky CTA */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E2E8F0] bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="flex gap-2">
            <Link
              href="/iletisim"
              className="btn-primary flex-1 rounded-xl py-2.5 text-center text-sm font-semibold"
            >
              Ücretsiz Değerlendirme
            </Link>
            <a
              href={siteConfig.whatsapp}
              className="flex-1 rounded-xl border border-[#E2E8F0] py-2.5 text-center text-sm font-medium text-[#334155]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* WhatsApp FAB — desktop only */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-50 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
