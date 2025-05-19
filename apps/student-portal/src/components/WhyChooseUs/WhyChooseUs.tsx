import { FaUserCheck } from "react-icons/fa";
import { GoDesktopDownload } from "react-icons/go";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuMonitorPlay } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { PiExam } from "react-icons/pi";

const whyChooseUs = [
  {
    Icon: LuMonitorPlay,
    title: "Engaging Video Lessons",
    description:
      "Engaging video lessons designed to alleviate online learning monotony while ensuring balanced screen time.",
  },
  {
    Icon: IoMdCheckboxOutline,
    title: "Fun & Interactive Quizzes",
    description:
      "Interactive quizzes to reinforce learning and assess comprehension.",
  },
  {
    Icon: PiExam,
    title: "Real Exam Preparation",
    description:
      "Evaluation after completion of each topic with exam-style questions.",
  },
  {
    Icon: GoDesktopDownload,
    title: "Downloadable Materials",
    description:
      "Downloadable course contents for convenient review and self-paced learning.",
  },
  {
    Icon: FaUserCheck,
    title: "Expert Educators",
    description:
      "Passionate educators with extensive expertise to guide the student every step of the way.",
  },
  {
    Icon: MdAutoGraph,
    title: "Insightful Feedback & Tracking",
    description:
      "Prompt feedback and regular performance metrics for self-assessment and targeted enhancement, ensuring continual progress.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="main-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-secondary text-center">
          Why Students Love <br />
          <span className="text-primary text-2xl md:text-3xl">
            Learning with Us
          </span>
        </h2>
        <ul className="grid md:grid-cols-2 md:grid-rows-3 gap-4">
          {whyChooseUs.map((item, index) => (
            <li key={index} className="group">
              <div className="relative p-6 border-[3px] border-primary/20 rounded-lg h-full">
                <div className="absolute left-[-2px] w-[2px] h-[100px] opacity-0 top-[50%] bg-gradient-to-b from-transparent via-secondary to-transparent group-hover:opacity-100 group-hover:top-[10%] duration-200"></div>
                <div className="absolute right-[-2px] w-[2px] h-[100px] opacity-0 bottom-[50%] bg-gradient-to-b from-transparent via-secondary to-transparent group-hover:opacity-100 group-hover:bottom-[10%] duration-200"></div>

                <div className="p-2 text-xl sm:text-2xl border-2 border-primary/40 rounded-md w-fit">
                  <item.Icon />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold my-2 text-secondary">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-primary">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
