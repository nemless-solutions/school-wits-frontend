import { Button } from "@school-wits/ui";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen md:-mt-20 flex items-center bg-radial-[at_80%_55%] from-blue-50 to-blue-200 to-75%">
      <div className="main-container w-full">
        <div className="grid md:grid-cols-2 gap-y-4 justify-center">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-semibold flex flex-col justify-center items-center md:items-start gap-10">
            <div>
              <h1 className="text-secondary">
                Let&apos;s Make Studying <br />
                <span className="text-primary"> Less &apos;Meh&apos;</span>
              </h1>
              <p className="text-secondary/80 text-base md:text-lg mt-4 max-w-[400px]">
                Because education shouldn&apos;t feel like a chore. Dive into
                courses designed to spark thinking and actually make sense.
              </p>
            </div>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="text-sm md:text-lg w-fit h-[45px] md:h-[55px] shadow-[-3px_3px_5px_rgba(0,0,0,0.2)] hover:shadow-[-6px_6px_5px_rgba(0,0,0,0.3)] hover:bg-background duration-150 hover:-translate-y-0.5 font-semibold"
            >
              <Link href="/">Start Your Learning Journey</Link>
            </Button>
          </div>
          <div className="md:mt-20">
            <Image
              className="w-full object-cover drop-shadow-[-10px_10px_10px_rgba(0,0,0,0.4)]"
              src="/images/hero-graphics.png"
              alt="hero-graphics"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
