import { Button } from "@school-wits/ui";
import { cn } from "@school-wits/utils";

export default function Home() {
  return (
    <div>
      <h1 className={cn("text-3xl font-bold underline")}>Home</h1>
      <Button variant="destructive">Hello World</Button>
    </div>
  );
}
