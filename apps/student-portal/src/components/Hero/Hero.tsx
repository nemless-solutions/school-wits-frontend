import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute top-0 left-0 w-full h-screen object-cover z-[-1]">
        <Image src="/images/hero.png" alt="hero" fill />
      </div>
      <div className="text-7xl main-container w-full">
        <h1 className="text-secondary">
          Hero Section <br />
          <span className="text-primary font-bold"> Contents</span>
        </h1>
      </div>
    </section>
  );
}
