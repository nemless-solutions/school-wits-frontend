import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@school-wits/ui";
import Image from "next/image";
import grdaeIX_X from "../../../public/images/grade_IX-X.png";
import gradeVI_VII from "../../../public/images/grade_VI-VII.png";
import gradeVIII from "../../../public/images/grade_VIII.png";

const grades = [
  {
    grade: "VI-VII",
    illustration: gradeVI_VII,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#9ad7f5",
      to: "#1995e3",
    },
  },
  {
    grade: "VIII",
    illustration: gradeVIII,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#8cedbf",
      to: "#18a864",
    },
  },

  {
    grade: "IX-X",
    illustration: grdaeIX_X,
    currentCourses: "15-28 June 2025",
    coursesBeginning: "July 2025",
    gradient: {
      from: "#e0d9ff",
      to: "#5a3bd7",
    },
  },
];

export function GradeCards() {
  return (
    <section className="my-16">
      <div className="main-container">
        <h2 className="text-4xl font-bold mb-8 text-secondary text-center">
          Grade-wise <br />{" "}
          <span className="text-3xl text-primary">Learning Plans</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
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
                    <h3 className="text-2xl font-bold text-secondary font-roboto-slab">
                      {grade.grade.split("-").join(" & ")}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <span className="text-2xl font-medium text-center text-secondary">
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
                    <div className="text-center text-xl font-semibold text-secondary">
                      <div>
                        Current Courses:{" "}
                        <span className="text-primary">
                          {grade.currentCourses}
                        </span>
                      </div>
                      <div className="mt-3">
                        Courses beginning:{" "}
                        <span className="text-primary">
                          {grade.coursesBeginning}
                        </span>
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
