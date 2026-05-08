import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Çok Girişli Vize", "Çok girişli İngiltere ziyaretçi vizesi başvuru planlaması.", "/multiple-entry-visa");

export default function MultipleEntryVisaPage() {
  return (
    <ServicePage
      slug="/multiple-entry-visa"
      title="Çok Girişli Vize"
      description="2, 5 ve 10 yıllık çok girişli ziyaretçi vizeleri için seyahat geçmişi ve niyet ispatı yönetimi."
      points={[
        "Sık seyahat ihtiyacı için dosya gerekçelendirmesi",
        "Uzun dönemli ziyaretçi vize ücreti ve strateji seçimi",
        "Her girişte ziyaretçi kurallarına uyum planlaması",
      ]}
    />
  );
}
