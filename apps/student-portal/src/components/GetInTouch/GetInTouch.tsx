import { Button, MotionDiv } from "../client-ui";

export function GetInTouch() {
  return (
    <section className="my-6 md:my-20">
      <div className="bg-secondary mx-3 md:mx-8 py-6 md:py-12 rounded-[12px] sm:rounded-2xl md:rounded-4xl">
        <div className="main-container">
          <div className="text-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-white capitalize">
                Let&apos;s Get In Touch
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-white font-medium my-4">
                Meet out expert to get consultation for FREE
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Button
                size="lg"
                className="text-sm md:text-lg text-black font-semibold"
              >
                Book An Appoinment
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
