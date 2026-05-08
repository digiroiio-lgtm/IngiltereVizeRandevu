import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Ticari Ziyaret Vizesi", "İngiltere ticari ziyaret vizesi için dosya ve süreç danışmanlığı.", "/business-visa");

export default function BusinessVisaPage() {
  return (
    <ServicePage
      slug="/business-visa"
      title="Ticari Ziyaret Vizesi"
      description="İş toplantısı, fuar, ticari görüşme ve şirket sahipleri için İngiltere ticari ziyaret vizesi danışmanlığı."
      points={[
        "Şirket belgeleri ve faaliyet ispatları",
        "Davet mektubu, seyahat programı ve finansal yapı",
        "İş seyahati amaçlarının güçlü anlatımı",
      ]}
    />
  );
}
