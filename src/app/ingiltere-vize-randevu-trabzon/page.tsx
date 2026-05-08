import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Trabzon", "Trabzon UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-trabzon");

export default function Page() {
  return <LocalCenterPage city="Trabzon" slug="/ingiltere-vize-randevu-trabzon" />;
}
