import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IRootBox {
  children?: ReactNode;
  className?: string;
  dir?: "rtl" | "ltr";
}

export default function RootBox({ children, className, dir }: IRootBox) {
  return (
    <div dir={dir} className={cn("max-w-[1680px] mx-auto", className)}>
      {children}
    </div>
  );
}
