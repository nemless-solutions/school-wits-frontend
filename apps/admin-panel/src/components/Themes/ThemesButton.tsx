import { Dispatch, SetStateAction } from "react";
import { FaGear } from "react-icons/fa6";

interface ThemesButtonProps {
  setThemesbarOpen: Dispatch<SetStateAction<boolean>>;
}

export const ThemesButton = function ({ setThemesbarOpen }: ThemesButtonProps) {
  return (
    <button
      onClick={() => setThemesbarOpen(true)}
      className="fixed right-0 top-1/3 z-999 drop-shadow-[2px_6px_4px_rgba(0,0,0,0.5)]"
    >
      <div className="bg-primary text-primary-content p-2 md:p-3 rounded-l-lg hover:opacity-80 duration-200">
        <div className="animate-[spin_3s_linear_infinite]">
          <FaGear />
        </div>
      </div>
    </button>
  );
};
