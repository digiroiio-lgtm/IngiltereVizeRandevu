import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu Bursa", "Bursa UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-bursa");

export default function Page() {
  return <LocalCenterPage city="Bursa" slug="/ingiltere-vize-randevu-bursa" />;
}
