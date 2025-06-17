import { cn } from "@school-wits/utils";
import { Dispatch, SetStateAction } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import { useTheme } from "../../contexts/ThemeContext";
import { isThemeDark } from "../../utils/isThemeDark";
import { Overlay } from "../Overlay/Overlay";
import { SidebarMenu } from "./SidebarMenu";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = function ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const handleSidebarClose = function () {
    setSidebarOpen(false);
  };

  const { theme } = useTheme();

  return (
    <div>
      {sidebarOpen && (
        <Overlay onClick={handleSidebarClose} className="lg:hidden" />
      )}
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-[250px] flex-col overflow-y-hidden bg-base-200 shadow-[4px_0px_8px_0px_rgba(0,0,0,0.2)] duration-300 ease-linear lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-8">
          <NavLink to="/">
            <img
              className={cn("w-40", isThemeDark(theme) && "invert")}
              src={logo}
              alt="Logo"
            />
          </NavLink>
          <button
            onClick={handleSidebarClose}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <SidebarMenu />
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};
