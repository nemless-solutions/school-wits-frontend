import { feedbacks } from "@/constants";
import { InfiniteMovingCards } from "../client-ui";

export function Feedbacks() {
  return (
    <section className="">
      <div className="py-24 flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center">
          Feedback <br />{" "}
          <span className="text-2xl md:text-3xl text-secondary/70">
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
