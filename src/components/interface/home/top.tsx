import { Button } from "@/components/ui/button";
import { CustomText, HTitle } from "@/components/ui/title";
import { APPLE_LAPTOP, MOBILE_APPLE_LAPTOP } from "@/config/constants";
import Image from "next/image";

export default function TopMainHome() {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row space-y-4">
      <Image
        alt="laptop"
        src={APPLE_LAPTOP}
        width={500}
        height={500}
        className="hidden md:block"
      />
      <div className="space-y-2 md:pl-4 p-4 md:p-0 w-screen md:w-full">
        <HTitle
          title={`شعار شرکت ما \n ما شرکت بزرگی هستیم`}
          className="whitespace-pre-line text-3xl"
        />
        <CustomText
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          className="line-clamp-3 text-ellipsis"
        />
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <Button className="w-full md:w-fit" variant={"secondary"}>
            درباره ما
          </Button>
          <Button className="w-full md:w-fit">محصولات ما</Button>
        </div>
        <Image
          alt="laptop"
          src={MOBILE_APPLE_LAPTOP}
          width={400}
          height={500}
          className="block md:hidden"
        />
      </div>
    </div>
  );
}
