import { cn } from "@/lib/utils";
import * as React from "react";
import { CustomText } from "./title";
import { Label } from "./label";

type InputProps = {
  title?: string;
  icon?: React.ReactNode;
  errorMsg?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  className,
  icon,
  errorMsg,
  title,
  type,
  ...props
}: InputProps) {
  return (
    <>
      <div className="relative w-full">
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            `${icon && "pr-10"}`,
            className
          )}
          {...props}
        />
      </div>
      {errorMsg && (
        <CustomText
          title={errorMsg}
          className="text-destructive text-sm mt-1"
        />
      )}
    </>
  );
}
function InputWithLabel({
  className,
  icon,
  errorMsg,
  title,
  type,
  ...props
}: InputProps) {
  return (
    <>
      <Label className="text-sm font-normal text-right leading-10">
        {title}
      </Label>
      <div className="relative w-full">
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            `${icon && "pr-10"}`,
            className
          )}
          {...props}
        />
      </div>
      {errorMsg && (
        <CustomText
          title={errorMsg}
          className="text-destructive text-sm mt-1"
        />
      )}
    </>
  );
}

export { Input,InputWithLabel };
