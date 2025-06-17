import { Fragment, ReactNode } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  links: { name: string; link: string }[];
  className?: string;
}

export function Breadcrumb({ links, className }: BreadcrumbProps) {
  return (
    <nav className={`${className}`}>
      <ul
        className={`text-base flex gap-x-1 items-center bg-base-100 rounded-md shadow-card w-fit`}
      >
        <li>
          <BreadcrumbLink to="/">
            <IoMdHome size={24} />
          </BreadcrumbLink>
        </li>

        {links.map((item, index) => (
          <Fragment key={index}>
            <li className="capitalize">
              <BreadcrumbLink
                showPointer={index < links.length - 1}
                to={item.link}
              >
                {item.name}
              </BreadcrumbLink>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}

const BreadcrumbLink = function ({
  to,
  showPointer = true,
  children,
}: {
  to: string;
  showPointer?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="hover:opacity-60 duration-200 flex gap-x-2 items-center overflow-hidden"
    >
      <span className={`py-2 pl-3 ${showPointer ? "pr-0" : "pr-6"}`}>
        {children}
      </span>
      {showPointer && (
        <svg
          className="w-[26px] px-[1px] text-base-300 scale-110"
          fill="currentColor"
          viewBox="0 0 35 57"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M6.4169 1H2L29.5831 28.5L2 56H6.4169L34 28.5L6.4169 1Z" />
        </svg>
      )}
    </Link>
  );
};
