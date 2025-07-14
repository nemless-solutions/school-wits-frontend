import { getAbbreviation } from "@school-wits/utils";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../client-ui";
import { NoticeModal } from "../NoticeModal/NoticeModal";

interface UserMenuProps {
  session: Session;
  onClick?: Dispatch<SetStateAction<boolean>>;
}

const userMenuItems = [
  {
    Icon: FaUserGraduate,
    label: "Profile",
    link: "/profile",
    color: "#38bdf8",
  },
  {
    Icon: MdDashboard,
    label: "Dashboard",
    link: "/dashboard",
    color: "#6366f1",
  },
];

export function UserMenu({ session, onClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignout = async function () {
    await signOut({ redirectTo: "/" });
  };

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-base text-black !bg-transparent h-full py-4 focus:!bg-transparent hover:!bg-transparent w-full ml-[35px] md:ml-0 pr-[160px] md:pr-0 cursor-pointer">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={session.user?.image || undefined} />
                  <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                    {getAbbreviation(session.user?.name)}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold">
                  {session.user?.name?.split(" ").slice(0, 2).join(" ")}
                </p>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent onClick={() => onClick && onClick(false)}>
              <ul className="w-[200px] font-semibold">
                {userMenuItems.map((item, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <Link href={item?.link || "/"}>
                        <div className="flex h-full gap-x-4 w-full select-none items-center rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-1.5 no-underline outline-none text-black">
                          <div
                            style={{ backgroundColor: `${item.color}33` }}
                            className="p-2.5 rounded-full"
                          >
                            <item.Icon
                              style={{ color: item.color }}
                              className="scale-[1.25]"
                            />
                          </div>
                          <span>{item.label}</span>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li>
                  <NavigationMenuLink asChild>
                    <button
                      className="block w-full"
                      onClick={() => setIsOpen(true)}
                    >
                      <div className="flex h-full gap-x-4 w-full select-none items-center rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-1.5 no-underline outline-none text-black cursor-pointer">
                        <div className="p-2.5 rounded-full bg-[#f9731633]">
                          <IoMdNotifications className="scale-[1.25] text-[#f97316]" />
                        </div>
                        <span>Notices</span>
                      </div>
                    </button>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <Button
                        onClick={handleSignout}
                        className="w-full font-semibold h-10"
                        variant="destructive"
                      >
                        Logout
                      </Button>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NoticeModal
        notices={[]}
        noticeTrigger={<div className="hidden">Notification</div>}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
}
