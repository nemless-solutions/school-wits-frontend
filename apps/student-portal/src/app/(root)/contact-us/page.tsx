import { Button } from "@/components/client-ui";
import { contactUs } from "@/constants";

export default function ContactUs() {
  const { contacts, socials } = contactUs;
  return (
    <div>
      <section className="bg-primary pt-28 pb-24">
        <div className="main-container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-50">
              Get in Touch
            </h1>
            <p className="text-neutral-200 md:text-lg max-w-[420px] mx-auto mt-4">
              We are here to help and answer any questions you might have. We
              look forward to hearing from you!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 mt-10 relative">
            {contacts.map((c, i) => (
              <div
                key={i}
                className="text-center space-y-2 p-4 rounded-lg shadow-[5px_8px_15px_0px_rgba(0,0,0,0.6)] bg-white/75 text-primary"
              >
                <c.Icon className="text-4xl mx-auto" />
                <p className="text-secondary text-lg font-semibold">
                  {c.title}
                </p>
                <p className="text-xl my-4">{c.description}</p>
                <Button asChild size="lg" className="min-w-[200px]">
                  <a href={c.link}>{c.button}</a>
                </Button>
              </div>
            ))}
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400 select-none">
              OR
            </p>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-28">
        <div className="main-container">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Follow Us <br />
              <span className="text-xl md:text-2xl text-secondary">
                On Social Media
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {socials.map((s, i) => (
              <div
                key={i}
                className="text-center space-y-2 p-8 rounded-lg shadow-[5px_8px_10px_0px_rgba(0,0,0,0.4)] bg-primary text-neutral-50"
              >
                <s.Icon className="text-4xl mx-auto" />
                <p className="text-neutral-200 text-lg font-semibold">
                  {s.title}
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full text-primary font-semibold mt-6"
                >
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    {s.button}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
