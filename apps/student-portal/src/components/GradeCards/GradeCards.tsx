import { grades } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function GradeCards() {
  return (
    <section className="my-20">
      <div className="main-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
          Grade-wise <br />{" "}
          <span className="text-2xl md:text-3xl text-secondary/70">
            Learning Plans
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {grades.map((g, i) => (
            <Link key={i} href={`/grades/${g.grade.toLowerCase()}`}>
              <div className="flex h-full items-center justify-center rounded-lg cursor-pointer shadow-md/30 hover:shadow-lg/40 transition-all duration-150 bg-gradient-to-bl from-primary/40 to-primary">
                <div className="p-4">
                  <Image
                    className="drop-shadow-[-10px_10px_5px_rgba(0,0,0,0.5)]"
                    src={g.illustration}
                    alt={g.grade}
                    height={150}
                    width={150}
                  />
                  <h3 className="text-xl mt-3 font-bold text-neutral-100 font-roboto-slab text-center">
                    {g.grade === "O" ? "O Levels" : `Grade ${g.grade}`}{" "}
                    {g.grade === "O" && (
                      <>
                        <br /> [Grade IX & X]
                      </>
                    )}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
