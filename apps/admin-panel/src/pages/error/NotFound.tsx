import { Button } from "@school-wits/ui";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center flex flex-col gap-y-8">
        <h1 className="text-5xl font-semibold">404 - Not Found</h1>
        <h2 className="text-2xl">Requested Page Doesn't Exist</h2>
        <Button
          onClick={() => navigate("/")}
          className="mx-auto btn btn-primary"
        >
          Home
        </Button>
      </div>
    </div>
  );
}
