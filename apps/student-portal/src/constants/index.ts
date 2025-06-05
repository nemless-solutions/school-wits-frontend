import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import fileDownload from "../../public/icons/file-download.png";
import graph from "../../public/icons/graph.png";
import growth from "../../public/icons/growth.png";
import lightbulb from "../../public/icons/lightbulb.png";
import mentor from "../../public/icons/mentor.png";
import mission from "../../public/icons/mission.png";
import quiz from "../../public/icons/quiz.png";
import target from "../../public/icons/targeting.png";
import test from "../../public/icons/test.png";
import videoPlayer from "../../public/icons/video-player.png";
import webinar from "../../public/icons/webinar.png";
import additionalMath from "../../public/images/additional-math.png";
import allSubjects from "../../public/images/all-subjects.png";
import backpack from "../../public/images/backpack.png";
import graduationCap from "../../public/images/graduation-cap.png";
import math from "../../public/images/math.png";
import openBook from "../../public/images/open-book.png";
import pencilRuler from "../../public/images/pencil-ruler.png";
import python from "../../public/images/python.png";
import { Course, NavItem } from "../../types";

export const navItems: NavItem[] = [
  { type: "link", title: "Home", link: "/" },
  {
    type: "menu",
    title: "Grades",
    menu: [
      {
        type: "link",
        icon: backpack,
        title: "Grade VI",
        link: "/grades/vi",
      },
      {
        type: "link",
        icon: pencilRuler,
        title: "Grade VII",
        link: "/grades/vii",
      },
      {
        type: "link",
        icon: openBook,
        title: "Grade VIII",
        link: "/grades/viii",
      },
      {
        type: "link",
        icon: graduationCap,
        title: "O Levels [Grade IX & X]",
        link: "/grades/o",
      },
    ],
  },
  { type: "link", title: "Contact Us", link: "/contact-us" },
  { type: "link", title: "About Us", link: "/about-us" },
];

export const grades = [
  {
    grade: "VI",
    illustration: backpack,
    gradient: {
      from: "#b1e3fa",
      to: "#38bdf8",
    },
  },
  {
    grade: "VII",
    illustration: pencilRuler,
    gradient: {
      from: "#8cedbf",
      to: "#18a864",
    },
  },
  {
    grade: "VIII",
    illustration: openBook,
    gradient: {
      from: "#b1cdfa",
      to: "#3b82f6",
    },
  },
  {
    grade: "O",
    illustration: graduationCap,
    gradient: {
      from: "#e0d9ff",
      to: "#5a3bd7",
    },
  },
];

export const lessonHighlights = [
  {
    subject: "Mathematics",
    title: "Unlock the language of logic.",
    description:
      "Dive into the world of numbers, patterns, and problem-solving. Our Mathematics lessons break down complex concepts into easy steps that build your confidence, one equation at a time.",
    videoLink: "https://youtu.be/Ou34deDjinw",
  },
  {
    subject: "Physics",
    title: "Discover how the universe works.",
    description:
      "From motion to magnetism, Physics helps you see the science behind everyday life. Explore real-world applications through clear explanations and visual learning.",
    videoLink: "https://youtu.be/RhygCOU_3zw",
  },
  {
    subject: "Chemistry",
    title: "Meet the magic of matter.",
    description:
      "Chemistry is more than lab coats and test tubes — it's the science of change. Learn how atoms, elements, and reactions shape everything around you.",
    videoLink: "https://youtu.be/o6CW0inttWU",
  },
  {
    subject: "Biology",
    title: "Understand life, from cells to systems.",
    description:
      "Biology opens up the living world. Explore how your body works, how ecosystems interact, and how life continues through fascinating biological processes.",
    videoLink: "https://youtu.be/ecijTio-ZzU",
  },
  {
    subject: "Additional Mathematics",
    title: "Challenge your mind beyond the basics.",
    description:
      "Additional Mathematics deepens your understanding of functions, calculus, and algebra. Ideal for advanced learners ready to tackle higher-level math with clarity and confidence.",
    videoLink: "https://youtu.be/mArhcXX5UWw",
  },
];

export const promoVideoLink = "https://youtu.be/J-lW0RyWgVg";

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
      "I like how Sir breaks down each lecture and delivers it to us students. Especially the way he explains each lecture in a different and easier way every time — both elaborately and simply, depending on the student who is struggling.",
    name: "Arshiya Azeen Athir",
    title: "Grade: VIII",
  },
  {
    quote:
      "I really like how supportive and friendly the teacher is. He made sure everyone understood the lessons and was always ready to help. It made learning enjoyable and boosted my confidence a lot.",
    name: "Anonymous",
    title: "Grade: VIII",
  },
  {
    quote:
      "School wits did a really great job. They are very patient. They teach a student until they understood properly.",
    name: "Ravid Yusuf",
    title: "Grade: VIII",
  },
  {
    quote:
      "Due to the teacher , we rarely forget any answers because he tends to repeat the answers until we are fully aware of it.",
    name: "Anonymous",
    title: "Grade: VIII",
  },
  {
    quote:
      "Through out the year it was very nice experience with School wits one thing I really liked was the friendly and the helpful  teacher he really made learning easier.",
    name: "Shazia Noor",
    title: "Grade: VIII",
  },
  {
    quote:
      "Everything, including lecture videos, offline lectures were really great and comfortable, really got so much help from our Sir, thanks for a nice session.",
    name: "Anonymous",
    title: "Grade: VIII",
  },
  {
    quote: "Takes more classes and gives time.",
    name: "Tasfia Akter",
    title: "Grade: VII",
  },
];

export const courses: Record<string, Course[]> = {
  "vi-vii": [
    {
      title: "Must-Know Concepts of Mathematics",
      image: math,
      suitableFor: "Grade VI/VII of session 2025-2026",
      duration: "15 June - 28 June 2025",
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
  curriculum: "Curriculum",
  grade: "Grade",
  dateOfBirth: "Date of birth",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
};

export const terms = [
  "Arrive at least 10 minutes before class.",
  "Bring essential materials (pen, pencil, eraser, ruler, etc.).",
  "Take notes actively during lessons.",
  "Maintain academic integrity during exams.",
  "Follow proper classroom etiquette when asking or answering questions.",
  "Sharing or distributing course materials is prohibited.",
  "Class schedules are subject to change with prior notice.",
  "Fees must be paid in full upfront, inclusive of bank charges for online transactions.",
];

export const aboutUs = [
  {
    icon: lightbulb,
    header: "It All Started With a Question...",
    subHeader: "What if learning could spark curiosity, not stress?",
    description:
      "That simple question became the foundation of School Wits. We recognized how traditional education often left students feeling overwhelmed, disengaged, or uninspired. We set out to bridge the gap between rigid systems and the dynamic potential of digital learning.",
  },
  {
    icon: webinar,
    header: "How Our Classes Work ?",
    description:
      "Our in-person classes offer a focused, tech-enabled environment - with limited seats to ensure personalized attention. Classrooms are equipped with modern tools like interactive flat panels, projectors, and integrated video lessons - making every learning experience dynamic, visual, and engaging. Students benefit from regular performance insights, helping them stay aware of their progress and continuously improve - while also allowing parents to stay informed and actively involved in their learning journey.",
  },
  {
    icon: growth,
    header: "How Are We Different ?",
    description:
      "School Wits isn't just a typical learning platform - it's a school of wits, where sharp minds grow sharper, and creativity leads the way. Here, learning isn't about cramming facts it's about discovering ideas, asking the right questions, and building the confidence to explore beyond textbooks.",
  },
  {
    icon: mission,
    header: "Our Mission",
    description:
      "At School Wits, our mission is to make e-learning accessible, engaging, and effective for every aspiring young mind. We aim to nurture curiosity, build goal-driven foundational skills, and empower students through interactive digital learning that blends academic excellence with real-world relevance.",
  },
  {
    icon: target,
    header: "Our Vision",
    description:
      "Our vision is to build a trusted global platform where students can unlock their full potential through personalized learning experiences and innovative teaching methods. We envision establishing Bangladesh as a global hub for quality education, shaping a generation of confident, skilled, and future-ready learners through cutting-edge digital schooling.",
  },
];

export const contactUs = {
  contacts: [
    {
      Icon: MdEmail,
      title: "Reach Out Via Email",
      link: "mailto:support@schoolwits.com",
      description: "support@schoolwits.com",
      button: "Send Email",
    },
    {
      Icon: BsFillTelephoneFill,
      title: "Speak With Us Directly",
      link: "tel:+8801898898984",
      description: "+880-1898-898984",
      button: "Call Us",
    },
  ],
  socials: [
    {
      Icon: FaFacebookF,
      title: "Facebook",
      link: "https://www.facebook.com/share/16Wg6y8ELd/",
      button: "Like",
    },
    {
      Icon: FaInstagram,
      title: "Instagram",
      link: "https://www.instagram.com/schoolwits?igsh=dDQ3MzY0OXZ4b2hr",
      button: "Follow",
    },
    {
      Icon: FaYoutube,
      title: "YouTube",
      link: "https://youtube.com/@schoolwits?feature=shared",
      button: "Subscribe",
    },
  ],
};
