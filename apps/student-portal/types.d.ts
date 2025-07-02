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

export type Grade = "VI" | "VII" | "VIII" | "IX" | "X";

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
  grade: Grade;
  dateOfBirth: Date;
}

export type Course = {
  id: number;
  uid: string;
  grade: Grade;
  title: string;
  description: string;
  mode: "IN_PERSON" | "ONLINE";
  type: "SHORT" | "LONG";
  fee: number;
  numberOfLessons: number;
  numberOfNotes: number;
  numberOfWorksheet: number;
  numberOfQuizzes: number;
  numberOfExams: number;
  numberOfSession: number;
  academicSession: string;
  sessionDuration: string;
  createdAt: string;
};

export type CourseBundle = {
  id: number;
  grade: Grade;
  courses: Course[];
};

export type CourseDetails = {
  id: number;
  course: Course;
  title: string;
  description: string;
  learningContentTitle: string;
  learningContentList: string;
  chartValues: Record<string, number>;
  assessment: string;
  academicPlan: string;
  coursePlanInformation: {
    id: number;
    weeks: {
      id: number;
      text: string;
      weekDetails: {
        id: number;
        text: string;
      }[];
    }[];
  };
};
