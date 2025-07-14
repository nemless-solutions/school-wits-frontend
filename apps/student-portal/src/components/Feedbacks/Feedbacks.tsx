"use client";

import { feedbacks } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import CurvedLine from "../../../public/graphics/curve-line-2.svg";
import QuoteIcon from "../../../public/graphics/quote.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MotionDiv,
} from "../client-ui";

export function Feedbacks() {
  return (
    <section className="my-8 pb-10">
      <div className="main-container">
        <div className="text-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="px-4 py-1 md:px-6 md:py-2 text-sm md:text-lg font-semibold bg-secondary/10 w-fit mx-auto rounded-full mb-3">
              Testimonials
            </p>
            <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-10 font-recoleta">
              <span className="text-secondary">Proof</span> in Every{" "}
              <span className="text-secondary">Story</span>
            </h2>
          </MotionDiv>
        </div>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnMouseEnter: true })]}
            opts={{
              loop: true,
            }}
            className="w-full bg-primary rounded-[20px] relative overflow-clip"
          >
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[40px] h-[40px] md:w-[80px] md:h-[80px] bg-secondary rounded-full" />
            <CurvedLine className="absolute left-0 bottom-0 text-secondary w-[120px] md:w-[260px]" />
            <QuoteIcon className="absolute left-8 top-8 text-black/10 w-[50px] md:w-[110px]" />
            <QuoteIcon className="absolute right-8 bottom-14 md:bottom-8 text-black/10 w-[50px] md:w-[110px] rotate-180" />
            <CarouselContent className="z-10">
              {feedbacks.map((feedback, index) => (
                <CarouselItem className="basis-full" key={index}>
                  <div className="max-w-[1070px] mx-auto text-center py-6 px-4 md:py-20 h-full flex flex-col justify-between">
                    <p className="text-base sm:text-xl md:text-3xl font-medium text-neutral-800 pt-10">
                      {feedback.quote}
                    </p>
                    <div className="mt-6 md:mt-16">
                      <p className="md:text-2xl font-semibold">
                        {feedback.name}
                      </p>
                      <p className="text-xs md:text-base">
                        Grade {feedback.grade}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-10 z-20 sm:left-20 top-[calc(100%-50px)] md:top-[calc(100%-100px)] md:left-[calc(50%-200px)]" />
            <CarouselNext className="right-10 z-20 sm:right-20 top-[calc(100%-50px)] md:top-[calc(100%-100px)] md:right-[calc(50%-200px)]" />
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
