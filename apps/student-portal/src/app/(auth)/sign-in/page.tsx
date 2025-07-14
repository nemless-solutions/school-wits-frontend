"use client";

import { MotionDiv } from "@/components/client-ui";
import { SignInForm } from "@/components/Forms/SignInForm";
import CurvedLine from "../../../../public/graphics/curve-line.svg";

export default function SignIn() {
  return (
    <section className="mb-10 mt-[100px]">
      <div className="bg-secondary mx-3 md:mx-8 py-6 sm:py-10 md:py-20 rounded-[12px] sm:rounded-2xl md:rounded-4xl relative overflow-clip">
        <div className="bg-primary absolute -bottom-20 -left-4 w-[100px] h-[120px] md:w-[171px] md:h-[210px] rounded-xl rotate-[168deg]" />
        <div className="bg-primary absolute top-1/2 right-[-50px] md:-top-[150px] md:right-1/2 w-[100px] h-[120px] md:w-[171px] md:h-[210px] rounded-xl rotate-[168deg]" />
        <CurvedLine className="absolute top-0 right-0 text-primary w-[120px] md:w-[260px]" />
        <div className="main-container z-10 relative">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              className="text-center mb-10 md:text-start md:mb-0"
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-primary capitalize mb-4 font-recoleta">
                Sign In
              </h2>
              <p className="text-lg sm:text-2xl font-semibold text-neutral-100 font-recoleta md:text-3xl">
                Welcome back to <span className="text-white">School Wits</span>
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
            >
              <SignInForm />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
