import { Button, MotionDiv } from "@/components/client-ui";
import CourseDetailsGraph from "@/components/CourseDetailsGraph/CourseDetailsGraph";
import { Icon } from "@/components/Icon/Icon";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import Image from "next/image";
import SquareGroup from "../../../../../../public/graphics/square-group.svg";
import books from "../../../../../../public/icons/books.png";
import cells from "../../../../../../public/icons/cells.png";
import check from "../../../../../../public/icons/check.png";
import library from "../../../../../../public/icons/library.png";
import note from "../../../../../../public/icons/note-02.png";
import sparkles from "../../../../../../public/icons/sparkles.png";
import { type CourseDetails } from "../../../../../../types";

const dummyCourseStructureOverView = [
  { title: "9 Core Module", description: "Coverage of all mathematical area" },
  { title: "48 Week Program", description: "Structured regular timeline " },
  {
    title: "Continues Assessment",
    description: "Topic test & comprehensive exam",
  },
];

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  /*   const course = await fetcher<Course>(`${baseUrl}/course/${id}`);
  const courseBundle = await courseBundleFetcher<CourseBundle>(course.grade);

  if (courseBundle) redirect(`/courses/details/bundle/${courseBundle.id}`); */

  const courseDetails = await fetcher<CourseDetails>(
    `${baseUrl}/course_information/${id}`
  );

  return (
    <div>
      <PageHeader
        header={`${courseDetails.course.title} (Grade ${courseDetails.course.grade})`}
      />
      <div className="relative overflow-x-clip">
        <div className="absolute -top-20 -left-20 w-[200px] md:w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 -right-20 w-[250px] md:w-xl aspect-square bg-secondary/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-20 w-[200px] md:w-[430px] aspect-square bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[220px] md:w-xl aspect-square bg-secondary/10 rounded-full blur-[120px]"></div>
        <SquareGroup className="absolute w-10 md:w-16 text-primary -left-4 top-10 rotate-45" />
        <div className="main-container mb-32 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
          >
            <div className="flex justify-between mt-10">
              <h2 className="font-recoleta font-semibold text-2xl sm:text-3xl md:text-5xl">
                Grade {courseDetails.course.grade}
              </h2>
              <div className="flex-col items-end hidden md:flex">
                <div className="flex flex-col md:flex-row gap-x-2">
                  <p className="text-sm md:text-lg text-neutral-500 line-through">
                    Tk. 5,000
                  </p>
                  <div>
                    <p className="text-lg md:text-2xl font-semibold">
                      Tk. {courseDetails.course.fee.toLocaleString()}
                    </p>
                    <p className="text-sm md:text-base text-neutral-500">
                      Before <span className="font-semibold">10 July</span>
                    </p>
                  </div>
                </div>
                <Button
                  disabled
                  variant="secondary"
                  size="lg"
                  className="md:mt-4 md:h-12 md:text-lg font-semibold"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </MotionDiv>
          <div className="fixed bottom-0 left-0 w-full z-[999] bg-white p-4 flex justify-between items-center shadow-[0px_-6px_12px_0px_rgba(0,0,0,0.05)] md:hidden">
            <div className="flex flex-col md:flex-row gap-x-2">
              <p className="text-sm md:text-lg text-neutral-500 line-through">
                Tk. 5,000
              </p>
              <div>
                <p className="text-lg md:text-2xl font-semibold">
                  Tk. {courseDetails.course.fee.toLocaleString()}
                </p>
                <p className="text-sm md:text-base text-neutral-500">
                  Before <span className="font-semibold">10 July</span>
                </p>
              </div>
            </div>
            <Button
              disabled
              variant="secondary"
              size="lg"
              className="md:mt-4 md:h-12 md:text-lg font-semibold"
            >
              Enroll Now
            </Button>
          </div>
          <div className="h-px w-full bg-neutral-300 mt-6 mb-8" />
          <div>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
            >
              <h2 className="font-recoleta font-semibold text-2xl sm:text-3xl md:text-5xl mb-8">
                Overview
              </h2>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
              {/* =========================== TOPIC OVERVIEW =========================== */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4 bg-white border border-[#e5e5e5] rounded-[16px] p-4 md:p-6"
              >
                <div>
                  <Icon src={sparkles} alt="sparkles" />
                </div>
                <div className="space-y-2">
                  <h4 className="md:text-lg font-semibold">
                    {courseDetails.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {courseDetails.learningContentTitle}
                  </p>
                  <ul className="mt-4 md:mt-8 space-y-3 md:space-y-4 text-gray-700">
                    {courseDetails.learningContentList
                      .split(" | ")
                      .map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-2 md:gap-3 items-start"
                        >
                          <Image
                            src={check}
                            alt="check"
                            width={20}
                            height={20}
                            className="mt-[2px] w-4 h-4 md:w-5 md:h-5"
                          />
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </MotionDiv>
              {/* =========================== TOPIC GRAPH =========================== */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut", delay: 0.9 }}
                className="flex flex-col md:flex-row gap-4 bg-white border border-[#e5e5e5] rounded-[16px] p-4 md:p-6"
              >
                <div>
                  <Icon src={books} alt="books" />
                </div>
                <div className="space-y-2">
                  <h4 className="md:text-lg font-semibold">
                    Learning Area Coverage
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {courseDetails.learningContentTitle}
                  </p>
                  <div className="mt-4 md:mt-8">
                    <div className="hidden md:block">
                      <CourseDetailsGraph
                        chartValues={courseDetails.chartValues}
                      />
                    </div>
                    <div className="md:hidden">
                      <CourseDetailsGraph
                        chartValues={courseDetails.chartValues}
                        height={400}
                        barSize={30}
                        barGap={10}
                      />
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
            {/* =========================== ASSESSMENT AND PRACTICE =========================== */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-4 bg-white border border-[#e5e5e5] rounded-[16px] p-4 md:p-6 mt-6">
                <div>
                  <Icon src={note} alt="note" />
                </div>
                <div>
                  <h4 className="md:text-lg font-semibold">
                    Assessment and Practice
                  </h4>
                  <p className="text-sm md:text-base">
                    {courseDetails.assessment}
                  </p>
                </div>
              </div>
            </MotionDiv>
            {/* =========================== COURSE STRUCTURE =========================== */}
            <div className="bg-primary rounded-[16px] p-6 mt-6">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut" }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg md:text-2xl font-semibold mb-1">
                  Course Structure Overview
                </h4>
                <p className="text-sm md:text-base">
                  {courseDetails.academicPlan}
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut" }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {dummyCourseStructureOverView.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[16px] px-7 py-8 flex flex-col items-start sm:items-center"
                    >
                      <div className="hidden md:block">
                        <Icon
                          src={cells}
                          alt="cells"
                          containerHeight={64}
                          containerWidth={64}
                          height={32}
                          width={32}
                          containerRadius={64}
                        />
                      </div>
                      <div className="md:hidden">
                        <Icon src={cells} alt="cells" containerRadius={64} />
                      </div>
                      <h5 className="font-semibold text-lg md:text-xl text-neutral-900 mt-6 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-neutral-600 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
          {/* =========================== MODULE TIMELINE =========================== */}
          <div>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-recoleta font-semibold text-2xl sm:text-3xl md:text-5xl mt-16 mb-8">
                Module Timeline
              </h2>
            </MotionDiv>
            <div className="space-y-6">
              {courseDetails.coursePlanInformation.weeks.map((item) => (
                <div key={item.id}>
                  <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, easings: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-[28px] font-semibold text-neutral-900 font-recoleta">
                      {item.text.split(":")[0].split(" ")[0]} (
                      {item.text.split(":")[0].split(" ")[1]})
                    </h3>
                    <h4>
                      <span className="font-semibold">Topic:</span>{" "}
                      {item.text.split(":")[1]}
                    </h4>
                  </MotionDiv>
                  <div className="space-y-4 mt-6">
                    {item.weekDetails.map((details) => (
                      <MotionDiv
                        key={details.id}
                        className="bg-white border border-neutral-200 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          easings: "easeInOut",
                          delay: 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <Icon src={library} alt="Library" />
                        </div>
                        <div>
                          <h4 className="md:text-lg font-semibold">
                            {details.text.split(":")[0]}
                          </h4>
                          <div className="flex items-stretch gap-2 mt-3">
                            <Image
                              src={check}
                              alt="check"
                              height={20}
                              width={20}
                              className="h-4 w-4 md:h-5 md:w-5 mt-0.5"
                            />
                            <p className="text-sm md:text-base">
                              {details.text.split(":")[1]}
                            </p>
                          </div>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
