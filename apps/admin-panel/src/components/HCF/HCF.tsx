import { ReactNode } from "react";

/**
 * HCF -> Header Content Footer layout.
 *
 * Use Example:
 * <HCF>
 *  <HCF.Header> The Header</HCF.Header>
 *  <HCF.Content> The Header</HCF.Content>
 *  <HCF.Footer> The Header</HCF.Footer>
 * </HCF>
 */

/* Prop Interfaces */
interface HCFProps {
  children: ReactNode;
}
interface HCFHeaderProps {
  children: ReactNode;
  className?: string;
  usePadding?: boolean;
}
interface HCFContentProps {
  children: ReactNode;
  className?: string;
  usePadding?: boolean;
}
interface HCFFooterProps {
  children: ReactNode;
  className?: string;
  usePadding?: boolean;
}

export const HCF = ({ children }: HCFProps) => {
  return <div className="w-full h-full flex flex-col">{children}</div>;
};

// Header component
const Header = function ({
  usePadding = true,
  children,
  className,
}: HCFHeaderProps) {
  return (
    <div
      className={`${
        usePadding ? "py-2 px-2 lg:px-4" : ""
      } bg-base-200 w-full ${className}`}
    >
      {children}
    </div>
  );
};

// Content component
const Content = function ({
  usePadding = true,
  children,
  className,
}: HCFContentProps) {
  return (
    <div
      className={`${
        usePadding ? "py-2 px-2 lg:px-4" : ""
      } flex-1 w-full overflow-y-scroll no-scrollbar ${className}`}
    >
      {children}
    </div>
  );
};

// Footer component
const Footer = function ({
  usePadding = true,
  children,
  className,
}: HCFFooterProps) {
  return (
    <div
      className={`${
        usePadding ? "py-2 px-2 lg:px-4" : ""
      } w-full bg-base-100 ${className}`}
    >
      {children}
    </div>
  );
};

// Exporting the components
HCF.Header = Header;
HCF.Content = Content;
HCF.Footer = Footer;
