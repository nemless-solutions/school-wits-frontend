import { howAreWeDifferent } from "@/constants";
import Image from "next/image";
import CurvedLine from "../../../public/graphics/curve-line.svg";
import { MotionDiv } from "../client-ui";

export function HowWeDifferent() {
  return (
    <section className="my-6 md:my-20">
      <div className="bg-primary mx-3 md:mx-8 py-14 md:py-20 rounded-[12px] sm:rounded-2xl md:rounded-4xl relative overflow-clip">
        <div className="bg-secondary absolute -bottom-14 -left-4 w-[100px] h-[120px] md:w-[171px] md:h-[210px] rounded-xl rotate-[168deg]" />
        <CurvedLine className="absolute top-0 right-0 text-secondary w-[80px] md:w-[260px]" />
        <div className="main-container relative z-10">
          <div className="text-center md:text-start">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-black capitalize font-recoleta">
                What Sets Us <span className="text-secondary">Apart?</span>
              </h2>
            </MotionDiv>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6 mt-6 sm:mt-10 md:mt-16">
            {howAreWeDifferent.map((item, index) => (
              <MotionDiv
                key={item.title}
                className="bg-white p-5 md:p-7 rounded-[16px] md:rounded-[20px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  easings: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="md:flex items-start gap-6 space-y-4">
                  <div>
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-full">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-semibold mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
