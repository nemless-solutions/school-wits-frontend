import { MotionDiv } from "../client-ui";

export function LocationMap() {
  return (
    <section className="py-6 md:py-20">
      <div className="main-container">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-start text-center"
        >
          <h2 className="text-[28px] sm:text-4xl md:text-[54px] text-center leading-[100%] md:leading-[64px] font-semibold text-secondary capitalize mb-8 font-recoleta">
            We Are <span className="text-black">At</span> Map
          </h2>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-start text-center"
        >
          <iframe
            className="w-full aspect-[1312/600] rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0431906694207!2d90.41430681188126!3d23.78147627856007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78335e95bcf%3A0x3957abf4987a0ac6!2s1%20Gulshan%20Ave%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1750852328769!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MotionDiv>
      </div>
    </section>
  );
}
