import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@school-wits/ui";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-horizontal.png";
import { sidebarLinks } from "../../constants";
import { useAuth } from "../../contexts/AuthContext";
import { MainMenu } from "./MainMenu";
import { NavUser } from "./NavUser";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, setUser } = useAuth();

  const handleLogout = function () {
    setUser && setUser(null);

    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedToken");
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <img className="w-[200px]" src={logo} alt="Logo" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-10">
        <MainMenu items={sidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} onLogout={handleLogout} />
      </SidebarFooter>
    </Sidebar>
  );
}
