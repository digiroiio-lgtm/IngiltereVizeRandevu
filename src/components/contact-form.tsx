export function ContactForm() {
  return (
    <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
      <input className="w-full rounded-md border border-slate-300 p-2" placeholder="Ad Soyad" />
      <input className="w-full rounded-md border border-slate-300 p-2" placeholder="Telefon" />
      <input className="w-full rounded-md border border-slate-300 p-2" placeholder="E-posta" />
      <input className="w-full rounded-md border border-slate-300 p-2" placeholder="Vize Türü" />
      <input className="w-full rounded-md border border-slate-300 p-2" placeholder="Seyahat Tarihi" />
      <select className="w-full rounded-md border border-slate-300 p-2" defaultValue="">
        <option value="" disabled>
          Daha Önce Red Aldınız mı?
        </option>
        <option>Evet</option>
        <option>Hayır</option>
      </select>
      <button type="button" className="w-full rounded-md bg-slate-900 py-2 text-white">
        Başvurumu Gönder
      </button>
      <p className="text-xs text-slate-500">
        Bu platform resmi UK Government sitesi değildir. UKVI karar mercii olup vize onayı garantisi verilmez.
      </p>
    </form>
  );
}
