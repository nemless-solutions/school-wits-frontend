"use client";

import { navItems } from "@/constants";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoHorizontal from "../../../public/images/logo-horizontal.png";
import { NavItem } from "./NavItem";
import { NavMenu } from "./NavMenu";
import { ToggleButton } from "./ToggleButton";
import { UserMenu } from "./UserMenu";

export function Navbar({ session }: { session: Session | null }) {
  const [showNav, setShowNav] = useState(false);
  const activeLink = usePathname();

  useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  return (
    <>
      {showNav && (
        <div
          onClick={() => setShowNav(false)}
          className="fixed h-full w-full bg-black/70 z-[9998] backdrop-blur-[3px]"
        />
      )}
      <nav className="fixed top-0 left-0 py-4 md:py-0 z-[9999] w-full bg-white border-b border-neutral-200">
        <div className="main-container">
          <div className="flex items-center w-full justify-between">
            <Link href="/">
              <Image
                className="w-[160px] min-[900px]:w-[200px] object-cover"
                src={logoHorizontal}
                alt="logo"
                width="1200"
                height="270"
              />
              {/* <Image
                className="md:hidden w-[40px] object-cover"
                src={logoIcon}
                alt="logo"
                width="500"
                height="500"
              /> */}
            </Link>
            <ToggleButton
              activeLink={activeLink}
              sidebarOpen={showNav}
              setSidebarOpen={setShowNav}
            />
            <div
              className={`fixed right-0 top-0 h-screen w-[300px] bg-white duration-200 md:static md:h-auto md:w-auto md:translate-x-0 md:justify-end md:pl-12 md:text-start ${
                showNav ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="md:flex items-center gap-x-2 min-[950px]:gap-x-4">
                <ul className="flex flex-col gap-x-1 lg:gap-x-4 mt-20 md:mt-0 md:flex-row">
                  {navItems.map((item, index) =>
                    item.type === "link" ? (
                      <NavItem
                        onClick={() => setShowNav(false)}
                        key={index}
                        link={item.link}
                        isActive={item.link === activeLink}
                      >
                        {item.title}
                      </NavItem>
                    ) : (
                      <NavMenu
                        key={index}
                        title={item.title}
                        content={item.menu}
                        onClick={setShowNav}
                      />
                    )
                  )}
                </ul>
                <div className="md:hidden">
                  {session?.user ? (
                    <UserMenu session={session} onClick={setShowNav} />
                  ) : (
                    <div className="flex flex-col items-start gap-4 min-[900px]:text-base text-sm">
                      <div className="pl-20 md:pl-0 mt-4 md:mt-0">
                        <Link
                          className="bg-white border-neutral-300 border-1 px-10 py-2 rounded-lg text-neutral-900 font-medium hover:bg-neutral-100 duration-200"
                          href="/sign-in"
                        >
                          Log In
                        </Link>
                      </div>
                      <div className="pl-20 md:pl-0 mt-4 md:mt-0">
                        <Link
                          className="bg-white border-neutral-300 border-1 px-10 py-2 rounded-lg text-neutral-900 font-medium hover:bg-neutral-100 duration-200"
                          href="/sign-up"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {session?.user ? (
                <UserMenu session={session} onClick={setShowNav} />
              ) : (
                <div className="flex items-center text-sm min-[950px]:text-base min-[950px]:gap-3 gap-1">
                  <div className="pl-20 md:pl-0 mt-4 md:mt-0">
                    <Link
                      className="bg-white border-neutral-300 border-1 min-[950px]:px-6 px-1 py-2 rounded-lg text-neutral-900 font-medium hover:bg-neutral-100 duration-200"
                      href="/sign-in"
                    >
                      Log In
                    </Link>
                  </div>
                  <div className="pl-20 md:pl-0 mt-4 md:mt-0">
                    <Link
                      className="bg-white border-neutral-300 border-1 min-[950px]:px-6 px-1 py-2 rounded-lg text-neutral-900 font-medium hover:bg-neutral-100 duration-200"
                      href="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
