import Image from "next/image";
import { Separator } from "../client-ui";

export function Footer() {
  return (
    <div className="mx-4 md:mx-12">
      <div className="flex flex-col md:flex-row items-center text-center md:text-start justify-between mb-8">
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
          <div>
            <h3 className="font-semibold mb-2 md:mb-6">Follow Us</h3>
            <div className="flex items-center gap-2">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <p className="my-8 text-center">
        © 2025 School Wits. All rights reserved
      </p>
    </div>
  );
}
