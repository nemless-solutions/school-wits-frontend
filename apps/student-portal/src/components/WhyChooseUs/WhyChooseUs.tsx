import Image from "next/image";

const whyChooseUs = [
  {
    title: "Quality can be better than quantity in this platform",
    description:
      "Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem",
  },
  {
    title: "A place where you can achieve",
    description:
      "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-amber-50">
      <div className="main-container">
        <div className="grid grid-cols-2 gap-x-8">
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Why Choose Us
            </h2>
            <div>
              {whyChooseUs.map((wC, index) => (
                <div key={index} className="mb-8">
                  <div className="flex">
                    <h2 className="text-lg font-bold mb-2 text-primary">
                      {wC.title}
                    </h2>
                  </div>
                  <p className="text-secondary">{wC.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/whychooseus.png"
              alt="why-choose-us"
              fill
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
