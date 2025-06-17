import { HTMLAttributes } from "react";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Overlay = function ({ className, ...props }: OverlayProps) {
  return (
    <div
      {...props}
      className={`overlay-animation bg-black/20 backdrop-blur fixed z-9999 top-0 left-0 w-full h-screen ${className}`}
    ></div>
  );
};
