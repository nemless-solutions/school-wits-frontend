import { LucideBookPlus } from "lucide-react";
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
  {
    name: "Enrolments",
    icon: LucideBookPlus,
    link: "/enrolments",
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
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
};
