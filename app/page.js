import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center container mx-auto min-h-screen">
      <HeroSection />
    </main>
  );
}
