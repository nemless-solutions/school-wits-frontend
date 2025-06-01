import { aboutUs } from "@/constants";
import { cn } from "@school-wits/utils";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section>
      <div className="bg-primary pt-28 pb-24">
        <div className="main-container">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-neutral-50">
                About Us
              </h1>
              <p className="text-neutral-50 text-lg">
                School Wits is an English-medium educational technology platform
                that goes beyond standard curricula, offering extensive
                knowledge and a holistic learning experience. The curriculum
                features the Cambridge Assessment International Education (CAIE)
                across all courses.
              </p>
            </div>
            <iframe
              className="w-full aspect-video rounded-xl relative z-10"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=KBX7ti-v8GPX7YZ_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {aboutUs.map((item, index) => (
        <div key={index} className={index % 2 === 0 ? "" : "bg-primary"}>
          <div className="main-container">
            <div className="grid md:grid-cols-2 items-center gap-8 py-20 md:py-0 relative">
              <div
                className={cn(
                  "md:relative h-full flex items-center",
                  index % 2 === 0
                    ? "justify-start"
                    : "md:justify-end md:order-2"
                )}
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  height={200}
                  width={200}
                  className={cn(
                    "md:h-full md:w-auto absolute md:top-0 md:opacity-[5%] opacity-10 md:p-4 top-1/2 max-[768px]:left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0",
                    index % 2 === 0 ? "md:left-0" : "md:right-0"
                  )}
                />
                <h3
                  className={cn(
                    "text-2xl md:text-3xl font-semibold",
                    index % 2 === 0 ? "text-neutral-800" : "text-neutral-50"
                  )}
                >
                  {item.header}
                </h3>
              </div>
              <div
                className={cn(
                  "md:py-32 z-10",
                  index % 2 === 0 ? "text-neutral-700" : "text-neutral-200"
                )}
              >
                <p className="text-xl font-semibold mb-2">{item?.subHeader}</p>
                <p className="text-lg text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="main-container">
        <div className="main-container text-primary">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="relative h-full flex items-center justify-start">
              <Image
                src={start.icon}
                alt="icon"
                height={200}
                width={200}
                className="h-full w-auto absolute left-0 top-0 opacity-[5%] p-4"
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-end text-neutral-800">
                {start.header}
              </h3>
            </div>
            <p className="text-lg text-justify py-32 text-neutral-700">
              {start.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="main-container">
          <div className="grid grid-cols-2 items-center gap-8">
            <p className="text-lg text-justify py-32 text-neutral-200">
              {classes.description}
            </p>
            <div className="relative h-full flex items-center justify-end">
              <Image
                src={classes.icon}
                alt="icon"
                height={200}
                width={200}
                className="h-full w-auto absolute right-0 top-0 opacity-[5%] p-4"
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-end text-neutral-50">
                {classes.header}
              </h3>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
