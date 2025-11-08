import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPersianNumber(input: string | undefined): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (input === undefined || input === null) return "";
  return input.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}
