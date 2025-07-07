import { Button } from "@school-wits/ui";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center flex flex-col gap-y-8">
        <h1 className="text-5xl font-semibold">404 - Not Found</h1>
        <h2 className="text-2xl">Requested Page Doesn't Exist</h2>
        <div className="flex items-center w-fit mx-auto gap-2">
          <Button
            onClick={() => navigate("/")}
            className="mx-auto btn btn-primary"
          >
            Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            className="mx-auto btn btn-primary"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
