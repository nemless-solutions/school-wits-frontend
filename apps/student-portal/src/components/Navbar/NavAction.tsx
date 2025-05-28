import { getAbbreviation } from "@school-wits/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../client-ui";

export function NavAction() {
  const { data: session } = useSession();

  if (session?.user)
    return (
      <div className="pl-16 md:pl-0 mt-6 md:mt-0 flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <p className="font-bold text-white">
            {getAbbreviation(session.user.name)}
          </p>
        </div>
        <p className="font-semibold">{session.user.name?.split(" ")[0]}</p>
      </div>
    );

  return (
    <Button asChild>
      <Link href="/sign-in">Log In</Link>
    </Button>
  );
}
