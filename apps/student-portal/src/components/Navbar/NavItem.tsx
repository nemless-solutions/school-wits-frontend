import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  link: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  link,
  children,
  isActive,
  onClick,
}: NavItemProps) => {
  return (
    <li
      className="pl-16 md:pl-0 min-[900px]:text-base text-sm"
      onClick={() => onClick && onClick()}
    >
      <Link
        style={{ textWrap: "nowrap" }}
        className={`relative min-[950px]:px-5 px-3 py-5 block font-semibold before:absolute before:bottom-1/2 before:right-0 before:h-3/5 before:w-[3px] before:translate-y-1/2 md:before:bg-primary before:opacity-0 before:duration-300 before:content-[''] hover:before:opacity-50 md:before:bottom-0 md:before:h-[3px] md:before:w-full ${
          isActive ? "before:opacity-100" : ""
        }`}
        href={link}
      >
        {children}
      </Link>
    </li>
  );
};
