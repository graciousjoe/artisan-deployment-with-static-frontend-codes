import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="w-full h-64 bg-[url('/hero-img.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      {/* Optional: Add overlay or content here */}
    </div>
  );
}
