import { faq } from "@/constants";
import { IoIosArrowDown } from "react-icons/io";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  MotionDiv,
} from "../client-ui";

export function FAQ() {
  return (
    <section className="my-6 md:my-20">
      <div className="main-container">
        <div className="grid md:grid-cols-3 gap-y-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4">
              Your Questions, <br />{" "}
              <span className="text-secondary">Answered</span>
            </h2>
            <p>
              We&apos;re launching something new. If you don&apos;t find the
              answer you&apos;re looking for, feel free to reach out, we&apos;re
              here to help.
            </p>
          </MotionDiv>
          <div className="md:col-span-2">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="md:ml-12 space-y-4">
                {faq.map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="w-full h-full cursor-pointer">
                      <div className="flex relative items-center h-full justify-between gap-4 text-start px-3 py-3 md:px-6 md:py-4 shadow-md rounded-2xl z-10 bg-white text-neutral-800 text-sm md:text-xl font-medium">
                        <p>{faq.question}</p>
                        <IoIosArrowDown className="w-10" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 py-8 bg-neutral-100 rounded-b-2xl -translate-y-2">
                      {faq.answer}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
