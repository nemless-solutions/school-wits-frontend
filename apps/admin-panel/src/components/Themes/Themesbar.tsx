import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { Overlay } from "../Overlay/Overlay";
import { ThemeSettings } from "./ThemeSettings";

interface ThemesbarProps {
  themesbarOpen: boolean;
  setThemesbarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Themesbar = function ({
  themesbarOpen,
  setThemesbarOpen,
}: ThemesbarProps) {
  const handleThemesbarClose = function () {
    setThemesbarOpen(false);
  };

  return (
    <div>
      {themesbarOpen && <Overlay onClick={handleThemesbarClose} />}
      <aside
        className={`fixed right-0 top-0 z-9999 flex h-screen w-[320px] flex-col overflow-y-hidden bg-base-100 duration-300 ease-linear ${
          themesbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-8 bg-accent">
          <div className="flex items-center text-2xl text-white gap-x-2">
            <FaBrush />
            <h2 className="font-semibold">Themes</h2>
          </div>
          <button
            onClick={handleThemesbarClose}
            aria-controls="sidebar"
            aria-expanded={themesbarOpen}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <div className="no-scrollbar px-2 pb-8 pt-2 overflow-y-auto">
          <div>
            <ThemeSettings setThemesbarOpen={setThemesbarOpen} />
          </div>
        </div>
      </aside>
    </div>
  );
};
