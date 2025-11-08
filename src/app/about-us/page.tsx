import OurTeamCaurosel from "@/components/interface/about_us/comment_carousel";
import CompanyLogoComp from "@/components/interface/home/brands";
import RootBox from "@/components/ui/box";
import { CustomDivider } from "@/components/ui/dvider";
import { H2Title, H3Title, HTitle } from "@/components/ui/title";
import { G_FEATURE, PLANET } from "@/config/constants";
import { convertToPersianNumber } from "@/lib/utils";
import Image from "next/image";
export default function AboutUs() {
  const item = (image: string, title: string, subTitle: string) => (
    <div className="bg-secondary rounded-md flex items-start gap-4 p-5">
      <Image alt="icon" src={image} width={40} height={50} />
      <div className="space-y-2">
        <H2Title title={title} className="font-black" />
        <H3Title title={subTitle} className="text-muted" />
      </div>
    </div>
  );
  const liItem = (title: string, subTitle: string, content: string) => (
    <li>
      <div className="space-y-2">
        <H2Title
          title={convertToPersianNumber(title)}
          className="font-black text-base"
        />
        <H3Title title={subTitle} />
        <h4 className="text-sm text-muted">
          {convertToPersianNumber(content)}
        </h4>
      </div>
      <CustomDivider className="mt-3 bg-white" />
    </li>
  );
  return (
    <RootBox className="p-5 space-y-4">
      <HTitle
        title="درباره شرکت ما"
        className="text-2xl font-black text-right md:text-center"
      />
      <H2Title
        className="text-right md:text-center text-muted w-full md:w-1/2 md:mx-auto"
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
      />
      <div className="flex md:justify-between items-start md:items-center flex-col md:flex-row gap-4">
        <H2Title
          title="شرکت ما چه کاری انجام می‌دهد؟"
          className="font-black text-base"
        />
        <H3Title
          className="text-muted"
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {item(
          G_FEATURE,
          "لورم ایپسوم",
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
        )}
        {item(
          G_FEATURE,
          "لورم ایپسوم",
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک"
        )}
        {item(
          G_FEATURE,
          "لورم ایپسوم",
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
        )}
        {item(
          G_FEATURE,
          "لورم ایپسوم",
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک  با استفاده از طراحان گرافیک"
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="space-y-4">
          <H2Title title="لورم ایپسوم" className="font-black text-base" />
          <H3Title
            className="text-muted"
            title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          />
          <H2Title title="لورم ایپسوم" className="font-black text-base" />
          <H3Title
            className="text-muted"
            title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          />
        </div>
        <Image alt="planet" src={PLANET} width={4000} height={400} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-48">
        <div>
          <H2Title title="مسیر راه" className="font-black text-base" />
          <H3Title
            className="text-muted"
            title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          />{" "}
        </div>
        <ul className="list-disc space-y-4">
           {" "}
          {liItem(
            "2015",
            "لورم ایپسوم",
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در          ستون"
          )}
          {liItem(
            "2015",
            "لورم ایپسوم",
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در          ستون"
          )}
          {liItem(
            "2015",
            "لورم ایپسوم",
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در          ستون"
          )}
          {liItem(
            "2015",
            "لورم ایپسوم",
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در          ستون"
          )}
        </ul>
      </div>
      <div className="flex justify-between items-center mt-48">
        <H2Title title="تیم ما" className="font-black text-base" />
        <H3Title
          className="text-muted"
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
        />
      </div>
      <OurTeamCaurosel />
      <HTitle
        title="سرمایه گذاران"
        className="text-2xl font-black text-right md:text-center"
      />
      <H2Title
        className="text-right md:text-center text-muted md:w-1/2 w-full md:mx-auto"
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
      />
      <CompanyLogoComp />
    </RootBox>
  );
}
