import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@school-wits/ui";
import { useNavigate } from "react-router-dom";
import { SidebarLink } from "../../../types";

export function MainMenu({ items }: { items: SidebarLink[] }) {
  const navigate = useNavigate();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="space-y-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                onClick={() => item.link && navigate(item.link)}
                tooltip={item.name}
                className="cursor-pointer"
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
