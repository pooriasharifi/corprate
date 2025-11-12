import RootBox from "@/components/ui/box";
import { H2Title, HTitle } from "@/components/ui/title";
import Image from "next/image";

export default function Blogs() {
  return (
    <RootBox>
        <div className="">

      <div className="flex place-self-center space-y-10 gap-10 ">
        <HTitle title={"مقالات"} className="text-4xl"/>
        <H2Title
          title={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیکلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک"
            }
            />
      </div>
      <div className="bg-secondary grid grid-cols-2 rounded-md content-center w-full">
        <Image src={"/images/div.png"} alt={"labtob"} height={2} width={400}/>
      </div>
            </div>
    </RootBox>
  );
}
