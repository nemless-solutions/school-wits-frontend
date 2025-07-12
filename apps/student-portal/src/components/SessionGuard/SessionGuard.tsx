"use client";

import { isJwtExpired } from "@school-wits/utils";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SessionGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const exp = session?.exp;
      if (exp) {
        if (isJwtExpired(session.token)) signOut();
      }
    }
  }, [session, status]);

  return <>{children}</>;
}
