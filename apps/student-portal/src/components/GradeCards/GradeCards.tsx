import { grades } from "@/constants";
import { IoIosArrowForward } from "react-icons/io";
import { MotionDiv } from "../client-ui";

export function GradeCards() {
  return (
    <section className="my-6 md:my-20">
      <div className="bg-primary mx-3 md:mx-8 py-6 sm:py-10 md:py-20 rounded-[12px] sm:rounded-2xl md:rounded-4xl">
        <div className="main-container">
          <div>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="bg-white px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold w-fit mb-6">
                Grades
              </p>
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize">
                <span className="text-secondary">Grade</span> wise <br />{" "}
                Aligned <span className="text-secondary">Learning</span> Plans
              </h2>
            </MotionDiv>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6 sm:mt-10 md:mt-16">
            {grades.map((grade, index) => (
              <div className="group h-full" key={index}>
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    easings: "easeInOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="h-full bg-white text-neutral-900 group-hover:bg-secondary group-hover:text-white duration-300 px-4 py-5 md:px-6 md:py-8 rounded-[12px] md:rounded-[20px] flex md:block justify-between items-center">
                    <div>
                      <div className="text-lg font-semibold md:font-bold md:text-3xl flex gap-2 md:block">
                        <p>Grade</p>
                        <p className="truncate">
                          {grade.grade}{" "}
                          <span className="hidden md:inline">
                            {grade.grade === "IX - X" && "(O Level)"}
                          </span>
                        </p>
                      </div>
                      <p className="mt-1 md:mt-4 md:mb-8 text-sm sm:text-base md:text-xl font-medium">
                        {grade.classes} Classes
                      </p>
                    </div>
                    <div className="flex justify-between items-end md:mt-8">
                      <div className="w-10 h-10 flex justify-center items-center bg-neutral-100 rounded-full">
                        <IoIosArrowForward className="text-black text-2xl" />
                      </div>
                      <div className="w-[110px] aspect-square bg-primary rounded-full hidden md:block" />
                    </div>
                  </div>
                </MotionDiv>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
