import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("VFS Global Randevu", "VFS Global randevu organizasyonu ve başvuru öncesi hazırlık.", "/vfs-global-randevu");

export default function VfsGlobalAppointmentPage() {
  return (
    <ServicePage
      slug="/vfs-global-randevu"
      title="VFS Global Randevu"
      description="Merkez seçimi, tarih planlaması ve başvuru dosyası ile uyumlu randevu stratejisi."
      points={[
        "İstanbul, Ankara, Antalya, İzmir merkez planlaması",
        "Biometric appointment öncesi evrak dizilimi",
        "Randevu sonrası takip ve pasaport teslim süreci",
      ]}
    />
  );
}
