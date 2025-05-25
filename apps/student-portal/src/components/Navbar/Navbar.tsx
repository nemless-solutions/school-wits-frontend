"use client";

import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../client-ui";
import { NavItem } from "./NavItem";
import { NavMenu } from "./NavMenu";
import { ToggleButton } from "./ToggleButton";

export function Navbar() {
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
    <nav className="fixed top-0 left-0 py-4 md:py-0 z-[999] w-full bg-blue-50 border-b border-slate-600 md:border-none md:bg-neutral-100/80 md:backdrop-blur-lg">
      <div className="main-container">
        <div className="flex items-center w-full justify-between">
          <Link href="/">
            <Image
              className="w-[100px] md:w-[180px] object-cover"
              src="/images/logo-lg.png"
              alt="logo"
              width="100"
              height="100"
            />
          </Link>
          <ToggleButton
            activeLink={activeLink}
            sidebarOpen={showNav}
            setSidebarOpen={setShowNav}
          />
          <div
            className={`fixed right-0 top-0 h-screen w-[320px] bg-neutral-100/40 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none duration-200 md:static md:h-auto md:w-auto md:translate-x-0 md:justify-end md:pl-12 md:text-start ${
              showNav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="md:flex items-center gap-x-4">
              <ul className="flex flex-col gap-x-4 mt-20 md:mt-0 md:flex-row">
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
                    />
                  )
                )}
              </ul>
              <div className="flex items-center justify-center gap-x-3 mt-8 md:mt-0">
                <Button asChild>
                  <Link href="/sign-in">Log In</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
