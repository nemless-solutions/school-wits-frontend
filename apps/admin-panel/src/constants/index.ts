import { AiOutlineHome } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { SidebarLink } from "../../types";

export const sidebarLinks: SidebarLink[] = [
  {
    name: "Home",
    link: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Students",
    icon: PiStudentDuotone,
    link: "/students",
  },
  {
    name: "Teachers",
    icon: FaChalkboardTeacher,
    link: "/teachers",
  },
];
