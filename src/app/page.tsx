import Link from "next/link";
import Image from "next/image";
import { consultancyFees, faqItems, govFees, pageMetadata, processSteps, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "İngiltere Vize Randevu Alma ve Başvuru Danışmanlığı (2026)",
  "İngiltere vize başvurunuzu profesyonel şekilde yönetin: evrak organizasyonu, VFS yükleme desteği, finansal dosya hazırlığı.",
  "/",
);

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const stats = [
  { value: "1.200+", label: "Başarılı Başvuru" },
  { value: "%94", label: "İlk Başvuruda Onay" },
  { value: "8", label: "Şehirde Hizmet" },
  { value: "7/24", label: "WhatsApp Destek" },
];

const trustPills = [
  { icon: "🔒", label: "Güvenli Süreç" },
  { icon: "🏛️", label: "Resmi Kılavuz Desteği" },
  { icon: "📊", label: "Gerçek Zamanlı Takip" },
  { icon: "✅", label: "Binlerce Onaylı Başvuru" },
];

const heroSteps = [
  { label: "Online Form & Ödeme", done: true },
  { label: "Evrak Organizasyonu", done: true },
  { label: "VFS Randevu", done: true },
  { label: "Biyometri Randevusu", done: false },
  { label: "Pasaport Teslimi", done: false },
];

const services = [
  {
    icon: "📋",
    title: "Evrak Mimarisi",
    desc: "Başvuru tipinize özel dosya yapısı. Eksik veya hatalı evrak riskini minimuma indirir.",
  },
  {
    icon: "💰",
    title: "Finansal Dosya Planlaması",
    desc: "Banka özetleri, gelir belgeleri ve mali tutarlılık analizi ile güçlü finansal profil.",
  },
  {
    icon: "🗓️",
    title: "VFS Workflow Optimizasyonu",
    desc: "Randevu zamanlaması, biyometri hazırlığı ve online yükleme adımlarında hatasız süreç.",
  },
];

export default function Home() {
  return (
    <div className="pb-24 md:pb-16">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative -mx-6 -mt-8 flex min-h-[88svh] items-center overflow-hidden md:min-h-[88vh]"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #0F172A 100%)" }}
      >
        {/* Dot grid overlay */}
        <div className="dot-grid absolute inset-0" />
        {/* Subtle radial glow */}
        <div
          className="absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Left — copy */}
            <div className="space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/15 px-4 py-1.5 animate-fade-up">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0EA5E9]" />
                <span className="text-xs font-medium tracking-wide text-[#93C5FD]">2026 Güncel Rehber & Danışmanlık</span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up delay-100 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                Hızlı &amp; Güvenilir<br />
                <span style={{ color: "#0EA5E9" }}>UK Vize</span><br />
                Başvurusu
              </h1>

              {/* Sub */}
              <p className="animate-fade-up delay-200 max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
                Türk vatandaşları için profesyonel İngiltere vize danışmanlığı. Evrak organizasyonu,
                VFS randevu desteği ve başvuru stratejisi tek çatı altında.
              </p>

              {/* CTA buttons */}
              <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                >
                  Randevu Al
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/vfs-rehberi"
                  className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                >
                  Gereksinimleri İncele
                </Link>
              </div>

              {/* Trust pills */}
              <div className="animate-fade-up delay-400 flex flex-wrap gap-2 pt-1">
                {trustPills.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-slate-300"
                  >
                    <span>{p.icon}</span>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — floating card UI */}
            <div className="relative hidden md:flex items-center justify-center min-h-[480px]">
              {/* Background glow */}
              <div className="absolute h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(14,165,233,0.15)" }} />

              {/* Main status card */}
              <div className="glass-card animate-float relative rounded-[28px] p-6 w-[300px] shadow-2xl space-y-4">
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Başvuru Durumu</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">Standard Visitor Visa</p>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                    Aktif
                  </span>
                </div>

                {/* Progress steps */}
                <div className="space-y-2.5">
                  {heroSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                        style={{
                          background: step.done ? "#2563EB" : "rgba(255,255,255,0.08)",
                          color: step.done ? "#fff" : "rgba(255,255,255,0.35)",
                        }}
                      >
                        {step.done ? "✓" : i + 1}
                      </div>
                      <span className={`text-xs ${step.done ? "text-white" : "text-white/35"}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="border-t border-white/10 pt-3">
                  <p className="text-[11px] text-white/40">Tahmini süre: 15 iş günü</p>
                </div>
              </div>

              {/* Floating badge — approval rate */}
              <div className="absolute right-0 top-10 animate-fade-up delay-300 rounded-2xl bg-white px-4 py-3 text-center shadow-xl">
                <p className="text-2xl font-bold text-[#0F172A]">%94</p>
                <p className="text-[11px] text-[#64748B]">Onay Oranı</p>
              </div>

              {/* Floating badge — total applications */}
              <div className="absolute bottom-10 left-0 animate-fade-up delay-400 rounded-2xl bg-white px-4 py-3 text-center shadow-xl">
                <p className="text-2xl font-bold text-[#0F172A]">1.200+</p>
                <p className="text-[11px] text-[#64748B]">Başvuru</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────── */}
      <section className="-mx-6 border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-8 text-center ${i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E2E8F0]" : ""} ${i === 1 ? "border-r md:border-r border-[#E2E8F0]" : ""}`}
            >
              <p className="text-3xl font-bold text-[#0F172A]">{s.value}</p>
              <p className="mt-1 text-sm text-[#64748B]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="mt-20 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Hizmetlerimiz</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Başvurunuzu Birlikte Yönetelim
          </h2>
          <p className="max-w-2xl text-base text-[#64748B]">
            UKVI mevzuatını takip eden, VFS süreçlerinde deneyim sahibi ekibimizle dosyanızı en güçlü biçimde hazırlıyoruz.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="hover-lift group rounded-[22px] border border-[#E2E8F0] bg-white p-6 space-y-3"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-semibold text-[#0F172A]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS STEPS ───────────────────────────────────────────── */}
      <section className="-mx-6 mt-20 bg-[#F1F5F9] px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Süreç</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">8 Adımda Başvuru</h2>
            <p className="max-w-xl text-base text-[#64748B]">
              Vize türünün belirlenmesinden pasaport teslimata kadar her adımda yanınızdayız.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li
                key={step}
                className="hover-lift relative rounded-[20px] border border-[#E2E8F0] bg-white p-5 space-y-2"
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#2563EB,#0EA5E9)" }}
                >
                  {i + 1}
                </span>
                <p className="font-medium text-[#0F172A] text-sm leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── VFS SECTION ─────────────────────────────────────────────── */}
      <section className="mt-20 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Altyapı</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">VFS Global Sistemi</h2>
          <p className="max-w-2xl text-base text-[#64748B]">
            Randevu, biyometri ve upload sürecinde evrakların doğru kategori ve formatta yönetilmesi kritik önemdedir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              label: "WORKFLOW",
              title: "VFS Workflow",
              desc: "Başvuru sonrası randevu slot yönetimi, merkez seçimi ve evrak planlaması.",
              image: "/images/uk-visa/tower-bridge-london.jpeg",
              alt: "Tower Bridge London — VFS Workflow",
              href: "/vfs-rehberi",
              priority: true,
            },
            {
              label: "BIOMETRICS",
              title: "Biometrik Randevu",
              desc: "Pasaport, biyometri ve supporting documents sürecinin koordinasyonu.",
              image: "/images/uk-visa/uk-biometric-center-2.jpeg",
              alt: "UK Biometric Center — Biometrik Randevu",
              href: "/vfs-global-randevu",
              priority: false,
            },
            {
              label: "UPLOAD SYSTEM",
              title: "Upload Intelligence",
              desc: "PDF boyutu, kategori eşleşmesi ve naming structure optimizasyonu.",
              image: "/images/uk-visa/vfs-upload-system.jpeg",
              alt: "VFS Upload System — Upload Intelligence",
              href: "/vfs-rehberi",
              priority: false,
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  priority={card.priority}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{card.label}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">{card.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm flex-1">{card.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all duration-200">
                  İncele
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sm text-[#64748B]">
          Otorite referansları:{" "}
          <a className="text-[#2563EB] hover:underline" href="https://www.gov.uk/standard-visitor" target="_blank" rel="noopener noreferrer">
            GOV.UK Standard Visitor
          </a>{" "}
          ve{" "}
          <a className="text-[#2563EB] hover:underline" href="https://visa.vfsglobal.com" target="_blank" rel="noopener noreferrer">
            VFS Global
          </a>
        </p>
      </section>

      {/* ── FEES ────────────────────────────────────────────────────── */}
      <section className="-mx-6 mt-20 bg-[#F8FAFC] px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Ücretler</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Şeffaf Fiyatlandırma</h2>
            <p className="max-w-xl text-base text-[#64748B]">
              Devlet harçları ile danışmanlık ücretleri tamamen ayrıdır ve şeffaf biçimde sunulur.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-white">
              <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4">
                <h3 className="font-semibold text-[#0F172A]">UKVI Resmi Harçları</h3>
                <p className="text-xs text-[#64748B]">UK Government tarafından belirlenir</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {govFees.map((item, i) => (
                    <tr key={item.category} className={i > 0 ? "border-t border-[#F1F5F9]" : ""}>
                      <td className="px-6 py-3 text-[#334155]">{item.category}</td>
                      <td className="px-6 py-3 text-right font-semibold text-[#0F172A]">{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-white">
              <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4">
                <h3 className="font-semibold text-[#0F172A]">Danışmanlık Paketleri</h3>
                <p className="text-xs text-[#64748B]">Devlet harcından ayrı danışmanlık ücreti</p>
              </div>
              <table className="w-full text-sm">
                <thead className="border-b border-[#F1F5F9]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B]">Paket</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#64748B]">GBP</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#64748B]">TL</th>
                  </tr>
                </thead>
                <tbody>
                  {consultancyFees.map((item, i) => (
                    <tr key={item.package} className={i > 0 ? "border-t border-[#F1F5F9]" : ""}>
                      <td className="px-6 py-3 text-[#334155]">{item.package}</td>
                      <td className="px-6 py-3 text-right text-[#334155]">{item.gbp}</td>
                      <td className="px-6 py-3 text-right font-semibold text-[#0F172A]">{item.tl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
            ⚠️ Resmi UK Government harçları danışmanlık ücretlerinden tamamen ayrıdır. Vize kararı yalnızca UKVI tarafından verilir.
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="mt-20 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">SSS</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Sık Sorulan Sorular</h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          {faqItems.slice(0, 5).map((item) => (
            <details
              key={item.q}
              className="group rounded-[18px] border border-[#E2E8F0] bg-white open:shadow-sm transition-shadow"
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-medium text-[#0F172A] flex items-center justify-between gap-4">
                {item.q}
                <span className="shrink-0 text-[#64748B] transition-transform group-open:rotate-45 text-lg leading-none">+</span>
              </summary>
              <p className="border-t border-[#F1F5F9] px-6 py-4 text-sm leading-relaxed text-[#64748B]">{item.a}</p>
            </details>
          ))}
        </div>

        <Link href="/sss" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:underline">
          Tüm soruları gör
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>

      {/* ── FINAL CTA BANNER ────────────────────────────────────────── */}
      <section
        className="-mx-6 mt-20 px-6 py-16"
        style={{ background: "linear-gradient(135deg,#0F172A 0%,#1E3A8A 60%,#0F172A 100%)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Başvurunuzu Birlikte Planlayalım
              </h2>
              <p className="text-base text-slate-300 max-w-md">
                Ücretsiz ön değerlendirme için bizimle iletişime geçin. Dosyanızı inceleyelim, stratejinizi belirleyelim.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                >
                  Ücretsiz Ön İnceleme
                </Link>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                >
                  WhatsApp&rsquo;tan Yaz
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "📧", label: "Email Desteği", val: siteConfig.email },
                { icon: "📞", label: "Telefon", val: siteConfig.phone },
                { icon: "🏙️", label: "Hizmet Şehirleri", val: "İstanbul, Ankara +6" },
                { icon: "⏱️", label: "Yanıt Süresi", val: "Aynı gün" },
              ].map((item) => (
                <div key={item.label} className="rounded-[18px] border border-white/10 bg-white/6 p-4 space-y-1">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-[11px] text-white/50 font-medium">{item.label}</p>
                  <p className="text-xs font-semibold text-white break-all">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────────── */}
      <section className="mt-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#64748B]">Hızlı Erişim</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/ucretler", label: "Ücretler" },
            { href: "/vfs-rehberi", label: "VFS Rehberi" },
            { href: "/vfs-global-randevu", label: "VFS Randevu" },
            { href: "/sss", label: "SSS" },
            { href: "/iletisim", label: "İletişim" },
            { href: "/blog", label: "Blog" },
            { href: "/uk-vize-merkezleri", label: "Vize Merkezleri" },
            { href: "/hakkimizda", label: "Hakkımızda" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-sm text-[#334155] hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
