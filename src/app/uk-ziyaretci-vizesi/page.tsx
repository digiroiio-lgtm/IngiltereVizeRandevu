import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("UK Ziyaretçi Vizesi", "UK visitor visa için başvuru danışmanlığı.", "/uk-ziyaretci-vizesi");

export default function VisitorVisaPage() {
  return (
    <ServicePage
      slug="/uk-ziyaretci-vizesi"
      title="UK Ziyaretçi Vizesi"
      description="Turistik, aile ziyareti ve kısa süreli ziyaret amaçlı başvuru dosyası yönetimi."
      points={[
        "Seyahat amacı ve plan tutarlılığı",
        "Finansal evrak seti ve banka hareket analizi",
        "Ret riskini azaltan başvuru kurgusu",
      ]}
    />
  );
}
