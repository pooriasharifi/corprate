import { BoldTitle, CustomText } from "@/components/ui/title";
import { A_FEATURE } from "@/config/constants";
import Image from "next/image";

interface IFeature {
  title: string;
  subTitle: string;
  icon: string;
}
export default function FeatureComp({ icon, subTitle, title }: IFeature) {
  return (
    <div className="rounded-md bg-secondary p-5 space-y-2 h-full">
      <div className="flex items-center gap-2">
        <Image alt="feuture" src={icon} width={50} height={50} />
        <BoldTitle title={title} />
      </div>
      <CustomText title={subTitle} />
    </div>
  );
}
