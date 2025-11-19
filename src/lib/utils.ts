import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment-jalaali";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPersianNumber(input: string | undefined): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (input === undefined || input === null) return "";
  return input.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

export function convertToJalaliDate(date: Date): string {
  return convertToPersianNumber(moment(date).format("jYYYY-jMM/jDD"));
}
