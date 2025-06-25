import Image from "next/image";
import { Separator } from "../client-ui";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export function Footer() {
  return (
    <div className="bg-white pt-10 pb-2 relative z-50">
      <div className="mx-4 md:mx-12">
        <div className="flex flex-col md:flex-row items-center text-center md:text-start justify-between pb-8">
          <div className="mb-8">
            <Image
              className="w-[210px] h-[60px] rounded-xs mx-auto md:mx-0"
              src="/images/logo-primary.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p>Your best online academic success assistant</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div>
              <h3 className="font-semibold mb-2 md:mb-6">Contact Us</h3>
              <p>+880 1898-898984</p>
              <p>support@schoolwits.com</p>
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
