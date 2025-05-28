import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@school-wits/ui";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "../../../types";

interface NavMenuProps {
  title: string;
  content: NavItem[];
}

export function NavMenu({ title, content }: NavMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-base text-black !bg-transparent h-full py-5 focus:!bg-transparent hover:!bg-transparent w-full ml-[45px] md:ml-0 pr-[150px] md:pr-0 cursor-pointer">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] font-semibold">
              {content.map((item, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <Link href={item?.link || "/"}>
                      <div className="flex h-full gap-x-2 w-full select-none items-center rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-1 no-underline outline-none focus:shadow-md text-secondary">
                        <Image
                          className="block w-10 object-cover"
                          src={item?.icon || ""}
                          width={50}
                          height={50}
                          alt={item.title}
                        />
                        <span className="block">
                          {item.title.split(" ")[0]}{" "}
                          <span className="font-roboto-slab text-primary">
                            {item.title.split(" ")[1]}
                          </span>
                        </span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
