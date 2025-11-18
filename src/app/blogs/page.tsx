import { Badge } from "@/components/ui/badge";
import RootBox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { CustomDivider } from "@/components/ui/dvider";
import { Input } from "@/components/ui/input";
import { BoldTitle, CustomText, H2Title, H3Title, HTitle } from "@/components/ui/title";
import { EMAIL } from "@/config/constants";
import Image from "next/image";

export default function Blogs() {
  const products = [1, 1, 1, 1, 1, 1]
  return (
    <RootBox>

      <div className="flex place-self-center space-y-10 gap-10 m-10">
        <HTitle title={"مقالات"} className="text-4xl" />
        <H2Title
          title={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
          }
        />
      </div>
      <div className="bg-secondary grid grid-cols-2 rounded-md content-center w-full m-10">
        <Image className="rounded-tr-md rounded-br-md" src={"/images/div.png"} alt={"labtob"} height={2} width={400} />
        <div className="place-content-center space-y-5">
          <Badge>برجسته</Badge>
          <HTitle className="text-2xl" title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"} />
          <H2Title title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"} />
        </div>
        <div className="bg-secondary w-full">
        </div>
      </div>
      <div className="w-full bg-primary grid grid-cols-2 p-5 m-5 gap-10 ">
        <div className="relative">
          <div className="absolute z-50 right-3 top-1/8 md:top-1/5 lg:top-1/2 -translate-y-1/2">
            <Button className=" rounded-full p-6">مشترک شدن</Button>
          </div>
          <Input dir="ltr" placeholder="enter email adress" className="rounded-4xl pr-40 bg-white text-black p-8" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-fit h-fit bg-white rounded-xl p-2">
            <Image src={EMAIL} alt={"email"} width={30} height={25} />
          </div>
          <H2Title className="text-xl" title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4  m-5">
        {products.map((_, index) => (
          <div key={`blogs-${index}`} className="bg-secondary rounded-md w-[400px] relative">
            <div className="w-full h-50 relative">
              <Image className="rounded-t-md" src={"/images/div.png"} fill alt={"محصول"} />
              <Badge className="z-50 -bottom-3 absolute">محصولات</Badge>
            </div>
            <div className="p-5 space-y-4">

              <H2Title className="text-xl" title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم "} />
              <H3Title title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم "} />
              <CustomDivider />
              <div className="flex">
                <Image src={"/images/alex.png"} alt={"products-owner"} className="rounded-full" width={50} height={25} />
                <div>
                  <BoldTitle title={"الکس"} />
                  <CustomText title={"تاریخ"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RootBox>
  );
}
