import { MotionDiv } from "@/components/client-ui";
import { FAQ } from "@/components/FAQ/FAQ";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import Image from "next/image";
import email from "../../../../public/icons/mail.png";

export default function ContactUs() {
  return (
    <div>
      <PageHeader
        header="Contact Us"
        description="We are here to help and answer any questions you might have. We look forward to hearing from you"
      />
      <section className="py-16 relative overflow-clip">
        <div className="absolute -top-20 -right-20 w-xl aspect-square bg-primary/25 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="main-container relative z-10">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contacts.map((c, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  easings: "easeInOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-md">
                  <div className="h-14 w-14 bg-[#F3F1FA] flex items-center justify-center rounded-full">
                    <Image src={c.icon} alt={c.title} width={28} height={28} />
                  </div>
                  <p className="text-sm mt-3 mb-1 pl-1">{c.title}</p>
                  <h4 className="md:text-xl font-semibold pl-1">
                    {c.description}
                  </h4>
                </div>
              </MotionDiv>
            ))}
          </div> */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              easings: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[300px] mx-auto"
          >
            <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-md">
              <div className="h-14 w-14 bg-[#F3F1FA] flex items-center justify-center rounded-full">
                <Image src={email} alt="Email" width={28} height={28} />
              </div>
              <p className="text-sm mt-3 mb-1 pl-1">Email Us</p>
              <h4 className="md:text-xl font-semibold pl-1">
                query@schoolwits.com
              </h4>
            </div>
          </MotionDiv>
          <MotionDiv
            className="flex justify-center mt-14"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <SocialLinks iconSize={32} />
          </MotionDiv>
        </div>
      </section>
      <div className="-my-10 md:-my-32">
        <GetInTouch />
      </div>
      <FAQ sectionBg="bg-primary" groupSquareColor="text-white" />
      {/* <LocationMap /> */}
    </div>
  );
}
