import fileDownload from "../../public/icons/file-download.png";
import graph from "../../public/icons/graph.png";
import mentor from "../../public/icons/mentor.png";
import quiz from "../../public/icons/quiz.png";
import test from "../../public/icons/test.png";
import videoPlayer from "../../public/icons/video-player.png";
import additionalMath from "../../public/images/additional-math.png";
import allSubjects from "../../public/images/all-subjects.png";
import grdaeIX_X from "../../public/images/grade_IX-X.png";
import gradeVI_VII from "../../public/images/grade_VI-VII.png";
import gradeVIII from "../../public/images/grade_VIII.png";
import math from "../../public/images/math.png";
import python from "../../public/images/python.png";
import { Course, NavItem } from "../../types";

export const navItems: NavItem[] = [
  { type: "link", title: "Home", link: "/" },
  { type: "link", title: "Courses", link: "/courses" },
  {
    type: "menu",
    title: "Grades",
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

export const grades = [
  {
    grade: "VI-VII",
    illustration: gradeVI_VII,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#9ad7f5",
      to: "#1995e3",
    },
  },
  {
    grade: "VIII",
    illustration: gradeVIII,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#8cedbf",
      to: "#18a864",
    },
  },

  {
    grade: "IX-X",
    illustration: grdaeIX_X,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#e0d9ff",
      to: "#5a3bd7",
    },
  },
];

export const whyChooseUs = [
  {
    icon: videoPlayer,
    title: "Binge-Worthy Lessons",
    description:
      "Engaging video lessons designed to alleviate online learning monotony while ensuring balanced screen time.",
  },
  {
    icon: quiz,
    title: "Quizzes That Click",
    description:
      "Interactive quizzes to reinforce learning and assess comprehension.",
  },
  {
    icon: test,
    title: "Ready for the Real Thing",
    description:
      "Evaluation after completion of each topic with exam-style questions.",
  },
  {
    icon: fileDownload,
    title: "Your Learning, On Your Terms",
    description:
      "Downloadable course contents for convenient review and self-paced learning.",
  },
  {
    icon: mentor,
    title: "Mentors Who Go All In",
    description:
      "Passionate educators with extensive expertise to guide the student every step of the way.",
  },
  {
    icon: graph,
    title: "Track It. Smash It. Repeat.",
    description:
      "Prompt feedback and regular performance metrics for self-assessment and targeted enhancement, ensuring continual progress.",
  },
];

export const feedbacks = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const courses: Record<string, Course[]> = {
  "vi-vii": [
    {
      title: "Must-Know Concepts of Mathematics",
      image: math,
      suitableFor: "Grade VI/VII of session 2025-2026",
      duration: "15 June – 28 June 2025",
      mode: " In-person | 10 classes | 60 minutes each",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "This foundational course focuses on essential mathematics concepts that build a strong base for advanced topics.",
      topics: [
        "Algebra and Algebraic Equations",
        "Directed Numbers",
        "Prime Factorization",
        "LCM & HCF",
        "Word Problem Applications",
      ],
      features: [
        "10 Lecture Notes",
        "10 Video Lessons",
        "5 Worksheets",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Basics of Computer Programming with Python",
      image: python,
      suitableFor: "Grade VI/VII of session 2025-2026",
      mode: "Online live session | Requires a computer",
      schedule: " 10 sessions | 60 minutes each | Up to 15 students only",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "A beginner-friendly course designed to introduce students to fundamental programming logic and Python syntax.",
      topics: [
        "Algorithms, Flowcharts, Pseudocode",
        "Variables, Input/Output",
        "Conditional & Looping Structures (if-else, for, while)",
      ],
      features: [
        "10 Class Recordings",
        "20+ Practice Problems",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: " Beyond the Bell: Study Support",
      image: allSubjects,
      suitableFor: "Grade VI/VII of session 2025-2026",
      duration: "5 July - 18 December 2025",
      mode: "In-person | 4 classes/week | 70 minutes each",
      fees: "BDT 10,000/month (Total: BDT 60,000)",
      earlyBird: "BDT 2,000 off in July (if registered before 30 June)",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
      features: [
        "Structured Lecture notes & Videos lessons",
        "Worksheets & Quizzes",
        "Remedial sessions & Topic-end assessments with Exam-style questions",
      ],
    },
  ],
  viii: [
    {
      title: "Must-Know Concepts of Mathematics - Syllabus D (4024)",
      image: math,
      suitableFor: "Grade VIII of session 2025-2026",
      duration: "15 June - 28 June 2025",
      mode: " In-person | 10 classes | 60 minutes each",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "This course is designed to solidify fundamental math skills needed for higher-level topics.",
      topics: [
        "Using a calculator-dos and don'ts",
        "Inequality",
        "Surds",
        "Bearings",
        "Vectors",
        "Probability",
        "Statistics (Mean, Median, Mode)",
      ],
      features: [
        "10 Lecture Notes",
        "10 Video Lessons",
        "5 Worksheets",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Must-Know Concepts of Additional Mathematics (4037)",
      image: additionalMath,
      suitableFor: "Grade VIII of session 2025-2026",
      duration: "15 June - 28 June 2025",
      mode: " In-person | 10 classes | 60 minutes each",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "This course covers essential math concepts that lay the groundwork for advanced learning.",
      topics: [
        "Division of polynomials",
        "Factor theorem",
        "Modulus functions",
        "Quadratic and Cubic inequalities- their moduli and graphs",
      ],
      features: [
        "10 Lecture Notes",
        "10 Video Lessons",
        "5 Worksheets",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Basics of Computer Programming with Python",
      image: python,
      suitableFor: "Grade VIII of session 2025-2026",
      mode: "Online live session | Requires a computer",
      schedule: " 10 sessions | 60 minutes each | Up to 15 students only",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "An easy-to-follow course that introduces students to basic programming logic and Python syntax",
      topics: [
        "Algorithms, Flowcharts, Pseudocode",
        "Variables, Input/Output",
        "Conditional & Looping Structures (if-else, for, while)",
      ],
      features: [
        "10 Class Recordings",
        "20+ Practice Problems",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Beyond the Bell: Study Support",
      image: allSubjects,
      suitableFor: "Grade VIII of session 2025-2026",
      duration: "5 July - 18 December 2025",
      mode: "In-person | 3 classes/week per subject | 70 minutes each",
      fees: "BDT 4,000/month per subject",
      earlyBird: "BDT 1,000 off/subject in July (if registered before 30 June)",
      subjects: [
        "Mathematics-Syllabus D (4024)",
        "Additional Mathematics (4037)",
        "Physics (5054)",
      ],
      features: [
        "Structured Lecture notes & Videos lessons",
        "Worksheets & Quizzes",
        "Remedial sessions & Topic-end assessments with Exam-style questions",
      ],
    },
  ],
  "ix-x": [
    {
      title: " Must-Know Concepts of Mathematics - Syllabus D (4024)",
      image: math,
      suitableFor: "Grade IX/X of session 2025-2026",
      duration: "15 June - 28 June 2025",
      mode: " In-person | 10 classes | 60 minutes each",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "Builds essential math skills that support deeper understanding in Syllabus D and beyond.",
      topics: [
        "Interpreting Distance-time and Speed-time graphs",
        "Trigonometry-3D problems",
        "Sine, cosine and tangent for any angle",
        "The sine rule",
        "The cosine rule",
      ],
      features: [
        "10 Lecture Notes",
        "10 Video Lessons",
        "5 Worksheets",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Must-Know Concepts of Additional Mathematics (4037)",
      image: additionalMath,
      suitableFor: "Grade IX/X of session 2025-2026",
      duration: "15 June - 28 June 2025",
      mode: " In-person | 10 classes | 60 minutes each",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "Prepares students for the analytical depth and challenges of Additional Mathematics.",
      topics: [
        "First order derivative rules",
        "Derivatives of exponential, logarithmic and trigonometric functions",
        "Applications of differentiation in kinematics",
      ],
      features: [
        "10 Lecture Notes",
        "10 Video Lessons",
        "5 Worksheets",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Basics of Computer Programming with Python",
      image: python,
      suitableFor: "Grade IX/X of session 2025-2026",
      mode: "Online live session | Requires a computer",
      schedule: " 10 sessions | 60 minutes each | Up to 15 students only",
      fees: "BDT 5,000",
      earlyBird: "BDT 4,500 before 10 June",
      overview:
        "A step-by-step course guiding students from basic programming logic to advanced Python skills.",
      topics: [
        "Algorithms, Flowcharts, Pseudocode",
        "Variables, Input/Output",
        "Conditional & Looping Structures (if-else, for, while)",
      ],
      features: [
        "10 Class Recordings",
        "20+ Practice Problems",
        "5 Quizzes",
        "2 Exams",
        "1 Remedial Session",
      ],
    },
    {
      title: "Beyond the Bell: Study Support",
      image: allSubjects,
      suitableFor: "Grade IX/X of session 2025-2026",
      duration: "5 July - 18 December 2025",
      mode: "In-person | 3 classes/week per subject | 70 minutes each",
      fees: "BDT 4,000/month per subject",
      earlyBird: "BDT 1,000 off/subject in July (if registered before 30 June)",
      subjects: [
        "Mathematics-Syllabus D (4024)",
        "Additional Mathematics (4037)",
        "Physics (5054)",
      ],
      features: [
        "Structured Lecture notes & Videos lessons",
        "Worksheets & Quizzes",
        "Remedial sessions & Topic-end assessments with Exam-style questions",
      ],
    },
  ],
};
