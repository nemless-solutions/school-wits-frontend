import { Button } from "@school-wits/ui";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen -mt-20 flex items-center bg-radial-[at_80%_55%] from-blue-50 to-blue-200 to-75%">
      <div className="main-container w-full">
        <div className="grid grid-cols-2">
          <div className="text-5xl font-semibold flex flex-col justify-center gap-16">
            <h1 className="text-secondary">
              Let&apos;s Make Studying <br />
              <span className="text-primary"> Less &apos;Meh&apos;</span>
            </h1>
            <div className="flex flex-col items-start gap-y-4">
              <Button size="lg" asChild variant="secondary" className="text-lg">
                <Link href="/">Start Your Learning Journey</Link>
              </Button>
              <Button size="lg" asChild className="text-lg">
                <Link href="/">Browse Courses</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20">
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
