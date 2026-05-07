import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Business Visa", "İngiltere business visa için dosya ve süreç danışmanlığı.", "/business-visa");

export default function BusinessVisaPage() {
  return (
    <ServicePage
      slug="/business-visa"
      title="Business Visa"
      description="İş toplantısı, fuar, ticari görüşme ve şirket sahipleri için UK business visa danışmanlığı."
      points={[
        "Şirket belgeleri ve faaliyet ispatları",
        "Davet mektubu, seyahat programı ve finansal yapı",
        "İş seyahati amaçlarının güçlü anlatımı",
      ]}
    />
  );
}
