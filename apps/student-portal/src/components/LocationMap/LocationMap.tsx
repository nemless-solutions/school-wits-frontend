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
          <h2 className="text-[28px] sm:text-4xl md:text-[54px] text-center leading-[100%] md:leading-[64px] font-semibold text-secondary capitalize mb-2 font-recoleta">
            We Are <span className="text-black">On</span> Map
          </h2>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easings: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-start text-center"
        >
          <p className="max-w-[800px] mx-auto mb-8 text-center">
            We&apos;re right here—easy to find and happy to welcome you!
            Schedule a time and drop by to meet our team in person.
          </p>
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3649.9363868975497!2d90.432707!3d23.820860999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ5JzE1LjEiTiA5MMKwMjUnNTcuOCJF!5e0!3m2!1sen!2sbd!4v1752412012048!5m2!1sen!2sbd"
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
