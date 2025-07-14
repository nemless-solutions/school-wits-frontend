import { faq } from "@/constants";
import { cn } from "@school-wits/utils";
import { IoIosArrowDown } from "react-icons/io";
import SquareGroup from "../../../public/graphics/square-group.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  MotionDiv,
} from "../client-ui";

export function FAQ({
  sectionBg,
  groupSquareColor,
}: {
  sectionBg?: string;
  groupSquareColor?: string;
}) {
  return (
    <section className={cn("py-6 md:py-20", sectionBg)}>
      <div className="main-container">
        <div className="grid md:grid-cols-3 gap-y-6 relative">
          <SquareGroup
            className={cn(
              "absolute w-[40px] text-secondary/20 top-3 right-0 sm:right-8 md:hidden",
              groupSquareColor
            )}
          />
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:text-start text-center"
          >
            <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-4 font-recoleta">
              Your Questions, <br />{" "}
              <span className="text-secondary">Answered</span>
            </h2>
            <p>
              Learning is a journey—and questions are part of it. Here are some
              quick answers to guide you along the way.
            </p>
            <SquareGroup
              className={cn(
                "w-[80px] text-secondary/20 ml-10 mt-10 hidden md:block",
                groupSquareColor
              )}
            />
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
