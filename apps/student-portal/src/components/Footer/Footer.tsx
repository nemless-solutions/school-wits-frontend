import Image from "next/image";
import logoVertical from "../../../public/images/logo-vertical.png";
import { Separator } from "../client-ui";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export function Footer() {
  return (
    <div className="bg-white pt-10 pb-2 relative z-50 shadow-[0px_-6px_12px_0px_rgba(0,0,0,0.05)]">
      <div className="mx-4 md:mx-12">
        <div className="flex flex-col md:flex-row items-center text-center md:text-start justify-between pb-8">
          <div className="mb-8">
            <Image
              className="w-[130px] md:w-[180px] mx-auto md:mx-0"
              src={logoVertical}
              alt="logo"
              width={400}
              height={240}
            />
            <p className="text-lg font-medium text-neutral-800 mt-3 ml-2">
              Quality education at your fingertips!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div>
              <h3 className="font-semibold mb-2 md:mb-6">Contact Us</h3>
              {/*  <p>+880 1898-898984</p> */}
              <p>query@schoolwits.com </p>
            </div>
            <SocialLinks />
          </div>
        </div>
        <Separator />
        <p className="py-8 text-center">
          © 2025 School Wits. All rights reserved
        </p>
      </div>
    </div>
  );
}
