export function Promo() {
  return (
    <section className="py-28 overflow-x-clip">
      <div className="main-container">
        <div className="grid md:grid-cols-5 gap-x-4 gap-y-16 items-center">
          <div className="text-primary col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Transforming Learning Experience with Cutting-Edge Digital Tools.
            </h2>
            <p className="md:text-lg mt-4 md:mt-10 text-secondary font-medium">
              School Wits is a school of wits, where curiosity meets clarity,
              and learning goes far beyond textbooks.
            </p>
          </div>
          <div className="relative col-span-3">
            <div className="absolute -top-6 -left-6 w-20 aspect-square bg-primary rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-28 aspect-square bg-primary rounded-full"></div>
            <div></div>
            <iframe
              className="w-full aspect-video rounded-xl relative z-10"
              src="https://www.youtube.com/embed/PXOJTvJ0-GA?si=qvk7SMS5o3sNFKN_"
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
