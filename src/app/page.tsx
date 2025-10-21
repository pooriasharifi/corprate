import CompanyLogoComp from "@/components/interface/home/brands";
import FeatureComp from "@/components/interface/home/feature";
import TopMainHome from "@/components/interface/home/top";
import RootBox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { BoldTitle, CustomText, H2Title, HTitle } from "@/components/ui/title";
import {
  A_FEATURE,
  APPLE_LAPTOP,
  B_FEATURE,
  C_FEATURE,
  COMPANY_LOGO,
  D_FEATURE,
  E_FEATURE,
} from "@/config/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopMainHome />
      <RootBox className="space-y-24 pt-16">
        <div className="relative place-items-center space-y-4 ">
          <H2Title
            title="برندهایی که به ما اعتماد کرده اند"
            className="text-xl"
          />
          <CompanyLogoComp />
        </div>
        <div className="place-items-center p-5 space-y-4 max-w-[1000px] mx-auto">
          <H2Title title="خدمات ما" className="text-xl" />
          <CustomText
            title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            className="text-muted"
          />
          <div className="grid grid-cols-3 w-full gap-2 ">
            <div className="space-y-2 flex flex-col h-full justify-between">
              <FeatureComp
                icon={A_FEATURE}
                title="ویژگی شرکت ما"
                subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
              />
              <FeatureComp
                icon={B_FEATURE}
                title="ویژگی شرکت ما"
                subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
              />
            </div>
            <div className="bg-primary rounded-md  pt-5 px-5 space-y-2 relative">
              <BoldTitle title="ویژگی شرکت ما" />
              <CustomText title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک" />
              <Image alt="mobile" src={E_FEATURE} width={300} height={100} />
            </div>
            <div className="space-y-2 flex flex-col h-full justify-between">
              <FeatureComp
                icon={C_FEATURE}
                title="ویژگی شرکت ما"
                subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
              />
              <FeatureComp
                icon={D_FEATURE}
                title="ویژگی شرکت ما"
                subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
              />
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex ">
          <Button className="place-self-center">اطلاعات بیشتر</Button>
        </div>
      </RootBox>
    </>
  );
}
