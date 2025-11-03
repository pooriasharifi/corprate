"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BoldTitle, CustomText, H2Title } from "@/components/ui/title";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function CommemtCaurosel() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = [1, 1, 1, 1, 1, 1];
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollNext(api.canScrollNext());
      setCanScrollPrev(api.canScrollPrev());
      setSelectedIndex(api.selectedScrollSnap() || 0);
    };
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="space-y-4 mt-10">
      <H2Title title="نظر مشتریان درباره ما" />

      <Carousel
        setApi={setApi}
        className="relative overflow-hidden"
        opts={{
          loop: false,
          direction: "rtl",
          dragFree: true,
        }}
      >
        <CarouselContent>
          {items.map((_, index) => (
            <CarouselItem
              key={`comment-${index}`}
              className="bg-secondary p-5 mx-3 space-y-4 rounded-md md:basis-[50.50%] lg:basis-[33.33%] basis-[90.33%] "
            >
              <CustomText title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان  استفاده قرار گیرد." />
              <div className="flex items-start gap-4">
                <Image
                  alt="user"
                  src={
                    "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg"
                  }
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <BoldTitle title="جان دو" />
                  <CustomText title="سمت،نام شرکت" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {canScrollNext && (
          <button
            onClick={() => api?.scrollNext()}
            className="absolute left-6 top-1/2 bg-background rounded-full p-2 -translate-y-1/2 hover:bg-background/90 cursor-pointer"
          >
            <ChevronLeft size={30} strokeWidth={1.5} />
          </button>
        )}
        {canScrollPrev && (
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute right-6 top-1/2 bg-background rounded-full p-2 -translate-y-1/2 hover:bg-background/90 cursor-pointer"
          >
            <ChevronRight size={30} strokeWidth={1.5} />
          </button>
        )}
        <div
          className="mt-10 flex items-center justify-center gap-1
       "
        >
          {items.map((_, index) => (
            <div
              onClick={() => api?.scrollTo(index)}
              key={`paginat-${index}`}
              className={`w-2 h-2 rounded-full cursor-pointer hover:h-4 hover:w-4 duration-150 ${
                index == selectedIndex ? "bg-foreground" : "bg-muted"
              } `}
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
