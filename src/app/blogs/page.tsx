// "use client";
import { Badge } from "@/components/ui/badge";
import RootBox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { CustomDivider } from "@/components/ui/dvider";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  BoldTitle,
  CustomText,
  H2Title,
  H3Title,
  HTitle,
} from "@/components/ui/title";
import { EMAIL } from "@/config/constants";
import { CustomAppRoutes } from "@/config/local_api";
import { convertToJalaliDate, convertToPersianNumber } from "@/lib/utils";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";
type Params = { searchParams: { page: string } };
export default function Blogs({ searchParams }: Params) {
  // const searchParams = useSearchParams();
  const meta = {
    current_page: Number(searchParams.page),
    last_page: 19,
    total: 739,
    from_index: 1,
    to_index: 40,
    per_page: 40,
  };
  const products = [1, 1, 1, 1, 1, 1];
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
        <Image
          className="rounded-tr-md rounded-br-md"
          src={"/images/div.png"}
          alt={"labtob"}
          height={2}
          width={400}
        />
        <div className="place-content-center space-y-5">
          <Badge>برجسته</Badge>
          <HTitle
            className="text-2xl"
            title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"}
          />
          <H2Title
            title={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
            }
          />
        </div>
        <div className="bg-secondary w-full"></div>
      </div>
      <div className="w-full bg-primary grid grid-cols-1 md:grid-cols-2 p-5 m-5 gap-10 ">
        <div className="w-fit h-fit bg-white rounded-xl p-2 block md:hidden place-self-center">
          <Image src={EMAIL} alt={"email"} width={50} height={50} />
        </div>
        <div className="relative">
          <Input
            placeholder="ایمیل خود را وارد کنید"
            left_icon={<Button className=" rounded-full p-6">مشترک شدن</Button>}
            className="rounded-4xl pr-40 bg-white text-black p-8"
          />
        </div>
        <div className="flex gap-4 items-center">
          <H2Title
            className="text-xl"
            title={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
            }
          />
          <div className="w-fit h-fit bg-white rounded-xl p-2 hidden md:block">
            <Image src={EMAIL} alt={"email"} width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
        {products.map((_, index) => (
          <div
            key={`blogs-${index}`}
            className="bg-secondary rounded-md w-full lg:w-[400px] relative"
          >
            <div className="w-full h-50 relative">
              <Image
                className="rounded-t-md"
                src={"/images/div.png"}
                fill
                alt={"محصول"}
              />
              <Badge className="z-50 -bottom-3 right-3 absolute">محصولات</Badge>
            </div>
            <div className="p-5 space-y-4">
              <H2Title
                className="text-xl"
                title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم "}
              />
              <H3Title
                title={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم "
                }
                className="text-muted"
              />
              <CustomDivider />
              <div className="flex gap-2">
                <Image
                  src={"/images/alex.png"}
                  alt={"products-owner"}
                  className="rounded-full"
                  width={50}
                  height={25}
                />
                <div>
                  <BoldTitle title={"الکس"} />
                  <CustomText title={convertToJalaliDate(new Date())} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {meta.current_page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`${CustomAppRoutes.blogs}?page=${meta.current_page - 1}`}
              ></PaginationPrevious>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink href={`${CustomAppRoutes.blogs}?page=1`}>
              {convertToPersianNumber("1")}
            </PaginationLink>
          </PaginationItem>
          {meta.current_page > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {Array.from({ length: 5 }, (_, i) => meta.current_page - 2 + i)
            .filter((page) => page > 1 && page < meta.last_page)
            .map((page, index) => (
              <PaginationLink
                isActive={page === meta.current_page}
                href={`${CustomAppRoutes.blogs}?page=${page}`}
                key={`pagination-middle${index}`}
              >
                {convertToPersianNumber(page.toString())}
              </PaginationLink>
            ))}

          {meta.current_page < meta.last_page - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {meta.last_page > 1 && (
            <PaginationLink
              href={`${CustomAppRoutes.blogs}?page=${meta.last_page}`}
            >
              {convertToPersianNumber(meta.last_page.toString())}
            </PaginationLink>
          )}
          {meta.last_page > meta.current_page && (
            <PaginationItem>
              <PaginationNext
                href={`${CustomAppRoutes.blogs}?page=${meta.current_page + 1}`}
              ></PaginationNext>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </RootBox>
  );
}
