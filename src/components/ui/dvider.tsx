import { cn } from "@/lib/utils";
import * as React from "react";

type ICustomDvider = {} & React.InputHTMLAttributes<HTMLInputElement>;
export function CustomDivider({ className }: ICustomDvider) {
  return <div className={cn("w-full h-[.5px] bg-white/40", className)}></div>;
}
