import { HEADER_ITEMS, LOGO } from "@/config/constants";
import Image from "next/image";
import { BoldTitle, CustomText, H2Title, H3Title } from "../ui/title";
import { CustomDivider } from "../ui/dvider";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";

export default function Fotter() {
  return (
    <div className="w-full h-full bg-secondary p-10">
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* right side */}
        <div className="space-y-4">
          <Image
            alt="LOGO"
            src={LOGO}
            width={150}
            height={50}
            className="place-self-center md:place-self-auto"
          />
          <BoldTitle title="فهرست" />
          <CustomDivider />
          <div className="grid grid-cols-2 gap-4">
            {HEADER_ITEMS.map((item, index) => (
              <Link
                key={`header-${index}`}
                href={item.link}
                className={` hover:text-accent duration-150 text-muted`}
              >
                <CustomText title={item.name} />
              </Link>
            ))}
          </div>
        </div>
        {/* left side */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            {Array.from({ length: 5 }).map((item, index) => (
              <Link href={""} className="rounded-full p-2 bg-white/10 w-fit">
                <Instagram />
              </Link>
            ))}
          </div>
          <div className="rounded-md p-5 bg-white/10 space-y-4">
            <H2Title title="نام شرکت" />
            <H3Title title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک" />
            <Button>عضویت</Button>
          </div>
        </div>
      </div>
      {/* bottom */}
      <CustomDivider className="my-4" />
      <CustomText
        title="©تمامی حقوق محفوظ است"
        className="w-full text-center"
      />
    </div>
  );
}
