import CircleGroup from "../../../public/graphics/circle-group-3.svg";
import CurvedLine from "../../../public/graphics/curve-line-3.svg";
import SquareGroup from "../../../public/graphics/square-group.svg";
import { MotionDiv } from "../client-ui";

interface PageHeaderProps {
  header: string;
  subheader?: string;
}

export function PageHeader({ header, subheader }: PageHeaderProps) {
  return (
    <section className="text-center pt-30 pb-20 bg-secondary text-white relative overflow-clip">
      <CurvedLine className="absolute w-[75px] md:w-[130px] right-0 bottom-0 text-primary" />
      <CurvedLine className="absolute w-[75px] md:w-[130px] left-[-10px] top-[60px] rotate-y-180 rotate-z-[-20deg] text-primary" />
      <SquareGroup className="absolute w-12 md:w-20 top-[60px] -right-[20px] text-primary rotate-[-23deg]" />
      <CircleGroup className="absolute w-12 md:w-20 bottom-[-20px] left-[-20px] text-white/80" />
      <div className="main-container relative z-10">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut" }}
        >
          <h1 className="md:leading-16 text-4xl sm:text-5xl md:text-[64px] font-semibold font-recoleta">
            {header}
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
        >
          {subheader && (
            <p className="mt-3 text-sm md:text-base">{subheader}</p>
          )}
        </MotionDiv>
      </div>
    </section>
  );
}
