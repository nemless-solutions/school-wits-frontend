import { contactUs } from "@/constants";
import Image from "next/image";

export function SocialLinks({ iconSize = 24 }: { iconSize?: number }) {
  const { socials } = contactUs;
  return (
    <div>
      <h3 className="font-semibold mb-2 md:mb-6 text-center">Follow Us</h3>
      <div className="flex items-center gap-3 justify-center">
        {socials.map((social) => (
          <a
            key={social.link}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.icon}
              alt={social.title}
              width={iconSize}
              height={iconSize}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
