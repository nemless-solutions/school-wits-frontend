import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center flex flex-col gap-y-2 sm:gap-y-4">
          <h1 className="text-xl sm:text-3xl font-semibold capitalize">
            You do not have right permission to access this page.
          </h1>
          <h2 className="text-lg sm:text-2xl">
            You can check out our website{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://schoolwits.com/"
            >
              here
            </a>
          </h2>
          <div className="text-base sm:text-xl">
            <p>Please contact your administrator for more information.</p>
            <p>Or</p>
            <p>
              Try to{" "}
              <Link to="/login" className="underline text-primary">
                login
              </Link>{" "}
              with other account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
