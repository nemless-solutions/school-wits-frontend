import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div className="bg-slate-900 py-20">
      <div className="main-container">
        <div className="flex justify-center">
          <div>
            <Image
              className="bg-neutral-200 p-2 w-[210px] h-[60px] rounded-xs"
              src="/images/logo-lg.png"
              alt="logo"
              width={100}
              height={100}
            />
            {/* <p className="font-roboto-slab uppercase font-medium text-3xl tracking-[6px] text-neutral-200">
              School
              <br />
              Wits
            </p> */}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 text-neutral-300">
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <a href="mailto:help@schoolwits.com">help@schoolwits.com</a>
          </div>
          <div className="h-6 w-0.5 bg-white/40 sm:block hidden"></div>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="text-xl" />
            <a href="tel:+8801898-898984">+880 1898-898984</a>
          </div>
        </div>
        <div className="text-center mt-10 text-neutral-200/30">
          <p>© 2025 School Wits. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
