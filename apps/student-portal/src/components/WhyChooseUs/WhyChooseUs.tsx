import { whyChooseUs } from "@/constants";
import { FaRandom } from "react-icons/fa";
import { MotionDiv } from "../client-ui";

export function WhyChooseUs() {
  return (
    <section className="my-6 md:my-20">
      <div className="bg-secondary mx-3 md:mx-8 py-6 sm:py-10 md:py-20 rounded-[12px] sm:rounded-2xl md:rounded-4xl">
        <div className="main-container">
          <div>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="bg-white px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold w-fit mb-6">
                Our Values
              </p>
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-white capitalize">
                Why Choose Us ?
              </h2>
            </MotionDiv>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6 mt-6 sm:mt-10 md:mt-16">
            {whyChooseUs.map((item, index) => (
              <MotionDiv
                key={item.title}
                className="bg-white px-5 py-5 md:py-8 md:px-7 rounded-[16px] md:rounded-[20px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  easings: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="md:text-center">
                  <div className="w-12 md:w-16 aspect-square md:mx-auto bg-slate-200 rounded-full flex items-center justify-center">
                    <FaRandom />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-5 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
