import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Button, MotionDiv } from "@/components/client-ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <PageHeader header="Not Found" />
      <div className="relative overflow-clip">
        <div className="absolute top-1/3 -right-20 w-[400px] md:w-xl aspect-square bg-secondary/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/35 rounded-full blur-[120px]"></div>
        <div className="main-container relative z-10">
          <div className="text-center space-y-4 py-16">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-destructive capitalize font-recoleta">
                404
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
            >
              <p className="text-lg md:text-xl font-semibold capitalize text-destructive mb-8">
                Could not find the page that you are looking for. Or you are not
                logged in.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.9 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-base md:text-lg font-semibold h-14 px-8"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </>
  );
}
