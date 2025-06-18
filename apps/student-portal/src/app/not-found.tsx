import { Button } from "@/components/client-ui";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../../public/images/page-not-found.png";

export default function NotFound() {
  return (
    <div className="main-container">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center -mt-20 space-y-6">
          <p className="text-xl md:text-2xl text-primary/60">
            You look a little lost...
          </p>
          <h1 className="text-7xl md:text-8xl text-primary font-bold tracking-widest">
            404
          </h1>
          <Image
            className="mx-auto"
            src={notFoundImage}
            alt="Page Not Found"
            height={200}
            width={200}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-primary/80">
            Oops! Page not found
          </h2>
          <p className="text-xl md:text-2xl text-primary/75">
            The page your are looking for could not be found
          </p>
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
