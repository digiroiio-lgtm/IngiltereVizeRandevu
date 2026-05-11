import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, pageMetadata, siteConfig } from "@/lib/site";

type QaItem = { q: string; a: string };

const richArticleData: Record<
  string,
  {
    seoTitle: string;
    metaDescription: string;
    suggestedSlug: string;
    tldr: string[];
    quickAnswers: QaItem[];
    faq: QaItem[];
    internalLinks: { href: string; label: string; reason: string }[];
    externalReferences: { label: string; href: string }[];
    ctaRecommendations: string[];
    trustBlocks: string[];
    comparisonTables: string[];
    infographicIdeas: string[];
  }
> = {
  "ingiltere-vize-evraklari": {
    seoTitle:
      "İngiltere Vize Evrakları 2026: UKVI Uyumlu Tam Kontrol Listesi ve Red Risk Analizi",
    metaDescription:
      "İngiltere vize evrakları için UKVI uyumlu tam kontrol listesi, sık red nedenleri, case officer değerlendirme mantığı ve 15+ soruluk uzman FAQ.",
    suggestedSlug: "/blog/ingiltere-vize-evraklari",
    tldr: [
      "UKVI, tek tek belgeye değil dosyanın bütünsel tutarlılığına bakar.",
      "En kritik risk alanı düşük bakiye değil, açıklanamayan para hareketleri ve gelir-gider uyumsuzluğudur.",
      "Belge hiyerarşisi doğru kurulursa red riski anlamlı şekilde düşer: kimlik + gelir kaynağı + finansal iz + seyahat amacı + geri dönüş bağı.",
      "Sahte rezervasyon, sponsor çelişkisi ve eksik iş kanıtı en sık ret tetikleyicileridir.",
    ],
    quickAnswers: [
      {
        q: "İngiltere turist vizesi evrakları içinde en kritik iki belge hangisi?",
        a: "Banka hesap dökümü ile gelir kaynağını doğrulayan iş/şirket belgeleridir; bu iki grup arasında tutarlılık yoksa dosya zayıflar.",
      },
      {
        q: "UKVI neden bu kadar çok destekleyici belge ister?",
        a: "Başvuru beyanlarının doğrulanması, finansal traceability ve travel intent credibility analizi için.",
      },
      {
        q: "Uçak bileti satın almak zorunlu mu?",
        a: "Hayır, zorunlu değil; ancak seyahat planı, rezervasyon mantığı ve tarihler birbiriyle uyumlu olmalıdır.",
      },
      {
        q: "Tek bir eksik evrak otomatik red getirir mi?",
        a: "Her zaman değil; ancak kritik bir tutarsızlık veya açıklanamayan finansal hareket varsa red olasılığı belirgin artar.",
      },
    ],
    faq: [
      {
        q: "Bankada ne kadar para olmalı?",
        a: "Sabit bir tutar yoktur. UKVI, seyahat bütçesinin gelir seviyenizle uyumlu olmasına ve hesap hareketlerinin açıklanabilir olmasına bakar.",
      },
      {
        q: "Kaç aylık banka hesap dökümü gerekir?",
        a: "Uygulamada çoğu dosyada son 3-6 ay hareketli hesap dökümü kullanılır; dönem, gelir modelinizin ispat gücüne göre belirlenir.",
      },
      {
        q: "Yeni işe girenler başvuru yapabilir mi?",
        a: "Evet. Kısa çalışma geçmişi ek iş evrakları, önceki istihdam verisi ve güçlü finansal açıklama ile desteklenmelidir.",
      },
      {
        q: "Sponsorlu başvuru kabul edilir mi?",
        a: "Evet. Sponsorun gelir belgeleri, ilişki kanıtı ve masraf üstlenme beyanı tutarlı sunulmalıdır.",
      },
      {
        q: "Uçak bileti satın almak zorunlu mu?",
        a: "Hayır. Kesin satın alım yerine tutarlı rezervasyon planı ve gerçekçi seyahat programı yeterlidir.",
      },
      {
        q: "Öğrenciler hangi evrakları eklemeli?",
        a: "Öğrenci belgesi, sponsor evrakları, finansal destek beyanı ve eğitim dönemine uygun seyahat planı eklenmelidir.",
      },
      {
        q: "Şirket sahipleri için hangi belgeler kritik?",
        a: "Vergi levhası, faaliyet belgesi, imza sirküsü, şirket banka hareketleri ve kişisel finansal akış birlikte değerlendirilir.",
      },
      {
        q: "Cover letter zorunlu mu?",
        a: "Resmen zorunlu değildir; ancak dosyanın anlatısını netleştirdiği için yüksek fayda sağlar.",
      },
      {
        q: "Niyet mektubu ile cover letter aynı mı?",
        a: "Yakın amaçlıdır ama aynı değildir. Niyet mektubu seyahat amacını, cover letter ise dosyanın bütün tutarlılığını açıklar.",
      },
      {
        q: "SGK dökümü neden istenir?",
        a: "Türkiye’deki düzenli çalışma bağını ve gelir sürdürülebilirliğini doğrulamak için.",
      },
      {
        q: "Tapu veya araç ruhsatı şart mı?",
        a: "Zorunlu değildir; fakat geri dönüş bağı ve varlık profili açısından destekleyici olabilir.",
      },
      {
        q: "Sahte rezervasyon kullanmak riskli mi?",
        a: "Evet. Sahte veya doğrulanamayan rezervasyonlar dosyanın güvenilirliğini doğrudan zedeler.",
      },
      {
        q: "Vize reddi sonraki başvuruyu etkiler mi?",
        a: "Evet. Önceki red gerekçesinin teknik olarak giderilmesi ve yeni dosyada bu düzeltmenin gösterilmesi gerekir.",
      },
      {
        q: "Sponsor gelirinin yüksek olması tek başına yeterli mi?",
        a: "Hayır. İlişki kanıtı, masraf kapsamı ve sponsorun finansal hareketlerinin izlenebilirliği de gereklidir.",
      },
      {
        q: "Belge sıralaması gerçekten önemli mi?",
        a: "Evet. Doğru document hierarchy, case officer’ın dosyayı hızlı ve tutarlı okumasını sağlar.",
      },
    ],
    internalLinks: [
      { href: "/vfs-rehberi", label: "VFS Rehberi", reason: "Belge yükleme düzeni ve dosya adlandırma standardı" },
      { href: "/ingiltere-vize-randevu-nasil-alinir", label: "Randevu Alma Rehberi", reason: "Evrak hazırlığı sonrası operasyon adımları" },
      { href: "/ucretler", label: "Ücretler", reason: "Evrak hazırlığıyla birlikte maliyet planlaması" },
      { href: "/sss", label: "Sık Sorulan Sorular", reason: "Başvuru öncesi hızlı karar noktaları" },
    ],
    externalReferences: [
      { label: "GOV.UK – Visit the UK as a Standard Visitor", href: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Visa decision waiting times", href: "https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk" },
      { label: "GOV.UK – Financial evidence guidance (route bazlı resmi yönlendirmeler)", href: "https://www.gov.uk/browse/visas-immigration" },
    ],
    ctaRecommendations: [
      "Dosyanızı göndermeden önce 15 dakikalık belge tutarlılık kontrolü yaptırın.",
      "Banka hareketlerinizi açıklanamayan girişler açısından ön incelemeden geçirin.",
      "Sponsorlu başvurularda ilişki ve finansal sorumluluk yazımını dosya ile eşleştirin.",
    ],
    trustBlocks: [
      "UKVI değerlendirme kriterleri özeti: consistency, credibility, traceability.",
      "Case officer perspective: Profil ile belgenin çelişmediği dosyalar daha hızlı okunur.",
      "Risk profile kontrol listesi: finans, amaç, geri dönüş bağı, geçmiş seyahat düzeni.",
    ],
    comparisonTables: [
      "Kendi finansmanı ile sponsorlu başvuru karşılaştırması (belge yükü ve risk noktaları).",
      "Çalışan, şirket sahibi ve öğrenci başvurularında kritik belge farkları.",
    ],
    infographicIdeas: [
      "Başvuru dosyası belge hiyerarşisi akış şeması.",
      "Red risk heatmap: finansal, operasyonel ve profil riskleri.",
      "UK vize evrak hazırlığında 7 adım zaman çizelgesi.",
    ],
  },
  "ingiltere-vize-ucreti-2026": {
    seoTitle: "İngiltere Vize Ücreti 2026: UKVI Resmi Harçlar, Priority Farkı ve Toplam Maliyet",
    metaDescription:
      "2026 İngiltere vize ücreti rehberi: UKVI resmi harç tablosu, Priority/Super Priority farkı, görünmeyen masraflar ve maliyet-risk analizi.",
    suggestedSlug: "/blog/ingiltere-vize-ucreti-2026",
    tldr: [
      "UKVI resmi harçları 8 Nisan 2026 tablosuna göre güncellenmiştir.",
      "Priority ve Super Priority, onay garantisi değil sadece hızlandırma servisidir.",
      "Toplam maliyet yalnızca resmi harçtan ibaret değildir; merkez servisleri ve belge hazırlık maliyetleri ayrıca planlanmalıdır.",
      "Ucuz ama eksik dosya, red ve yeniden başvuru nedeniyle toplam maliyeti artırabilir.",
    ],
    quickAnswers: [
      {
        q: "2026’da Standard Visitor 6 ay resmi harç ne kadar?",
        a: "£135 (GOV.UK Home Office fee table, 8 Nisan 2026).",
      },
      {
        q: "Priority hizmeti vizeyi garanti eder mi?",
        a: "Hayır. Priority yalnızca karar hızını hedefler; kararın sonucu dosyanın kalitesine bağlıdır.",
      },
      {
        q: "Super Priority kaç günde sonuçlanır?",
        a: "Uygun başvurularda hedef, biyometri sonrası bir sonraki iş günü karardır.",
      },
      {
        q: "Business visitor için ayrı bir vize ücreti var mı?",
        a: "Hayır. İş seyahati çoğunlukla Standard Visitor kategorisinde değerlendirilir ve aynı resmi harç uygulanır.",
      },
    ],
    faq: [
      {
        q: "İngiltere vize ücreti 2026’da en güncel nereden kontrol edilir?",
        a: "GOV.UK üzerindeki Home Office immigration and nationality fees tablosundan.",
      },
      {
        q: "6 aylık Standard Visitor ücreti ne kadar?",
        a: "£135.",
      },
      {
        q: "2 yıllık Standard Visitor ücreti ne kadar?",
        a: "£506.",
      },
      {
        q: "5 yıllık Standard Visitor ücreti ne kadar?",
        a: "£903.",
      },
      {
        q: "10 yıllık Standard Visitor ücreti ne kadar?",
        a: "£1,128.",
      },
      {
        q: "Student Visa resmi harcı ne kadar?",
        a: "£558.",
      },
      {
        q: "Business Visitor başvurusu hangi ücretle yapılır?",
        a: "Ayrı bir tarife yoktur; Standard Visitor 6 ay ücreti uygulanır.",
      },
      {
        q: "Priority servis ücreti ne kadar?",
        a: "Standart vize harcına ek £500.",
      },
      {
        q: "Super Priority servis ücreti ne kadar?",
        a: "Standart vize harcına ek £1,000.",
      },
      {
        q: "Priority kesin sonuç süresi verir mi?",
        a: "Hayır. Hedef süre verir; ek inceleme gereken dosyalarda uzama olabilir.",
      },
      {
        q: "Red olursa başvuru ücreti iade edilir mi?",
        a: "Genel uygulamada hayır; resmi harç çoğunlukla iade edilmez.",
      },
      {
        q: "Danışmanlık almak zorunlu mu?",
        a: "Hayır. Zorunlu değildir; ancak karmaşık dosyalarda hata maliyetini düşürmek için tercih edilir.",
      },
      {
        q: "Görünmeyen masraflar neden bütçeyi şaşırtır?",
        a: "Merkez servisleri, tercüme, bankacılık ve belge hazırlık maliyetleri resmi harç dışında kalır.",
      },
      {
        q: "10 yıllık vize her başvuru sahibine mantıklı mı?",
        a: "Hayır. Seyahat geçmişi, profil istikrarı ve ihtiyaca göre değerlendirilmelidir.",
      },
      {
        q: "Aynı gün vize çıkar mı?",
        a: "Yalnızca Super Priority uygunluğu olan dosyalarda hızlandırılmış karar hedeflenebilir; garanti yoktur.",
      },
    ],
    internalLinks: [
      { href: "/ucretler", label: "Ücretler", reason: "Resmi harç ve hizmet kalemlerini birlikte planlamak için" },
      { href: "/vfs-global-randevu", label: "VFS Randevu", reason: "Biyometri adımındaki operasyonel maliyet ve zaman planı" },
      { href: "/ingiltere-vize-randevu-nasil-alinir", label: "Randevu Nasıl Alınır", reason: "Ödeme-sonrası süreç kurgusu" },
      { href: "/iletisim", label: "İletişim", reason: "Dosya riskine göre maliyet-optimizasyon görüşmesi" },
    ],
    externalReferences: [
      {
        label: "GOV.UK – Home Office immigration and nationality fees (8 April 2026)",
        href: "https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026",
      },
      { label: "GOV.UK – Faster decision: Priority / Super Priority", href: "https://www.gov.uk/faster-decision-visa-settlement" },
      { label: "GOV.UK – Visa decision waiting times", href: "https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk" },
    ],
    ctaRecommendations: [
      "Başvuru yapmadan önce toplam maliyeti resmi + operasyonel kalemlerle birlikte çıkarın.",
      "Priority seçmeden önce dosyanızın karar-verilebilirlik seviyesini kontrol ettirin.",
      "Yanlış kategori riskini azaltmak için vize türü uygunluk analizi alın.",
    ],
    trustBlocks: [
      "Official-fee only notu: Rakamlar UKVI resmi tablolarından alınır.",
      "Case-based maliyet uyarısı: Red sonrası yeniden başvuru, toplam maliyeti tek başvuruya göre yükseltir.",
      "Processing disclaimer: Hızlandırma servisi karar sonucunu değil yalnızca hedef süreyi etkiler.",
    ],
    comparisonTables: [
      "Standard vs Priority vs Super Priority: ücret, hedef süre, risk/geri ödeme durumu.",
      "Tek başvuru maliyeti vs red sonrası yeniden başvuru toplam maliyet simülasyonu.",
    ],
    infographicIdeas: [
      "İngiltere vize maliyeti pasta grafiği: resmi harç + görünmeyen masraflar.",
      "Priority karar akışı: biyometri günü, hedef sonuç günü, uzama nedenleri.",
      "Yanlış kategori seçiminin maliyet etkisi karar ağacı.",
    ],
  },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  const rich = richArticleData[post.slug];
  return pageMetadata(rich?.seoTitle ?? post.title, rich?.metaDescription ?? post.excerpt, `/blog/${post.slug}`);
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const rich = richArticleData[post.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: rich?.metaDescription ?? post.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  const faqSchema = rich
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rich.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <article className="space-y-6">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <Breadcrumbs
        items={[
          { href: "/", label: "Ana Sayfa" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${post.slug}`, label: post.title },
        ]}
      />
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="text-slate-700">{post.excerpt}</p>
      {post.slug === "ingiltere-vize-evraklari" && rich ? (
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">TL;DR</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.tldr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Kısa Net Cevaplar</h2>
            <div className="space-y-3">
              {rich.quickAnswers.map((item) => (
                <div key={item.q} className="rounded-lg border border-slate-200 p-3">
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Giriş: Neden Evraklar Belirleyici?</h2>
            <p>
              İngiltere vize evrakları, yalnızca belge tamamlama kontrolü değildir; UKVI açısından bir güvenilirlik testi olarak
              okunur. Case officer başvuruyu incelerken tek belgeye değil, belgeler arası uyuma bakar.
            </p>
            <p>
              Başvuru formunda beyan ettiğiniz gelir, hesap hareketleri, iş durumunuz ve seyahat planınız birbirini desteklemiyorsa
              application risk profile yükselir. Bu nedenle ingiltere vize başvuru evrakları hazırlanırken document hierarchy
              yaklaşımı kullanılmalıdır: kimlik ve geçmiş, gelir kaynağı, finansal traceability, travel intent credibility ve geri
              dönüş bağları.
            </p>
          </section>

          <section className="space-y-3 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-slate-900">İngiltere Vizesi İçin Gerekli Evraklar</h2>
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 p-2 text-left">Evrak</th>
                  <th className="border border-slate-200 p-2 text-left">Zorunlu mu?</th>
                  <th className="border border-slate-200 p-2 text-left">Kimler için?</th>
                  <th className="border border-slate-200 p-2 text-left">Neden önemli?</th>
                  <th className="border border-slate-200 p-2 text-left">Sık hata</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pasaport", "Evet", "Tüm başvuru sahipleri", "Kimlik, seyahat geçmişi ve geçerlilik kontrolü", "Süresi kısa veya yıpranmış pasaport"],
                  ["Banka hesap dökümü", "Evet", "Tüm başvuru sahipleri", "Financial traceability ve harcama kapasitesi", "Açıklanamayan yüksek girişler"],
                  ["Maaş bordrosu", "Duruma bağlı", "Ücretli çalışanlar", "Düzenli gelir ispatı", "Banka hareketiyle bordro uyumsuzluğu"],
                  ["SGK hizmet dökümü", "Duruma bağlı", "Çalışanlar", "Türkiye’de istihdam sürekliliği", "Güncel olmayan döküm"],
                  ["İşveren yazısı", "Duruma bağlı", "Çalışanlar", "İzin onayı ve görev doğrulaması", "Genel, imzasız veya tarih uyumsuz yazı"],
                  ["Şirket evrakları", "Duruma bağlı", "Şirket sahipleri/ortaklar", "Faaliyet gerçekliği ve gelir kaynağı", "Eski tarihli veya eksik set"],
                  ["Vergi levhası", "Duruma bağlı", "Şirket sahipleri", "Mali kayıt doğrulaması", "Beyan edilen gelirle uyumsuz görünüm"],
                  ["Faaliyet belgesi", "Duruma bağlı", "Şirket sahipleri", "Şirketin aktif statüsünü doğrulama", "Süresi geçmiş belge"],
                  ["İmza sirküsü", "Duruma bağlı", "Şirket sahipleri", "Yetkili imza ve şirket temsili", "Geçersiz veya okunmayan kopya"],
                  ["Öğrenci belgesi", "Duruma bağlı", "Öğrenciler", "Eğitim bağı ve geri dönüş bağlantısı", "Eğitim dönemiyle tarih çelişkisi"],
                  ["Sponsor dilekçesi", "Duruma bağlı", "Sponsorlu başvurular", "Masraf üstlenme ve ilişki beyanı", "Kapsamı belirsiz sponsorluk"],
                  ["Tapu/araç ruhsatı", "Opsiyonel", "Varlık sahibi başvuru sahipleri", "Geri dönüş bağı destekleyici sinyal", "Tek başına yeterli sanılması"],
                  ["Uçuş/otel rezervasyonu", "Opsiyonel ama önerilir", "Turistik ve kısa süreli seyahatler", "Seyahat planı tutarlılığı", "Sahte/doğrulanamayan rezervasyon"],
                  ["Cover letter", "Güçlü öneri", "Tüm başvuru sahipleri", "Belge yorumlama mantığını netleştirme", "Çok genel ve dosyayla ilişkisiz metin"],
                  ["Niyet mektubu", "Güçlü öneri", "Amaç netleştirmesi gereken profiller", "Travel intent credibility", "Amaç-süre-bütçe uyumsuzluğu"],
                  ["Seyahat planı", "Güçlü öneri", "Tüm başvuru sahipleri", "Rota, süre ve bütçe uyumu", "Gerçekçi olmayan yoğun plan"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((col) => (
                      <td key={`${row[0]}-${col}`} className="border border-slate-200 p-2 align-top">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Adım Adım Evrak Süreci</h2>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Vize kategorisini netleştir ve seyahat amacını tek cümlede tanımla.</li>
              <li>Gelir kaynağını doğrulayan ana belgeleri topla (iş/şirket/öğrenci).</li>
              <li>Banka hareketlerini seyahat bütçesiyle uyumlu olacak şekilde kontrol et.</li>
              <li>Sponsor varsa ilişki ve finansal sorumluluk zincirini tamamla.</li>
              <li>Cover letter içinde dosya akışını kısa ve doğrulanabilir şekilde özetle.</li>
              <li>VFS yüklemeden önce dosya adlandırma ve belge sırasını standardize et.</li>
            </ol>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">En Sık İngiltere Vize Red Sebepleri</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Açıklanamayan para girişleri ve finansal kaynak belirsizliği</li>
              <li>Düşük bakiyeden çok düzensiz finansal profil görünümü</li>
              <li>Gelir-gider ve seyahat bütçesi arasında uyumsuzluk</li>
              <li>Sahte veya doğrulanamayan uçuş/otel rezervasyonları</li>
              <li>Zayıf geri dönüş bağı (iş, eğitim, aile yükümlülüğü ispat eksikliği)</li>
              <li>Eksik iş kanıtı ve çalışma statüsü çelişkileri</li>
              <li>Sponsorun finansal kapasitesi ile beyan edilen destek arasında tutarsızlık</li>
              <li>Banka hareketlerinin başvuru anlatısına uymaması</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Case Officer Belgeleri Nasıl Değerlendirir?</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Belge tutarlılığı:</strong> Form beyanı, finansal kayıt ve iş/öğrenci evrakı aynı hikâyeyi destekliyor mu?
              </li>
              <li>
                <strong>Risk analizi:</strong> Başvuru sahibinin önceki seyahat düzeni, gelir modeli ve ülkeye geri dönüş bağları nasıl?
              </li>
              <li>
                <strong>Seyahat amacı doğrulaması:</strong> Planlanan ziyaret süresi ve amacı başvuru profilinde mantıklı mı?
              </li>
              <li>
                <strong>Finansal davranış analizi:</strong> Hesap hareketleri düzenli mi, ani girişler açıklanmış mı, harcama paterni gerçekçi mi?
              </li>
              <li>
                <strong>Profile-based review:</strong> Çalışan, şirket sahibi, öğrenci veya sponsorlu başvuru için beklenen belge düzeyi farklıdır.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Sık Sorulan Sorular</h2>
            <div className="space-y-3">
              {rich.faq.map((item) => (
                <div key={item.q} className="rounded-lg border border-slate-200 p-3">
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">SEO Paketi</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>SEO Title:</strong> {rich.seoTitle}</li>
              <li><strong>Meta Description:</strong> {rich.metaDescription}</li>
              <li><strong>H1:</strong> İngiltere Vize Evrakları: Tam Kontrol Listesi</li>
              <li>
                <strong>H2/H3 Hierarchy:</strong> TL;DR, Kısa Net Cevaplar, Gerekli Evraklar Tablosu, Adım Adım Süreç,
                Red Sebepleri, Case Officer Değerlendirme Mantığı, FAQ, SEO Paketi
              </li>
              <li><strong>Suggested Slug:</strong> {rich.suggestedSlug}</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Internal Link Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.internalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline underline-offset-2">{item.label}</Link> — {item.reason}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">External Authority References</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.externalReferences.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">CTA Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.ctaRecommendations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Trust-Enhancing Block Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.trustBlocks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Karşılaştırma Tablosu Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.comparisonTables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">İnfografik Fikirleri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.infographicIdeas.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
      ) : null}

      {post.slug === "ingiltere-vize-ucreti-2026" && rich ? (
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">TL;DR</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.tldr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Kısa Net Cevaplar</h2>
            <div className="space-y-3">
              {rich.quickAnswers.map((item) => (
                <div key={item.q} className="rounded-lg border border-slate-200 p-3">
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Giriş: UK Visa Ücret Yapısı Nasıl Çalışır?</h2>
            <p>
              İngiltere vize ücreti tek kalem değildir. Karşınıza çıkan toplam maliyet, UKVI resmi harcı + başvuru merkezi
              servisleri + belge hazırlık maliyetlerinden oluşur. Bu nedenle yalnızca “resmi ücret” görmek çoğu başvuru sahibinde
              bütçe sapmasına neden olur.
            </p>
            <p>
              UKVI fee mantığı dönemsel olarak güncellenir. Bu rehberdeki resmi harçlar GOV.UK üzerinde yayımlanan “Home Office
              immigration and nationality fees – 8 April 2026” tablosu esas alınarak düzenlenmiştir.
            </p>
          </section>

          <section className="space-y-3 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-slate-900">2026 Güncel İngiltere Vize Ücretleri</h2>
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 p-2 text-left">Vize tipi</th>
                  <th className="border border-slate-200 p-2 text-left">UKVI resmi harcı</th>
                  <th className="border border-slate-200 p-2 text-left">Ortalama toplam maliyet</th>
                  <th className="border border-slate-200 p-2 text-left">Ortalama sonuç süresi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard Visitor Visa (6 ay)", "£135", "Resmi minimum: £135 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Standard Visitor Visa (2 yıl)", "£506", "Resmi minimum: £506 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Standard Visitor Visa (5 yıl)", "£903", "Resmi minimum: £903 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Standard Visitor Visa (10 yıl)", "£1,128", "Resmi minimum: £1,128 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Student Visa", "£558", "Resmi minimum: £558 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Business Visitor", "£135", "Resmi minimum: £135 + merkez servisleri", "Yaklaşık 3 hafta (15 iş günü)"],
                  ["Priority (ek servis)", "£500 (ek ücret)", "Seçilen vize harcı + £500 + merkez servisleri", "Hedef: 5 iş günü"],
                  ["Super Priority (ek servis)", "£1,000 (ek ücret)", "Seçilen vize harcı + £1,000 + merkez servisleri", "Hedef: sonraki iş günü"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((col) => (
                      <td key={`${row[0]}-${col}`} className="border border-slate-200 p-2 align-top">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500">
              Not: Priority ve Super Priority karar garantisi vermez; hızlandırılmış değerlendirme hedefi sunar ve uygunluk ülke/merkez
              bazında değişebilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">İngiltere Vizesinde Görünmeyen Masraflar</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>TLS/VFS servis ücretleri ve randevu günü ek hizmet kalemleri</li>
              <li>Biyometri sürecine bağlı operasyonel maliyetler</li>
              <li>Yeminli tercüme ve belge standardizasyon giderleri</li>
              <li>Danışmanlık ve dosya kalite kontrol maliyetleri</li>
              <li>Priority/Super Priority servis farkları</li>
              <li>Banka transferi ve kart işlemi kaynaklı masraflar</li>
              <li>Seyahat sigortası (rotaya ve kalış süresine göre)</li>
              <li>Belge hazırlama ve yeniden düzenleme masrafları</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Ucuz Başvuru Her Zaman Avantajlı mı?</h2>
            <p>
              Kısa vadede düşük maliyetli görünen dosyalar, eksik evrak veya zayıf finansal anlatı nedeniyle red aldığında toplam maliyet
              artar. Red sonrası yeniden başvuru, hem resmi harcın hem de operasyonel giderlerin tekrar oluşmasına neden olur.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Eksik dosya maliyeti: karar uzaması + yeniden hazırlık</li>
              <li>Red sonrası tekrar başvuru maliyeti: yeni harç + yeni servis bedelleri</li>
              <li>Yanlış finansal sunum: açıklama yükü ve risk profili yükselmesi</li>
              <li>Yanlış kategori başvurusu: uygun olmayan route nedeniyle gereksiz kayıp</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Priority vs Standard: Gerçek İşleyiş</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Priority ve Super Priority yalnızca hızlandırma servisidir; vize onayını garanti etmez.</li>
              <li>Hedef süreler biyometri sonrası başlar; ek inceleme gereken dosyalarda uzama olabilir.</li>
              <li>Yoğunluk, ek belge talebi ve güvenlik kontrolleri sonuç süresini etkileyebilir.</li>
              <li>Karar kalitesi, ücretli hızlandırmadan çok dosyanın karar-verilebilirliğine bağlıdır.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Sık Sorulan Sorular</h2>
            <div className="space-y-3">
              {rich.faq.map((item) => (
                <div key={item.q} className="rounded-lg border border-slate-200 p-3">
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">SEO Paketi</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>SEO Title:</strong> {rich.seoTitle}</li>
              <li><strong>Meta Description:</strong> {rich.metaDescription}</li>
              <li><strong>H1:</strong> İngiltere Vize Ücreti 2026 Rehberi</li>
              <li>
                <strong>H2/H3 Hierarchy:</strong> TL;DR, Kısa Net Cevaplar, 2026 Ücret Tablosu, Görünmeyen Masraflar,
                Ucuz Başvuru Analizi, Priority vs Standard, FAQ, SEO Paketi
              </li>
              <li><strong>Suggested Slug:</strong> {rich.suggestedSlug}</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Internal Link Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.internalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline underline-offset-2">{item.label}</Link> — {item.reason}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">External Authority References</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.externalReferences.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">CTA Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.ctaRecommendations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Trust-Enhancing Block Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.trustBlocks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Karşılaştırma Tablosu Önerileri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.comparisonTables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">İnfografik Fikirleri</h2>
            <ul className="list-disc space-y-1 pl-5">
              {rich.infographicIdeas.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
      ) : null}

      {!rich ? (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
          <p>
            Bu rehberde başvuru amacı, finansal dosya kurgusu, VFS upload düzeni ve randevu zamanlaması ekseninde uygulanabilir
            bir başvuru planı sunulmaktadır. Dosyanızın birbiriyle tutarlı olması, başvuru güvenini artıran ana faktördür.
          </p>
          <p className="mt-3">
            Resmi süreçler için GOV.UK yönergeleri esas alınmalıdır. Bu içerik danışmanlık amaçlıdır ve vize sonucu garantisi
            içermez.
          </p>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/ucretler" className="rounded-full border border-slate-300 px-3 py-1">Ücretler</Link>
        <Link href="/vfs-rehberi" className="rounded-full border border-slate-300 px-3 py-1">VFS Rehberi</Link>
        <Link href="/iletisim" className="rounded-full border border-slate-300 px-3 py-1">Danışmanlık Al</Link>
      </div>
    </article>
  );
}
