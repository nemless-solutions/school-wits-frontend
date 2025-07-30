import Image from "next/image";
import whatsappImage from "../../../public/images/whatsapp.png";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <a
        className="rounded-xl block shadow-[4px_4px_8px_0_rgba(0,0,0,0.5)]"
        href="https://wa.me/8801898898984"
        target="_blank"
      >
        <Image
          className="w-10 md:w-12 h-10 md:h-12"
          src={whatsappImage}
          height={100}
          width={100}
          alt="WhatsApp Image"
        />
      </a>
    </div>
  );
}
