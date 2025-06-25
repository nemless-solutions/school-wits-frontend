import { MotionDiv } from "../client-ui";

export function Promo() {
  return (
    <section className="my-20">
      <div className="main-container">
        <div className="max-w-[650px] mx-auto text-center space-y-3">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-black text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold capitalize">
              <span className="text-secondary">Revolutionising</span> Learning
              with <span className="text-secondary">Digital Tools</span>
            </h2>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-neutral-800">
              School Wits is a school of wits, where curiosity meets clarity,
              and learning goes far beyond textbooks
            </p>
          </MotionDiv>
        </div>
        <div className="mt-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/PXOJTvJ0-GA?si=qvk7SMS5o3sNFKN_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
