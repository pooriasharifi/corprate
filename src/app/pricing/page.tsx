import { Badge } from "@/components/ui/badge";
import RootBox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {

  CustomText,
  H2Title,
  HTitle,
  Title,
} from "@/components/ui/title";
import { A_FEATURE } from "@/config/constants";
import { convertToPersianNumber } from "@/lib/utils";
import Image from "next/image";

export default function Price() {
  const products = (badge: string, price: string, title: string, text: string) => {
    return <div className="bg-secondary w-full rounded-4xl p-10  space-y-5">
      <Badge className="text-xl px-4">{badge}</Badge>
      <Title title={convertToPersianNumber(price)} className="text-2xl" />
      <CustomText title={text} className="tex-mu" />
      <Title title={title} className="text-2xl" />
      <ul className="list-disc pr-5 text-muted-foreground">
        <li>ویندوز و مک برنامه</li>
        <li>ویندوز و مک برنامه</li>
        <li>ویندوز و مک برنامه</li>
        <li>ویندوز و مک برنامه</li>
      </ul>
      <Button className="w-full ">خرید</Button>
    </div>;
  };
  const items = [1, 1, 1, 1];
  const items2 = [1, 1, 1]
  const returnItem = (icons: string, text: string) => {
    return (

      <div className="flex items-start gap-4">
        <Image src={icons} alt={"logo"} width={60} height={50} />
        <CustomText title={text} />
      </div>
    );
  };
  return (
    <RootBox>
      <div className="p-5 m-10">
        <div className="place-self-center space-y-5 w-1/2 m-10">
          <HTitle title={"محصولات"} className="text-4xl place-self-center" />
          <H2Title
            title={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
            }
          />
        </div>
        <div className="flex gap-5 m-10">
          {items.map((_, index) => (
            <div key={`pricing-${index}`}>
              {returnItem(
                A_FEATURE,
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و"
              )}
            </div>
          ))}
        </div>
        <div className="grid  grid-cols-3 w-[70vw] place-self-center
       place-content-center place-items-center gap-4 ">
          {items2.map((_, index) => (
            products("ویژه", "120 تومان", "ویژگی", "لورم ایپسوم متن ساختگی")
          ))}
        </div>
      </div>
    </RootBox>
  );
}
