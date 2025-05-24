import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../client-ui";
import Image from "next/image";
import featuredImage from "../../../public/images/featured-course.png";

const featuredCourses = [
  {
    name: "Course 1",
    description: "Description 1",
    image: featuredImage,
  },
  {
    name: "Course 2",
    description: "Description 2",
    image: featuredImage,
  },
  {
    name: "Course 3",
    description: "Description 3",
    image: featuredImage,
  },
  {
    name: "Course 4",
    description: "Description 4",
    image: featuredImage,
  },
  {
    name: "Course 5",
    description: "Description 5",
    image: featuredImage,
  },
  {
    name: "Course 6",
    description: "Description 6",
    image: featuredImage,
  },
];

export function CourseCarousel() {
  return (
    <section className="pt-16 pb-20 bg-blue-100 mt-10">
      <div className="main-container">
        <h2 className="text-3xl font-bold mb-4 text-secondary">
          Featured Courses
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {featuredCourses.map((fC, index) => (
              <CarouselItem className="basis-1/3" key={index}>
                <div className="p-1">
                  <div className="h-56 relative">
                    <Image
                      src={fC.image}
                      alt={fC.name}
                      className="z-[-1] object-cover"
                      fill
                    />
                    <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary/80 text-white text-xl font-bold px-4 py-2 rounded-lg">
                      {fC.name}
                    </h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
