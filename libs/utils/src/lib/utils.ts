import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAbbreviation(input: string, length = 2) {
  return input
    .trim()
    .split(/\s+/)
    .slice(0, length)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
