import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@school-wits/ui";
import { cn } from "@school-wits/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarLink } from "../../../types";

export function MainMenu({ items }: { items: SidebarLink[] }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="space-y-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                onClick={() => item.link && navigate(item.link)}
                tooltip={item.name}
                className={cn(
                  "cursor-pointer",
                  pathname.split("/")[1] === item.link?.split("/")[1]
                    ? "bg-secondary text-secondary-foreground"
                    : ""
                )}
              >
                {item.icon && <item.icon className="scale-125" />}
                <span className="text-base font-semibold ml-2">
                  {item.name}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
