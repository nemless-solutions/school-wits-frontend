import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAbbreviation(input: string | undefined | null, length = 2) {
  if (!input) return;

  return input
    .trim()
    .split(/\s+/)
    .slice(0, length)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
