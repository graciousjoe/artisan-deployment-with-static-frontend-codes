import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto h-[80vh] bg-[url('/hero-img.png')] bg-no-repeat bg-cover bg-center p-3 flex flex-col justify-end text-white items-center relative ">
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-3xl font-bold pb-3">
          Discover Skilled Local Artisns You Trust
        </h3>
        <p>
          Every artisans on this platform are thoroughly vetted for quality
          reliability and professionalism
        </p>
      </div>
    </div>
  );
}
