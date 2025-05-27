import { useUser } from "@/context/userContext";
import { getAbbreviation } from "@school-wits/utils";
import Link from "next/link";
import { Button } from "../client-ui";

export function NavAction() {
  const { user } = useUser();

  if (user)
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <p className="font-bold text-white">
            {getAbbreviation(user.fullName)}
          </p>
        </div>
        <p>{user.fullName.split(" ")[0]}</p>
      </div>
    );

  return (
    <Button asChild>
      <Link href="/sign-in">Log In</Link>
    </Button>
  );
}
