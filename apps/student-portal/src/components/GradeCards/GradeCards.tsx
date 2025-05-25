import { grades } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../client-ui";

const cards = [
  {
    grade: "VI-VII",
    illustration: grades[0].illustration,
    gradient: grades[1].gradient,
    links: [...grades.slice(0, 2)],
  },
  {
    ...grades[2],
  },
  {
    grade: "IX-X",
    illustration: grades[4].illustration,
    gradient: grades[3].gradient,
    links: [...grades.slice(3)],
  },
];

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
          {cards.map((grade, index) =>
            grade.links ? (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card grade={grade} />
                </DialogTrigger>
                <DialogContent className="bg-neutral-100">
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl font-semibold text-center text-secondary">
                      Choose Your Grade
                    </DialogTitle>
                    <div className="flex flex-col items-center justify-center gap-y-6">
                      <Image
                        className="drop-shadow-[5px_5px_3px_rgba(0,0,0,0.3)]"
                        src={grade.illustration}
                        alt={grade.grade}
                        height={130}
                        width={130}
                      />
                      <div className="flex flex-col gap-4">
                        {grade.links.map((link, index) => (
                          <Link
                            key={index}
                            href={`grades/${link.grade.toLowerCase()}`}
                          >
                            <div className="flex items-center gap-2 w-[250px] p-2 bg-white rounded-md shadow-[2px_2px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_3px_4px_0px_rgba(0,0,0,0.4)] duration-200 pl-8">
                              <Image
                                src={link.illustration}
                                alt={link.grade}
                                height={40}
                                width={40}
                              />
                              <DialogDescription className="text-lg font-semibold">
                                Grade:{" "}
                                <span className="font-roboto-slab">
                                  {link.grade}
                                </span>
                              </DialogDescription>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ) : (
              <Link key={index} href={`grades/${grade.grade.toLowerCase()}`}>
                <Card grade={grade} />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Card({ grade }: { grade: (typeof cards)[number] }) {
  return (
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
        <h3 className="text-xl md:text-2xl font-bold text-secondary font-roboto-slab text-center">
          {grade.grade.split("-").join(" & ")}
        </h3>
      </div>
    </div>
  );
}
