import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>> | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: null,
});

let colorTheme = "light";

if (localStorage.getItem("colorTheme")) {
  colorTheme = JSON.parse(localStorage.getItem("colorTheme") as string);
}

export const ThemeProvider = function ({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(colorTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = function () {
  return useContext(ThemeContext);
};
