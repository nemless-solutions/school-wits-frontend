import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";
import { themes } from "../../constants";
import { useTheme } from "../../contexts/ThemeContext";

const _themes = themes.light.concat(themes.dark);

export const ThemeSettings = function ({
  setThemesbarOpen,
}: {
  setThemesbarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-2 gap-3 py-2">
      {_themes.map((n: string, i: number) => (
        <ThemeSelector
          setThemesbarOpen={setThemesbarOpen}
          theme={theme}
          setTheme={setTheme}
          key={i}
          name={n}
        />
      ))}
    </div>
  );
};

const ThemeSelector = function ({
  name,
  theme,
  setTheme,
  setThemesbarOpen,
}: {
  name: string;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>> | null;
  setThemesbarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const selectTheme = function () {
    if (!setTheme) return;
    setTheme(name);

    setTimeout(() => setThemesbarOpen(false), 200);
  };
  return (
    <div
      onClick={selectTheme}
      data-theme={name}
      className={`relative h-[80px] flex rounded-md overflow-hidden cursor-pointer hover:outline-3 hover:outline-accent ${
        theme === name ? "outline-3 outline-accent" : ""
      }`}
    >
      {theme === name && (
        <div className="absolute right-2 top-1.5 w-fit p-1.5 aspect-square text-accent-content flex items-center justify-center bg-accent rounded-full">
          <FaCheck size={10} />
        </div>
      )}
      <div className="flex flex-col w-1/4">
        <div className="h-2/3 bg-base-200"></div>
        <div className="h-1/3 bg-base-300"></div>
      </div>
      <div className="bg-base-100 w-3/4 mt-auto mb-2 ml-1">
        <div className="text-base-content font-bold">{name}</div>
        <div className="flex gap-x-1 flex-wrap font-bold text-sm [&>*]:px-1 [&>*]:rounded-md">
          <div className="bg-primary text-primary-content">A</div>
          <div className="bg-secondary text-secondary-content">A</div>
          <div className="bg-accent text-accent-content">A</div>
          <div className="bg-neutral text-neutral-content">A</div>
        </div>
      </div>
    </div>
  );
};
