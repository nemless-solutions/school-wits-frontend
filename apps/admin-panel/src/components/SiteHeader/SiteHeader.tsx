import { Separator, SidebarTrigger } from "@school-wits/ui";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export function SiteHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-1 data-[orientation=vertical]:h-4 bg-neutral-400"
        />
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 hover:bg-neutral-100 rounded-lg duration-200 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack />
          </button>
          <h1 className="text-base font-medium capitalize">
            {pathname === "/" ? "Home" : pathname.split("/")[1]}
          </h1>
        </div>
      </div>
    </header>
  );
}
