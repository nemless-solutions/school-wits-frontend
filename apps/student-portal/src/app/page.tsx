import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { GradeCards } from "@/components/GradeCards/GradeCards";
import { Hero } from "@/components/Hero/Hero";
import { Promo } from "@/components/Promo/Promo";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <GradeCards />
      <Promo />
      <WhyChooseUs />
      <Feedbacks />
    </>
  );
}
