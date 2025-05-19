export function Promo() {
  return (
    <section className="py-16 bg-blue-100">
      <div className="main-container">
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-16 items-center">
          <div className="text-secondary">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Everything you can do in a physical classroom, you can do with{" "}
              <br className="hidden md:block" />
              <span className="text-primary font-bold">School Wits</span>.
            </h2>
            <p className="md:text-lg mt-4 md:mt-10">
              School Wits school management system helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 aspect-square bg-primary rounded-xl"></div>
            <div className="absolute -bottom-5 -right-5 w-24 aspect-square bg-secondary rounded-xl"></div>
            <iframe
              className="w-full aspect-video rounded-xl relative z-10"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=KBX7ti-v8GPX7YZ_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
