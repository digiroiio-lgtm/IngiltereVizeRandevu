import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Multiple Entry Visa", "Çok girişli İngiltere visitor visa başvuru planlaması.", "/multiple-entry-visa");

export default function MultipleEntryVisaPage() {
  return (
    <ServicePage
      slug="/multiple-entry-visa"
      title="Multiple Entry Visa"
      description="2, 5 ve 10 yıllık çok girişli visitor vizeler için seyahat geçmişi ve niyet ispatı yönetimi."
      points={[
        "Sık seyahat ihtiyacı için dosya gerekçelendirmesi",
        "Uzun dönemli visitor fee ve strateji seçimi",
        "Her girişte ziyaretçi kurallarına uyum planlaması",
      ]}
    />
  );
}
