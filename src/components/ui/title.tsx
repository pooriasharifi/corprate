import clsx from "clsx";
import * as React from "react";
import { cn } from "@/lib/utils";
import Toman from "./Toman";

export interface IText extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  title: string;
  toman_white?: boolean | false;
  toman?: boolean | false;
}

const CustomText = React.forwardRef<HTMLInputElement, IText>(
  ({ toman, toman_white, className, type, icon, title, ...props }, ref) => {
    return (
      <span className="flex items-center" dir="rtl">
        {icon && icon}
        <p
          className={cn(
            "text-sm font-light text-right leading-6 whitespace-pre-line",
            className
          )}
          {...props}
        >
          {title}
        </p>
        {toman_white && <Toman className={cn("mr-2", className)} is_white />}
        {toman && <Toman className={cn("mr-2", className)} />}
      </span>
    );
  }
);

const SubTitle = React.forwardRef<HTMLInputElement, IText>(
  ({ toman, className, type, icon, title, ...props }, ref) => {
    return (
      <span className="flex">
        <p
          className={clsx(
            "text-sm font-normal text-right whitespace-pre leading-8",
            className
          )}
        >
          {title}
        </p>
        {toman && <Toman className="mr-2" />}
      </span>
    );
  }
);
const Title = React.forwardRef<HTMLInputElement, IText>(
  ({ toman, className, type, icon, title, ...props }, ref) => {
    return (
      <span className="flex">
        <p className={cn("text-sm font-semibold text-center", className)}>
          {title}
        </p>
        {toman && <Toman className="mr-2" />}
      </span>
    );
  }
);
const BoldTitle = React.forwardRef<HTMLInputElement, IText>(
  ({ toman, toman_white, className, type, icon, title, ...props }, ref) => {
    return (
      <>
        {toman || toman_white ? (
          <span className="flex">
            <p className={cn("text-base font-black", className)}>{title}</p>
            {toman && <Toman className={cn("mr-1", className)} />}
            {toman_white && (
              <Toman className={cn("mr-1", className)} is_white />
            )}
          </span>
        ) : (
          <p className={cn("text-sm font-black", className)}>{title}</p>
        )}
      </>
    );
  }
);
const HTitle = React.forwardRef<HTMLInputElement, IText>(
  ({ className, type, icon, title, ...props }, ref) => {
    return <h1 className={cn("text-sm font-black", className)}>{title}</h1>;
  }
);
const H2Title = React.forwardRef<HTMLInputElement, IText>(
  ({ className, type, icon, title, ...props }, ref) => {
    return (
      <h2 className={cn("text-sm text-muted font-medium", className)}>
        {title}
      </h2>
    );
  }
);

export { Title, BoldTitle, SubTitle, CustomText, HTitle, H2Title };
