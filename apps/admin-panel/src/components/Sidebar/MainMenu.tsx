import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@school-wits/ui";
import { cn } from "@school-wits/utils";
import { ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarLink } from "../../../types";

export function MainMenu({ items }: { items: SidebarLink[] }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="space-y-2">
          {items.map((item) =>
            item.sublinks ? (
              <Collapsible
                key={item.name}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.name}>
                      {item.icon && <item.icon className="scale-125" />}
                      <span className="text-base font-semibold ml-2">
                        {item.name}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="space-y-1">
                      {item.sublinks?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.name}>
                          <SidebarMenuSubButton
                            onClick={() =>
                              subItem.link && navigate(subItem.link)
                            }
                            className={cn(
                              "cursor-pointer",
                              pathname.split("/")[1] ===
                                subItem.link?.split("/")[1]
                                ? "bg-secondary text-secondary-foreground"
                                : ""
                            )}
                          >
                            <span className="text-base font-semibold ml-2">
                              {subItem.name}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
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
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
