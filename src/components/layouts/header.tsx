"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { CustomText } from "../ui/title";
import { HEADER_ITEMS, LOGO } from "@/config/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function CustomHeader() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between  w-full h-16 p-5 max-w-[1680px] mx-auto">
      <Image alt="logo" src={LOGO} width={200} height={100} />
      <div className="flex items-center gap-10">
        {HEADER_ITEMS.map((item, index) => (
          <Link
            key={`header-${index}`}
            href={item.link}
            className={` hover:text-accent duration-150 ${
              pathname == item.link
                ? "underline underline-offset-4 text-foreground"
                : "text-muted"
            }`}
          >
            <CustomText title={item.name} />
          </Link>
        ))}
      </div>
      <Button>عضویت</Button>
    </div>
  );
}
