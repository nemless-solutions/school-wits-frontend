import { grades } from "@/constants";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../client-ui";
import Image from "next/image";
import Link from "next/link";

export function GradeCards() {
  return (
    <section className="my-16">
      <div className="main-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary text-center">
          Grade-wise <br />{" "}
          <span className="text-2xl md:text-3xl text-primary">
            Learning Plans
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grades.map((grade, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div
                  style={{
                    background: `radial-gradient(circle at top right, ${grade?.gradient?.from}, ${grade?.gradient?.to})`,
                  }}
                  className="flex items-center justify-center rounded-lg cursor-pointer shadow-md/30 hover:shadow-lg/40 transition-all duration-150"
                >
                  <div className="p-4">
                    <Image
                      className="drop-shadow-[-10px_10px_5px_rgba(0,0,0,0.5)]"
                      src={grade.illustration}
                      alt={grade.grade}
                      height={150}
                      width={150}
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-secondary font-roboto-slab">
                      {grade.grade.split("-").join(" & ")}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <span className="text-xl md:text-2xl font-medium text-center text-secondary">
                      Grade:{" "}
                      <span className="font-roboto-slab text-primary">
                        {grade.grade.split("-").join(" & ")}
                      </span>
                    </span>
                  </DialogTitle>
                  <div className="flex flex-col items-center justify-center gap-y-6">
                    <Image
                      className="drop-shadow-[5px_5px_3px_rgba(0,0,0,0.3)]"
                      src={grade.illustration}
                      alt={grade.grade}
                      height={130}
                      width={130}
                    />
                    <div className="text-center text-lg md:text-xl font-semibold text-secondary">
                      <div>
                        <DialogDescription className="text-center text-lg md:text-xl font-semibold text-secondary">
                          Current Courses:{" "}
                          <span className="text-primary">
                            {grade.currentCourses}
                          </span>
                        </DialogDescription>
                      </div>
                      <div className="mt-3 mb-5">
                        Courses beginning:{" "}
                        <span className="text-primary">
                          {grade.coursesBeginning}
                        </span>
                      </div>
                      <div>
                        <Button asChild size="lg" className="rounded-full">
                          <Link href={`/grades/${grade.grade.toLowerCase()}`}>
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
