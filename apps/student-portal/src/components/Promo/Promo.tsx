export function Promo() {
  return (
    <section className="py-28 bg-primary overflow-x-clip">
      <div className="main-container">
        <div className="grid md:grid-cols-5 gap-x-4 gap-y-16 items-center">
          <div className="text-neutral-50 col-span-2">
            <h2 className="text-2xl md:text-3xl font-medium">
              Everything you can do in a physical classroom, you can do with{" "}
              <span className="font-bold">School Wits</span>.
            </h2>
            <p className="md:text-lg mt-4 md:mt-10 text-neutral-200">
              School Wits school management system helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </div>
          <div className="relative col-span-3">
            <div className="absolute -top-6 -left-6 w-20 aspect-square bg-white/30 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-28 aspect-square bg-secondary rounded-full"></div>
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
