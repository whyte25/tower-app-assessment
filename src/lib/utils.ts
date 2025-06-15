import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: string | number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(amount));
};

export const removeDashes = (str: string) => {
  return str.replace(/-/g, " ");
};

export const getNumber = (str: string) => {
  const number = Number(str.replace(/\D/g, ""));
  return number;
};
