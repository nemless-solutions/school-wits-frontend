import Image, { StaticImageData } from "next/image";

interface GradePageHeaderProps {
  grade: string;
  imageSrc: StaticImageData;
  gradeintFrom: string;
  gradientTo: string;
}

export function GradePageHeader({
  grade,
  imageSrc,
  gradeintFrom,
  gradientTo,
}: GradePageHeaderProps) {
  return (
    <section
      style={{
        background: `radial-gradient(circle at top right, ${gradeintFrom}, ${gradientTo})`,
      }}
      className="pt-24 pb-12"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          className="drop-shadow-[-10px_10px_5px_rgba(0,0,0,0.5)]"
          src={imageSrc}
          alt="grade_VI-VII"
          height={150}
          width={150}
        />
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-secondary text-center">
          Grade{" "}
          <span className="text-primary font-bold font-roboto-slab">
            {grade.split("-").join(" & ")}
          </span>
        </h1>
      </div>
    </section>
  );
}
