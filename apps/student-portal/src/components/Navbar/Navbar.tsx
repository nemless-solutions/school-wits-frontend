"use client";

import { Button } from "@school-wits/ui";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import grdaeIX_X from "../../../public/images/grade_IX-X.png";
import gradeVI_VII from "../../../public/images/grade_VI-VII.png";
import gradeVIII from "../../../public/images/grade_VIII.png";
import { NavItem } from "./NavItem";
import { NavMenu } from "./NavMenu";
import { ToggleButton } from "./ToggleButton";

export type NavItem =
  | {
      type: "link";
      icon?: StaticImageData;
      title: string;
      link: string;
      menu?: never;
    }
  | {
      type: "menu";
      icon?: StaticImageData;
      title: string;
      menu: NavItem[];
      link?: never;
    };

const navItems: NavItem[] = [
  { type: "link", title: "Home", link: "/" },
  {
    type: "menu",
    title: "Courses",
    menu: [
      {
        type: "link",
        icon: gradeVI_VII,
        title: "Grade VI-VII",
        link: "/grades/vi-vii",
      },
      {
        type: "link",
        icon: gradeVIII,
        title: "Grade VIII",
        link: "/grades/viii",
      },
      {
        type: "link",
        icon: grdaeIX_X,
        title: "Grade IX-X",
        link: "/grades/ix-x",
      },
    ],
  },
  { type: "link", title: "About Us", link: "/about-us" },
];

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
              className="w-12 sm:w-16"
              src="/images/logo.png"
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
