import { feedbacks } from "@/constants";
import { InfiniteMovingCards } from "../client-ui";

export function Feedbacks() {
  return (
    <section className="">
      <div className="py-16 flex flex-col antialiased bg-blue-100 dark:bg-neutral-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary text-center">
          Feedback <br />{" "}
          <span className="text-primary text-2xl md:text-3xl">
            That Speaks Volumes
          </span>
        </h2>
        <InfiniteMovingCards
          items={feedbacks}
          direction="right"
          speed="slow"
          className="main-container"
        />
      </div>
    </section>
  );
}
