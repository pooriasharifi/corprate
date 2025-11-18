import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface IBOX {
    className?: string
    dir?: "rtl" | "ltr"
    children?: ReactNode
}
export default function Rootbox({ children, className, dir }: IBOX) {
    return <div dir={dir} className={cn("mx-auto max-w-[1680px]", className)}>
        {children}
    </div>
}