import CompanyLogoComp from "@/components/interface/home/brands";
import CommemtCaurosel from "@/components/interface/home/comment_carousel";
import FeatureComp from "@/components/interface/home/feature";
import TopMainHome from "@/components/interface/home/top";
import CustomVideo from "@/components/interface/home/video";
import NoteWeb from "@/components/interface/home/web_note";
import RootBox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  BoldTitle,
  CustomText,
  H2Title,
  H3Title,
  HTitle,
} from "@/components/ui/title";
import {
  A_FEATURE,
  APPLE_LAPTOP,
  B_FEATURE,
  C_FEATURE,
  COMPANY_LOGO,
  COMPUTERS,
  D_FEATURE,
  E_FEATURE,
  F_FEATURE,
  MOBILE,
  MOBILE_APPLE_LAPTOP,
  MOBILE_DOUBLE,
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
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 ">
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
        <div className="flex justify-center items-center gap-10 p-5 md:p-0 flex-col md:flex-row">
          <NoteWeb />
          <Image alt="laptop" src={MOBILE} width={300} height={500} />
        </div>
        <div className="flex justify-center gap-10 p-5 md:p-0 flex-col md:flex-row">
          <Image
            alt="laptop"
            src={COMPUTERS}
            width={400}
            height={500}
            className="hidden md:block"
          />

          <NoteWeb />
          <Image
            alt="laptop"
            src={MOBILE_APPLE_LAPTOP}
            width={400}
            height={500}
            className="md:hidden block"
          />
        </div>
      </RootBox>
      <div className="mt-32 w-full right-0 left-0 relative bg-primary h-[500px] md:h-[300px] p-5 grid grid-cols-1 md:grid-cols-2 md:place-content-center place-content-start">
        <div>
          <Image
            alt="mobile"
            src={MOBILE_DOUBLE}
            width={400}
            height={400}
            className="absolute md:-top-19 bottom-0 lg:right-1/12"
          />
        </div>
        <div className="space-y-3 ">
          <H2Title
            title="لورم ایپسوم متن ساختگی با تولید سادگی"
            className="text-2xl font-black"
          />
          <H3Title title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک" />
        </div>
      </div>

      <RootBox className="space-y-24 pt-16 p-5">
        <CommemtCaurosel />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NoteWeb />
          <CustomVideo src="video/test.mp4" />
        </div>
      </RootBox>
    </>
  );
}
