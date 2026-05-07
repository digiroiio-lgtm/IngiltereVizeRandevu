import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu İstanbul", "İstanbul UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-istanbul");

export default function Page() {
  return <LocalCenterPage city="İstanbul" slug="/ingiltere-vize-randevu-istanbul" />;
}
