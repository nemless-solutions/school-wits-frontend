import Image from "next/image";
import courseBg from "../../../public/images/course-bg.png";
import { Course } from "../../../types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-lg overflow-clip shadow-md/20 hover:shadow-lg/30 duration-200 text-primary">
      <div className="relative">
        <div className="bg-black/40 absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <div className="rounded-lg overflow-clip">
            <h3 className="text-2xl font-bold text-center text-neutral-100 mx-3 py-2 bg-primary/70 rounded-lg line-clamp-3">
              {course.title}
            </h3>
          </div>
        </div>
        <Image src={courseBg} alt={course.title} />
      </div>
      <div className="p-4 font-medium">
        <p className="text-gray-400 line-through">{course.fees}</p>
        <p className="text-success text-lg font-bold mb-2">
          {course.earlyBird}
        </p>
        <p>Session: {course.session}</p>
        <p>Duration: {course.duration}</p>
        <p className="text-sm mt-2">{course.mode}</p>
      </div>
      <div className="border-t-2 border-dashed border-primary/10"></div>
      <div className="p-4">
        <p className="text-lg font-semibold">Features</p>
        <ul className="list-inside list-disc">
          {course.features.map((feature, index) => (
            <li key={index} className="font-medium">
              {feature}
            </li>
          ))}
        </ul>
        {course.note && (
          <p className="text-sm mt-2 text-primary/50">Note: {course.note}</p>
        )}
      </div>
    </div>
  );
}
