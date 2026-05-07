import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Ankara", "Ankara UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-ankara");

export default function Page() {
  return <LocalCenterPage city="Ankara" slug="/ingiltere-vize-randevu-ankara" />;
}
