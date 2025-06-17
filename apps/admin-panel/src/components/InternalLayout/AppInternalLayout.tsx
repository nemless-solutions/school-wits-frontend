import { FC, ReactNode, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Themesbar } from "../Themes/Themesbar";
import { ThemesButton } from "../Themes/ThemesButton";

export const AppInternalLayout: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themesbarOpen, setThemesbarOpen] = useState(false);

  return (
    <div>
      <ThemesButton setThemesbarOpen={setThemesbarOpen} />
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Themesbar
          themesbarOpen={themesbarOpen}
          setThemesbarOpen={setThemesbarOpen}
        />
        <div className="flex flex-1 flex-col overflow-x-hidden">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-grow overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
