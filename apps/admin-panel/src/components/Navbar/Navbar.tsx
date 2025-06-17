import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import { DropdownUser } from "./DropdownUser";

interface NavbarProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

export const Navbar = function ({ sidebarOpen, setSidebarOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-base-100 shadow-md">
      <div className="flex flex-grow items-center justify-between py-2 px-2 lg:px-4">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm p-1.5 shadow-sm lg:hidden"
          >
            <FaBars />
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img className="w-40" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="ml-auto">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};
