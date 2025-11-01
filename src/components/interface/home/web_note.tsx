import { CustomText, H2Title, H3Title } from "@/components/ui/title";
import { F_FEATURE, G_FEATURE, H_FEATURE } from "@/config/constants";
import Image from "next/image";
export default function NoteWeb() {
  const item = (image: string) => (
    <div className="flex gap-2 items-center">
      <Image src={image} alt="" width={30} height={50} />
      <H3Title title="لورم ایپسوم متن ساختگی با تولید سادگی" />
    </div>
  );
  return (
    <div className="space-y-6">
      <H2Title
        title="لورم ایپسوم متن ساختگی با تولید سادگی"
        className="text-xl"
      />
      <CustomText
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
        className="text-xs"
      />
      {item(F_FEATURE)}
      {item(G_FEATURE)}
      {item(H_FEATURE)}
    </div>
  );
}
