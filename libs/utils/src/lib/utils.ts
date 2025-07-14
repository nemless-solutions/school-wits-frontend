import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { jwtDecode } from "jwt-decode";
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

export function isJwtExpired(token: string | undefined | null) {
  if (!token) return false;

  const { exp } = jwtDecode(token); // in seconds
  const now = Math.floor(Date.now() / 1000); // converting from milliseconds to seconds dividing by 1000

  if (!exp) return false;

  return now > exp;
}

export function getTimeDistanceFromNow(time: string | Date) {
  if (!time) return "";

  return formatDistanceToNow(new Date(time), { addSuffix: true });
}
