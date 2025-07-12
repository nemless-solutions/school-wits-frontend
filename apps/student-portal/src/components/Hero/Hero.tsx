import Image from "next/image";
import Link from "next/link";
import atom from "../../../public/gifs/atom.gif";
import calculator from "../../../public/gifs/calculator.gif";
import graph from "../../../public/gifs/graph.gif";
import pendulam from "../../../public/gifs/pendulam.gif";
import test from "../../../public/gifs/test.gif";
import { Button } from "../client-ui";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-x-clip">
      <div className="absolute -top-20 -right-20 w-xl aspect-square bg-primary/25 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-secondary/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-xl aspect-square bg-primary/25 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 -right-10 -translate-y-1/2 w-xs aspect-square bg-secondary/20 rounded-full blur-[100px]"></div>
      <div></div>
      <div className="main-container w-full relative">
        <Image
          className="absolute w-[80px] md:w-28 top-0 md:left-0 -left-20"
          src={graph}
          alt="Graph"
        />
        <Image
          className="absolute w-[40px] md:w-[90px] -bottom-10 left-8 md:left-24"
          src={atom}
          alt="Atom"
        />
        <Image
          className="absolute w-[80px] md:w-22 md:-top-10 md:right-24 -top-20"
          src={pendulam}
          alt="Pendulam"
        />
        <Image
          className="absolute w-[50px] md:w-[90px] top-1/3 md:top-1/2 -translate-y-1/2 right-0"
          src={test}
          alt="Test"
        />
        <Image
          className="absolute w-[38px] md:w-[68px] -bottom-20 right-10 md:right-32"
          src={calculator}
          alt="Calculator"
        />
        <div className="text-center max-w-[600px] mx-auto relative z-10">
          <div>
            <p className="border border-primary w-fit p-2 rounded-lg mx-auto bg-primary/20 text-sm mb-5">
              Spots fill fast—get started while seats last!
            </p>
            <h1 className="text-center md:leading-16 text-4xl sm:text-5xl md:text-[64px] font-semibold text-black font-recoleta">
              Let&apos;s Make Studying Less &quot;Meh&quot;
            </h1>
            <p className="md:px-8 my-8 text-sm md:text-base text-gray-800">
              Smart learning, guided by educators who care. From day one to
              every milestone—clear lessons, real growth, no fluff.
            </p>
          </div>
          <div>
            <Button
              variant="secondary"
              size="lg"
              className="text-base md:text-lg font-semibold h-14 px-8"
              asChild
            >
              <Link href="/courses/all">Start Learning</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
