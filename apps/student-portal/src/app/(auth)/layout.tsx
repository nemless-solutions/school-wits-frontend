import Image from "next/image";
import logo from "../../../public/images/logo-primary.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-classroom h-screen overflow-y-clip flex items-center justify-center">
      <div className="main-container max-h-[90vh] bg-white/70 backdrop-blur-xl overflow-y-auto rounded-lg">
        <div className="flex justify-center">
          <div className="py-10">
            <Image
              className="mx-auto"
              src={logo}
              alt="logo"
              width={200}
              height={200}
            />
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
