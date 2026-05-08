"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const STEPS = ["Vize Bilgileri", "Seyahat Detayları", "Kişisel Bilgiler"] as const;

const VIZE_TURLERI = [
  "Turistik Vize",
  "Öğrenci Vizesi",
  "İş / Ticari Vize",
  "Aile Ziyareti",
  "Transit Vize",
  "Diğer",
];

const SEHIRLER = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Antalya",
  "Bursa",
  "Adana",
  "Gaziantep",
  "Trabzon",
  "Diğer",
];

const CALISMA_DURUMLARI = [
  "Çalışıyor (Ücretli)",
  "Serbest Meslek",
  "İşveren / Girişimci",
  "Öğrenci",
  "Emekli",
  "İşsiz",
  "Diğer",
];

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-slate-700">
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20";

function SelectField({
  id,
  name,
  label,
  icon,
  options,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  icon: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel htmlFor={id}>
        <span className="mr-1.5">{icon}</span>
        {label}
      </FieldLabel>
      <select
        id={id}
        name={name}
        className={inputCls}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Seçiniz…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function YesNoField({
  id,
  name,
  label,
  icon,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  icon: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel htmlFor={id}>
        <span className="mr-1.5">{icon}</span>
        {label}
      </FieldLabel>
      <select
        id={id}
        name={name}
        className={inputCls}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Seçiniz…
        </option>
        <option value="Evet">Evet</option>
        <option value="Hayır">Hayır</option>
      </select>
    </div>
  );
}

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [vizeTuru, setVizeTuru] = useState("");
  const [oncekiVize, setOncekiVize] = useState("");
  const [redDurumu, setRedDurumu] = useState("");

  const [seyahatTarihi, setSeyahatTarihi] = useState("");
  const [sehir, setSehir] = useState("");
  const [calismaDurumu, setCalismaDurumu] = useState("");

  const [adSoyad, setAdSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [eposta, setEposta] = useState("");

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-3">
        <div className="text-4xl">✅</div>
        <h3 className="text-lg font-bold text-emerald-800">Başvurunuz Alındı!</h3>
        <p className="text-sm text-emerald-700">
          Ortalama <strong>15 dakika</strong> içinde danışmanımız sizinle iletişime geçecek.
        </p>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          WhatsApp&rsquo;tan da ulaşabilirsiniz →
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Step header */}
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Adım {step + 1} / {STEPS.length}
          </p>
          <p className="text-xs text-slate-400">{STEPS[step]}</p>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        {/* Step dots */}
        <div className="mt-3 flex gap-2">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={`flex-1 rounded-full py-0.5 text-center text-[10px] font-medium transition-colors ${
                i <= step ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-5 p-6">
        {/* ── Step 1: Vize Bilgileri ── */}
        {step === 0 && (
          <>
            <SelectField
              id="vizeTuru"
              name="vizeTuru"
              label="Vize Türü"
              icon="🛂"
              options={VIZE_TURLERI}
              value={vizeTuru}
              onChange={setVizeTuru}
            />
            <YesNoField
              id="oncekiVize"
              name="oncekiVize"
              label="Daha Önce UK Vizesi Aldınız mı?"
              icon="🇬🇧"
              value={oncekiVize}
              onChange={setOncekiVize}
            />
            <YesNoField
              id="redDurumu"
              name="redDurumu"
              label="Daha Önce Red Aldınız mı?"
              icon="❌"
              value={redDurumu}
              onChange={setRedDurumu}
            />
          </>
        )}

        {/* ── Step 2: Seyahat Detayları ── */}
        {step === 1 && (
          <>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="seyahatTarihi">
                <span className="mr-1.5">📅</span>Seyahat Tarihi
              </FieldLabel>
              <input
                id="seyahatTarihi"
                name="seyahatTarihi"
                type="date"
                className={inputCls}
                value={seyahatTarihi}
                onChange={(e) => setSeyahatTarihi(e.target.value)}
              />
            </div>
            <SelectField
              id="sehir"
              name="sehir"
              label="Bulunduğunuz Şehir"
              icon="🏙️"
              options={SEHIRLER}
              value={sehir}
              onChange={setSehir}
            />
            <SelectField
              id="calismaDurumu"
              name="calismaDurumu"
              label="Çalışma Durumu"
              icon="💼"
              options={CALISMA_DURUMLARI}
              value={calismaDurumu}
              onChange={setCalismaDurumu}
            />
          </>
        )}

        {/* ── Step 3: Kişisel Bilgiler ── */}
        {step === 2 && (
          <>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="adSoyad">
                <span className="mr-1.5">👤</span>Ad Soyad
              </FieldLabel>
              <input
                id="adSoyad"
                name="adSoyad"
                type="text"
                required
                className={inputCls}
                placeholder="Adınız ve soyadınız"
                value={adSoyad}
                onChange={(e) => setAdSoyad(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="telefon">
                <span className="mr-1.5">📞</span>Telefon
              </FieldLabel>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                className={inputCls}
                placeholder="+90 5XX XXX XX XX"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="eposta">
                <span className="mr-1.5">✉️</span>E-posta
              </FieldLabel>
              <input
                id="eposta"
                name="eposta"
                type="email"
                className={inputCls}
                placeholder="ornek@email.com"
                value={eposta}
                onChange={(e) => setEposta(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="flex gap-2 pt-1">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              ← Geri
            </button>
          )}
          <button
            type="submit"
            className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            {step < STEPS.length - 1 ? "Devam Et →" : "Başvurumu Gönder ✓"}
          </button>
        </div>
      </form>

      {/* Trust footer */}
      <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">⚡ Ortalama yanıt süresi: 15 dk</span>
          <span className="flex items-center gap-1">🔒 Bilgileriniz güvenli şekilde korunur</span>
          <span className="flex items-center gap-1">ℹ️ UKVI resmi başvurusu değildir</span>
        </div>
      </div>
    </div>
  );
}

