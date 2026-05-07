import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Family Visit Visa", "Aile ziyareti İngiltere vize süreci ve evrak kılavuzu.", "/family-visit-visa");

export default function FamilyVisitVisaPage() {
  return (
    <ServicePage
      slug="/family-visit-visa"
      title="Family Visit Visa"
      description="Aile ziyareti için davet, ilişki kanıtı ve finansal destek belgelerinin stratejik yönetimi."
      points={[
        "Akrabalık ilişkisi ve davet mektubu seti",
        "Sponsorlu başvuru yapısında finansal kanıtlar",
        "Aile bazlı çoklu dosya uyumluluğu",
      ]}
    />
  );
}
