import { FAQ } from "@/components/FAQ/FAQ";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { GradeCards } from "@/components/GradeCards/GradeCards";
import { Hero } from "@/components/Hero/Hero";
import { LessonHighlights } from "@/components/LessonHighlights/LessonHighlights";
import { Promo } from "@/components/Promo/Promo";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <GradeCards />
      <Promo />
      <LessonHighlights />
      <WhyChooseUs />
      <Feedbacks />
      <FAQ />
      {/* <GetInTouch /> */}
      <WhatsAppButton />
    </>
  );
}
