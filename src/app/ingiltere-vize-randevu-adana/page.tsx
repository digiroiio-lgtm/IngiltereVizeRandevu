import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Adana", "Adana UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-adana");

export default function Page() {
  return <LocalCenterPage city="Adana" slug="/ingiltere-vize-randevu-adana" />;
}
