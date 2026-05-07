import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Antalya", "Antalya UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-antalya");

export default function Page() {
  return <LocalCenterPage city="Antalya" slug="/ingiltere-vize-randevu-antalya" />;
}
