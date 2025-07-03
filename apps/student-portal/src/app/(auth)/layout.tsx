import Image from "next/image";
import logoHorizontal from "../../../public/images/logo-horizontal.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-classroom h-screen overflow-y-hidden flex items-center justify-center">
      <div className="main-container max-h-[90svh] bg-white overflow-y-auto rounded-lg">
        <div className="flex justify-center">
          <div className="py-8">
            <Image
              className="mx-auto w-[200px]"
              src={logoHorizontal}
              alt="logo"
              width={200}
              height={200}
            />
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
