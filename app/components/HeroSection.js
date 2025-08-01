import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] w-full bg-[url('/hero-img.png')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end md:justify-center md:items-start">
        <div className="w-full max-w-[900px] px-4 mx-auto text-white pb-10 md:pb-0 text-center md:text-left">
          <h3 className="pb-3 text-3xl font-bold md:text-5xl lg:text-6xl">
            Discover Skilled
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Local Artisans You
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Trust
          </h3>
          <p>
            Every artisan on this platform is thoroughly vetted for quality,
            reliability, and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}
