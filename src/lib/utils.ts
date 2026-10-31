import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function to merge Tailwind classes safely with clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely resolves asset URLs, handling spaces, parentheses, and special characters.
 * Prevents double-encoding if already encoded.
 */
export function resolveAssetUrl(path: string): string {
  if (!path) return "";
  try {
    const decoded = decodeURI(path);
    return encodeURI(decoded);
  } catch {
    return encodeURI(path);
  }
}
