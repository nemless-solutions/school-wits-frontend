"use client";

import { SignUpForm } from "@/components/Forms/SignUpForm";
import { MotionDiv } from "@school-wits/ui";
import CurvedLine from "../../../../public/graphics/curve-line-2.svg";

export default function SignUp() {
  return (
    <section className="mb-10 mt-[100px]">
      <div className="bg-secondary mx-3 md:mx-8 py-6 sm:py-10 md:py-20 rounded-[12px] sm:rounded-2xl md:rounded-4xl relative overflow-clip">
        <div className="bg-primary absolute -top-32 -left-10 w-[100px] h-[120px] md:w-[171px] md:h-[210px] rounded-xl rotate-[168deg]" />
        <div className="bg-primary absolute top-1/2 right-[-50px] md:-top-[180px] w-[100px] h-[120px] md:w-[171px] md:h-[210px] rounded-xl rotate-[168deg]" />
        <CurvedLine className="absolute bottom-0 left-0 text-primary w-[120px] md:w-[260px]" />
        <div className="main-container z-10 relative">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              className="text-center mb-10 md:text-start md:mb-0"
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-primary capitalize mb-4 font-recoleta">
                Sign Up
              </h2>
              <div className="text-base font-semibold text-neutral-100 md:text-lg space-y-4 mt-8">
                <p>
                  School Wits is an English-medium educational technology
                  platform that goes beyond standard curricula, offering
                  extensive knowledge and a holistic learning experience.
                </p>
                <p>
                  The curriculum features the Cambridge Assessment International
                  Education (CAIE) across all courses. Please proceed to
                  complete the following enrollment form to get started:
                </p>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
            >
              <SignUpForm />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
