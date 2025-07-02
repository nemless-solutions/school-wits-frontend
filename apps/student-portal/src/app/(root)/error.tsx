"use client";

import { Button } from "@/components/client-ui";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <PageHeader header="Error" />
      <div className="main-container text-center">
        <div className="py-16">
          <h2 className="text-[28px] sm:text-4xl md:text-[54px] font-semibold text-destructive capitalize font-recoleta">
            Ooops!
          </h2>
          <p className="md:text-lg font-semibold my-6">
            {error.message || "Something went wrong."}
          </p>
          <Button variant="secondary" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
