import { Dispatch, SetStateAction } from "react";

export const ToggleButton = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
  isSticky?: boolean;
  activeLink: string;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setSidebarOpen(!sidebarOpen);
      }}
      className="block rounded-sm p-1.5 shadow-sm md:hidden z-[9999]"
    >
      <span className="relative block h-6 w-6 cursor-pointer">
        <span className="block absolute right-0 h-full w-full">
          <span
            className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
              !sidebarOpen && "!w-full delay-300"
            }`}
          ></span>
          <span
            className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
              !sidebarOpen && "delay-400 !w-full"
            }`}
          ></span>
          <span
            className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
              !sidebarOpen && "!w-full delay-500"
            }`}
          ></span>
        </span>
        <span className="absolute right-0 h-full w-full rotate-45">
          <span
            className={`absolute left-2.5 top-0 block h-full w-[3px] rounded-sm bg-black delay-300 duration-200 ease-in-out ${
              !sidebarOpen && "!h-0 !delay-[0]"
            }`}
          ></span>
          <span
            className={`delay-400 absolute left-0 top-2.5 block h-[3px] w-full rounded-sm bg-black duration-200 ease-in-out ${
              !sidebarOpen && "!h-0 !delay-200"
            }`}
          ></span>
        </span>
      </span>
    </button>
  );
};
