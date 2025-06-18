export type Course = {
  type: "regular" | "current";
  title: string;
  session: string;
  duration: string;
  schedule?: string;
  note?: string;
  mode: string;
  fees: string;
  earlyBird?: string;
  overview?: string;
  topics?: string[];
  subjects?: string[];
  features: string[];
};

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

interface AuthCredentials {
  email: string;
  password: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  guardianEmail: string;
  guardianContact: string;
  currentSchool: string;
  curriculum: "CAMBRIDGE" | "OXFORD" | "PEARSON" | "IB";
  grade: "VI" | "VII" | "VIII" | "IX" | "X";
  dateOfBirth: Date;
}
