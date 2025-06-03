import { contactUs } from "@/constants";
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
          </div>
        </div>
        <div className="mt-16 text-neutral-300">
          <h3 className="text-center text-xl font-semibold mb-3">
            Contact Us Via
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
        <div className="mt-12 text-neutral-300">
          <h3 className="text-center text-xl font-semibold mb-4">
            Follow Us On
          </h3>
          <div className="flex items-center justify-center gap-8">
            {contactUs.socials.map((s, i) => (
              <div key={i}>
                <a
                  className="text-3xl text-neutral-400 hover:text-white"
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.Icon />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-neutral-200/30 mt-16">
          <p>© 2025 School Wits. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
