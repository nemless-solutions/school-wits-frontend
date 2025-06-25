import { HowWeDifferent } from "@/components/HowWeDifferent/HowWeDifferent";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { MotionDiv } from "@/components/client-ui";
import Image from "next/image";
import CircleGroup2 from "../../../../public/graphics/circle-group-2.svg";
import CircleGroup from "../../../../public/graphics/circle-group-4.svg";
import check from "../../../../public/icons/check.png";
import classImage from "../../../../public/images/how-classes-work.png";
import studentImage from "../../../../public/images/student-image.png";

const _howOurClassesWork = [
  "Limited seats for tailored attention",
  "Equipped with interactive projectors, videos",
  "Engaging, visual learning experiences",
  "Ongoing feedback and parent engagement",
];

export default function AboutUs() {
  return (
    <div>
      <PageHeader
        header="About Us"
        subheader="School Wits, English-medium edtech with holistic CAIE curriculum"
      />
      <section className="py-16 relative overflow-clip">
        <div className="absolute -top-20 -right-20 w-xl aspect-square bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/35 rounded-full blur-[100px]"></div>
        <div className="main-container relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-[26px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4 font-recoleta">
                  Sparking <span className="text-secondary">Curiosity</span>{" "}
                  Through Digital Learning
                </h2>
                <p className="md:text-base text-xs">
                  What if learning sparked curiosity instead of stress? At
                  School Wits, we aim to bridge the gap between traditional
                  education&apos;s rigidity and the dynamic potential of digital
                  learning.
                </p>
              </div>
              <div className="order-first md:order-last">
                <Image
                  src={studentImage}
                  alt="Student Image"
                  className="rounded-lg md:rounded-3xl"
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
      <HowWeDifferent />
      <section className="py-8 md:py-16 relative overflow-clip">
        <CircleGroup className="absolute text-[#FEA9ED] w-12 md:w-15 right-10 top-[calc(100%-64px)] md:top-0" />
        <div className="main-container relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="">
                <Image
                  src={classImage}
                  alt="Class Image"
                  className="rounded-lg md:rounded-3xl"
                />
              </div>
              <div>
                <h2 className="text-[26px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4 font-recoleta">
                  How{" "}
                  <span className="text-secondary">
                    Our <br className="md:block hidden" /> Classes
                  </span>{" "}
                  Work ?
                </h2>
                <ul className="flex flex-col gap-2 md:gap-4">
                  {_howOurClassesWork.map((item, index) => (
                    <li
                      key={index}
                      className="md:text-base text-xs font-semibold text-neutral-800 mb-2"
                    >
                      <Image
                        src={check}
                        alt="Check"
                        className="inline mr-1 md:mr-2 w-4 md:w-7"
                        width={28}
                        height={28}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
      <section className="py-8 md:py-16 relative overflow-x-clip">
        <div className="absolute -top-20 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[100px] hidden md:block"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/35 rounded-full blur-[100px]"></div>
        <div className="main-container relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-center max-w-[720px] mx-auto">
              <h2 className="text-[26px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4 font-recoleta">
                We <span className="text-secondary">Empowering</span> Education
              </h2>
              <p className="md:text-xl text-sm">
                Revolutionizing learning with innovative tools, a dynamic
                curriculum, and a focus on curiosity-driven growth
              </p>
            </div>
          </MotionDiv>
          <div className="mt-8">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/PXOJTvJ0-GA?si=qvk7SMS5o3sNFKN_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 relative overflow-clip">
        <div className="absolute top-1/3 -right-20 w-[400px] md:w-xl aspect-square bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/15 rounded-full blur-[80px]"></div>
        <div className="main-container relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid md:grid-cols-3">
              <div>
                <h2 className="text-[26px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4 font-recoleta">
                  <span className="text-secondary">Defining</span> Our Purpose{" "}
                  <br className="md:block hidden" /> and{" "}
                  <span className="text-secondary"> Direction</span>
                </h2>
                <CircleGroup2 className="absolute md:static top-0 right-0 w-16 md:w-[210px] text-primary mt-8" />
              </div>
              <div className="md:col-span-2 max-w-[600px] md:ml-auto md:mr-8 space-y-8 relative z-10 mt-4 md:mt-0">
                <div>
                  <h4 className="text-base sm:text-xl md:text-3xl font-bold text-secondary mb-3">
                    Our Mission
                  </h4>
                  <p className="text-sm sm:text-lg md:text-2xl">
                    At School Wits, we make e-learning accessible, engaging, and
                    effective, nurturing curiosity and building foundational
                    skills through interactive digital learning that blends
                    academics with real-world relevance.
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-xl md:text-3xl font-bold text-secondary mb-3">
                    Our Mission
                  </h4>
                  <p className="text-sm sm:text-lg md:text-2xl">
                    At School Wits, we make e-learning accessible, engaging, and
                    effective, nurturing curiosity and building foundational
                    skills through interactive digital learning that blends
                    academics with real-world relevance.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
