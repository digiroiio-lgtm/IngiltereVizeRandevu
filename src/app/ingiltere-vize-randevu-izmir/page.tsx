import { LocalCenterPage } from "@/components/local-center-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("İngiltere Vize Randevu İzmir", "İzmir UK vize randevu merkezi saatleri ve ipuçları.", "/ingiltere-vize-randevu-izmir");

export default function Page() {
  return <LocalCenterPage city="İzmir" slug="/ingiltere-vize-randevu-izmir" />;
}
