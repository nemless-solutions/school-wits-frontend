import { LucideBookPlus } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";
import { FaChalkboardTeacher, FaRegBell } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
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
  {
    name: "Enrolments",
    icon: LucideBookPlus,
    link: "/enrolments",
  },
  {
    name: "Courses",
    icon: FiBook,
    sublinks: [
      {
        name: "Courses",
        link: "/courses",
      },
      {
        name: "Topics",
        link: "/topics",
      },
      {
        name: "Files",
        link: "/files",
      },
      {
        name: "Quiz",
        link: "/quiz",
      },
    ],
  },
  {
    name: "Notices",
    icon: FaRegBell,
    link: "/notices",
  },
];

export const curriculums = [
  {
    title: "Cambridge IGCSE (CAIE)",
    value: "CAMBRIDGE",
  },
  {
    title: "Oxford AQA",
    value: "OXFORD",
  },
  {
    title: "Pearson Edexcel",
    value: "PEARSON",
  },
  {
    title: "International Baccalaureate (IB)",
    value: "IB",
  },
];

export const grades = ["VI", "VII", "VIII", "IX", "X"];

export const FIELD_NAMES = {
  email: "Email",
  password: "Password",
  fullName: "Full name",
  contact: "Contact Number",
  fatherName: "Father's name",
  motherName: "Mother's name",
  guardianEmail: "Guardian's email",
  guardianContact: "Guardian's contact",
  currentSchool: "Current School Name",
  curriculum: "Curriculum",
  grade: "Grade",
  dateOfBirth: "Date of birth",
  title: "Title",
  mode: "Mode",
  type: "Type",
  uid: "UID",
  fee: "Fee",
  discountedFee: "Discounted fee",
  discountLastDate: "Discount last date",
  description: "Description",
  questionMark: "Question Mark",
  duration: "Duration (in minutes)",
  details: "Details",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
  fee: "number",
  discountedFee: "number",
  file: "file",
  questionMark: "number",
  duration: "number",
};
