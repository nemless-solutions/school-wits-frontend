import { grades } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button, Popover, PopoverContent, PopoverTrigger } from "../client-ui";

export function GradeButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="text-sm md:text-lg w-fit h-[45px] md:h-[55px] shadow-[-3px_3px_5px_rgba(0,0,0,0.4)] hover:shadow-[-6px_6px_5px_rgba(0,0,0,0.5)] hover:bg-background duration-150 font-semibold px-10"
        >
          Learn More
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="font-semibold]">
          {grades.map((item, index) => (
            <li key={index}>
              <Link href={`/grades/${item.grade.toLowerCase()}`}>
                <div className="flex h-full gap-x-2 w-full select-none items-center rounded-md bg-gradient-to-b from-muted/50 to-muted px-2 py-1 no-underline outline-none focus:shadow-md text-secondary hover:shadow-md hover:bg-neutral-300">
                  <Image
                    className="block w-10 object-cover"
                    src={item.illustration}
                    width={50}
                    height={50}
                    alt={item.grade}
                  />
                  <span className="font-roboto-slab text-primary font-semibold">
                    {item.grade === "O"
                      ? "O Levels [Grade IX & X]"
                      : `Grade ${item.grade}`}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
