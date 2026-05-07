import { ServicePage } from "@/components/service-page";
import { pageMetadata, processSteps } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Nasıl Alınır", "İngiltere vize randevu alma adımları ve süreç planlama.", "/ingiltere-vize-randevu-nasil-alinir");

export default function AppointmentHowToPage() {
  return (
    <ServicePage
      slug="/ingiltere-vize-randevu-nasil-alinir"
      title="İngiltere Vize Randevu Nasıl Alınır?"
      description="Form, ödeme, VFS randevu ve evrak eşleştirme adımlarını hatasız yönetin."
      points={processSteps}
    />
  );
}
