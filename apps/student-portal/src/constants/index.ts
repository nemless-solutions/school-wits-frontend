import GradeVIIcon from "../../public/graphics/circle-group-1.svg";
import GradeVIIIIcon from "../../public/graphics/circle-group-2.svg";
import OLevelIcon from "../../public/graphics/circle-group-3.svg";
import GradeVIIIcon from "../../public/graphics/square-group.svg";
import analytics from "../../public/icons/analytics-up.png";
import muscle from "../../public/icons/body-part-muscle.png";
import brain from "../../public/icons/brain.png";
import callIcon from "../../public/icons/call.png";
import video from "../../public/icons/computer-video.png";
import facebookIcon from "../../public/icons/facebook.png";
import webSearch from "../../public/icons/global-search.png";
import idea from "../../public/icons/idea.png";
import instagramIcon from "../../public/icons/instagram.png";
import liveStreaming from "../../public/icons/live-streaming.png";
import locationIcon from "../../public/icons/location.png";
import emailIcon from "../../public/icons/mail.png";
import puzzle from "../../public/icons/puzzle.png";
import quiz from "../../public/icons/quiz.png";
import search from "../../public/icons/search.png";
import teacher from "../../public/icons/teacher.png";
import userGroup from "../../public/icons/user-group.png";
import youtubeIcon from "../../public/icons/youtube.png";
import backpack from "../../public/images/backpack.png";
import graduationCap from "../../public/images/graduation-cap.png";
import openBook from "../../public/images/open-book.png";
import pencilRuler from "../../public/images/pencil-ruler.png";
import { NavItem } from "../../types";

export const baseUrl = process.env.BASE_URL || "https://backend.schoolwits.com";

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
        title: "O Levels [IX & X]",
        link: "/grades/o",
      },
    ],
  },
  { type: "link", title: "Contact Us", link: "/contact-us" },
  { type: "link", title: "About Us", link: "/about-us" },
];

export const grades = [
  {
    grade: "vi",
    title: "VI",
    link: "/grades/vi",
    classes: 12,
    Icon: GradeVIIcon,
  },
  {
    grade: "vii",
    title: "VII",
    link: "/grades/vii",
    classes: 18,
    Icon: GradeVIIIcon,
  },
  {
    grade: "viii",
    title: "VIII",
    link: "/grades/viii",
    classes: 32,
    Icon: GradeVIIIIcon,
  },
  {
    grade: "o",
    title: "IX - X",
    link: "/grades/o",
    classes: 25,
    Icon: OLevelIcon,
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
    subject: "Additional Math",
    title: "Challenge your mind beyond the basics.",
    description:
      "Additional Mathematics deepens your understanding of functions, calculus, and algebra. Ideal for advanced learners ready to tackle higher-level math with clarity and confidence.",
    videoLink: "https://youtu.be/mArhcXX5UWw",
  },
];

export const promoVideoLink = "https://youtu.be/J-lW0RyWgVg";

export const whyChooseUs = [
  {
    icon: video,
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
    icon: liveStreaming,
    title: "Ready for the Real Thing",
    description:
      "Evaluation after completion of each topic with exam-style questions.",
  },
  {
    icon: userGroup,
    title: "Your Learning, On Your Terms",
    description:
      "Downloadable course contents for convenient review and self-paced learning.",
  },
  {
    icon: teacher,
    title: "Mentors Who Go All In",
    description:
      "Passionate educators with extensive expertise to guide the student every step of the way.",
  },
  {
    icon: analytics,
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
    grade: "VIII",
  },
  {
    quote:
      "I really like how supportive and friendly the teacher is. He made sure everyone understood the lessons and was always ready to help. It made learning enjoyable and boosted my confidence a lot.",
    name: "Anonymous",
    grade: "VIII",
  },
  {
    quote:
      "School wits did a really great job. They are very patient. They teach a student until they understood properly.",
    name: "Ravid Yusuf",
    grade: "VIII",
  },
  {
    quote:
      "Due to the teacher , we rarely forget any answers because he tends to repeat the answers until we are fully aware of it.",
    name: "Anonymous",
    grade: "VIII",
  },
  {
    quote:
      "Through out the year it was very nice experience with School wits one thing I really liked was the friendly and the helpful  teacher he really made learning easier.",
    name: "Shazia Noor",
    grade: "VIII",
  },
  {
    quote:
      "Everything, including lecture videos, offline lectures were really great and comfortable, really got so much help from our Sir, thanks for a nice session.",
    name: "Anonymous",
    grade: "VIII",
  },
  {
    quote: "Takes more classes and gives time.",
    name: "Tasfia Akter",
    grade: "VII",
  },
];

export const faq = [
  {
    question: 'What is the "Beyond the Bell" program?',
    answer:
      "It's a comprehensive academic support program beyond a student's regular school hour, designed to foster confidence and mastery through dynamic, engaging, and relevant learning experiences",
  },
  {
    question: "Which subjects are offered for each grade level?",
    answer:
      "Grade VI & VII: Mathematics, Physics, Chemistry, Biology. Grade VIII & IX/X: Mathematics (Syllabus D), Additional Mathematics, Physics.",
  },
  {
    question:
      "What's the core difference between In-Person and Online learning programs?",
    answer:
      "In-person offers personalized, tech-enabled classroom learning with remedial sessions. Online is a self-paced digital program, available if in-person batches are full. Both include digital study materials.",
  },
  {
    question: "What is School Wits' core teaching philosophy?",
    answer:
      "Our philosophy is to spark curiosity, not stress. We achieve this through personalized attention, dynamic tech-integrated lessons, and a focus on discovery and critical thinking, building confidence beyond textbooks.",
  },
  {
    question:
      "Will School Wits offer other subjects besides the current core sciences and math?",
    answer:
      "Yes, we plan to introduce additional courses, such as English Language and Computer Programming, at a later stage. Please stay tuned to our announcements for updates.",
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
  confirmPassword: "Confirm Password",
  fullName: "Full name",
  contact: "Contact Number",
  fatherName: "Father's name",
  motherName: "Mother's name",
  guardianEmail: "Guardian's email",
  guardianContact: "Guardian's contact",
  currentSchool: "Current School Name",
  message: "Message",
  curriculum: "Curriculum",
  grade: "Grade",
  dateOfBirth: "Date of birth",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
  confirmPassword: "password",
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

export const contactUs = {
  contacts: [
    {
      icon: callIcon,
      title: "Call Us",
      description: "+880-1898-898984",
    },
    {
      icon: emailIcon,
      title: "Email Us",
      description: "query@schoolwits.com",
    },
    {
      icon: locationIcon,
      title: "Visit Us",
      description: "Gulshan - 1, Dhaka",
    },
  ],
  socials: [
    {
      icon: facebookIcon,
      title: "Facebook",
      link: "https://www.facebook.com/share/16Wg6y8ELd/",
    },
    {
      icon: instagramIcon,
      title: "Instagram",
      link: "https://www.instagram.com/schoolwits?igsh=dDQ3MzY0OXZ4b2hr",
    },
    {
      icon: youtubeIcon,
      title: "YouTube",
      link: "https://youtube.com/@schoolwits?feature=shared",
    },
  ],
};

export const howAreWeDifferent = [
  {
    icon: idea,
    title: "A School of Wits",
    description:
      "School Wits sharpens minds through creativity and critical thinking",
  },
  {
    icon: brain,
    title: "Fostering Creativity",
    description:
      "Creativity drives learning, helping students think beyond conventional boundaries",
  },
  {
    icon: search,
    title: "Discover, Not Memorize",
    description:
      "Learning at School Wits is about discovering ideas rather than simply cramming facts",
  },
  {
    icon: puzzle,
    title: "Encouraging Curiosity",
    description:
      "Students are encouraged to ask the right questions and explore new concepts",
  },
  {
    icon: muscle,
    title: "Building Confidence",
    description:
      "The platform helps students build the confidence to think critically and independently",
  },
  {
    icon: webSearch,
    title: "Beyond Textbooks",
    description:
      "At School Wits, the focus is on exploring ideas beyond the limits of traditional textbooks",
  },
];

export const graphBarColors = [
  "#2FBC88",
  "#7C60DE",
  "#F7485F",
  "#FFA528",
  "#F774A5",
  "#1E3A8A",
  "#D97706",
  "#047857",
  "#9D174D",
  "#6B7280",
];
