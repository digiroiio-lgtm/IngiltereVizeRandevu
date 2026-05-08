import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("VFS Rehberi", "VFS randevu, biyometri ve belge yükleme süreci rehberi.", "/vfs-rehberi");

export default function VfsGuidePage() {
  return (
    <ServicePage
      slug="/vfs-rehberi"
      title="VFS Rehberi"
      description="VFS Global randevu akışı, biyometri günü ve evrak yükleme yönetimi."
      points={[
        "Randevu kontenjan seçimi ve merkez optimizasyonu",
        "Parmak izi ve fotoğraf randevusu gün belge kontrol simülasyonu",
        "Belge yükleme kategorileri ve PDF standardizasyonu",
      ]}
    />
  );
}
