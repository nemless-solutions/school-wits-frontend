import { AiOutlineHome } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { Link } from "../../types";

export const themes = {
  light: ["light", "corporate", "cupcake", "valentine"],
  dark: ["dim", "dracula", "dark", "black"],
};

export const sidebarLinks: Link[] = [
  {
    name: "Home",
    link: "/",
    Icon: AiOutlineHome,
  },
  {
    name: "Students",
    Icon: PiStudentDuotone,
    link: "/students",
  },
  {
    name: "Teachers",
    Icon: FaChalkboardTeacher,
    link: "/teachers",
  },
];
