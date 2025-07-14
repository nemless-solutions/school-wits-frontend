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
export type Curriculum = "CAMBRIDGE" | "OXFORD" | "PEARSON" | "IB";

interface AuthCredentials {
  email: string;
  password: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  guardianEmail: string;
  guardianContact: string;
  currentSchool: string;
  curriculum: Curriculum;
  grade: Grade;
  dateOfBirth: Date;
}

export type User = {
  id: number;
  uid: string;
  email: string;
  fullName: string;
  currentSchool: string;
  fatherName: string;
  motherName: string;
  guardianEmail: string;
  guardianContact: string;
  curriculum: Curriculum;
  grade: Grade;
  dateOfBirth: Date;
  lastSeenNotice: Date;
  createdAt: Date;
};

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

export type EnrolledCourse = {
  id: number;
  course: Course;
  createdAt: Date;
  paid: boolean;
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

export type Notice = {
  id: number;
  title: string;
  details: string;
  createdAt: Date;
};
