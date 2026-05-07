export function ContactForm() {
  return (
    <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
      <label className="block text-sm font-medium text-slate-700" htmlFor="adSoyad">
        Ad Soyad
      </label>
      <input id="adSoyad" className="w-full rounded-md border border-slate-300 p-2" placeholder="Ad Soyad" />
      <label className="block text-sm font-medium text-slate-700" htmlFor="telefon">
        Telefon
      </label>
      <input id="telefon" className="w-full rounded-md border border-slate-300 p-2" placeholder="Telefon" />
      <label className="block text-sm font-medium text-slate-700" htmlFor="eposta">
        E-posta
      </label>
      <input id="eposta" className="w-full rounded-md border border-slate-300 p-2" placeholder="E-posta" />
      <label className="block text-sm font-medium text-slate-700" htmlFor="vizeTuru">
        Vize Türü
      </label>
      <input id="vizeTuru" className="w-full rounded-md border border-slate-300 p-2" placeholder="Vize Türü" />
      <label className="block text-sm font-medium text-slate-700" htmlFor="seyahatTarihi">
        Seyahat Tarihi
      </label>
      <input id="seyahatTarihi" className="w-full rounded-md border border-slate-300 p-2" placeholder="Seyahat Tarihi" />
      <label className="block text-sm font-medium text-slate-700" htmlFor="redDurumu">
        Daha Önce Red Aldınız mı?
      </label>
      <select id="redDurumu" className="w-full rounded-md border border-slate-300 p-2" defaultValue="">
        <option value="" disabled>
          Daha Önce Red Aldınız mı?
        </option>
        <option>Evet</option>
        <option>Hayır</option>
      </select>
      <button type="submit" className="w-full rounded-md bg-slate-900 py-2 text-white">
        Başvurumu Gönder
      </button>
      <p className="text-xs text-slate-500">
        Bu platform resmi UK Government sitesi değildir. UKVI karar mercii olup vize onayı garantisi verilmez.
      </p>
    </form>
  );
}
