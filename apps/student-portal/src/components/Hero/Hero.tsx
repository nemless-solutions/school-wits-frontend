import Image from "next/image";
import Link from "next/link";
import { Button } from "../client-ui";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-radial-[at_80%_55%] from-primary/80 to-primary to-75%">
      <div className="main-container w-full">
        <div className="grid md:grid-cols-2 gap-y-4 justify-center pt-20 md:pt-0">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-semibold flex flex-col justify-center items-center md:items-start gap-10 text-white">
            <div>
              <h1 className="">
                Let&apos;s Make Studying <br />
                <span className=""> Less &apos;Meh&apos;</span>
              </h1>
              <p className=" text-lg md:text-xl mt-4 max-w-[400px]">
                Discover the future of e-learning with School Wits!
              </p>
            </div>
            <div className="text-black flex gap-4">
              <Button
                size="lg"
                asChild
                variant="outline"
                className="text-sm md:text-lg w-fit h-[45px] md:h-[55px] shadow-[-3px_3px_5px_rgba(0,0,0,0.4)] hover:shadow-[-6px_6px_5px_rgba(0,0,0,0.5)] hover:bg-background duration-150 hover:-translate-y-0.5 font-semibold"
              >
                <Link href="/">Learn More</Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="text-sm md:text-lg w-fit h-[45px] md:h-[55px] shadow-[-3px_3px_5px_rgba(0,0,0,0.4)] hover:shadow-[-6px_6px_5px_rgba(0,0,0,0.5)] hover:bg-background duration-150 hover:-translate-y-0.5 font-semibold"
              >
                <Link href="/">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="md:mt-20">
            <Image
              className="w-full object-cover drop-shadow-[-12px_12px_8px_rgba(0,0,0,0.6)]"
              src="/images/hero.png"
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
